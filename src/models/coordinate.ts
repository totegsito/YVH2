export interface CoordinateInterface {
  x: number;
  y: number;
}

export class Coordinate implements CoordinateInterface {
  x: number;
  y: number;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  /**
   * Calculates the distance from x: 0, y: 0 to the Coordinate
   */
  public getDistance(): number {
    return Math.sqrt(((this.x * this.x) + (this.y * this.y)));
  }

  toJSON(): CoordinateInterface {
    return {
      x: this.x,
      y: this.y,
    };
  }
}
