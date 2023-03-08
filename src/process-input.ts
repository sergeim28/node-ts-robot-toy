import { Robot } from "./modules/robot";

const robot = new Robot();

function processCommand(input: string): void {
  const [command, args] = input.split(" ");
  switch (command) {
    case "PLACE":
      const [x, y, direction] = (args || "").split(",");
      robot.place(parseInt(x), parseInt(y), direction);
      break;
    case "MOVE":
      robot.move();
      break;
    case "LEFT":
      robot.left();
      break;
    case "RIGHT":
      robot.right();
      break;
    case "REPORT":
      robot.report();
      break;
    default:
      console.log("Invalid command");
  }
}

export function processInput(input: string): void {
  const command = input.trim();
  processCommand(command);
}
