const StringCalculator = (() => {
  const extractDelimiter = (input) => {
    let delimiter = ",";
    let numbers = input;
    // "//[##]\n2##-3##4"
    if (input.startsWith("//")) {
      const delimiterEndIndex = input.indexOf("\n");
      const delimiterToIdentify = input.substring(2, delimiterEndIndex);

      const delimiterMatch = delimiterToIdentify.match(/\[(.+?)\]/);
      if (delimiterMatch) {
        delimiter = delimiterMatch[1];
      } else {
        delimiter = delimiterToIdentify;
      }

      numbers = input.substring(delimiterEndIndex + 1);
    }

    return { delimiter, numbers };
  };

  const add = (input) => {
    if (input === "") return 0;

    const { delimiter, numbers } = extractDelimiter(input);

    const escapedDelimiter = delimiter.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
    const numberArray = numbers.split(new RegExp(`${escapedDelimiter}|\n`));

    const negativeValues = [];
    const sum = numberArray.reduce((acc, curr) => {
      const num = parseInt(curr, 10);
      if (isNaN(num)) return acc;
      if (num < 0) {
        negativeValues.push(num);
      }
      return num > 1000 ? acc : acc + num;
    }, 0);

    if (negativeValues.length > 0) {
      throw new Error(`negatives not allowed: ${negativeValues.join(", ")}`);
    }

    return sum;
  };

  return { add };
})();

module.exports = StringCalculator;
