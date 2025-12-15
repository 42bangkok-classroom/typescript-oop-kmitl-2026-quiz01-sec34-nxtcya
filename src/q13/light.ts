const inputColor: string = process.argv[2];
const color: string = inputColor.toLowerCase();

switch (color) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Caution");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Unknown");
}