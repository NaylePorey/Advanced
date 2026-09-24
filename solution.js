function solve() {
  const sections = Array.from(document.querySelectorAll("#quizzie section"));
  const answers = Array.from(document.querySelectorAll(".quiz-answer"));
  const results = document.getElementById("results");
  const resultHeading = results.querySelector("h1");


  const correctAnswers = [
    "onclick", 
    "JSON.stringify()", 
    "A programming API for HTML and XML documents"
  ];

  let currQuestionIndex = 0;
  let rightAnswers = 0;

  answers.forEach((answer) => {
    answer.addEventListener("click", function(e) {
   
      const selectedAnswer = e.target.textContent.trim();

      if (selectedAnswer === correctAnswers[currQuestionIndex]) {
        rightAnswers++;
      }

      sections[currQuestionIndex].style.display = "none";
      
     
      currQuestionIndex++;

      if (currQuestionIndex < sections.length) {
        sections[currQuestionIndex].style.display = "block";
      } else {
        
        results.style.display = "block";
        
        if (rightAnswers === correctAnswers.length) {
          resultHeading.textContent = "You are recognized as top JavaScript fan!";
        } else {
          resultHeading.textContent = `You have ${rightAnswers} right answers`;
        }
      }
    });
  });
}