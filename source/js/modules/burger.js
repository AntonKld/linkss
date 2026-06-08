import '../utils/scroll-lock';

const burgerMenuInit = () => {
  const header = document.querySelector('.header');
  const menuList = header.querySelector('.nav');
  const menuToggle = header.querySelector('.header__toggle');

  header.classList.remove('header--no-js');
  menuList.classList.remove('nav--no-js');
  menuToggle.classList.remove('header__toggle--no-js');
  const nav = document.querySelector('.nav');

  const documentKeydownHandler = (event) => {
    if (event.key.toLowerCase().startsWith('esc')) {
      closeMenu();
    }
  };

  const onLinkClick = (evt) => {
    return (evt.target.matches('A') && !evt.target.matches('.nav__link--accordion')) ? closeMenu() : null;
  };

  const onNavOutsideClick = (evt) => {
    return (evt.target.closest('.header') && evt.target.closest('.header__toggle') || evt.target.closest('.nav')) ? evt.preventDefault() : closeMenu();
  };

  function closeMenu() {
    menuList.classList.remove('nav--is-active');
    header.classList.remove('header--is-active');
    menuToggle.classList.remove('header__toggle--is-active');
    document.removeEventListener('click', onNavOutsideClick);
    menuToggle.removeEventListener('click', closeMenu);
    nav.removeEventListener('click', onLinkClick);
    document.removeEventListener('keydown', documentKeydownHandler);
    window.scrollLock.enableScrolling();
  }

  const openMenu = () => {
    if (!menuToggle) {
      return;
    }
    header.classList.add('header--is-active');
    menuToggle.classList.add('header__toggle--is-active');
    menuList.classList.add('nav--is-active');
    document.addEventListener('click', onNavOutsideClick);
    menuToggle.addEventListener('click', closeMenu);
    nav.addEventListener('click', onLinkClick);
    document.addEventListener('keydown', documentKeydownHandler);
    window.scrollLock.disableScrolling();
  };

  menuToggle.addEventListener('click', openMenu);
};

export {burgerMenuInit};
