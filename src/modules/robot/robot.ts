import { Direction, isValidDirection } from "../direction";

export class Robot {
  private x: number = 0;
  private y: number = 0;
  private direction: Direction | null = null;

  public place(x: number, y: number, direction: string): void {
    // validate x and y positions
    if (x < 0 || x > 4 || y < 0 || y > 4) {
      console.log("Invalid placement");
      return;
    }
    // validate direction
    if (!isValidDirection(direction) && !(this.direction && !direction)) {
      console.log("Invalid placement");
      return;
    }
    this.x = x;
    this.y = y;
    if (direction) this.direction = direction as Direction;
  }

  public move(): void {
    if (!this.direction) {
      console.log("Direction is not set");
      return;
    }
    if (this.direction === "NORTH" && this.y < 4) {
      this.y++;
    } else if (this.direction === "EAST" && this.x < 4) {
      this.x++;
    } else if (this.direction === "SOUTH" && this.y > 0) {
      this.y--;
    } else if (this.direction === "WEST" && this.x > 0) {
      this.x--;
    } else {
      console.log("Invalid move");
      return;
    }
  }

  public left(): void {
    if (!this.direction) {
      console.log("Direction is not set");
      return;
    }
    switch (this.direction) {
      case "NORTH":
        this.direction = "WEST";
        break;
      case "EAST":
        this.direction = "NORTH";
        break;
      case "SOUTH":
        this.direction = "EAST";
        break;
      case "WEST":
        this.direction = "SOUTH";
        break;
    }
  }

  public right(): void {
    if (!this.direction) {
      console.log("Direction is not set");
      return;
    }
    switch (this.direction) {
      case "NORTH":
        this.direction = "EAST";
        break;
      case "EAST":
        this.direction = "SOUTH";
        break;
      case "SOUTH":
        this.direction = "WEST";
        break;
      case "WEST":
        this.direction = "NORTH";
        break;
    }
  }

  public report(): void {
    if (!this.direction) return;
    console.log(`${this.x},${this.y},${this.direction}`);
  }
}
