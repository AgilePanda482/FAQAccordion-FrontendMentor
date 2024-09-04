const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer')

questions.forEach(question => {
  question.addEventListener('click', () => {
    const currentAnswer = question.nextElementSibling

    answers.forEach(answer => {
        if (answer !== currentAnswer) {
            answer.classList.remove('visible')
            answer.previousElementSibling.classList.remove("minus")
        }
    });

    currentAnswer.classList.toggle('visible')
    question.classList.toggle('minus')
  });
});