$(document).ready(function() {
    // 애니메이션 라이브러리 실행
    AOS.init();

    // 스크롤 시 헤더 스타일 변경
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#main-header').css({
                'height': '70px',
                'background': 'rgba(255,255,255,0.98)',
                'box-shadow': '0 5px 20px rgba(0,0,0,0.05)'
            });
        } else {
            $('#main-header').css({
                'height': '80px',
                'background': '#fff',
                'box-shadow': 'none'
            });
        }
    });

    // 부드러운 앵커 이동
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });
});