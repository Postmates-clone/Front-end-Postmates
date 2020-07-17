# 제목

- Postmates clone service
- https://postmates.com

# 주제

온디맨드(onDemand) 기반 배달 서비스 플랫폼 postmates의 서비스를 리버스 엔지니어링 하여 리액트를 통한 상태 Object 설계 및 컴포넌트를 재설계

# 참여 인원

- Front-end : 송부용, 송승은, 이희진, 박기태
- Back-end : 김도오, 신재민

# MVP

## Project 핵심 목표

- React를 이용한 효과적인 컴포넌트 설계
- 재사용 가능한 Component 설계로 중복 Code 및 중복 Component 최소화
- Maintrnence를 고려하여 Redux로 상태 관리 (상태 Tree 및 Action 문서화)
- React Router를 이용한 트래픽 분산
- 핵심 구현 기능: 위치기반 매장검색/ 메뉴의 수량 및 가격계산/ 장바구니 담기

## 기능별 1차 목표 (7월 8일 까지)

- Main Page 구현
  1. 도시 검색 기능 구현
  2. 키워드에 맞는 도시를 연관 검색어로 표시한다
- Feed Page 구현
  1. 해당 도시 내 서비스 되고 있는 매장을 카테고리에 맞게 List Up 한다
  2. 해당 Page의 분류 중 Featured, Only in Postmates, Support Local Restaurants, Daily Deals, Postmates Favorites, Infauration Approved, \$0.99 Delivery, Get Drinks Delivered, Get It Fast, New in Postmates, Top Categories 등 Nearby를 제외한 모든 분류는 Page Load시 모두 랜더링 한다.
  3. Nearby 분류는 List 중 일부만 랜더링 되고 나머지 Item은 Infinity Scroll 기능으로 추가로 랜더링 한다.
  4. 매장 갯수가 많아지면 카테고리별로 캐러셀 기능이 활성화 된다.
  5. Item을 Click하면 Item의 상세 Page로 이동한다.
- Item 상세 Page 구현
  1. 해당 매장의 Menu를 분류에 맞게 List Up 한다.
  2. Menu 항목을 Click 하면 Modal창이 Open 되고 Menu에 대한 Option을 선택 할 수 있다. Menu 수량이나 Option에 따라 가격을 계산해준다.
  3. Option이 없는 Menu는 Modal창을 Open 하지 않고 Hover기능을 통해서 바로 Cart에 추가할 수 있다.
  4. Cart에 Item에 담기면 우측 상단에 Order List가 생성되고 Cart 버튼 아래에 버튼 hover시 Order List를 확인할 수 있다.
  5. Cart에 담긴 Item과 Option에 따라 총 가격을 계산해준다.
  6. Cart 내에 item 삭제 기능.
- API 요청 시 로딩, 에러 처리
  1. 로딩 - 페이지 상단 로딩바.
  2. 에러 - 404, 520 에러 페이지 작성.

## 기능 별 2차 목표 (7월 13일 까지)

- Main Page, Feed Page 인터렉션.
- Tablet, Mobile 반응형을 구현한다.
- Feed Page 구현
  1. 상점의 영업시간을 체크하여 현시간에 문을 연 상점만 활성화하고, 열지 않은 상점은 Available Later로 비활성화 표시한다. 아래에도 Offline 텍스트 표시.
  2. 상점 카테고리의 View all 버튼을 클릭하면 새로운 페이지에 리스트를 채워서 보여준다.
- Item 상세 Page 부가기능
  1. More Info Button을 클릭하면 매장 Open시간과 지도에 위치가 표시된다. (Google Map 으로 구현한다.)
  2. Delivery Time을 선택하면 배달 시간을 지정할 수 있다.
  3. Menu Category에서 카테고리를 선택하면 선택한 카테고리 위치로 스크롤이 이동한다.
  4. 위치한 메뉴 카테고리에 따라 상단 Menu Category에 카테고리명을 표시해준다.
  5. Search item에 메뉴명을 검색하면 해당하는 item만 리스트에 표시한다.
- Login 및 회원가입 기능을 구현.
  1. 기존 서비스는 북미 기준 Service이므로 결제 시스템은 국내 환경에 맞게 커스텀 디자인한다.
  2. Login 된 상태에서만 상품 구매가 가능하도록 한다.
- Pick up Page 구현.
  1. Delivery Page에 구현된 Component를 바탕으로 Pickup Page내 List를 생성한다.
  2. 별도의 컴포넌트를 만들지 않고 만들어진 컴포넌트를 재사용하여 구현한다.

## 3차 목표 ( Option )

- 서브메뉴 페이지 추가
- 메인 섹션 링크 서브 페이지 추가

# 사용 기술

- html, scss, javascript, react, redux, axios, github