---
title: 동시출현 행렬 생성
sidebar_position: 10
---
:::info
* 2개의 필드를 선택하여 행렬 연산을 수행하고 그 결과를 표로 출력합니다.
* [`메뉴바 : Pre-processing > 2D Matrix`](../program/menu-bar.md#analysis) 또는 [`메인툴바`](../program/toolbar.md)를 통해 실행할 수 있습니다.

   ![analysis](/img/screenshots/menubar-analysis.png)
:::

## 1. 2D Matrix (Rows = Column)

1. 행렬 타입 `Rows = Column`을 선택합니다.
2. 대상이 되는 필드를 선택합니다.
3. **Finish** 버튼을 클릭합니다.

* 2D 행렬 (행과 열이 같은 경우) 생성 예시 : WoS(Plain Text) 데이터의 `[저자 소속 국가 x 저자 소속 국가]`

![2D 행렬 생성 화면](/img/screenshots/2d-matrix-1mode.png)

* 2D 행렬 (행과 열이 같은 경우) 생성 결과

![2D 행렬 생성 결과 화면](/img/screenshots/2d-matrix-1mode-result.png)


## 2. 2D Matrix (Rows ≠ Column)


1. 행렬 타입 `Rows ≠ Column`을 선택합니다.
2. 대상이 되는 필드를 선택합니다.
3. **Finish** 버튼을 클릭합니다.

* 2D 행렬 (행과 열이 다른 경우) 생성 예시 : WoS(Plain Text) 데이터의 `[저자 소속 국가 x 출판연도]`

![2D 행렬 생성 화면](/img/screenshots/2d-matrix-2mode.png)

* 2D 행렬 생성 결과

![2D 행렬 생성 결과 화면](/img/screenshots/2d-matrix-2mode-result.png)


## 3. 2D Matrix 데이터 반출 (Export)

* 2D Matrix의 툴바에서 `EXPORT`에서 원하는 데이터 반출 형태를 선택합니다.

![2D 행렬 데이터 반출](/img/screenshots/2d-matrix-export.png)

<div className="show-title">
:::note[참고]
* VOSviewer, Gephi, Pajek 형태로 반출한 파일은 해당 프로그램에서 바로 활용 가능합니다.
:::
</div>