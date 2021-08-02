const quizDB =[
    {
        question:"Q1:What is the full form of HTML?",
        a:"Hellow To MY Land",
        b:"Hellow Txt Markup Language",
        c:"Hey markup language",
        d:"Hyper Text Markup Langauge",
        ans:"ans4"
    },
       {
        question:"Q2:What is the full form of Css?",
        a:"Cascading style sheet",
        b:"stylish Language",
        c:"Hey markup cascading",
        d:"sheet Text Markup Langauge",
        ans:"ans1"
    },
    {
        question:"Q3:What is javascript?",
        a:"javascript",
        b:"programming Language",
        c:"cascading language",
        d:"sheet  Markup Langauge",
        ans:"ans2"
    },
    {
        question:"Q4:What Object stores in js",
        a:"propertis",
        b:"entity",
        c:"variable",
        d:"array",
        ans:"ans1"
    }
    
];

const a =document.querySelector('.a');
const question =document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const sho = document.querySelector('#showScore');
const play = document.querySelector('.t');

let questionCount = 0;
let score = 0;

const loadQuestion =() =>{


        const questionList = quizDB[questionCount];
    
        question.innerHTML=questionList.question;
        option1.innerHTML=questionList.a;
        option2.innerHTML=questionList.b;
        option3.innerHTML=questionList.c;
        option4.innerHTML=questionList.d;
        
}

loadQuestion();

const getCheckAnswer = ()=>{
    let answer;
    answers.forEach((currentElem) =>{
            if(currentElem.checked){
                answer=currentElem.id;
            }

         });
    return answer;
};

submit.addEventListener('click',() =>{
        const checkedAnswer = getCheckAnswer();
        console.log(checkedAnswer);

        if(checkedAnswer === quizDB[questionCount].ans )
            {
                score++;
            
            };

            questionCount++;
            a.innerHTML = 'Q.' +questionCount+ '  from ' +quizDB.length;

            if(questionCount < quizDB.length)
                {
                   loadQuestion();
                }
                else{
                      sho.innerHTML = '<span>your score</span>'+' ' +score+ "✌️" + 
                    '<button onClick ="location.reload()">Play again</button>';   
                
                }
              
});

