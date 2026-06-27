import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const baseUrl = "https://guhara1.github.io/perfectbest-massage";
const brand = "간다GO";
const phone = "0508-202-4719";
const telegram = "https://t.me/googleseolab";
const desc = "서울·경기·인천 출장마사지 예약 전 방문 가능 지역과 이용 기준을 확인하세요.";

const seoulDistricts = [
  { name: "종로구", slug: "jongno-gu", hubs: ["광화문", "종각", "혜화"], dongs: [["청운효자동", "cheongun-hyoja"], ["사직동", "sajik"], ["삼청동", "samcheong"], ["부암동", "buam"], ["평창동", "pyeongchang"], ["무악동", "muak"], ["교남동", "gyonam"], ["가회동", "gahoe"], ["종로1·2·3·4가동", "jongno-1-4ga"], ["종로5·6가동", "jongno-5-6ga"], ["이화동", "ihwa"], ["혜화동", "hyehwa"], ["창신동", "changsin"], ["숭인동", "sungin"]] },
  { name: "중구", slug: "jung-gu", hubs: ["명동", "을지로", "동대문"], dongs: [["소공동", "sogong"], ["회현동", "hoehyeon"], ["명동", "myeongdong"], ["필동", "pil"], ["장충동", "jangchung"], ["광희동", "gwanghui"], ["을지로동", "euljiro"], ["신당동", "sindang"], ["다산동", "dasan"], ["약수동", "yaksu"], ["청구동", "cheonggu"], ["동화동", "donghwa"], ["황학동", "hwanghak"], ["중림동", "jungnim"]] },
  { name: "용산구", slug: "yongsan-gu", hubs: ["용산역", "이태원", "한남"], dongs: [["후암동", "huam"], ["용산2가동", "yongsan-2ga"], ["남영동", "namyeong"], ["청파동", "cheongpa"], ["원효로동", "wonhyoro"], ["효창동", "hyochang"], ["용문동", "yongmun"], ["한강로동", "hangangno"], ["이촌동", "ichon"], ["이태원동", "itaewon"], ["한남동", "hannam"], ["서빙고동", "seobinggo"], ["보광동", "bogwang"]] },
  { name: "성동구", slug: "seongdong-gu", hubs: ["성수", "왕십리", "옥수"], dongs: [["왕십리도선동", "wangsimni-doseon"], ["왕십리동", "wangsimni"], ["마장동", "majang"], ["사근동", "sageun"], ["행당동", "haengdang"], ["응봉동", "eungbong"], ["금호동", "geumho"], ["옥수동", "oksu"], ["성수동", "seongsu"], ["송정동", "songjeong"], ["용답동", "yongdap"]] },
  { name: "광진구", slug: "gwangjin-gu", hubs: ["건대입구", "구의", "군자"], dongs: [["화양동", "hwayang"], ["군자동", "gunja"], ["중곡동", "junggok"], ["능동", "neung"], ["구의동", "guui"], ["광장동", "gwangjang"], ["자양동", "jayang"]] },
  { name: "동대문구", slug: "dongdaemun-gu", hubs: ["청량리", "장안", "회기"], dongs: [["용신동", "yongsin"], ["제기동", "jegi"], ["전농동", "jeonnong"], ["답십리동", "dapsimni"], ["장안동", "jangan"], ["청량리동", "cheongnyangni"], ["회기동", "hoegi"], ["휘경동", "hwigyeong"], ["이문동", "imun"]] },
  { name: "중랑구", slug: "jungnang-gu", hubs: ["상봉", "면목", "신내"], dongs: [["면목동", "myeonmok"], ["상봉동", "sangbong"], ["중화동", "junghwa"], ["묵동", "muk"], ["망우동", "mangu"], ["신내동", "sinnae"]] },
  { name: "성북구", slug: "seongbuk-gu", hubs: ["성신여대", "정릉", "길음"], dongs: [["성북동", "seongbuk"], ["삼선동", "samseon"], ["동선동", "dongseon"], ["돈암동", "donam"], ["안암동", "anam"], ["보문동", "bomun"], ["정릉동", "jeongneung"], ["길음동", "gireum"], ["종암동", "jongam"], ["월곡동", "wolgok"], ["장위동", "jangwi"], ["석관동", "seokgwan"]] },
  { name: "강북구", slug: "gangbuk-gu", hubs: ["수유", "미아", "우이"], dongs: [["삼양동", "samyang"], ["미아동", "mia"], ["송중동", "songjung"], ["송천동", "songcheon"], ["삼각산동", "samgaksan"], ["번동", "beon"], ["수유동", "suyu"], ["우이동", "ui"], ["인수동", "insu"]] },
  { name: "도봉구", slug: "dobong-gu", hubs: ["쌍문", "창동", "도봉"], dongs: [["쌍문동", "ssangmun"], ["방학동", "banghak"], ["창동", "chang"], ["도봉동", "dobong"]] },
  { name: "노원구", slug: "nowon-gu", hubs: ["노원역", "공릉", "상계"], dongs: [["월계동", "wolgye"], ["공릉동", "gongneung"], ["하계동", "hagye"], ["중계동", "junggye"], ["상계동", "sanggye"]] },
  { name: "은평구", slug: "eunpyeong-gu", hubs: ["연신내", "불광", "진관"], dongs: [["녹번동", "nokbeon"], ["불광동", "bulgwang"], ["갈현동", "galhyeon"], ["구산동", "gusan"], ["대조동", "daejo"], ["응암동", "eungam"], ["역촌동", "yeokchon"], ["신사동", "sinsa"], ["증산동", "jeungsan"], ["수색동", "susaek"], ["진관동", "jingwan"]] },
  { name: "서대문구", slug: "seodaemun-gu", hubs: ["신촌", "연희", "홍제"], dongs: [["충현동", "chunghyeon"], ["천연동", "cheonyeon"], ["북아현동", "bugahyeon"], ["신촌동", "sinchon"], ["연희동", "yeonhui"], ["홍제동", "hongje"], ["홍은동", "hongeun"], ["남가좌동", "namgajwa"], ["북가좌동", "bukgajwa"]] },
  { name: "마포구", slug: "mapo-gu", hubs: ["홍대", "공덕", "상암"], dongs: [["공덕동", "gongdeok"], ["아현동", "ahyeon"], ["도화동", "dohwa"], ["용강동", "yonggang"], ["대흥동", "daeheung"], ["염리동", "yeomni"], ["신수동", "sinsu"], ["서강동", "seogang"], ["서교동", "seogyo"], ["합정동", "hapjeong"], ["망원동", "mangwon"], ["연남동", "yeonnam"], ["성산동", "seongsan"], ["상암동", "sangam"]] },
  { name: "양천구", slug: "yangcheon-gu", hubs: ["목동", "신정", "신월"], dongs: [["목동", "mok"], ["신월동", "sinwol"], ["신정동", "sinjeong"]] },
  { name: "강서구", slug: "gangseo-gu", hubs: ["마곡", "김포공항", "화곡"], dongs: [["염창동", "yeomchang"], ["등촌동", "deungchon"], ["화곡동", "hwagok"], ["우장산동", "ujangsan"], ["가양동", "gayang"], ["발산동", "balsan"], ["공항동", "gonghang"], ["방화동", "banghwa"]] },
  { name: "구로구", slug: "guro-gu", hubs: ["구로디지털", "신도림", "개봉"], dongs: [["신도림동", "sindorim"], ["구로동", "guro"], ["가리봉동", "garibong"], ["고척동", "gocheok"], ["개봉동", "gaebong"], ["오류동", "oryu"], ["수궁동", "sugung"], ["항동", "hang"]] },
  { name: "금천구", slug: "geumcheon-gu", hubs: ["가산", "독산", "시흥"], dongs: [["가산동", "gasan"], ["독산동", "doksan"], ["시흥동", "siheung"]] },
  { name: "영등포구", slug: "yeongdeungpo-gu", hubs: ["여의도", "영등포", "문래"], dongs: [["영등포본동", "yeongdeungpo-bon"], ["영등포동", "yeongdeungpo"], ["여의동", "yeoui"], ["당산동", "dangsan"], ["도림동", "dorim"], ["문래동", "mullae"], ["양평동", "yangpyeong"], ["신길동", "singil"], ["대림동", "daerim"]] },
  { name: "동작구", slug: "dongjak-gu", hubs: ["노량진", "상도", "사당"], dongs: [["노량진동", "noryangjin"], ["상도동", "sangdo"], ["흑석동", "heukseok"], ["사당동", "sadang"], ["대방동", "daebang"], ["신대방동", "sindaebang"]] },
  { name: "관악구", slug: "gwanak-gu", hubs: ["신림", "서울대입구", "봉천"], dongs: [["보라매동", "boramae"], ["은천동", "euncheon"], ["성현동", "seonghyeon"], ["중앙동", "jungang"], ["청림동", "cheongnim"], ["행운동", "haengun"], ["청룡동", "cheongnyong"], ["낙성대동", "nakseongdae"], ["인헌동", "inheon"], ["남현동", "namhyeon"], ["신림동", "sillim"], ["신사동", "sinsa"], ["조원동", "jowon"], ["미성동", "miseong"], ["난곡동", "nangok"], ["난향동", "nanhyang"], ["서원동", "seowon"], ["대학동", "daehak"], ["삼성동", "samseong"], ["서림동", "seorim"]] },
  { name: "서초구", slug: "seocho-gu", hubs: ["서초", "반포", "양재"], dongs: [["서초동", "seocho"], ["잠원동", "jamwon"], ["반포동", "banpo"], ["방배동", "bangbae"], ["양재동", "yangjae"], ["내곡동", "naegok"]] },
  { name: "강남구", slug: "gangnam-gu", hubs: ["강남역", "역삼", "삼성"], dongs: [["신사동", "sinsa"], ["논현동", "nonhyeon"], ["압구정동", "apgujeong"], ["청담동", "cheongdam"], ["삼성동", "samseong"], ["대치동", "daechi"], ["역삼동", "yeoksam"], ["도곡동", "dogok"], ["개포동", "gaepo"], ["일원동", "irwon"], ["수서동", "suseo"], ["세곡동", "segok"]] },
  { name: "송파구", slug: "songpa-gu", hubs: ["잠실", "문정", "가락"], dongs: [["풍납동", "pungnap"], ["거여동", "geoyeo"], ["마천동", "macheon"], ["방이동", "bangi"], ["오륜동", "oryun"], ["오금동", "ogeum"], ["송파동", "songpa"], ["석촌동", "seokchon"], ["삼전동", "samjeon"], ["가락동", "garak"], ["문정동", "munjeong"], ["장지동", "jangji"], ["위례동", "wirye"], ["잠실동", "jamsil"]] },
  { name: "강동구", slug: "gangdong-gu", hubs: ["천호", "고덕", "상일"], dongs: [["강일동", "gangil"], ["상일동", "sangil"], ["명일동", "myeongil"], ["고덕동", "godeok"], ["암사동", "amsa"], ["천호동", "cheonho"], ["성내동", "seongnae"], ["길동", "gil"], ["둔촌동", "dunchon"]] },
];

const nav = [
  ["홈", "/", []],
  ["서울", "/seoul/", seoulDistricts.map((district) => [district.name, `/seoul/${district.slug}/`])],
  ["수도권 안내", "/", [["경기", "/gyeonggi/"], ["인천", "/incheon/"]]],
  ["예약 전 확인", "/check/", [["처음 이용", "/check/first-time/"], ["주소 확인", "/check/address/"], ["이동비", "/check/travel-fee/"], ["건물 출입", "/check/building-access/"], ["예약 시간", "/check/time/"], ["예약 변경", "/check/change-policy/"], ["개인정보", "/check/privacy/"]]],
  ["이용 기준", "/use/", [["이용 장소", "/use/"], ["지역 유형", "/type/"], ["생활권", "/life/"], ["지하철", "/station/"]]],
  ["생활권", "/life/", [["강남·역삼", "/seoul/life/gangnam-yeoksam/"], ["수원역·인계", "/gyeonggi/life/suwon-station-ingye/"], ["송도국제도시", "/incheon/life/songdo-international-city/"]]],
  ["문의", "/contact/", [["고객센터", "/contact/"], ["개인정보처리방침", "/support/privacy/"]]],
];

const faq = [
  ["수도권 출장마사지 예약 전 무엇을 확인해야 하나요?", "방문 주소, 이용 장소, 예약 가능 시간, 이동비, 건물 출입 방식, 개인정보 처리 기준을 먼저 확인하는 것이 좋습니다."],
  ["서울·경기·인천 모두 안내하나요?", "서울 도심권, 경기 신도시와 외곽권, 인천 공항·송도·부평 생활권을 나누어 방문 가능 기준을 안내합니다."],
  ["불법 서비스도 연결하나요?", "간다GO는 건전한 방문 관리 안내만 제공하며 불법적이거나 선정적인 요청은 안내하지 않습니다."],
  ["홈타이와 출장마사지는 어떻게 구분하나요?", "두 표현 모두 방문형 관리를 찾을 때 쓰이지만, 예약 전에는 실제 장소와 이동 기준을 확인하는 것이 더 중요합니다."],
];

const regionLinks = `<div class="card-grid">
  <a class="card" href="/seoul/"><h3>서울 출장마사지</h3><p>강남, 잠실, 홍대, 여의도 등 도심 생활권의 방문 전 확인 기준.</p></a>
  <a class="card" href="/gyeonggi/"><h3>경기 출장마사지</h3><p>수원, 분당, 용인, 부천, 일산 등 신도시와 외곽 이동 기준.</p></a>
  <a class="card" href="/incheon/"><h3>인천 출장마사지</h3><p>송도, 부평, 구월, 청라, 검단 등 공항·항만·신도시 생활권 안내.</p></a>
</div>`;

const checkLinks = `<div class="card-grid">
  <a class="card" href="/check/first-time/"><h3>처음 이용</h3><p>예약 전에 준비할 정보와 확인 순서.</p></a>
  <a class="card" href="/check/address/"><h3>주소 확인</h3><p>동·건물명·출입 방식까지 정확히 전달하는 기준.</p></a>
  <a class="card" href="/check/travel-fee/"><h3>추가 이동비</h3><p>도심, 신도시, 외곽권에서 달라지는 이동 기준.</p></a>
  <a class="card" href="/check/building-access/"><h3>건물 출입</h3><p>오피스텔, 호텔, 업무지구 방문 시 필요한 사전 확인.</p></a>
  <a class="card" href="/check/time/"><h3>예약 시간</h3><p>피크 시간대와 심야 시간대의 상담 기준.</p></a>
  <a class="card" href="/check/privacy/"><h3>개인정보</h3><p>예약에 필요한 최소 정보와 보관 기준.</p></a>
</div>`;

const guideLinks = `<div class="card-grid">
  <a class="card" href="/use/"><h3>이용 장소별 안내</h3><p>자택, 호텔, 숙소, 오피스텔, 업무지구 이용 기준.</p></a>
  <a class="card" href="/type/"><h3>지역 유형별 안내</h3><p>도심, 주거권, 신도시, 외곽권별 예약 전 확인 사항.</p></a>
  <a class="card" href="/life/"><h3>수도권 생활권</h3><p>서울·경기·인천을 실제 이동 생활권 기준으로 정리.</p></a>
  <a class="card" href="/station/"><h3>지하철 안내</h3><p>주요 역세권 기준의 주소 확인과 이동 동선 안내.</p></a>
</div>`;

const authorityLinks = `<ul class="link-list">
  <li><a href="https://www.google.com/search/howsearchworks/" target="_blank" rel="noopener">Google 검색 작동 방식</a></li>
  <li><a href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" target="_blank" rel="noopener">Google 구조화된 데이터 가이드</a></li>
  <li><a href="https://schema.org/" target="_blank" rel="noopener">Schema.org</a></li>
</ul>`;

function section(title, body) {
  return `<section><h2>${title}</h2>${body}</section>`;
}

function richBody(areaName, lead, localLinks = "") {
  return [
    section("예약 전 확인해야 할 기준", `<p>${lead}</p><p>${areaName}에서 출장마사지나 홈타이를 찾을 때는 지역명만 보는 것보다 실제 방문 주소와 이동권을 함께 확인해야 합니다. 같은 생활권 안에서도 도로, 역세권, 숙소 형태, 건물 출입 방식에 따라 상담 과정이 달라질 수 있습니다.</p><p>간다GO는 사용자가 예약 전에 확인해야 할 기준을 먼저 정리합니다. 방문 가능 지역, 이용 장소, 추가 이동비, 예약 시간, 개인정보 처리 기준을 단계별로 안내해 과장된 홍보 문구보다 실제 판단에 필요한 정보를 제공합니다.</p>`),
    section("내부 링크로 이어지는 확인 순서", checkLinks),
    section("수도권 생활권 연결", regionLinks + localLinks),
    section("장소와 지역 유형 기준", guideLinks),
    section("운영 원칙", `<p>사이트 전체 콘텐츠는 허위 후기, 가짜 평점, 과도한 할인 표현, 선정적 문구를 사용하지 않는 방향으로 작성합니다. 전화예약은 <strong>${phone}</strong>이며, 예약 상담 중 주소와 시간, 출입 방식, 이용 장소를 확인합니다.</p>`),
  ].join("\n");
}

function makePage(pathName, title, description, h1, body, crumbs = [], options = {}) {
  return { path: pathName, title, desc: description, h1, body, crumbs, ...options };
}

function cardGrid(items) {
  return `<div class="card-grid">${items.map((item) => `<a class="card" href="${item.href}"><h3>${item.title}</h3><p>${item.text}</p></a>`).join("")}</div>`;
}

function districtLinks() {
  return cardGrid(seoulDistricts.map((district) => ({
    href: `/seoul/${district.slug}/`,
    title: `${district.name} 출장마사지`,
    text: `${district.hubs.join("·")} 생활권과 행정동별 예약 전 확인 기준.`,
  })));
}

function dongLinks(district) {
  return cardGrid(district.dongs.map(([dong, slug]) => ({
    href: `/seoul/${district.slug}/${slug}/`,
    title: `${dong} 출장마사지`,
    text: `${district.name} ${dong} 방문 주소, 이동 동선, 이용 장소 확인.`,
  })));
}

function relatedDistrictLinks(currentSlug) {
  return cardGrid(seoulDistricts
    .filter((district) => district.slug !== currentSlug)
    .slice(0, 8)
    .map((district) => ({
      href: `/seoul/${district.slug}/`,
      title: `${district.name} 안내`,
      text: `${district.hubs.join("·")} 인근 생활권 확인.`,
    })));
}

function seoulDistrictBody(district) {
  return [
    section(`${district.name} 행정동별 예약 전 확인`, `<p>${district.name} 출장마사지 예약 전에는 ${district.hubs.join(", ")} 생활권과 실제 방문 행정동을 함께 확인하는 것이 좋습니다. 같은 ${district.name} 안에서도 역세권, 주거지, 오피스텔, 호텔, 업무지구 여부에 따라 이동 시간과 건물 출입 방식이 달라질 수 있습니다.</p><p>아래 행정동 페이지는 번호로 나뉜 1동, 2동, 3동 성격의 동을 하나의 대표 동명으로 통합해 구성했습니다. 검색용 키워드 반복보다 사용자가 예약 전에 확인해야 하는 주소·시간·이동비·출입 기준을 중심으로 안내합니다.</p>`),
    section(`${district.name} 행정동 전체 보기`, dongLinks(district)),
    section(`${district.name} 롱테일 내부링크`, `<p>${district.name} 내 세부 동 페이지는 모두 <a href="/check/address/">방문 주소 확인</a>, <a href="/check/travel-fee/">추가 이동비 기준</a>, <a href="/use/">이용 장소별 안내</a>, <a href="/station/">지하철역 기준 안내</a>로 이어집니다. 사용자는 동명 검색 후 바로 예약하기보다 필요한 기준을 차례로 확인할 수 있습니다.</p>${checkLinks}${guideLinks}`),
    section("서울 다른 행정구 연결", relatedDistrictLinks(district.slug)),
  ].join("\n");
}

function seoulDongBody(district, dong, dongSlug) {
  const siblingLinks = cardGrid(district.dongs
    .filter(([, slug]) => slug !== dongSlug)
    .slice(0, 10)
    .map(([name, slug]) => ({
      href: `/seoul/${district.slug}/${slug}/`,
      title: `${name} 안내`,
      text: `${district.name} 내 인접 행정동 예약 기준.`,
    })));
  return [
    section(`${district.name} ${dong} 출장마사지 예약 기준`, `<p>${district.name} ${dong} 출장마사지와 홈타이를 찾을 때는 동명만 확인하는 것보다 실제 방문 주소, 가까운 역 또는 큰 도로, 이용 장소 유형을 함께 전달하는 것이 중요합니다. ${dong} 안에서도 주거지, 숙소, 오피스텔, 업무지구에 따라 도착 동선과 출입 방식이 달라질 수 있습니다.</p><p>간다GO는 ${district.name} ${dong} 페이지를 단순 지역 나열이 아니라 예약 전 확인 가이드로 구성했습니다. 상담 전 주소, 희망 시간, 건물 출입 방식, 추가 이동비 가능성을 미리 확인하면 불필요한 재확인을 줄일 수 있습니다.</p>`),
    section(`${dong} 롱테일 확인 항목`, `<ul><li><strong>${dong} 방문 주소</strong>: 도로명 주소와 건물명, 호수, 출입 방식을 함께 확인합니다.</li><li><strong>${dong} 이용 장소</strong>: 자택, 호텔, 숙소, 오피스텔, 업무지구에 따라 안내 기준을 나눕니다.</li><li><strong>${dong} 이동 기준</strong>: ${district.hubs.join(", ")} 생활권과의 거리, 심야 시간대 이동 가능성을 확인합니다.</li><li><strong>${dong} 예약 변경</strong>: 시간 변경이나 취소가 필요한 경우 <a href="/check/change-policy/">예약 변경 기준</a>을 먼저 확인합니다.</li></ul>`),
    section("예약 전 필수 내부링크", checkLinks + guideLinks),
    section(`${district.name} 다른 행정동`, siblingLinks),
    section("상위 지역으로 돌아가기", `<p><a href="/seoul/${district.slug}/">${district.name} 행정동 전체 안내</a>와 <a href="/seoul/">서울 전체 행정구 안내</a>에서 다른 생활권도 함께 비교할 수 있습니다.</p>`),
  ].join("\n");
}

const hero = `<div class="hero">
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
</div>`;

const homeBody = [
  section("수도권 출장마사지 사이트 콘셉트", "<p>간다GO는 서울·경기·인천 출장마사지와 홈타이를 찾는 사용자가 예약 전에 실제로 확인해야 할 정보를 먼저 제공하는 안내 사이트입니다. 지역 페이지를 무리하게 늘리기보다, 방문 주소와 이용 장소, 이동 가능 범위, 건물 출입 방식, 개인정보 처리 기준을 기준으로 콘텐츠를 구성했습니다.</p><p>서울 도심권은 교통이 편리하지만 업무지구와 호텔, 오피스텔 출입 기준이 다를 수 있습니다. 경기권은 수원, 분당, 용인, 부천, 일산처럼 신도시와 외곽 이동권이 함께 섞입니다. 인천권은 송도, 부평, 구월, 청라, 검단처럼 생활권별 이동 동선이 뚜렷합니다.</p>"),
  section("지역별 방문 가능 지역 안내", regionLinks),
  section("예약 전 단계별 점검", checkLinks),
  section("이용 장소와 생활권 허브", guideLinks),
  section("권위 있는 참고 링크", authorityLinks),
  section("간다GO 운영 기준", `<p>상호는 간다GO이며 전화예약은 <strong>${phone}</strong>입니다. 모든 페이지는 검색 이용자에게 필요한 정보를 제공하는 방향으로 작성하고, 불법·선정적 요청이나 허위 후기, 과장 광고를 사용하지 않습니다.</p>`),
].join("\n");

const pages = [
  makePage("", "서울·경기·인천 출장마사지｜수도권 방문 가능 지역·홈타이 예약 안내", desc, "서울·경기·인천 출장마사지 · 수도권 방문 가능 지역 안내", homeBody, [], { hero, faq }),
  makePage("seoul/", "서울 출장마사지｜25개 행정구·행정동 홈타이 예약 안내", "서울 출장마사지 예약 전 25개 행정구와 행정동 방문 기준을 확인하세요.", "서울 출장마사지 행정구·행정동 안내", [
    section("서울 25개 행정구 전체 안내", "<p>서울 출장마사지 예약 전에는 강남, 잠실, 홍대, 여의도 같은 생활권뿐 아니라 실제 방문 주소가 속한 행정구와 행정동을 함께 확인해야 합니다. 아래 서울 25개 행정구를 선택하면 각 구의 행정동 페이지로 이어집니다.</p>" + districtLinks()),
    section("행정동 페이지 구성 기준", "<p>각 행정구 페이지에는 행정동을 모두 연결했습니다. 다만 1동, 2동, 3동처럼 번호로만 나뉜 행정동은 대표 동명 하나로 통합해 중복 페이지를 줄이고, 주소 확인과 이동 기준을 더 명확하게 볼 수 있도록 구성했습니다.</p>"),
    section("서울 예약 전 확인 흐름", checkLinks + guideLinks),
    section("수도권 연결", regionLinks),
  ].join("\n"), [["서울", null]]),
  makePage("gyeonggi/", "경기 출장마사지｜수원·분당·용인·부천 홈타이 예약 안내", "경기 출장마사지 예약 전 수원·분당·용인·부천 이동 기준을 확인하세요.", "경기 출장마사지 방문 가능 지역 안내", richBody("경기", "경기권은 수원, 분당, 용인, 부천, 일산처럼 생활권이 넓고 도심과 외곽 이동 시간이 크게 달라집니다. 경기 출장마사지 예약 전에는 행정구역뿐 아니라 가까운 역, 도로 접근성, 추가 이동비 기준을 함께 확인해야 합니다.", '<div class="card-grid"><a class="card" href="/gyeonggi/suwon/"><h3>수원</h3><p>수원역, 인계동, 광교 생활권.</p></a><a class="card" href="/gyeonggi/life/suwon-station-ingye/"><h3>수원역·인계</h3><p>상권과 숙소 밀집 지역 확인.</p></a></div>'), [["경기", null]]),
  makePage("incheon/", "인천 출장마사지｜송도·부평·구월·청라 홈타이 예약 안내", "인천 출장마사지 예약 전 송도·부평·구월·청라 방문 기준을 확인하세요.", "인천 출장마사지 방문 가능 지역 안내", richBody("인천", "인천은 송도, 부평, 구월, 청라, 검단처럼 신도시와 기존 도심, 공항·항만권이 함께 존재합니다. 인천 출장마사지 예약 전에는 이동권과 건물 출입 기준, 심야 시간대 도착 가능성을 함께 확인하는 것이 좋습니다.", '<div class="card-grid"><a class="card" href="/incheon/yeonsu-gu/songdo/"><h3>송도</h3><p>송도국제도시와 연수구 생활권.</p></a><a class="card" href="/incheon/life/songdo-international-city/"><h3>송도국제도시</h3><p>호텔, 오피스텔, 업무지구 기준.</p></a></div>'), [["인천", null]]),
];

[
  ["check/", "예약 전 확인", "수도권 출장마사지 예약 전 주소·시간·이동비 기준을 확인하세요.", "수도권 출장마사지 예약 전 확인"],
  ["check/first-time/", "처음 이용", "처음 이용하는 출장마사지 예약 전 준비 정보를 확인하세요.", "처음 이용하는 분 안내"],
  ["check/address/", "주소 확인", "출장마사지 예약 전 방문 주소와 건물 출입 방식을 확인하세요.", "방문 주소 확인 기준"],
  ["check/travel-fee/", "추가 이동비", "수도권 출장마사지 추가 이동비와 외곽 이동 기준을 확인하세요.", "추가 이동비 확인 기준"],
  ["check/building-access/", "건물 출입", "오피스텔·호텔·업무지구 방문 전 출입 기준을 확인하세요.", "건물 출입 방식 확인"],
  ["check/time/", "예약 시간", "출장마사지 예약 가능 시간과 심야 상담 기준을 확인하세요.", "예약 가능 시간 확인"],
  ["check/change-policy/", "예약 변경", "출장마사지 예약 변경과 취소 전 확인 기준을 안내합니다.", "예약 변경 기준"],
  ["check/privacy/", "개인정보", "예약 상담에 필요한 최소 개인정보 처리 기준을 확인하세요.", "개인정보 확인 기준"],
].forEach(([pathName, label, description, h1]) => {
  const crumbs = pathName === "check/" ? [["예약 전 확인", null]] : [["예약 전 확인", "/check/"], [label, null]];
  pages.push(makePage(pathName, `${label}｜간다GO 수도권 출장마사지 안내`, description, h1, richBody(label, `${label} 페이지는 서울·경기·인천 출장마사지 예약 전에 사용자가 놓치기 쉬운 항목을 정리합니다. 상담 전에 이 기준을 확인하면 주소 전달, 시간 조율, 이동비 확인, 건물 출입 안내가 더 명확해집니다.`), crumbs));
});

[
  ["use/", "이용 장소별 안내", "자택·호텔·오피스텔·업무지구 출장마사지 이용 기준을 확인하세요."],
  ["type/", "지역 유형별 안내", "도심·신도시·외곽권 출장마사지 이동 기준을 확인하세요."],
  ["life/", "수도권 생활권 안내", "서울·경기·인천 생활권별 출장마사지 예약 기준을 확인하세요."],
  ["station/", "지하철역 기준 안내", "수도권 주요 역세권 출장마사지 주소 확인 기준을 안내합니다."],
  ["contact/", "고객센터", "간다GO 전화예약과 웹사이트 제작·제휴 문의 방법을 확인하세요."],
  ["support/", "고객센터", "간다GO 전화예약과 웹사이트 제작·제휴 문의 방법을 확인하세요."],
  ["support/privacy/", "개인정보처리방침", "간다GO 예약 상담 개인정보 처리 기준을 확인하세요."],
].forEach(([pathName, h1, description]) => {
  pages.push(makePage(pathName, `${h1}｜간다GO`, description, h1, richBody(h1, `${h1} 페이지는 수도권 방문형 관리를 예약하기 전에 필요한 기준을 한곳에서 확인하도록 만든 허브입니다. 세부 지역 페이지와 예약 전 확인 페이지를 함께 연결해 사용자가 다음 확인 단계로 자연스럽게 이동할 수 있게 구성했습니다.`), [[h1, null]]));
});

[
  ["seoul/gangnam-gu/", "강남구 출장마사지", "강남구 출장마사지 예약 전 강남역·역삼·삼성 방문 기준을 확인하세요.", "서울", "/seoul/"],
  ["seoul/life/gangnam-yeoksam/", "강남·역삼 생활권", "강남·역삼 출장마사지 예약 전 업무지구 방문 기준을 확인하세요.", "서울", "/seoul/"],
  ["gyeonggi/suwon/", "수원 출장마사지", "수원 출장마사지 예약 전 수원역·인계·광교 이동 기준을 확인하세요.", "경기", "/gyeonggi/"],
  ["gyeonggi/life/suwon-station-ingye/", "수원역·인계 생활권", "수원역·인계동 출장마사지 예약 전 상권 이동 기준을 확인하세요.", "경기", "/gyeonggi/"],
  ["incheon/yeonsu-gu/songdo/", "송도 출장마사지", "송도 출장마사지 예약 전 연수구·국제도시 방문 기준을 확인하세요.", "인천", "/incheon/"],
  ["incheon/life/songdo-international-city/", "송도국제도시 생활권", "송도국제도시 출장마사지 예약 전 호텔·오피스텔 기준을 확인하세요.", "인천", "/incheon/"],
].forEach(([pathName, h1, description, parent, parentHref]) => {
  pages.push(makePage(pathName, `${h1}｜간다GO 수도권 홈타이 안내`, description, h1, richBody(h1, `${h1} 페이지는 세부 생활권에서 예약 전에 확인해야 할 방문 주소, 이동 동선, 이용 장소, 상담 시간 기준을 정리합니다. 단순 지역명 반복보다 실제 예약 과정에서 필요한 기준을 우선 제공합니다.`), [[parent, parentHref], [h1, null]]));
});

for (const district of seoulDistricts) {
  pages.push(makePage(
    `seoul/${district.slug}/`,
    `${district.name} 출장마사지｜행정동별 홈타이 예약 전 확인`,
    `${district.name} 출장마사지 예약 전 행정동별 방문 기준을 확인하세요.`,
    `${district.name} 출장마사지 행정동 안내`,
    seoulDistrictBody(district),
    [["서울", "/seoul/"], [district.name, null]],
  ));

  for (const [dong, dongSlug] of district.dongs) {
    pages.push(makePage(
      `seoul/${district.slug}/${dongSlug}/`,
      `${district.name} ${dong} 출장마사지｜홈타이 예약 전 확인`,
      `${district.name} ${dong} 출장마사지 예약 전 주소·이동 기준을 확인하세요.`,
      `${district.name} ${dong} 출장마사지 안내`,
      seoulDongBody(district, dong, dongSlug),
      [["서울", "/seoul/"], [district.name, `/seoul/${district.slug}/`], [dong, null]],
    ));
  }
}

function renderNav(currentPath) {
  return nav.map(([label, href, children]) => {
    const active = href === `/${currentPath}` ? " is-active" : "";
    if (!children.length) return `<li class="nav-item${active}"><a href="${href}">${label}</a></li>`;
    const sub = children.map(([childLabel, childHref]) => `<li><a href="${childHref}">${childLabel}</a></li>`).join("");
    return `<li class="nav-item has-sub${active}"><a href="${href}">${label}</a><ul class="sub-menu">${sub}</ul></li>`;
  }).join("");
}

function renderBreadcrumb(crumbs) {
  if (!crumbs.length) return "";
  const items = [`<li><a href="/">홈</a></li>`].concat(crumbs.map(([label, href]) => href ? `<li><a href="${href}">${label}</a></li>` : `<li><span>${label}</span></li>`));
  return `<nav class="breadcrumb" aria-label="현재 위치"><ol>${items.join("")}</ol></nav>`;
}

function injectToc(body) {
  const items = [];
  let counter = 0;
  const html = body.replace(/<section([^>]*)>\s*<h2>(.*?)<\/h2>/gs, (_m, attrs, title) => {
    const existing = attrs.match(/id="([^"]+)"/);
    const id = existing ? existing[1] : `sec-${++counter}`;
    const opening = existing ? `<section${attrs}>` : `<section id="${id}"${attrs}>`;
    items.push([id, title.replace(/<[^>]+>/g, "").trim()]);
    return `${opening}<h2>${title}</h2>`;
  });
  return [html, items];
}

function renderToc(items) {
  if (items.length < 3) return "";
  return `<aside class="page-toc"><nav aria-label="페이지 목차"><p class="toc-title">목차</p><ul>${items.map(([id, label]) => `<li><a href="#${id}">${label}</a></li>`).join("")}</ul></nav></aside>`;
}

function schemaBlocks(page, canonical) {
  const org = { "@context": "https://schema.org", "@type": "Organization", "@id": `${baseUrl}/#organization`, name: brand, url: `${baseUrl}/`, logo: `${baseUrl}/assets/apple-touch-icon.png`, image: `${baseUrl}/assets/apple-touch-icon.png`, telephone: phone, areaServed: { "@type": "AdministrativeArea", name: "서울·경기·인천" }, contactPoint: { "@type": "ContactPoint", telephone: phone, contactType: "reservations", availableLanguage: ["ko"], areaServed: "KR" } };
  const webPage = { "@context": "https://schema.org", "@type": "WebPage", name: page.title, description: page.desc, url: canonical, inLanguage: "ko", isPartOf: { "@id": `${baseUrl}/#organization` }, publisher: { "@id": `${baseUrl}/#organization` } };
  const crumbs = [{ "@type": "ListItem", position: 1, name: "홈", item: `${baseUrl}/` }].concat(page.crumbs.map(([label, href], index) => ({ "@type": "ListItem", position: index + 2, name: label, ...(href ? { item: `${baseUrl}${href}` } : {}) })));
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: crumbs };
  const image = { "@context": "https://schema.org", "@type": "ImageObject", name: page.title, url: `${baseUrl}/assets/apple-touch-icon.png`, contentUrl: `${baseUrl}/assets/apple-touch-icon.png`, thumbnailUrl: `${baseUrl}/assets/favicon-32.png`, caption: page.title, inLanguage: "ko", representativeOfPage: true, mainEntityOfPage: canonical };
  const blocks = [org, webPage, breadcrumb, image];
  if (page.faq?.length) blocks.push({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) });
  return blocks.map((block) => `<script type="application/ld+json">\n${JSON.stringify(block, null, 2)}\n</script>`).join("\n");
}

function render(page) {
  const canonical = `${baseUrl}/${page.path}`;
  const [body, tocItems] = injectToc(page.body);
  const toc = renderToc(tocItems);
  const h1 = page.hero ? "" : `<h1>${page.h1}</h1>`;
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${page.title}</title>
<meta name="description" content="${page.desc}">
<meta name="robots" content="index,follow">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:title" content="${page.title}">
<meta property="og:description" content="${page.desc}">
<meta property="og:url" content="${canonical}">
<meta property="og:site_name" content="${brand}">
<meta property="og:image" content="${baseUrl}/assets/apple-touch-icon.png">
<meta property="og:image:width" content="180">
<meta property="og:image:height" content="180">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="${baseUrl}/assets/apple-touch-icon.png">
<link rel="icon" type="image/svg+xml" href="/assets/favicon.svg?v=2">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32.png?v=2">
<link rel="icon" href="/favicon.ico?v=2" sizes="48x48">
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png?v=2">
<meta name="theme-color" content="#11100e">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&family=Noto+Serif+KR:wght@600;700;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css">
<link rel="stylesheet" href="/assets/style.css">
${schemaBlocks(page, canonical)}
</head>
<body>
<header class="site-header">
  <div class="header-accent" aria-hidden="true"></div>
  <div class="header-top">
    <div class="header-inner">
      <a class="brand" href="/"><span class="brand-mark">G</span> <span class="brand-text">${brand}</span></a>
      <p class="header-tagline"><span class="tag-gem">◆</span> 서울·경기·인천 방문 가능 지역 안내 <span class="tag-gem">◆</span> 24시간 상담</p>
      <a class="header-call" href="tel:${phone}"><span class="call-label">예약전화</span> ${phone}</a>
      <button class="nav-toggle" aria-label="메뉴 열기" aria-expanded="false"><span></span><span></span><span></span></button>
    </div>
  </div>
  <nav class="main-nav" aria-label="주 메뉴"><div class="nav-inner"><ul class="nav-list">${renderNav(page.path)}</ul></div></nav>
</header>
${page.hero || ""}<main class="site-main">
  <div class="container ${toc ? "page-layout has-toc" : "page-layout"}">
    ${toc}
    <article class="page-content">
      ${renderBreadcrumb(page.crumbs)}
      ${h1}
      ${body}
    </article>
  </div>
</main>
<footer class="site-footer">
  <div class="container footer-grid">
    <div class="footer-col footer-about">
      <p class="footer-brand">${brand}</p>
      <p class="footer-desc">서울·경기·인천 출장마사지·홈타이 예약 전 확인 기준을 안내합니다. 모든 콘텐츠는 건전한 방문 관리 범위 안에서 제공합니다.</p>
      <address class="footer-contact">
        <span class="footer-contact-row"><span class="footer-label">예약전화</span> <a href="tel:${phone}">${phone}</a></span>
        <span class="footer-contact-row"><span class="footer-label">상담시간</span> 연중무휴 24시간</span>
        <span class="footer-contact-row"><span class="footer-label">서비스 지역</span> 서울·경기·인천</span>
      </address>
    </div>
    <nav class="footer-col" aria-label="서비스 안내"><p class="footer-title">서비스</p><ul><li><a href="/seoul/">서울 출장마사지</a></li><li><a href="/gyeonggi/">경기 출장마사지</a></li><li><a href="/incheon/">인천 출장마사지</a></li><li><a href="/life/">생활권 안내</a></li><li><a href="/station/">역세권 안내</a></li></ul></nav>
    <nav class="footer-col" aria-label="이용 안내"><p class="footer-title">이용 안내</p><ul><li><a href="/check/">예약 전 확인</a></li><li><a href="/use/">이용 장소별 안내</a></li><li><a href="/type/">지역 유형별 안내</a></li><li><a href="/contact/">고객센터</a></li></ul></nav>
    <nav class="footer-col" aria-label="정책 및 기준"><p class="footer-title">정책</p><ul><li><a href="/support/privacy/">개인정보처리방침</a></li><li><a href="${telegram}" target="_blank" rel="noopener nofollow">문의하기</a></li></ul></nav>
  </div>
  <div class="footer-bottom"><div class="container footer-bottom-inner"><p class="footer-copy">&copy; ${brand}. All rights reserved.</p><p class="footer-note">건전한 방문 관리 안내를 운영하며, 불법적인 요청은 어떤 경우에도 응하지 않습니다.</p><div class="footer-actions"><a class="btn-telegram" href="${telegram}" target="_blank" rel="noopener nofollow" title="웹사이트 제작문의">웹사이트 제작문의</a><a class="btn-partnership" href="${telegram}" target="_blank" rel="noopener nofollow" title="제휴문의">제휴문의</a></div></div></div>
</footer>
<a class="call-fab" href="tel:${phone}" aria-label="전화 예약 ${phone}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg><span class="call-fab-label">예약 전화</span></a>
<script src="/assets/nav.js"></script>
</body>
</html>`;
}

const pagesToBuild = [...new Map(pages.map((page) => [page.path, page])).values()];

for (const page of pagesToBuild) {
  const outDir = path.join(root, page.path);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), render(page), "utf8");
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pagesToBuild.map((page) => `  <url><loc>${baseUrl}/${page.path}</loc></url>`).join("\n")}\n</urlset>\n`;
fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap, "utf8");
fs.writeFileSync(path.join(root, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml\n`, "utf8");
fs.closeSync(fs.openSync(path.join(root, ".nojekyll"), "w"));

console.log(`${pagesToBuild.length} pages built.`);
for (const page of pagesToBuild) console.log(`${page.path || "/"} ${page.desc.length} chars`);
