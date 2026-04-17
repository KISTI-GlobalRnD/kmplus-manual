const puppeteer = require('puppeteer');
const { PDFDocument } = require('pdf-lib');
const fs = require('fs').promises;
const path = require('path');

async function generateFullPDF() {
    console.log('🚀 전체 매뉴얼 PDF 생성을 시작합니다...\n');

    // 로컬 서버 사용 (serve 명령으로 실행 필요)
    const baseUrl = 'http://localhost:3000/kmplus-manual/';
    const outputPath = path.join(__dirname, '..', 'kmplus-manual-full.pdf');

    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    try {
        const page = await browser.newPage();

        await page.setViewport({
            width: 1200,
            height: 1600,
            deviceScaleFactor: 1.5,
        });

        console.log('📄 시작 페이지 로드 중...');
        await page.goto(baseUrl, {
            waitUntil: 'networkidle0',
            timeout: 60000,
        });

        // 모든 문서 링크 수집
        console.log('🔍 문서 페이지 링크 수집 중...');
        const docLinks = await page.evaluate((base) => {
            const links = [];
            const sidebarLinks = document.querySelectorAll('.theme-doc-sidebar-menu a.menu__link');

            sidebarLinks.forEach((link) => {
                const href = link.getAttribute('href');
                if (href && !href.startsWith('http') && !href.includes('#')) {
                    const fullUrl = href.startsWith('/kmplus-manual/')
                        ? 'http://localhost:3000' + href
                        : href.startsWith('/')
                        ? base + href.substring(1)
                        : base + href;
                    links.push({
                        url: fullUrl,
                        title: link.textContent.trim(),
                    });
                }
            });

            return links;
        }, baseUrl);

        console.log(`📚 총 ${docLinks.length}개의 페이지를 발견했습니다.\n`);

        const pdfBuffers = [];

        // 표지 페이지 생성
        console.log('📖 표지 페이지 생성 중...');
        await page.setContent(
            `
            <html>
            <head>
                <meta charset="UTF-8">
                <style>
                    body {
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans KR', sans-serif;
                        margin: 0;
                        padding: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    }
                    .cover {
                        text-align: center;
                        color: white;
                    }
                    .title {
                        font-size: 48pt;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    .subtitle {
                        font-size: 24pt;
                        margin-top: 20px;
                    }
                </style>
            </head>
            <body>
                <div class="cover">
                    <div class="title">KnowledgeMatrix Plus</div>
                    <div class="subtitle">사용자 매뉴얼</div>
                </div>
            </body>
            </html>
        `,
            { waitUntil: 'domcontentloaded', timeout: 10000 }
        );

        const coverPdf = await page.pdf({
            format: 'A4',
            printBackground: true,
        });
        pdfBuffers.push(coverPdf);

        // 각 페이지를 개별 PDF로 생성
        for (let i = 0; i < docLinks.length; i++) {
            const doc = docLinks[i];
            console.log(`📖 [${i + 1}/${docLinks.length}] ${doc.title} 처리 중...`);

            try {
                await page.goto(doc.url, {
                    waitUntil: 'load',
                    timeout: 45000,
                });

                // lazy loading 이미지를 위해 스크롤
                await page.evaluate(async () => {
                    await new Promise((resolve) => {
                        let totalHeight = 0;
                        const distance = 100;
                        const timer = setInterval(() => {
                            window.scrollBy(0, distance);
                            totalHeight += distance;

                            if (totalHeight >= document.body.scrollHeight) {
                                clearInterval(timer);
                                window.scrollTo(0, 0);
                                resolve();
                            }
                        }, 100);
                    });
                });

                // 추가 대기
                await new Promise((resolve) => setTimeout(resolve, 2000));

                // 모든 이미지가 로드될 때까지 대기
                const imageLoadResult = await page.evaluate(async () => {
                    const images = Array.from(document.querySelectorAll('img'));
                    const results = [];

                    // loading="lazy" 속성 제거하고 모든 이미지 즉시 로드
                    images.forEach((img) => {
                        img.removeAttribute('loading');
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                        }
                    });

                    for (const img of images) {
                        const src = img.src || img.getAttribute('src');

                        if (img.complete && img.naturalHeight !== 0) {
                            results.push({ src, loaded: true });
                            continue;
                        }

                        const loaded = await new Promise((resolve) => {
                            const timeout = setTimeout(() => resolve(false), 20000); // 20초 타임아웃

                            const onLoad = () => {
                                clearTimeout(timeout);
                                img.removeEventListener('load', onLoad);
                                img.removeEventListener('error', onError);
                                resolve(true);
                            };

                            const onError = () => {
                                clearTimeout(timeout);
                                img.removeEventListener('load', onLoad);
                                img.removeEventListener('error', onError);
                                resolve(false);
                            };

                            img.addEventListener('load', onLoad);
                            img.addEventListener('error', onError);
                        });

                        results.push({ src, loaded });
                    }

                    return results;
                });

                // 로드 실패한 이미지 확인
                const failedImages = imageLoadResult.filter((r) => !r.loaded);
                if (failedImages.length > 0) {
                    console.warn(
                        `   ⚠️  ${failedImages.length}개 이미지 로드 실패:`,
                        failedImages.map((f) => f.src.split('/').pop()).join(', ')
                    );
                }

                // 최종 대기 시간 (렌더링 완료)
                await new Promise((resolve) => setTimeout(resolve, 3000));

                // 불필요한 요소 숨기기
                await page.evaluate(() => {
                    const selectors = [
                        '.navbar',
                        '.theme-doc-sidebar-container',
                        'nav[aria-label="breadcrumbs"]',
                        '.breadcrumbs',
                        'footer',
                        '.theme-doc-footer',
                        '.pagination-nav',
                        '.theme-back-to-top-button',
                    ];

                    selectors.forEach((selector) => {
                        document.querySelectorAll(selector).forEach((el) => {
                            el.style.display = 'none';
                        });
                    });

                    // 메인 콘텐츠 스타일 조정
                    const main = document.querySelector('main');
                    if (main) {
                        main.style.maxWidth = '100%';
                        main.style.padding = '20px';
                    }
                });

                const pagePdf = await page.pdf({
                    format: 'A4',
                    printBackground: true,
                    margin: {
                        top: '20mm',
                        right: '15mm',
                        bottom: '20mm',
                        left: '15mm',
                    },
                });

                pdfBuffers.push(pagePdf);
            } catch (error) {
                console.warn(`⚠️  ${doc.title} 로드 실패: ${error.message}`);
            }
        }

        console.log('\n📑 PDF 병합 중...');

        // PDF 병합
        const mergedPdf = await PDFDocument.create();

        for (let i = 0; i < pdfBuffers.length; i++) {
            try {
                const pdf = await PDFDocument.load(pdfBuffers[i]);
                const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
                copiedPages.forEach((page) => {
                    mergedPdf.addPage(page);
                });
            } catch (error) {
                console.warn(`⚠️  PDF ${i + 1} 병합 실패: ${error.message}`);
            }
        }

        const pdfBytes = await mergedPdf.save();
        await fs.writeFile(outputPath, pdfBytes);

        console.log(`\n✅ PDF 생성 완료: ${outputPath}`);
        console.log(`📊 총 ${docLinks.length + 1}개 페이지가 포함되었습니다. (표지 포함)\n`);
    } catch (error) {
        console.error('❌ PDF 생성 중 오류 발생:', error);
        process.exit(1);
    } finally {
        await browser.close();
    }
}

generateFullPDF();
