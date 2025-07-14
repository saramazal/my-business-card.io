 import React, { useEffect, useRef } from "react";
import "./styles/style.css";

export default function BusinessCard() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");
    const fontSize = 14;
    let columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(13, 16, 34, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#7aa2f7";
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, y * fontSize);
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    };

    const interval = setInterval(draw, 50);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef}></canvas>
      <div className="card">
        <h1>Sara Mazal</h1>
        <p className="job-title web">Web Developer</p>
        <p className="job-title artist">&</p>
        <p className="job-title hacker">Ethical Hacker</p>
          <div className="stack">
          <p className="stack-label">PREFERRED_STACK</p>
          <div className="stack-tags">
          {[
  "Burp Suite",
  "Nmap",
  "Metasploit",
  "Linux",
  "OWASP",
  "React",
  "Next.js",
  "CSS",
  "AiTools"
].map((tech) => (
  <span key={tech}>{tech}</span>
))}
          </div>
        </div>
       

        <blockquote>
          "The future is not some place we are going, but one we are creating."
          <span>- Inspired by Ghost in the Shell</span>
        </blockquote>

        <div className="socials">
           <button className="linked" onClick={() => window.open("https://www.linkedin.com/in/sara-mazal")}>
            <i className="fab fa-linkedin"></i> LinkedIn
          </button>
        
          <button className="github" onClick={() => window.open("https://github.com/saramazal")}>
            <i className="fab fa-github"></i> GitHub
          </button>
          <button className="shield" onClick={() => window.open("https://tryhackme.com/p/maz4l")}>
            <i className="fas fa-shield-alt"></i> TryHackMe
          </button>
          <button className="codepen" onClick={() => window.open("https://codepen.io/Saramazal")}>
            <i className="fab fa-codepen"></i> CodePen
          </button>
          <button className="twitter" onClick={() => window.open("https://x.com/mazalspace")}>
            <i className="fab fa-x-twitter"></i> X(Twitter)
          </button>
          <button className="blog" onClick={() => window.open("https://maz4lhacks.vercel.app/")}>
            <i className="fas fa-blog"></i> MazalHacks
          </button>
        </div>

        <div className="footer">
          &gt; ENCRYPTED_TRANSMISSION_COMPLETE
          <div className="status">
            <div className="status-dot"></div>
            <span>ONLINE</span>
          </div>
        </div>
      </div>
    </>
  );
}