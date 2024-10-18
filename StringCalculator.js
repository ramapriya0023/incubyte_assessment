const StringCalculator = (() => {
  const extractDelimiter = (input) => {
    if (input.startsWith("//")) {
      const delimiterEndIndex = input.indexOf("\n");
      const delimiter = input.substring(2, delimiterEndIndex);
      const numbers = input.substring(delimiterEndIndex + 1);
      return { delimiter, numbers };
    }
    return { delimiter: ",", numbers: input };
  };

  const add = (input) => {
    if (input === "") return 0;

    const { delimiter, numbers } = extractDelimiter(input);

    const numberArray = numbers.split(new RegExp(`[${delimiter}\n]`));
    const sum = numberArray.reduce((acc, curr) => acc + parseInt(curr, 10), 0);
    return sum;
  };

  return { add };
})();

module.exports = StringCalculator;
