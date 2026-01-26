$(document).ready(function() {
    // AOS 애니메이션 초기화
    AOS.init({
        duration: 1000,
        once: false,
        offset: 120
    });

    // 헤더 투명도 조절
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#header').css({
                'background': 'rgba(255,255,255,0.95)',
                'box-shadow': '0 4px 15px rgba(0,0,0,0.05)'
            });
        } else {
            $('#header').css({
                'background': '#fff',
                'box-shadow': 'none'
            });
        }
    });
});
