import QuestionCard from "../components/QuestionCard/QuestionCard";
import AnswerCard from "../components/AnswerCard/AnswerCard";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import useFlashCard from "../hooks/useFlashCard";

export default function FlashCardPage() {
  const {
    card,
    currentIndex,
    totalQuestion,
    isFirst,
    isLast,
    isAnswerVisible,
    next,
    prev,
    showAnswer,
    hideAnswer,
  } = useFlashCard();

  return (
    <div className="flex min-h-screen items-center justify-center bg-white bg-[radial-gradient(#94a3b8_1px,transparent_1px)] bg-size-[24px_24px] px-4 py-10">
      <div className="flex w-full max-w-md flex-col items-center gap-18">
        <ProgressBar currentIndex={currentIndex} total={totalQuestion} />
        <QuestionCard
          question={card.question}
          tags={card.tags}
          level={card.level}
          currentIndex={currentIndex}
          total={totalQuestion}
          isFirst={isFirst}
          isLast={isLast}
          onNext={next}
          onPrev={prev}
          onShow={showAnswer}
        />
        <AnswerCard
          currentIndex={currentIndex}
          total={totalQuestion}
          answer={card.answer}
          isVisible={isAnswerVisible}
          onHide={hideAnswer}
        />
      </div>
    </div>
  );
}
