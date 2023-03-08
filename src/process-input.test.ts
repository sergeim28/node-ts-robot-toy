import { describe, expect, jest, test } from "@jest/globals";
import { processInput } from "./process-input";

describe("robot module", () => {
  const logSpy = jest.spyOn(global.console, "log");

  test("Invalid placement", () => {
    processInput("PLACE 1,2,");
    processInput("PLACE");
    processInput("PLACE 1, 2, WEST");
    processInput("PLACE1,2,WEST");
    expect(logSpy.mock.calls).toEqual([
      ["Invalid placement"],
      ["Invalid placement"],
      ["Invalid placement"],
      ["Invalid command"],
    ]);
    logSpy.mockRestore();
  });

  // test("Valid placement and Report", () => {});
  // test("Optional direction after one valid placement", () => {});
  // test("Left and move", () => {});
  // test("Right and move", () => {});
  // test("Commands get ignored until valid placement", () => {});
  // test("Commands that makes the toy falls will be ignored", () => {});
  // test("Lowercase commands get ignored", () => {});
});
