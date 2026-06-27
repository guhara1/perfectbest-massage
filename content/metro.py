from .site import BRAND, PHONE_DISPLAY

DESC = "서울·경기·인천 출장마사지 예약 전 방문 가능 지역과 이용 기준을 확인하세요."

FAQ = [
    ("수도권 출장마사지 예약 전 무엇을 확인해야 하나요?",
     "방문 주소, 이용 장소, 예약 가능 시간, 이동비, 건물 출입 방식, 개인정보 처리 기준을 먼저 확인하는 것이 좋습니다."),
    ("서울·경기·인천 모두 안내하나요?",
     "서울 도심권, 경기 신도시와 외곽권, 인천 공항·송도·부평 생활권을 나누어 방문 가능 기준을 안내합니다."),
    ("불법 서비스도 연결하나요?",
     "간다GO는 건전한 방문 관리 안내만 제공하며 불법적이거나 선정적인 요청은 안내하지 않습니다."),
    ("홈타이와 출장마사지는 어떻게 구분하나요?",
     "두 표현 모두 방문형 관리를 찾을 때 쓰이지만, 예약 전에는 실제 장소와 이동 기준을 확인하는 것이 더 중요합니다."),
]

REGION_LINKS = """
<div class="card-grid">
  <a class="card" href="/seoul/"><h3>서울 출장마사지</h3><p>강남, 잠실, 홍대, 여의도 등 도심 생활권의 방문 전 확인 기준.</p></a>
  <a class="card" href="/gyeonggi/"><h3>경기 출장마사지</h3><p>수원, 분당, 용인, 부천, 일산 등 신도시와 외곽 이동 기준.</p></a>
  <a class="card" href="/incheon/"><h3>인천 출장마사지</h3><p>송도, 부평, 구월, 청라, 검단 등 공항·항만·신도시 생활권 안내.</p></a>
</div>
"""

CHECK_LINKS = """
<div class="card-grid">
  <a class="card" href="/check/first-time/"><h3>처음 이용</h3><p>예약 전에 준비할 정보와 확인 순서.</p></a>
  <a class="card" href="/check/address/"><h3>주소 확인</h3><p>동·건물명·출입 방식까지 정확히 전달하는 기준.</p></a>
  <a class="card" href="/check/travel-fee/"><h3>추가 이동비</h3><p>도심, 신도시, 외곽권에서 달라지는 이동 기준.</p></a>
  <a class="card" href="/check/building-access/"><h3>건물 출입</h3><p>오피스텔, 호텔, 업무지구 방문 시 필요한 사전 확인.</p></a>
  <a class="card" href="/check/time/"><h3>예약 시간</h3><p>피크 시간대와 심야 시간대의 상담 기준.</p></a>
  <a class="card" href="/check/privacy/"><h3>개인정보</h3><p>예약에 필요한 최소 정보와 보관 기준.</p></a>
</div>
"""

GUIDE_LINKS = """
<div class="card-grid">
  <a class="card" href="/use/"><h3>이용 장소별 안내</h3><p>자택, 호텔, 숙소, 오피스텔, 업무지구 이용 기준.</p></a>
  <a class="card" href="/type/"><h3>지역 유형별 안내</h3><p>도심, 주거권, 신도시, 외곽권별 예약 전 확인 사항.</p></a>
  <a class="card" href="/life/"><h3>수도권 생활권</h3><p>서울·경기·인천을 실제 이동 생활권 기준으로 정리.</p></a>
  <a class="card" href="/station/"><h3>지하철 안내</h3><p>주요 역세권 기준의 주소 확인과 이동 동선 안내.</p></a>
</div>
"""

AUTHORITY_LINKS = """
<ul class="link-list">
  <li><a href="https://www.google.com/search/howsearchworks/" target="_blank" rel="noopener">Google 검색 작동 방식</a></li>
  <li><a href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" target="_blank" rel="noopener">Google 구조화된 데이터 가이드</a></li>
  <li><a href="https://schema.org/" target="_blank" rel="noopener">Schema.org</a></li>
</ul>
"""


def section(title, text):
    return f"<section><h2>{title}</h2>{text}</section>"


def page(path, title, desc, h1, body, breadcrumb, extra_head="", faq=None):
    return {
        "path": path,
        "title": title,
        "desc": desc,
        "h1": h1,
        "body": body,
        "breadcrumb": breadcrumb,
        "extra_head": extra_head,
        "faq": faq or [],
    }


def rich_body(area_name, lead, local_links=""):
    return (
        section("예약 전 확인해야 할 기준",
                f"<p>{lead}</p><p>{area_name}에서 출장마사지나 홈타이를 찾을 때는 지역명만 보는 것보다 실제 방문 주소와 이동권을 함께 확인해야 합니다. 같은 생활권 안에서도 도로, 역세권, 숙소 형태, 건물 출입 방식에 따라 상담 과정이 달라질 수 있습니다.</p><p>간다GO는 사용자가 예약 전에 확인해야 할 기준을 먼저 정리합니다. 방문 가능 지역, 이용 장소, 추가 이동비, 예약 시간, 개인정보 처리 기준을 단계별로 안내해 과장된 홍보 문구보다 실제 판단에 필요한 정보를 제공합니다.</p>") +
        section("내부 링크로 이어지는 확인 순서", CHECK_LINKS) +
        section("수도권 생활권 연결", REGION_LINKS + local_links) +
        section("장소와 지역 유형 기준", GUIDE_LINKS) +
        section("운영 원칙",
                "<p>사이트 전체 콘텐츠는 허위 후기, 가짜 평점, 과도한 할인 표현, 선정적 문구를 사용하지 않는 방향으로 작성합니다. 전화예약은 "
                f"<strong>{PHONE_DISPLAY}</strong>이며, 예약 상담 중 주소와 시간, 출입 방식, 이용 장소를 확인합니다.</p>")
    )


HOME_HERO = """<div class="hero">
  <div class="hero-content">
    <div class="hero-badge">수도권 방문 가능 지역 매칭 안내</div>
    <h1 class="hero-title">서울·경기·인천 출장마사지<br><span class="hero-accent">수도권 홈타이 예약 전 확인</span></h1>
    <p class="hero-lead">강남, 잠실, 수원, 분당, 부천, 송도, 부평 등 생활권별 방문 가능 지역과 이용 기준을 확인하세요.</p>
    <div class="hero-cta">
      <a href="/check/" class="btn btn-primary">예약 전 확인</a>
      <a href="/seoul/" class="btn btn-secondary">서울 안내</a>
      <a href="/gyeonggi/" class="btn btn-secondary">경기 안내</a>
      <a href="/incheon/" class="btn btn-secondary">인천 안내</a>
    </div>
  </div>
  <div class="hero-stats">
    <div class="stat"><div class="stat-number">3</div><div class="stat-label">광역 안내</div></div>
    <div class="stat"><div class="stat-number">7</div><div class="stat-label">확인 기준</div></div>
    <div class="stat"><div class="stat-number">4</div><div class="stat-label">이용 허브</div></div>
    <div class="stat"><div class="stat-number">24H</div><div class="stat-label">전화예약</div></div>
  </div>
</div>"""

HOME_BODY = (
    section("수도권 출장마사지 사이트 콘셉트",
            "<p>간다GO는 서울·경기·인천 출장마사지와 홈타이를 찾는 사용자가 예약 전에 실제로 확인해야 할 정보를 먼저 제공하는 안내 사이트입니다. 지역 페이지를 무리하게 늘리기보다, 방문 주소와 이용 장소, 이동 가능 범위, 건물 출입 방식, 개인정보 처리 기준을 기준으로 콘텐츠를 구성했습니다.</p><p>서울 도심권은 교통이 편리하지만 업무지구와 호텔, 오피스텔 출입 기준이 다를 수 있습니다. 경기권은 수원, 분당, 용인, 부천, 일산처럼 신도시와 외곽 이동권이 함께 섞입니다. 인천권은 송도, 부평, 구월, 청라, 검단처럼 생활권별 이동 동선이 뚜렷합니다.</p>") +
    section("지역별 방문 가능 지역 안내", REGION_LINKS) +
    section("예약 전 단계별 점검", CHECK_LINKS) +
    section("이용 장소와 생활권 허브", GUIDE_LINKS) +
    section("권위 있는 참고 링크", AUTHORITY_LINKS) +
    section("간다GO 운영 기준",
            "<p>상호는 간다GO이며 전화예약은 <strong>0508-202-4719</strong>입니다. 모든 페이지는 검색 이용자에게 필요한 정보를 제공하는 방향으로 작성하고, 불법·선정적 요청이나 허위 후기, 과장 광고를 사용하지 않습니다.</p>")
)

PAGES = [
    page("", "서울·경기·인천 출장마사지｜수도권 방문 가능 지역·홈타이 예약 안내", DESC,
         "서울·경기·인천 출장마사지 · 수도권 방문 가능 지역 안내",
         HOME_BODY, [], extra_head="", faq=FAQ) | {"hero": HOME_HERO},
    page("seoul/", "서울 출장마사지｜강남·잠실·홍대·여의도 홈타이 예약 안내",
         "서울 출장마사지 예약 전 강남·잠실·홍대·여의도 방문 기준을 확인하세요.",
         "서울 출장마사지 방문 가능 지역 안내",
         rich_body("서울", "서울은 강남, 잠실, 홍대, 여의도처럼 상권과 업무지구가 촘촘하게 이어지는 지역입니다. 서울 출장마사지 예약 전에는 건물 출입 방식, 주차 또는 도보 이동, 심야 시간대 상담 가능 여부를 함께 확인하는 것이 좋습니다.",
                   '<div class="card-grid"><a class="card" href="/seoul/gangnam-gu/"><h3>강남구</h3><p>강남역, 역삼, 삼성, 논현 생활권.</p></a><a class="card" href="/seoul/life/gangnam-yeoksam/"><h3>강남·역삼</h3><p>업무지구와 오피스텔 방문 기준.</p></a></div>'),
         [("서울", None)]),
    page("gyeonggi/", "경기 출장마사지｜수원·분당·용인·부천 홈타이 예약 안내",
         "경기 출장마사지 예약 전 수원·분당·용인·부천 이동 기준을 확인하세요.",
         "경기 출장마사지 방문 가능 지역 안내",
         rich_body("경기", "경기권은 수원, 분당, 용인, 부천, 일산처럼 생활권이 넓고 도심과 외곽 이동 시간이 크게 달라집니다. 경기 출장마사지 예약 전에는 행정구역뿐 아니라 가까운 역, 도로 접근성, 추가 이동비 기준을 함께 확인해야 합니다.",
                   '<div class="card-grid"><a class="card" href="/gyeonggi/suwon/"><h3>수원</h3><p>수원역, 인계동, 광교 생활권.</p></a><a class="card" href="/gyeonggi/life/suwon-station-ingye/"><h3>수원역·인계</h3><p>상권과 숙소 밀집 지역 확인.</p></a></div>'),
         [("경기", None)]),
    page("incheon/", "인천 출장마사지｜송도·부평·구월·청라 홈타이 예약 안내",
         "인천 출장마사지 예약 전 송도·부평·구월·청라 방문 기준을 확인하세요.",
         "인천 출장마사지 방문 가능 지역 안내",
         rich_body("인천", "인천은 송도, 부평, 구월, 청라, 검단처럼 신도시와 기존 도심, 공항·항만권이 함께 존재합니다. 인천 출장마사지 예약 전에는 이동권과 건물 출입 기준, 심야 시간대 도착 가능성을 함께 확인하는 것이 좋습니다.",
                   '<div class="card-grid"><a class="card" href="/incheon/yeonsu-gu/songdo/"><h3>송도</h3><p>송도국제도시와 연수구 생활권.</p></a><a class="card" href="/incheon/life/songdo-international-city/"><h3>송도국제도시</h3><p>호텔, 오피스텔, 업무지구 기준.</p></a></div>'),
         [("인천", None)]),
]

CHECK_TOPICS = [
    ("check/", "예약 전 확인", "수도권 출장마사지 예약 전 주소·시간·이동비 기준을 확인하세요.", "수도권 출장마사지 예약 전 확인"),
    ("check/first-time/", "처음 이용", "처음 이용하는 출장마사지 예약 전 준비 정보를 확인하세요.", "처음 이용하는 분 안내"),
    ("check/address/", "주소 확인", "출장마사지 예약 전 방문 주소와 건물 출입 방식을 확인하세요.", "방문 주소 확인 기준"),
    ("check/travel-fee/", "추가 이동비", "수도권 출장마사지 추가 이동비와 외곽 이동 기준을 확인하세요.", "추가 이동비 확인 기준"),
    ("check/building-access/", "건물 출입", "오피스텔·호텔·업무지구 방문 전 출입 기준을 확인하세요.", "건물 출입 방식 확인"),
    ("check/time/", "예약 시간", "출장마사지 예약 가능 시간과 심야 상담 기준을 확인하세요.", "예약 가능 시간 확인"),
    ("check/change-policy/", "예약 변경", "출장마사지 예약 변경과 취소 전 확인 기준을 안내합니다.", "예약 변경 기준"),
    ("check/privacy/", "개인정보", "예약 상담에 필요한 최소 개인정보 처리 기준을 확인하세요.", "개인정보 확인 기준"),
]

for path, label, desc, h1 in CHECK_TOPICS:
    PAGES.append(page(path, f"{label}｜간다GO 수도권 출장마사지 안내", desc, h1,
                      rich_body(label, f"{label} 페이지는 서울·경기·인천 출장마사지 예약 전에 사용자가 놓치기 쉬운 항목을 정리합니다. 상담 전에 이 기준을 확인하면 주소 전달, 시간 조율, 이동비 확인, 건물 출입 안내가 더 명확해집니다."),
                      [("예약 전 확인", "/check/"), (label, None)] if path != "check/" else [("예약 전 확인", None)]))

HUBS = [
    ("use/", "이용 장소별 안내", "자택·호텔·오피스텔·업무지구 출장마사지 이용 기준을 확인하세요."),
    ("type/", "지역 유형별 안내", "도심·신도시·외곽권 출장마사지 이동 기준을 확인하세요."),
    ("life/", "수도권 생활권 안내", "서울·경기·인천 생활권별 출장마사지 예약 기준을 확인하세요."),
    ("station/", "지하철역 기준 안내", "수도권 주요 역세권 출장마사지 주소 확인 기준을 안내합니다."),
    ("contact/", "고객센터", "간다GO 전화예약과 웹사이트 제작·제휴 문의 방법을 확인하세요."),
    ("support/", "고객센터", "간다GO 전화예약과 웹사이트 제작·제휴 문의 방법을 확인하세요."),
    ("support/privacy/", "개인정보처리방침", "간다GO 예약 상담 개인정보 처리 기준을 확인하세요."),
]

for path, h1, desc in HUBS:
    PAGES.append(page(path, f"{h1}｜간다GO", desc, h1,
                      rich_body(h1, f"{h1} 페이지는 수도권 방문형 관리를 예약하기 전에 필요한 기준을 한곳에서 확인하도록 만든 허브입니다. 세부 지역 페이지와 예약 전 확인 페이지를 함께 연결해 사용자가 다음 확인 단계로 자연스럽게 이동할 수 있게 구성했습니다."),
                      [(h1, None)]))

LOCAL_PAGES = [
    ("seoul/gangnam-gu/", "강남구 출장마사지", "강남구 출장마사지 예약 전 강남역·역삼·삼성 방문 기준을 확인하세요.", "서울", "/seoul/"),
    ("seoul/life/gangnam-yeoksam/", "강남·역삼 생활권", "강남·역삼 출장마사지 예약 전 업무지구 방문 기준을 확인하세요.", "서울", "/seoul/"),
    ("gyeonggi/suwon/", "수원 출장마사지", "수원 출장마사지 예약 전 수원역·인계·광교 이동 기준을 확인하세요.", "경기", "/gyeonggi/"),
    ("gyeonggi/life/suwon-station-ingye/", "수원역·인계 생활권", "수원역·인계동 출장마사지 예약 전 상권 이동 기준을 확인하세요.", "경기", "/gyeonggi/"),
    ("incheon/yeonsu-gu/songdo/", "송도 출장마사지", "송도 출장마사지 예약 전 연수구·국제도시 방문 기준을 확인하세요.", "인천", "/incheon/"),
    ("incheon/life/songdo-international-city/", "송도국제도시 생활권", "송도국제도시 출장마사지 예약 전 호텔·오피스텔 기준을 확인하세요.", "인천", "/incheon/"),
]

for path, h1, desc, parent, parent_href in LOCAL_PAGES:
    PAGES.append(page(path, f"{h1}｜간다GO 수도권 홈타이 안내", desc, h1,
                      rich_body(h1, f"{h1} 페이지는 세부 생활권에서 예약 전에 확인해야 할 방문 주소, 이동 동선, 이용 장소, 상담 시간 기준을 정리합니다. 단순 지역명 반복보다 실제 예약 과정에서 필요한 기준을 우선 제공합니다."),
                      [(parent, parent_href), (h1, None)]))
