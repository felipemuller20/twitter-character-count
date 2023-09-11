const maxCount = 280;
const rad = 10;
function countWords(inputValue) {
  const words = inputValue.trim().split(' ');

  const wordCount = words.filter(word => word !== '').length;

  return wordCount;
}

function countCharacters(inputValue) {
  const characterCount = inputValue.length;

  return characterCount;
}

const textarea = document.getElementsByTagName('textarea')[0];
const wordCounterElement = document.getElementById('word-counter');
const characterCounterElement = document.getElementById('character-counter');

textarea.addEventListener('input', () => {
  wordCounterElement.innerHTML = countWords(textarea.value);
  characterCounterElement.innerHTML = countCharacters(textarea.value);

  // Redefine a altura do textarea, de acordo com o conteúdo
  textarea.style.height = 'auto'; // Define a altura para automática
  textarea.style.height = `${textarea.scrollHeight}px`; // Ajusta a altura com base no conteúdo

  const circle = document.getElementById('inner');
  const calculate = (2 * Math.PI * rad) - (((2 * Math.PI * rad) * countCharacters(textarea.value)) / maxCount)

  if (countCharacters(textarea.value) >= maxCount) {
    circle.style.stroke = '#f4212e';
    circle.style.strokeDashoffset = 0;
  } else if ((maxCount - countCharacters(textarea.value)) <= 20) {
    circle.style.stroke = '#fcdc58';
  } else {
    circle.style.stroke = '#1f9bf0';
    circle.style.strokeDashoffset = calculate;
  }

})