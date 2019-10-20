import { Point } from "../point";
import Protocol from "../protocol";

export default class FurthestEnemiesProtocol extends Protocol {
  apply(scan: Point[]) : Point[] {
    return scan.slice(0).sort(function(a, b) {
      const distanceToA = a.getDistance();
      const distanceToB = b.getDistance();
      if (distanceToA > distanceToB) { return -1; }
      if (distanceToA < distanceToB) { return 1; }
      return 0;
    });
  }
}
