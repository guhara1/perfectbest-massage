# 간다GO 수도권 출장마사지 안내 사이트

서울·경기·인천 출장마사지·홈타이 예약 전 확인 기준을 정리한 정적 사이트입니다.

**상호**: 간다GO  
**전화예약**: 0508-202-4719

## 구조

- `build.mjs` — 현재 환경에서 사용하는 Node 정적 빌더
- `build.py` — Python 빌더 버전
- `content/` — 브랜드, 메뉴, 페이지 원본 데이터
- `assets/` — Pretendard 기반 CSS, 토큰 팔레트, 모바일 내비게이션
- `sitemap.xml`, `robots.txt` — 빌드 시 자동 생성

## 빌드

```bash
node build.mjs
```

## 생성 페이지

- 메인 `/`
- 광역 안내 `/seoul/`, `/gyeonggi/`, `/incheon/`
- 예약 전 확인 `/check/` 및 7개 하위 페이지
- 이용 장소, 지역 유형, 생활권, 지하철 허브
- 고객센터, 개인정보처리방침
- 강남구, 강남·역삼, 수원, 수원역·인계, 송도, 송도국제도시 롱테일 페이지

## SEO 적용

- 모든 페이지 메타 디스크립션 80자 이내
- 모든 페이지 `Organization`, `WebPage`, `BreadcrumbList`, `ImageObject` JSON-LD 적용
- 메인 페이지 `FAQPage` JSON-LD 적용
- 내부링크는 예약 전 확인, 지역, 생활권, 이용 장소 허브로 연결
- Google 검색 작동 방식, 구조화된 데이터, Schema.org 권위 링크 포함
- 푸터에 웹사이트 제작문의와 제휴문의 오렌지 CTA, 텔레그램 링크 적용
