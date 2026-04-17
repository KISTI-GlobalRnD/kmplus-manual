---
title: 데이터 정제 (스테밍 기능 활용)
sidebar_position: 8
---

:::info
* 스테밍 기능은 어간을 기준으로 유사어/동의어를 대표어로 묶어주는 기능으로, 두 개의 창을 활용하여 편리하게 편집할 수 있습니다.
* 스테밍 기능을 활용한 데이터 정제는 [`필드 리스트 뷰 : 툴바`](../program/workspace/fieldlistview.md#toolbar) 또는 [`컨텍스트 메뉴`](../program/workspace/fieldlistview.md#context-menu)의 `Stemming` 으로 실행 할 수 있습니다.

   ![필드 리스트-툴바](/img/screenshots/fieldlistview-toolbar.png)

   ![필드 리스트-컨텍스트 메뉴](/img/screenshots/fieldlistview-contextmenu.png)

:::

## 1. 스테밍 기능

1. 단어 필터링
   * 단어를 입력하여 데이터를 필터링 할 수 있습니다.
2. 필드 헤더 (`Keywords (author's)`) 선택시 알파벳 순으로 정렬합니다.
3. Records 선택시 레코드 수에 따라 정렬합니다.
4. 결과 처리 방식
   * **Create New Field**: 결과를 새로운 필드로 저장합니다.
   * **Change Existing Field**: 결과를 기존 필드로 덮어씁니다.
5. 새로운 필드로 저장할 경우 새 필드명을 입력합니다.
6. `Save as Thesaurus`: 현재의 스테밍 결과를 시소러스로 저장합니다.
7. `Apply`: 현재의 스테밍 결과를 적용합니다.

![스테밍-메인 화면](/img/screenshots/stemming-main.png)

## 2. 주요 활용 방법

* **단어 위치 조정** : 마우스 드래그 & 드롭으로 자유롭게 단어의 위치를 조정합니다.
* **문자열 필터링** : 문자를 입력하여 해당 문자열이 포함된 데이터를 필터링합니다.
* **정렬 기능** : 필드 헤더를 선택하여 정렬합니다.
* **대표명 변경 기능** : 대표명을 더블 클릭하여 원하는 단어로 변경합니다.
* **하위 단어 컨텍스트 메뉴**
   * **Set as the representative name:** 하위 단어중 선택된 단어로 대표어를 변경합니다.
   * **Remove:** 하위 단어에서 제거합니다. 값이 삭제되는 것은 아니며, 대표어 레벨로 변경됩니다.

![스테밍-컨텍스트 메뉴](/img/screenshots/stemming-context.png)



## 3. 스테밍 반영 리스트 생성 결과

![스테밍-결과](/img/screenshots/stemming-result.png)



## 4. 시소러스로 저장
* `Save as Thesaurus` 버튼을 눌러 시소러스 파일명과 경로를 설정합니다.

![스테밍-시소러스-저장](/img/screenshots/stemming-thesaurus-save.png)

## 5. 시소러스 저장 결과

* 저장된 시소러스는 다음과 같습니다.

![스테밍-시소러스-결과](/img/screenshots/stemming-thesaurus-result.png)
