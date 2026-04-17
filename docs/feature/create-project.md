---
title: 프로젝트 생성
sidebar_position: 1

---
:::info
KM+는 프로젝트 단위로 구동되는 프로그램으로, 프로젝트는 다음 두 가지 방식으로 생성할 수 있습니다.
1) 임포트 필터를 활용한 방식
2) 엑셀 파일을 불러오는 방식
3) API로 불러오는 방식

* KM+에서 처리 가능한 데이터는 [`처리 가능 데이터`](../intro/support_type.md) 페이지 참고 부탁드립니다.
:::

---

## 1. 임포트 필터 활용 방식
:::note
* KM+에 내장된 임포트 필터를 사용하여 프로젝트를 생성합니다.
:::
**[STEP 1]** Create a New Project 버튼을 선택 후 **Next** 버튼을 클릭합니다.


![프로젝트 생성 Import filter](/img/screenshots/create-project-1.png)

**[STEP 2]** 프로젝트 이름 및 데이터 입력

    * **Project Name** 입력합니다.
    * Data type 항목에서 **Import Raw data file (Use Import Filter)** 를 클릭합니다.
    * **File Type** 을 선택합니다.
    * **Add File** 을 클릭하여 읽어올 파일을 선택합니다.

![프로젝트 생성 Import filter](/img/screenshots/create-project-2.png)

**[STEP 3]** **Finish** 버튼을 클릭합니다.

![프로젝트 생성 Import filter](/img/screenshots/create-project-3.png)

**[STEP 4]** 데이터 불러오기가 완료되면 요약 화면(Summary Sheet)이 나타납니다.
   
![프로젝트 생성 Import filter](/img/screenshots/create-project-4.png)

---

## 2. 엑셀 파일 반입 방식

:::note
구조화된 문서에서 필드별 구분자를 사용자가 직접 입력하여 프로젝트를 생성합니다.
:::

**[STEP 1]** Create a New Project 버튼을 선택 후 **Next** 버튼을 클릭합니다.

![프로젝트 생성 Import filter](/img/screenshots/create-project-1.png)

**[STEP 2]** 프로젝트 이름 및 데이터 입력
    * **Project Name** 입력합니다.
    * Data type 항목에서 **Excel** 을 클릭합니다.
    * **Add File** 을 클릭하여 읽어올 파일을 선택합니다.
    * **Finish** 버튼을 클릭합니다.

![프로젝트 생성 Excel](/img/screenshots/create-project-excel-1.png)


**[STEP 3]** 분절이 필요한 필드에 적절한 구분자를 입력합니다.

![구분자 입력 창](/img/screenshots/create-project-excel-delimiter.png)

**[STEP 4]** 데이터 불러오기가 완료되면 요약 화면(Summary Sheet)이 나타납니다.

![프로젝트 생성 결과 Excel](/img/screenshots/create-project-excel-2.png)

---

## 3. API 로 불러오는 방식

:::note
KM+에 내장된 임포트 필터를 사용하고, API로 데이터를 불러와서 프로젝트를 생성합니다.

OpenAlex 데이터에 대해서 가능합니다.
:::

**[STEP 1]** Create a New Project 버튼을 선택 후 **Next** 버튼을 클릭합니다.

![프로젝트 생성 Import filter](/img/screenshots/create-project-1.png)

**[STEP 2]** 프로젝트 이름 및 데이터 입력
    * **Project Name** 입력합니다.
    * Data type 항목에서 **API**를 클릭합니다.
    * **API URL** 창에 OpenAlex 검색 후, 우측 상단의 Copy API call에서 복사한 URL을 붙여넣기(Ctrl+v)하고 **Finish** 버튼을 클릭합니다.

![프로젝트 생성 OpenAlex API](/img/screenshots/create-project-api-1.png)

<div className="show-title">

:::note[참고]
OpenAlex 검색 결과 API URL을 복사하는 화면은 다음과 같습니다.

![프로젝트 생성 OpenAlex API](/img/screenshots/create-project-api-2.png)
:::
</div>
