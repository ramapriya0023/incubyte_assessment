const StringCalculator = (() => {
  const add = (input) => {
    if (input === "") return 0;

    const numbers = input.split(",");
    const sum = numbers.reduce((acc, curr) => acc + parseInt(curr, 10), 0);

    return sum;
  };

  return { add };
})();

module.exports = StringCalculator;
