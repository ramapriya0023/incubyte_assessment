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

    const negativeValues = [];

    const sum = numberArray.reduce((acc, curr) => {
      const num = parseInt(curr, 10);
      if (num < 0) {
        negativeValues.push(num);
      }
      return acc + num;
    }, 0);

    if (negativeValues.length > 0) {
      throw new Error(`negatives not allowed: ${negativeValues.join(", ")}`);
    }

    return sum;
  };

  return { add };
})();

module.exports = StringCalculator;
