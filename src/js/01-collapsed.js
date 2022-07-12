'use strict';

const handleClick = (ev) => {
  const elementClick = ev.currentTarget;
  if (elementClick.classList.contains('js_designTitle')) {
    divDesign.classList.toggle('collapsed');
    iconDesign.classList.toggle('rotate');
    divFill.classList.add('collapsed');
    iconFill.classList.remove('rotate');
    divShare.classList.add('collapsed');
    iconShare.classList.remove('rotate');
  } else if (elementClick.classList.contains('js_fillTitle')) {
    divFill.classList.toggle('collapsed');
    iconFill.classList.toggle('rotate');
    divDesign.classList.add('collapsed');
    iconDesign.classList.remove('rotate');
    divShare.classList.add('collapsed');
    iconShare.classList.remove('rotate');
  } else if (elementClick.classList.contains('js_shareTitle')) {
    divShare.classList.toggle('collapsed');
    iconShare.classList.toggle('rotate');
    divDesign.classList.add('collapsed');
    iconDesign.classList.remove('rotate');
    divFill.classList.add('collapsed');
    iconFill.classList.remove('rotate');
  }
};

designTitle.addEventListener('click', handleClick);
fillTitle.addEventListener('click', handleClick);
shareTitle.addEventListener('click', handleClick);
