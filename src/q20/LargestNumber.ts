
const args: string[] = process.argv.slice(2);
if (args.length === 0) {
  console.log("Please provide at least one number.");
  process.exit(1);
}
const numbers: number[] = args.map((arg) => parseFloat(arg));


const largestNumber: number = Math.max(...numbers);
console.log(largestNumber);