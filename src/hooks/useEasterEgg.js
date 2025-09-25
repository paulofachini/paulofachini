"use client";

import { useEffect, useState, useCallback } from "react";

const codesString = process.env.NEXT_PUBLIC_EASTER_EGG_CODES || "";

const secretCodes = codesString
  .split(";")
  .map((code) => code.split(","))
  .filter((code) => code[0] !== "");

export function useEasterEgg(callback) {
  const [keySequence, setKeySequence] = useState([]);

  const onKeyDown = useCallback((event) => {
    setKeySequence((currentSequence) =>
      [...currentSequence, event.key].slice(-10)
    );
  }, []);

  useEffect(() => {
    if (secretCodes.length === 0) return;

    for (const code of secretCodes) {
      if (keySequence.join("").endsWith(code.join(""))) {
        callback();
        setKeySequence([]);
        break;
      }
    }
  }, [keySequence, callback]);

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);
}
