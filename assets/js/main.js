// Set the copyright information in the footer

const copy = () => {
  const copyInfo = {
    startDate: 2012,
    date: new Date(),
    name: 'Rasmus Rafael',
  };

  return copyInfo.date !== copyInfo.startDate
    ? `&copy;${copyInfo.startDate} - ${copyInfo.date.getFullYear()} by ${
        copyInfo.name
      }`
    : `&copy;${copyInfo.date.getFullYear()} by ${copyInfo.name}`;
};

document.getElementById('copy').innerHTML = copy();

/*
 * Åben og luk mobil menu
 */

const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
  console.log('Trykket');
  document.querySelector('.nav').classList.toggle('nav--visible');
});
