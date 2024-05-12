const renderLetters = (text: string, key: string) => {
  if (!text) return;
  return text.split('').map((letter, index) => (
    <span
      key={key + index}
      className={`name-animation name-animation-${key} inline-block opacity-0`}
    >
      {letter}
    </span>
  ));
};

export default renderLetters;
