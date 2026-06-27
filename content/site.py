# 수도권 출장마사지 사이트 공통 설정

BASE_URL = "https://guhara1.github.io/perfectbest-massage"

BRAND = "간다GO"
PHONE = "0508-202-4719"
PHONE_DISPLAY = "0508-202-4719"
TELEGRAM_URL = "https://t.me/googleseolab"

NAV = [
    ("홈", "/", []),
    ("수도권 안내", "/", [
        ("서울", "/seoul/"),
        ("경기", "/gyeonggi/"),
        ("인천", "/incheon/"),
    ]),
    ("예약 전 확인", "/check/", [
        ("처음 이용", "/check/first-time/"),
        ("주소 확인", "/check/address/"),
        ("이동비", "/check/travel-fee/"),
        ("건물 출입", "/check/building-access/"),
        ("예약 시간", "/check/time/"),
        ("변경 기준", "/check/change-policy/"),
        ("개인정보", "/check/privacy/"),
    ]),
    ("이용 기준", "/use/", [
        ("이용 장소", "/use/"),
        ("지역 유형", "/type/"),
        ("생활권", "/life/"),
        ("지하철", "/station/"),
    ]),
    ("생활권", "/life/", [
        ("강남·역삼", "/seoul/life/gangnam-yeoksam/"),
        ("수원역·인계", "/gyeonggi/life/suwon-station-ingye/"),
        ("송도국제도시", "/incheon/life/songdo-international-city/"),
    ]),
    ("문의", "/contact/", [
        ("고객센터", "/contact/"),
        ("개인정보처리방침", "/support/privacy/"),
    ]),
]
