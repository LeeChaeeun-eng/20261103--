// 데모 신청 폼: 실제 서버 전송 없이 완료 화면을 보여줍니다.
const form = document.getElementById('registration-form');
const success = document.getElementById('success-message');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  form.hidden = true;
  success.classList.add('show');
  window.scrollTo({top: 0, behavior: 'smooth'});
});