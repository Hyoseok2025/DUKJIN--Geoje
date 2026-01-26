$(document).ready(function() {
    // 1. EmailJS 초기화 (본인의 Public Key를 입력하세요)
    emailjs.init("YOUR_PUBLIC_KEY"); 

    [cite_start]// 2. AOS 애니메이션 초기화 [cite: 1]
    AOS.init({
        duration: 1000,
        once: false
    });

    // 3. 헤더 스크롤 반응
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#header').css({
                'background': 'rgba(255,255,255,0.98)',
                'box-shadow': '0 5px 15px rgba(0,0,0,0.05)'
            });
        } else {
            $('#header').css({
                'background': '#fff',
                'box-shadow': 'none'
            });
        }
    });

    // 4. 모달 제어 함수 (기능 추가)
    window.openModal = function() {
        $('#reservationModal').fadeIn(200);
    };

    window.closeModal = function() {
        $('#reservationModal').fadeOut(200);
    };

    // 5. EmailJS 이메일 전송 로직 (기능 추가)
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();

        const submitBtn = $(this).find('.btn-submit');
        submitBtn.text('전송 중...').prop('disabled', true);

        // YOUR_SERVICE_ID와 YOUR_TEMPLATE_ID를 본인 정보로 교체하세요.
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(function() {
                closeModal();
                showSuccess(); // 성공 애니메이션 표시
                $('#contactForm')[0].reset();
            }, function(error) {
                alert("전송에 실패했습니다. 다시 시도해 주세요.");
                console.log("Error:", error);
            })
            .finally(function() {
                submitBtn.text('예약 신청하기').prop('disabled', false);
            });
    });

    // 6. 성공 메시지 표시 및 숨김 (애니메이션 추가)
    window.showSuccess = function() {
        $('#successMessage').css('display', 'flex').hide().fadeIn(400);
    };

    window.hideSuccess = function() {
        $('#successMessage').fadeOut(400);
    };

    [cite_start]// 7. 부드러운 스크롤 이동 [cite: 1]
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