const messages = ["Learn React", "Apply for jobs", "Invest in your new income"];

export default function App() {
  const step = 1;

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>

      {/* alert("dada") will give a alert in browser as it is a function call
 thats why we use callback, () => alert("dada") it will be called later*/}

      <p className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={() => alert("dada")}
          onMouseEnter={() => alert("ddasd")}
        >
          previous
        </button>
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
          next
        </button>{" "}
      </p>
    </div>
  );
}
