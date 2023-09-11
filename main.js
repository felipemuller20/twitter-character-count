const maxCount = 280;
const rad = 12;

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

  const innerCircle = document.getElementById('inner');
  const outerCircle = document.getElementById('outer');
  const numberInsideCircle = document.getElementById('number-inside-circle');
  const calculate = (2 * Math.PI * rad) - (((2 * Math.PI * rad) * countCharacters(textarea.value)) / maxCount)

  if (countCharacters(textarea.value) >= maxCount) {
    innerCircle.style.stroke = '#f4212e';
    innerCircle.style.strokeDashoffset = 0;
    numberInsideCircle.innerHTML = `${(countCharacters(textarea.value) - maxCount) > 0 ? "-" : ""}${countCharacters(textarea.value) - maxCount}`;
    if (countCharacters(textarea.value) - maxCount > 20) {
      innerCircle.style.stroke = 'none';
      outerCircle.style.stroke = 'none';
    }

  } else if ((maxCount - countCharacters(textarea.value)) <= 20) {
    innerCircle.style.stroke = '#fcdc58';
    innerCircle.style.strokeDashoffset = calculate;
    numberInsideCircle.innerHTML = maxCount - countCharacters(textarea.value);
  } else {
    innerCircle.style.stroke = '#1f9bf0';
    innerCircle.style.strokeDashoffset = calculate;
    numberInsideCircle.innerHTML = "";
  }

})