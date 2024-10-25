const StringCalculator = (() => {
  const extractDelimiter = (input) => {
    let delimiters = [","];
    let numbers = input;
    if (input.startsWith("//")) {
      const delimiterEndIndex = input.indexOf("\n");
      const delimiterToIdentify = input.substring(2, delimiterEndIndex);

      const delimiterMatches = delimiterToIdentify.match(/\[(.+?)\]/g);
      if (delimiterMatches) {
        delimiters = delimiterMatches.map((delim) => delim.slice(1, -1));
      } else {
        delimiters = [delimiterToIdentify];
      }

      numbers = input.substring(delimiterEndIndex + 1);
    }

    return { delimiters, numbers };
  };

  const findSum = (numberArray) => {
    return numberArray.reduce((acc, curr) => {
      const num = parseInt(curr, 10);
      if (isNaN(num)) return acc;
      return num > 1000 ? acc : acc + num;
    }, 0);
  };

  const findProduct = (numberArray) => {
    return numberArray.reduce((acc, curr) => {
      const num = parseInt(curr, 10);
      if (isNaN(num)) return acc;
      return num > 1000 ? acc : acc * num;
    }, 1);
  };

  const add = (input) => {
    let operation = "add";
    if (input === "") return 0;

    const { delimiters, numbers } = extractDelimiter(input);
    if (delimiters.length === 1 && delimiters[0] === "*") {
      operation = "multiply";
    }
    const escapedDelimiters = delimiters.map((delim) =>
      delim.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
    );
    const delimiterRegex = new RegExp(escapedDelimiters.join("|") + "|\n");

    const numberArray = numbers.split(delimiterRegex);

    const negativeValues = numberArray.filter((number) => number < 0);

    if (negativeValues.length > 0) {
      throw new Error(`negatives not allowed: ${negativeValues.join(", ")}`);
    }

    const result =
      operation === "add" ? findSum(numberArray) : findProduct(numberArray);

    return result;
  };

  return { add };
})();

module.exports = StringCalculator;
