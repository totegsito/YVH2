import { Point } from "../point";
import Protocol from "../protocol";
import {Enemies} from "../../constants/enemies";

export default class AvoidMechProtocol extends Protocol {
  apply(scan: Point[]) : Point[] {
    return scan.filter(function(el) {
      return el.getEnemyType() !== Enemies.MECH;
    });
  }
}
