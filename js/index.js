// flashcards
(function(){
    let addQuestionBtn = document.querySelector(".btn-add");
    let questionField = document.querySelector("#question");
    let addAnswerField = document.querySelector("#answer");
    let closeQuestionFieldBtn = document.querySelector(".close-button");
    let saveBtn = document.querySelector(".btn-save");


    addQuestionBtn.addEventListener("click", function(){
        document.querySelector(".question-field").style.display = "block";
    });

    closeQuestionFieldBtn.addEventListener("click", function(){
        document.querySelector(".question-field").style.display = "none";
    });

    saveBtn.addEventListener("click", function(){
        let createdQuestion = document.createElement("div");
        createdQuestion.classList.add("card-question");
        createdQuestion.innerHTML = `<p class = "question-value">${questionField.value}</p>
        <p class = "show-hide">Show/Hide Answers</p>
        <p class = "answer-value">${addAnswerField.value}</p>
        <div class = "buttons-card">
            <button class = "edit-content">EDIT</button>
            <button class = "delete-content">DELETE</button>
        </div>`;
        document.querySelector(".display-question").appendChild(createdQuestion);
        questionField.value = "";
        addAnswerField.value = "";

      let showHide = document.querySelector(".show-hide");
      let questionContent = document.querySelector(".question-value")
      let answerContent = document.querySelector(".answer-value");
      let buttonEdit = document.querySelector(".edit-content");
      let buttonDelete = document.querySelector(".delete-content");


      showHide.addEventListener("click", function(){
        if(answerContent.style.display === 'none'){
            answerContent.style.display = 'block';
        }else{
            answerContent.style.display = 'none';
        }
      })

      buttonEdit.addEventListener("click", () => {
        questionField.value = questionContent.textContent;
        addAnswerField.value = answerContent.textContent;
        document.querySelector(".display-question").removeChild(createdQuestion);
        });

      buttonDelete.addEventListener("click", function(){
        document.querySelector(".display-question").removeChild(createdQuestion);
        });
    }); 
})();