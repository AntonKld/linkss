const initNewsBtn = () => {
  if (document.querySelector('.news__button-wrapper')) {
    const ACTIVE__CLASS = 'news__button--active';
    const root = document.querySelector('.news__button-wrapper');
    const tabs = root.querySelectorAll('.news__button');

    root.addEventListener('click', (evt) => {
      tabs.forEach((tab) => {
        if (evt.target.matches('.news__button')) {
          tab.classList.remove(ACTIVE__CLASS);
          evt.target.classList.add(ACTIVE__CLASS);
        }
      });
    });
  }
  return null;
};

export {initNewsBtn};
