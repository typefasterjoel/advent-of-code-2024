const readData = await Deno.readTextFile(`./data.txt`);

const sideA = readData
  .split("\n")
  .map((row) => {
    const splitByTab = row.split(/\s/g).filter((column) => column);
    return splitByTab[0];
  })
  .filter((column) => column)
  .sort((a, b) => parseInt(a) - parseInt(b));

const sideB = readData
  .split("\n")
  .map((row) => {
    const splitByTab = row.split(/\s/g).filter((column) => column);
    return splitByTab[1];
  })
  .filter((column) => column)
  .sort((a, b) => parseInt(a) - parseInt(b));

const differenceBetweenSides = sideA.map((side, index) => {
  const sideAValue = parseInt(side);
  const sideBValue = parseInt(sideB[index]);

  if (sideAValue > sideBValue) {
    return sideAValue - sideBValue;
  } else {
    return sideBValue - sideAValue;
  }
});

const sumOfDifference = differenceBetweenSides.reduce(
  (add, current) => add + current,
  0
);

console.log(`--- Part One Result ---`);
console.log(sumOfDifference);
console.log(`--- Part One End ---`);

/**
 * Part Two
 */

const similarScoreOfeachRow = sideA.map((side) => {
  const countOfTimesOnSideB = sideB.filter((b) => b === side).length;
  const score = parseInt(side) * countOfTimesOnSideB;
  return score;
});

const totalScore = similarScoreOfeachRow.reduce(
  (add, current) => add + current,
  0
);

console.log(`--- Part Two Result ---`);
console.log(totalScore);
console.log(`--- Part Two End ---`);
