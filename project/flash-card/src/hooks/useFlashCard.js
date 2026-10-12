import { useState } from "react";
import flashcards from "../data/flashcards";

export default function useFlashCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnswerVisible, setAnswerVisible] = useState(false);

  const totalQuestion = flashcards.length;
  const card = flashcards[currentIndex];

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalQuestion - 1;

  const prev = () => {
    if (!isFirst) {
      setCurrentIndex((index) => index - 1);
      setAnswerVisible(false);
    }
  };

  const next = () => {
    if (!isLast) {
      setCurrentIndex((index) => index + 1);
      setAnswerVisible(false);
    }
  };

  const showAnswer = () => setAnswerVisible(true);
  const hideAnswer = () => setAnswerVisible(false);

  return {
    card,
    currentIndex,
    totalQuestion,
    isFirst,
    isLast,
    isAnswerVisible,
    prev,
    next,
    showAnswer,
    hideAnswer,
  };
}
