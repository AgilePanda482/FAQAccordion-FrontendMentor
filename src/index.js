const imgPlus = "assets/images/icon-plus.svg"
const imgMinus = "assets/images/icon-minus.svg"

const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer')

questions.forEach(question => {
  question.addEventListener('click', () => {
    const image = question.lastElementChild
    const currentAnswer = question.nextElementSibling

    answers.forEach(answer => {
        if (answer !== currentAnswer) {
            answer.classList.remove('visible')
            answer.previousElementSibling.lastElementChild.src = imgPlus
        }
    });

    currentAnswer.classList.toggle('visible')
    image.src = image.src.includes(imgMinus) ? imgPlus : imgMinus
  });
});