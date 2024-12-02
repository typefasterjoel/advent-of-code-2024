const dayPrompt = prompt("What day of Advent Code is it?");

if (dayPrompt === null) {
  console.log("No day provided. Exiting...");
  Deno.exit(1);
}

const day = parseInt(dayPrompt, 10);

if (isNaN(day)) {
  console.log("Invalid day provided. Exiting...");
  Deno.exit(1);
}

const _makeDayFolder = await Deno.mkdir(`./day${day}`);
const _makeSampleFile = await Deno.writeTextFile(`./day${day}/sample.txt`, "");
const _makeDataFile = await Deno.writeTextFile(`./day${day}/data.txt`, "");
const _makeMainFile = await Deno.writeTextFile(`./day${day}/main.ts`, "");

console.log(`Day ${day} project created!`);
