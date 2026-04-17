---
title: 처리 가능 데이터
sidebar_label: 처리 가능 데이터
sidebar_position: 3
---

:::info[]
KM+에서 처리 가능한 데이터는 다음과 같습니다.
1. 사전에 정의된 데이터를 Import Filter를 이용하여 반입
2. 엑셀 형식으로 작성된 필드화된 데이터를 반입
3. OpenAlex 데이터를 API로 불러와서 반입
:::

## 1. 사전에 정의된 데이터 (Import Filter 활용)

* Web of Science: Plain text, TSV format(tab-separated format), Excel
* OPEN ALEX: CSV format (comma-separated format)
* SCOPUS: CSV format (comma-separated format)
* SCOPUS (KISTI DB): Excel
* Dimensions (논문): Excel
* Dimensions (특허): Excel
* Dimensions (과제): Excel
* Dimensions (정책문서): Excel
* Dimensions (임상실험): Excel
* Dimensions (데이터셋): Excel
* NTIS (과제): Excel
* NTIS (논문): Excel
* NTIS (특허): Excel
* NTIS (보고서): Excel
* NTIS (연구시설장비): Excel
* NTIS (기술요약정보): Excel
* ScienceON (논문): Excel
* ScienceON (특허): Excel
* ScienceON (보고서): Excel
* ScienceON (동향): Excel
* 빅카인즈: Excel
* PubMed: CSV format (comma-separated format)
* KCI: Excel
* KIPRIS: Excel

## 2. Excel 파일

* 첫 번째 열에 필드 이름, 두 번째 열 이하부터 데이터 레코드로 구성된 데이터로 각 필드마다 행 단위로 구분자가 동일해야 합니다.
* 데이터 반입 시, 필드별 구분자를 지정하여 데이터 반입을 하게 됩니다.
* 엑셀 파일 예시 (출처: 영화진흥위원회 - 영화제작상세 가공)
    * 첫 번째 열 : 필드 이름
    * 두번째 열 : 데이터 레코드

![엑셀파일 반입](/img/screenshots/import-excel.png)


## 3. API 로 불러오는 방식 (OpenAlex)

KM+에 내장된 임포트 필터를 사용하고, API로 데이터를 불러와서 프로젝트를 생성합니다.
OpenAlex 데이터에만 적용 가능합니다.