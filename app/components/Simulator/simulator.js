"use client";

import { useState, useEffect } from "react";

const BASE_PRICE = 1899;

const storageOptions = [
  { id: "64gb", label: "64GB", multiplier: 1 },
  { id: "128gb", label: "128GB", multiplier: 1.15 },
  { id: "256gb", label: "256GB", multiplier: 1.35 },
];

const colorOptions = [
  { id: "ebony", label: "Ebony Clay", premium: 0 },
  { id: "branco", label: "Branco Puro", premium: 0 },
  { id: "azul", label: "Azul JOVI", premium: 80 },
];

function Simulator() {
  const [storageId, setStorageId] = useState("128gb");
  const [colorId, setColorId] = useState("ebony");
  const [history, setHistory] = useState([]);

  const [preco, setPreco] = useState(null);
  const [desconto, setDesconto] = useState(null);

  useEffect(() => {
    const storageSalvo = window.localStorage.getItem("jovi:storage");
    const colorSalvo = window.localStorage.getItem("jovi:color");
    const historySalvo = window.localStorage.getItem("jovi:history");

    if (storageSalvo) setStorageId(storageSalvo);
    if (colorSalvo) setColorId(colorSalvo);
    if (historySalvo) setHistory(JSON.parse(historySalvo));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("jovi:storage", storageId);
  }, [storageId]);

  useEffect(() => {
    window.localStorage.setItem("jovi:color", colorId);
  }, [colorId]);

  useEffect(() => {
    window.localStorage.setItem("jovi:history", JSON.stringify(history));
  }, [history]);

  function calcularPreco() {
    const storage = storageOptions.find((s) => s.id === storageId);
    const color = colorOptions.find((c) => c.id === colorId);

    const precoBase = BASE_PRICE * storage.multiplier + color.premium;

    const descontoAleatorio = Math.random() * (0.15 - 0.05) + 0.05;

    const precoFinal =
      Math.round(precoBase * (1 - descontoAleatorio) * 100) / 100;

    setPreco(precoFinal);
    setDesconto(Math.round(descontoAleatorio * 100));

    const novoRegistro = {
      storage: storage.label,
      color: color.label,
      preco: precoFinal,
      data: new Date().toLocaleString("pt-BR"),
    };

    setHistory([novoRegistro, ...history].slice(0, 5));
  }
  return (
    <section id="simulador" className="section simulator">
      <div className="section-title">
        <span>04 — SIMULADOR</span>
        <h2>
          Monte o seu
          <strong> JOVI.</strong>
        </h2>
        <p>
          Escolha armazenamento e cor e veja uma simulação de preço. Sua última
          escolha fica salva neste navegador.
        </p>
      </div>

      <div className="simulator-grid">
        <div className="simulator-options">
          <div className="option-group">
            <h4>Armazenamento</h4>
            <div className="option-buttons">
              {storageOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className={`option-button ${storageId === option.id ? "active" : ""}`}
                  onClick={() => setStorageId(option.id)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="option-group">
            <h4>Cor</h4>
            <div className="option-buttons">
              {colorOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className={`option-button ${colorId === option.id ? "active" : ""}`}
                  onClick={() => setColorId(option.id)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="button primary"
            onClick={calcularPreco}
          >
            Calcular preço personalizado
          </button>
        </div>

        <div className="simulator-result">
          {preco === null ? (
            <p className="simulator-placeholder">
              Escolha as opções e clique em calcular.
            </p>
          ) : (
            <>
              <span>Preço estimado</span>
              <strong>R$ {preco.toFixed(2).replace(".", ",")}</strong>
              <p>Inclui {desconto}% de desconto regional simulado.</p>
            </>
          )}

          {history.length > 0 && (
            <div className="simulator-history">
              <div className="simulator-history-header">
                <h4>Últimas simulações</h4>
                <button type="button" onClick={() => setHistory([])}>
                  Limpar
                </button>
              </div>
              <ul>
                {history.map((item, index) => (
                  <li key={index}>
                    {item.storage} · {item.color} — R${" "}
                    {item.preco.toFixed(2).replace(".", ",")}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Simulator;
