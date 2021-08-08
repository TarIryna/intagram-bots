(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  // const closeMenuLi = document.querySelector('.js-close-mob-menu')
  const closeMenuUl = document.querySelector('.js-close-mob-menu')

  const mobileMenuOpenChecking = document.querySelector('.js-menu-button');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    mobileMenuOpenChecking.classList.toggle('is-open');
    const width = document.documentElement.clientWidth;

    const scrollLockMethod = !isMenuOpen && width<1440 
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  // if (document.documentElement.clientWidth >= 1440) {
  //   alert('!!!!!!');
  // bodyScrollLock.enableBodyScroll(document.body);
  // }
  
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  closeMenuUl.addEventListener('click', toggleMenu);
  
  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();