export default function App() {
  return (
    <div className="steps">
      <div className="numbers">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>

      <p className="buttons">
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
          previous
        </button>
        <button>next</button>
      </p>
    </div>
  );
}
