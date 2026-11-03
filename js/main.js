// 모바일 메뉴 열기/닫기
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
menuToggle?.addEventListener('click', () => mainNav.classList.toggle('open'));

// 일정 및 프로그램 모달 열기
document.querySelectorAll('[data-modal]').forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.getElementById(button.dataset.modal);
    if (modal) {
      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
  });
});

// 닫기 버튼, 어두운 배경 클릭, ESC 키로 모달 닫기
function closeModal(modal) {
  modal.classList.remove('is-open');
  document.body.style.overflow = '';
}
document.querySelectorAll('.modal').forEach((modal) => {
  modal.querySelector('.modal-close')?.addEventListener('click', () => closeModal(modal));
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal(modal);
  });
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.querySelectorAll('.modal.is-open').forEach(closeModal);
  }
});

// 모바일에서 메뉴 항목을 누르면 메뉴 자동 닫기
document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});
