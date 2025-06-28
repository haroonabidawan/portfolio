'use client';

import { useEffect, useState } from "react";

// Array of phrases to rotate through
const phrases = [
  "> Haroon@dev:~$",
  "> Building with Laravel",
  "> Scaling via AWS",
  "> Clean Code, Clean Deploys",
];

export default function TypewriterLabel() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const delay = isDeleting ? 40 : 70;

    const timeout = setTimeout(() => {
      const updatedText = isDeleting
        ? currentPhrase.slice(0, charIndex - 1)
        : currentPhrase.slice(0, charIndex + 1);

      setText(updatedText);
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));

      // Switch to delete mode
      if (!isDeleting && updatedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1200);
      }

      // Finished deleting, move to next phrase
      if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setCharIndex(0);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <span className="font-mono text-emerald-400">
      {text}
      <span className="animate-blink">|</span>
    </span>
  );
}
