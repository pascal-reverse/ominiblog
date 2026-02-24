const tog = document.getElementById('tog');
const menu = document.getElementById('menu');

tog.addEventListener('click', () => {
  // toggle menu visibility
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
  }
});
