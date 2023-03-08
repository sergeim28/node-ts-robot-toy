import readline from "readline";
import { processInput } from "./process-input";

// Read and parse user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// function to parse user input
rl.on("line", (input: string) => {
  processInput(input);
});
