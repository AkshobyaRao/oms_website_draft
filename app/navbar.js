import "../app/globals.css";
import { useEffect, useState } from "react";
import Image from "../public/logo.png";
export default function Home() {
  const [scrl, setScrl] = useState(false);
  useEffect(() => {
    const handleScrl = () => {
      setScrl(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScrl);
    return () => window.addEventListener("scroll", handleScrl);
  });
  return (
    <header className={`${scrl ? "sticky" : ""}`}>
      <nav className="nav">
        <span>⚕️</span>
        <ul>
          <li onClick={() => window.scrollTo({ top: 500, behavior: "smooth" })}>
            About Us
          </li>
          <li
            onClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })}
          >
            Our Services
          </li>
          <li>Clients</li>
          <li>Testimonials</li>
          <button
            onClick={() => window.scrollTo({ top: 1500, behavior: "smooth" })}
          >
            Contact Us
          </button>
        </ul>
      </nav>
    </header>
  );
}
