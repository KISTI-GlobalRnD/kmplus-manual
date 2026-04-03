---
title: 메뉴 바
sidebar_position: 2
---
메뉴 바는 KM+의 핵심 기능을 카테고리별로 정리해 두었습니다.

![메뉴바](/img/screenshots/menubar.png)

* **홈 (Home):** 프로젝트 생성(`프로젝트 만들기`), 프로젝트 열기 및 저장, 프로그램 종료 등 파일 및 프로젝트 관리 기능을 수행합니다.
* **전처리 (Pre-processing):** 데이터 분석 전 과정을 지원합니다. 데이터 합집합/교집합 생성, 영문/한글 형태소 분석, 필드 병합 등의 기능을 제공합니다.
* **분석 (Analysis):** 2D 행렬 생성, 멀티 리스트 생성, 데이터 반출 (export) 기능, 외부 분석 도구(Pajek, VOSviewer, Gephi)와의 연동 기능을 포함합니다.
* **설정 (Settings):** 보기 설정, 임포트 필터 뷰어(Import Filter Viewer), 시소러스 에디터(Thesaurus Editor) 등을 포함합니다.
* **도움말 (Help):** 매뉴얼, 튜토리얼, 프로그램 정보 등을 확인할 수 있습니다.
  
## 1. Home

![Home](/img/screenshots/menubar-home.png)

| 메뉴 항목            | 동작                                                                      |
| :------------------- | :------------------------------------------------------------------------ |
| **Create a project** | 클릭하여 **Create a project** 다이얼로그를 열고 새 프로젝트를 생성합니다. |
| **Save as**          | 현재 작업 중인 프로젝트를 새로운 이름이나 위치에 저장합니다.              |
| **Close**            | 현재 프로젝트 저장 여부를 묻고 프로그램을 종료합니다.                      |

## 2. Pre-processing

![pre-processing](/img/screenshots/menubar-preprocessing.png)

| 메뉴 항목                       | 하위 메뉴             | 동작                                                                                           |
| :------------------------------ | :-------------------- | :--------------------------------------------------------------------------------------------- |
| **New Dataset**                 | Project Union         | 클릭하여 **Project Union** 다이얼로그를 열고 프로젝트 간 합집합을 수행합니다.                              |
|                                 | Project Intersection  | 클릭하여 **Project Intersection** 다이얼로그를 열고 프로젝트 간 교집합을 수행합니다.                       |
| **Natural Language Processing** | English Nouns         | 선택된 필드에서 영문 명사를 추출합니다.                                                        |
|                                 | English Nouns Phrases | 선택된 필드에서 영문 명사 구를 추출합니다.                                                     |
|                                 | Korean Nouns          | 선택된 필드에서 한글 명사를 추출합니다.                                                        |
| **Bind Fields**                |                       | 클릭하여 **Bind Field** 다이얼로그를 열고 사용자가 선택한 필드를 하나로 합친 새로운 필드를 생성합니다. |

## 3. Analysis

![analysis](/img/screenshots/menubar-analysis.png)

| 메뉴 항목     | 동작                                                                                               |
| :------------ | :------------------------------------------------------------------------------------------------- |
| **2D Matrix** | 클릭하여 **2D Matrix** 다이얼로그를 열고 2개의 필드를 선택하여 행렬 뷰를 생성합니다.               |
| **Multi List** | 클릭하여 **MultiList** 다이얼로그를 열고 3개의 필드를 선택하여 필드 리스트 뷰 형식으로 나타냅니다. |

## 4. Chart

![chart](/img/screenshots/menubar-chart.png)

| 메뉴 항목      | 동작                                                         |
| :------------- | :----------------------------------------------------------- |
| **List Chart** | 클릭하여 **List Chart** 다이얼로그를 열고 차트를 생성합니다. |

## 5. Setting

![setting](/img/screenshots/menubar-setting.png)

| 메뉴 항목                | 하위 메뉴   | 동작                                                       |
| :----------------------- | :---------- | :--------------------------------------------------------- |
| **Open Window**          | Record View | 클릭하여 **Record View** 창을 엽니다.                       |
| **Import Filter Viewer** |             | 클릭하여 **Import Filter Viewer** 다이얼로그를 실행합니다. |
| **Thesaurus Editor**     |             | 클릭하여 **Thesaurus Editor** 다이얼로그를 실행합니다.     |
