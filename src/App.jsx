import { useState } from "react";

export default function Calculator() {
  const [num, setNum] = useState("");
  const [factorial, setFactorial] = useState(null);
  const [isPrime, setIsPrime] = useState(null);

  // Factorial function
  const calculateFactorial = (n) => {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  // Prime check function
  const checkPrime = (n) => {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  // Handle button click
  const handleCalculate = () => {
    const n = parseInt(num);
    if (!isNaN(n)) {
      setFactorial(calculateFactorial(n));
      setIsPrime(checkPrime(n));
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto", padding: "1rem", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h2>Factorial & Prime Calculator</h2>

      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        placeholder="Enter a number"
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <button onClick={handleCalculate} style={{ width: "100%", padding: "10px", background: "blue", color: "white", border: "none", borderRadius: "5px" }}>
        Calculate
      </button>

      {factorial !== null && (
        <div style={{ marginTop: "15px" }}>
          <p><b>Factorial:</b> {factorial}</p>
          <p><b>Prime:</b> {isPrime ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
}
