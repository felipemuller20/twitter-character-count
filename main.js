const maxCount = 240;
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
  const textarea2 = document.getElementsByTagName('textarea')[0];
  textarea2.style.height = 'auto'; // Define a altura para automática
  textarea2.style.height = textarea2.scrollHeight + 'px'; // Ajusta a altura com base no conteúdo

  const circle = document.getElementById('inner');
  const calculate = (2 * 3.141592653589793 * rad) - (((2 * 3.141592653589793 * rad) * countCharacters(textarea.value)) / maxCount)
  console.log(calculate)
  circle.style.strokeDashoffset = calculate;
})