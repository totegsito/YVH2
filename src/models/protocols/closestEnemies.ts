import { Point } from "../point";
import Protocol from "../protocol";

export default class ClosestEnemiesProtocol extends Protocol {
  apply(scan: Point[]) : Point[] {
    return scan.slice(0).sort(function(a, b) {
      const distanceToA = a.getDistance();
      const distanceToB = b.getDistance();
      if (distanceToA === distanceToB) {
        return 0;
      } else {
        return distanceToA < distanceToB ? -1 : 1;
      }
    });
  }
}
