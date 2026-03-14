"use client"

import { useState } from "react"

export default function QuizPage() {

  const questions = [
    {
      text: "What is the first drug given in suspected myocardial infarction?",
      options: [
        { id: "A", text: "Nitroglycerin" },
        { id: "B", text: "Aspirin" },
        { id: "C", text: "Metoprolol" },
        { id: "D", text: "Morphine" }
      ],
      correctAnswer: "B",
      explanation: "Chewed aspirin reduces mortality in myocardial infarction."
    }
  ]

  const [current,setCurrent] = useState(0)
  const [selected,setSelected] = useState<string | null>(null)
  const [showExplanation,setShowExplanation] = useState(false)

  const question = questions[current]

  const handleAnswer = (id:string)=>{
    if(selected) return
    setSelected(id)
    setShowExplanation(true)
  }

  const nextQuestion = ()=>{
    setSelected(null)
    setShowExplanation(false)
    setCurrent(current+1)
  }

  return (

    <div className="container">

      <h1 className="title">MEDKIT Quiz</h1>

      <div className="card">

        <div className="counter">
          Question {current + 1} / {questions.length}
        </div>

        <h2 className="question">
          {question.text}
        </h2>

        <div className="options">

          {question.options.map((opt)=>{

            const isCorrect = opt.id === question.correctAnswer
            const isSelected = selected === opt.id

            let bg = "#334155"

            if(showExplanation){

              if(isCorrect) bg = "#16a34a"
              else if(isSelected) bg = "#dc2626"

            }

            return(

              <button
                key={opt.id}
                onClick={()=>handleAnswer(opt.id)}
                disabled={selected !== null}
                className="option"
                style={{background:bg}}
              >

                {opt.id}. {opt.text}

              </button>

            )

          })}

        </div>

        {showExplanation && (

          <div className="result">

            <p className="correct">
              Correct Answer: {question.correctAnswer}
            </p>

            <p className="explanation">
              {question.explanation}
            </p>

            {current < questions.length - 1 && (

              <button
                onClick={nextQuestion}
                className="next"
              >
                Next Question →
              </button>

            )}

          </div>

        )}

      </div>

      <style jsx>{`

        .container{
          min-height:100vh;
          width:100%;
          background:#020617;
          color:white;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          padding:40px 20px;
          box-sizing:border-box;
        }

        .title{
          font-size:42px;
          margin-bottom:30px;
          color:#38bdf8;
          text-align:center;
        }

        .card{
          background:#1e293b;
          padding:40px;
          border-radius:20px;
          width:100%;
          max-width:650px;
          box-shadow:0 20px 50px rgba(0,0,0,0.4);
        }

        .counter{
          color:#94a3b8;
          margin-bottom:20px;
          font-size:14px;
        }

        .question{
          margin-bottom:30px;
          line-height:1.5;
        }

        .options{
          display:flex;
          flex-direction:column;
          gap:15px;
        }

        .option{
          padding:16px;
          border:none;
          border-radius:12px;
          color:white;
          font-size:16px;
          cursor:pointer;
          transition:0.25s;
        }

        .option:hover{
          transform:scale(1.02);
        }

        .option:disabled{
          cursor:default;
        }

        .result{
          margin-top:30px;
          padding:20px;
          background:#020617;
          border-radius:12px;
        }

        .correct{
          color:#22c55e;
          font-weight:bold;
        }

        .explanation{
          margin-top:10px;
          color:#cbd5f5;
        }

        .next{
          margin-top:20px;
          padding:12px 20px;
          border:none;
          border-radius:10px;
          background:#38bdf8;
          color:black;
          font-weight:bold;
          cursor:pointer;
        }

      `}</style>

    </div>

  )

}