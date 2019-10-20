import { Point } from "../point";
import Protocol from "../protocol";

export default class AssistAlliesProtocol extends Protocol {
  apply(scan: Point[]) : Point[] {
    return  scan.slice(0).sort(function(a, b) {
      if ((a.getAllies() > 0) && (b.getAllies() === 0)) { return -1; }
      if ((a.getAllies() === 0) && (b.getAllies() > 0)) { return 1; }
      return 0;
    });
  }
}
