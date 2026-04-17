---
title: 자연어 처리 (명사 추출)
sidebar_position: 7
---
:::info
* 2개 이상의 단어로 이루어진 구, 절, 문장에서 명사를 추출합니다.
* 영어는 Apache OpenNLP 한글은 루씬의 Arirang 형태소 분석기 사용합니다.
* 자연어 처리 기능은 [`메뉴 바 : Pre-processing > Natural Language Processing`](../program/menu-bar.md#pre-processing) 또는 [`툴바`](../program/toolbar.md)에서 실행하실 수 있습니다.
 
   ![pre-processing-nlp](/img/screenshots/menubar-nlp.png)
:::

## 1. 영문 명사(구) 추출

1. 팝업창에서 영문 명사를 추출하고자 하는 필드를 선택합니다. (예: Web of Science(Plain Text) 데이터 > Article Title)

![추출 필드 선택](/img/screenshots/nlp-select-field.png)

2. 영문 명사(구)를 추출한 후, 추출 결과가 표시되고 자동으로 필드가 만들어집니다.
   * 필드명 : 기존 필드명 + NLP (English Nouns)

![추출된 필드 확인](/img/screenshots/nlp-result.png)


## 2. 한글 명사 추출

1. 팝업창에서 한글 명사를 추출하고자 하는 필드를 선택합니다. (예: NTIS(과제) 데이터 > 과제명(국문))

![추출 필드 선택](/img/screenshots/nlp-select-field-kr.png)

2. 한글 명사를 추출한 후, 추출 결과가 표시되고 자동으로 필드가 만들어집니다.
   * 필드명 : 기존 필드명 + NLP (Korean Nouns)

![추출된 필드 확인](/img/screenshots/nlp-result-kr.png)