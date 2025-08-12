import React, { useRef, useEffect } from "react";

export default function LetterGlitch({
  glitchColors = ["#323232", "#585858", "#486000"],
  glitchSpeed = 50,
}) {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const gridRef = useRef([]);
  const colsRef = useRef(0);
  const rowsRef = useRef(0);

  const fontSize = 16;
  const charWidth = 10;
  const charHeight = 20;

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()[]{}<>?/\\|".split("");

  const randomChar = () => letters[Math.floor(Math.random() * letters.length)];
  const randomColor = () => glitchColors[Math.floor(Math.random() * glitchColors.length)];

  const initGrid = (cols, rows) => {
    colsRef.current = cols;
    rowsRef.current = rows;
    gridRef.current = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => ({
        char: randomChar(),
        color: randomColor(),
      }))
    );
  };

  const drawCell = (x, y, char, color) => {
    const ctx = ctxRef.current;
    ctx.clearRect(x * charWidth, y * charHeight, charWidth, charHeight);
    ctx.fillStyle = color;
    ctx.fillText(char, x * charWidth, y * charHeight);
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    ctx.font = `${fontSize}px monospace`;
    ctx.textBaseline = "top";

    const cols = Math.floor(window.innerWidth / charWidth);
    const rows = Math.floor(window.innerHeight / charHeight);
    initGrid(cols, rows);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    gridRef.current.forEach((row, y) => {
      row.forEach((cell, x) => drawCell(x, y, cell.char, cell.color));
    });
  };

  const glitchUpdate = () => {
    const totalCells = colsRef.current * rowsRef.current;

    for (let i = 0; i < Math.max(1, Math.floor(0.05 * totalCells)); i++) {
      const x = Math.floor(Math.random() * colsRef.current);
      const y = Math.floor(Math.random() * rowsRef.current);
      const cell = gridRef.current[y][x];
      cell.char = randomChar(); 
      drawCell(x, y, cell.char, cell.color);
    }
  };

  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const glitchInterval = setInterval(glitchUpdate, glitchSpeed);

    return () => {
      clearInterval(glitchInterval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [glitchSpeed]);

  return <canvas ref={canvasRef} style={{ display: "block", background: "#000" }} />;
}
