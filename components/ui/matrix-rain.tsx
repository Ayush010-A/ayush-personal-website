"use client";

import { useEffect, useRef } from "react";

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const fontSize = 12;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let drops: number[] = [];
    let timer: number | undefined;

    function resize() {
      if (!canvas || !context) return;
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      context.font = `${fontSize}px monospace`;
      drops = Array.from({ length: Math.ceil(canvas.width / fontSize) },
        () => Math.floor(Math.random() * canvas.height / fontSize));
    }

    function draw() {
      if (!canvas || !context) return;
      context.fillStyle = "rgba(255, 255, 255, 0.08)";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = "#18181b";
      drops.forEach((row, column) => {
        context.fillText(Math.random() < 0.5 ? "0" : "1", column * fontSize, row * fontSize);
        drops[column] = row * fontSize > canvas.height && Math.random() > 0.98 ? 0 : row + 1;
      });
    }

    function sync() {
      window.clearInterval(timer);
      if (!document.hidden && !motion.matches) timer = window.setInterval(draw, 50);
    }

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();
    sync();
    motion.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    return () => {
      window.clearInterval(timer);
      observer.disconnect();
      motion.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  return <canvas ref={canvasRef} className="block h-full w-full motion-reduce:hidden" />;
}
