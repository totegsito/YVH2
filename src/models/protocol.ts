import { Point } from "./point";
export default abstract class Protocol {
  name: string;
  constructor (name: string) {
    this.name = name;
  }

  getName() { return this.name };

  abstract apply(scan: Point[]): Point[];
}
