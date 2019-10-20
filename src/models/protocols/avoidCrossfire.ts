import { Point } from "../point";
import Protocol from "../protocol";

export default class AvoidCrossfireProtocol extends Protocol {
  apply(scan: Point[]) : Point[] {
    return scan.filter(function(el) {
      return el.getAllies() === 0;
    });
  }
}
