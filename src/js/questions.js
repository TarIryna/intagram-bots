(() => {
    
     const allQuesBtnRef = document.querySelectorAll(".section-questions__button");
     const allAnswerRef = document.querySelectorAll(".section-questions__answer");

    for (let i = 0; i < allQuesBtnRef.length; i+=1) {
       
    allQuesBtnRef[i].addEventListener("click", () => {
        const expanded =
            allQuesBtnRef[i].getAttribute("area-expanded") === "true" || "false";
        
        allQuesBtnRef[i].classList.toggle("is-open");
        allQuesBtnRef[i].getAttribute("area-expanded", !expanded);

        allAnswerRef[i].classList.toggle("is-open");
    });
    }
  
})();