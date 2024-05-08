// function splitStringUsingRegex(str: string): string[] {
//   const characters: string[] = [];
//   const regex = /[\s\S]/gu;
//   let match;
//   while ((match = regex.exec(str)) !== null) {
//     characters.push(match[0]);
//   }
//   return characters;
// }

// export default splitStringUsingRegex;

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
