$(document).ready(function() {
    // AOS 애니메이션 초기화
    AOS.init({
        duration: 1000,
        once: false
    });

    // 헤더 스크롤 효과
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#header').css('background', 'rgba(255,255,255,0.95)');
        } else {
            $('#header').css('background', '#fff');
        }
    });

    // 폼 제출 이벤트
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        const name = $('#name').val();
        alert(name + "님, 방문 예약 상담 신청이 접수되었습니다. 곧 연락드리겠습니다.");
        this.reset();
    });
});