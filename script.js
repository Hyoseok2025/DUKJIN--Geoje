(function() {
    // 1. EmailJS 초기화 (본인의 Public Key로 변경 필수)
    emailjs.init("YOUR_PUBLIC_KEY");
})();

// 모달 제어 함수
function openModal() {
    $('#reservationModal').fadeIn(200);
}
function closeModal() {
    $('#reservationModal').fadeOut(200);
}

// 폼 제출 핸들러
$('#contactForm').on('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = $(this).find('.btn-submit');
    submitBtn.text('전송 중...').prop('disabled', true);

    // EmailJS로 데이터 전송
    // 'YOUR_SERVICE_ID'와 'YOUR_TEMPLATE_ID'를 실제 값으로 바꾸세요.
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function() {
            closeModal();
            showSuccess(); // 성공 애니메이션 표시
            $('#contactForm')[0].reset();
        }, function(error) {
            alert("전송에 실패했습니다. 다시 시도해주세요.");
            console.log("FAILED...", error);
        })
        .finally(function() {
            submitBtn.text('예약 완료 및 이메일 전송').prop('disabled', false);
        });
});

// 성공 메시지 노출/숨김
function showSuccess() {
    $('#successMessage').css('display', 'flex').hide().fadeIn(400);
}
function hideSuccess() {
    $('#successMessage').fadeOut(400);
}