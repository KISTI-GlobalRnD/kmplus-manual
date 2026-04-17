---
title: 시소러스 편집기
sidebar_position: 13
---

:::info
* 시소러스 편집기는 용어의 계층적 관계를 정의하고 관리하는 도구입니다.
* 대표 명칭(Primary Term)과 하위 서브 명칭(Sub Terms)을 생성하여 용어 간의 관계를 정의하고, 정규표현식을 활용한 패턴 매칭 기능을 제공합니다.
* 시소러스 편집기는 [`메뉴바 : Setting > Thesaurus Editor`](../program/menu-bar.md#setting) 에서 실행할 수 있습니다.

![setting](/img/screenshots/menubar-setting.png)
:::

---

## 1. 사용자 인터페이스

### 1.1. 화면 구성

**[Thesaurus Editor 메인 화면]**
![시소러스 에디터 메인 화면](/img/screenshots/thesaurus-editor-1.png)

### 1.2. 구성 요소

1. **상단 버튼 영역**
    - 1행: 파일 관련 버튼 (Open file, Save, Save as)
    - 2행: 편집 관련 버튼 (Add item, Add sub item, Delete item, Clear)

2. **파일 정보 표시 영역**
    - 현재 열린 파일의 경로, 형식, 인코딩 정보 표시

3. **좌측 입력 패널**
    - Add Name: 명칭 입력 필드
    - Regular Expression: 정규표현식 선택 콤보박스
    - Guide: 기능 설명 텍스트

4. **우측 트리 뷰**
    - 계층적 구조로 시소러스 항목 표시
    - Item(대표명칭)과 Sub item(서브명칭)의 관계 시각화

### 1.3. 버튼 기능

| 버튼명           | 동작                                                                                                                       |
| :--------------- | :------------------------------------------------------------------------------------------------------------------------- |
| **Open file**    | 기존 시소러스 파일을 불러옵니다. KM+, VOSviewer, VantagePoint 형식을 모두 지원하며, 인코딩을 자동으로 감지합니다.                |
| **Save**         | 현재 작업 중인 시소러스를 파일로 저장합니다. 기존 파일이 있으면 덮어쓰기하고, 새 작업인 경우 Save as 대화상자가 열립니다.  |
| **Save as**      | 새로운 파일명과 형식으로 시소러스를 저장합니다. 다른 소프트웨어 호환 형식으로 변환하거나 백업 생성에 활용됩니다.           |
| **Add item**     | 최상위 계층의 대표 용어(Item)를 추가합니다. 정규표현식이 적용되지 않으며, 독립적인 그룹을 형성합니다.                      |
| **Add sub item** | 선택한 Item 하위에 서브 용어를 추가합니다. 정규표현식을 적용하여 패턴 매칭이 가능하며, 반드시 Item을 먼저 선택해야 합니다. |
| **Delete item**  | 선택한 명칭을 제거합니다. Item 삭제 시 하위의 모든 Sub item도 함께 삭제됩니다.                                             |
| **Clear**        | 현재 작업 중인 모든 데이터를 삭제하고 새로 시작합니다. 저장하지 않은 데이터는 복구할 수 없으므로 주의가 필요합니다.        |

---

**[Thesaurus Editor 열기]**

![시소러스 에디터 열기](/img/screenshots/thesaurus-editor-open.png)

**[Thesaurus Editor 저장]**

![시소러스 에디터 저장하기](/img/screenshots/thesaurus-editor-save.png)

## 2. 지원 파일 형식

Thesaurus Editor는 KM+, VOSviewer, VantagePoint의 시소러스 형식을 모두 지원합니다.

### 2.1. KM+ 형식 {#thesaurus-km-type}

KM 자체 시소러스 형식으로, 다음 확장자를 지원합니다

- 텍스트 기반 형식: **`.the`**

  ```etc
  * 대표명칭
  - 서브명칭1
  - 서브명칭2
  ```

- 탭으로 구분된 형식 : **`.tsv`**

  ```etc
  대표명칭1    서브명칭1
  대표명칭1    서브명칭2
  대표명칭2    서브명칭3
  ```

- JSON 형식 : **`.json`**

  ```json
  [
  {
    "name": "대표명칭1",
    "children": [
      {"name": "서브명칭1"},
      {"name": "서브명칭2"}
    ]
  },
  {
    "name": "대표명칭2",
    "children": [
      {"name": "서브명칭3"}
    ]
  }
  ]
  ```

### 2.2. VOSViewer 형식

VOSViewer 소프트웨어와 호환되는 시소러스 형식

- Full Matrix 형식
- Sparse 형식


### 2.3. VantagePoint 형식

VantagePoint 소프트웨어와 호환되는 시소러스 형식

:::info

- 파일을 열 때 인코딩이 자동으로 감지됩니다
- 현재 열린 파일의 경로, 형식, 인코딩 정보가 화면 상단에 표시됩니다
- UTF-8, EUC-KR 등 다양한 인코딩을 지원합니다

:::

![파일 형식 선택 대화상자](/img/screenshots/thesaurus-editor-save.png)

---

## 3. 시소러스 에디터 활용 예시

### 3.1. 시소러스 생성

1. **Add item** 버튼 클릭
2. **Add Name** 입력: "Computer"
3. Item 선택 후 **Add sub item** 버튼 클릭
4. **Sub item** 추가:
   - Add Name: "PC", Regular Expression: "Matching"
   - Add Name: "personal computer", Regular Expression: "Matching"
   - Add Name: "desktop", Regular Expression: "Including"
5. **Save** 버튼으로 파일 저장

**결과 구조:**

```etc
Computer
 └ ^PC$
 └ ^personal computer$
 └ desktop
```

### 3.2. 다른 형식의 시소러스로 변환

1. **Open file** 버튼으로 KM+ 형식 시소러스 파일 열기 (.the, .tsv, .json)
2. 필요한 경우 내용 편집
3. **Save as** 클릭
4. 시소러스 파일 형식 선택 (KM+, VOSviewer, VantagePoint)
5. 저장 위치 및 파일명 지정
6. 해당 소프트웨어에서 해당 파일 사용

---

## [참고] 정규표현식 옵션

Sub item에 적용할 수 있는 정규표현식 패턴 옵션입니다.

### 1. None (없음)

- **설명:** 정규표현식을 적용하지 않고 입력한 텍스트 그대로 사용
- **사용 예:** "computer" → "computer"
- **활용:** 정확한 용어 매칭이 필요한 경우

### 2. Starting (시작하는 글자)

- **설명:** 입력한 텍스트로 시작하는 모든 용어와 매칭
- **패턴:** `^입력텍스트`
- **사용 예:** "comp" → "^comp"
- **매칭 예시:**
  - ✓ "computer"
  - ✓ "computation"
  - ✗ "supercomputer"

### 3. Including (포함하는 글자)

- **설명:** 입력한 텍스트를 포함하는 모든 용어와 매칭
- **패턴:** `입력텍스트` (기본값)
- **사용 예:** "comp" → "comp"
- **매칭 예시:**
  - ✓ "computer"
  - ✓ "supercomputer"
  - ✓ "incompatible"

### 4. Ending (끝나는 글자)

- **설명:** 입력한 텍스트로 끝나는 모든 용어와 매칭
- **패턴:** `입력텍스트$`
- **사용 예:** "tion" → "tion$"
- **매칭 예시:**
  - ✓ "computation"
  - ✓ "information"
  - ✗ "national"

### 5. Matching (일치하는 글자)

- **설명:** 입력한 텍스트와 완전히 일치하는 용어만 매칭
- **패턴:** `^입력텍스트$`
- **사용 예:** "computer" → "^computer$"
- **매칭 예시:**
  - ✓ "computer"
  - ✗ "computers"
  - ✗ "supercomputer"
