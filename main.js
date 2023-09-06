const maxCount = 240;
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

  const circle = document.getElementById('inner');
  const calculate = (2 * 3.141592653589793 * 40) - (((2 * 3.141592653589793 * 40) * countCharacters(textarea.value)) / maxCount)
  console.log(calculate)
  circle.style.strokeDashoffset = calculate;
})