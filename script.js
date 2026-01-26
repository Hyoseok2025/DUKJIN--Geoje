$(document).ready(function() {
    // EmailJS 초기화
    emailjs.init("YOUR_PUBLIC_KEY");

    // AOS 초기화
    AOS.init({ duration: 1000 });

    // 모달 제어
    window.openModal = function() { $('#reservationModal').fadeIn(200); }
    window.closeModal = function() { $('#reservationModal').fadeOut(200); }

    // 폼 제출
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        const btn = $(this).find('.btn-submit');
        btn.text('전송 중...').prop('disabled', true);

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(function() {
                closeModal();
                $('#successMessage').css('display', 'flex').hide().fadeIn(400);
                $('#contactForm')[0].reset();
            }, function() {
                alert("전송에 실패했습니다. 다시 시도해주세요.");
            })
            .finally(function() {
                btn.text('예약 완료 및 이메일 전송').prop('disabled', false);
            });
    });

    window.hideSuccess = function() { $('#successMessage').fadeOut(400); }
});
