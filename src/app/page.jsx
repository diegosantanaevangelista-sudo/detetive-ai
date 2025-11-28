"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [resultado, setResultado] = useState("");

  function analisar() {
    if (!input.trim()) {
      setResultado("Por favor, envie algum texto para análise.");
      return;
    }

    // Aqui vai entrar a IA futuramente, por enquanto é só simulação:
    setResultado("Analisando... 🔍");

    setTimeout(() => {
      setResultado(
        "🧠 Análise concluída!\nParece que o texto enviado contém emoções importantes, como ansiedade, dúvida ou busca por respostas."
      );
    }, 1500);
  }

  return (
    <div style={{ padding: 40, fontFamily: "Arial", maxWidth: 600, margin: "0 auto" }}>
      <h1>Detetive AI 🔍</h1>
      <p>Envie um texto para análise psicológica automatizada.</p>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite ou cole aqui..."
        style={{
          width: "100%",
          height: 150,
          padding: 10,
          fontSize: 16,
          borderRadius: 8,
          border: "1px solid #999"
        }}
      />

      <button
        onClick={analisar}
        style={{
          marginTop: 15,
          padding: "12px 20px",
          fontSize: 18,
          cursor: "pointer",
          background: "#000",
          color: "#fff",
          borderRadius: 8,
          border: "none"
        }}
      >
        Analisar
      </button>

      {resultado && (
        <div
          style={{
            marginTop: 20,
            padding: 15,
            background: "#f4f4f4",
            borderRadius: 8,
            whiteSpace: "pre-line",
          }}
        >
          {resultado}
        </div>
      )}
    </div>
  );
}
