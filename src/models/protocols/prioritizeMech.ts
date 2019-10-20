import { Point } from "../point";
import Protocol from "../protocol";
import { Enemies } from "../../constants/enemies";

export default class PrioritizeMechProtocol extends Protocol {

  apply(scan: Point[]) : Point[] {
    return scan.slice(0).sort(function(a, b) {
      if (a.getEnemyType() === Enemies.MECH && b.getEnemyType() !== Enemies.MECH) { return -1; }
      return 1;
    });
  }
}
