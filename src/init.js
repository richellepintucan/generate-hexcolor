// Data

const data = {
  characters: [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    ' 9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ],
};

// DOM

const dom = {
  value: document.querySelector('.value'),
  btn: document.getElementById('btn'),
  body: document.body,
};

// Utils

const getRandomNumber = () => {
  const randomIndex = Math.floor(Math.random() * data.characters.length);
  return data.characters[randomIndex];
};

// Handlers

const changeColorHandler = () => {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += getRandomNumber();
  }

  dom.value.innerText = color;
  dom.body.style.backgroundColor = color;
};

// Listeners

dom.btn.addEventListener('click', changeColorHandler);
