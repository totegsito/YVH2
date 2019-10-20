import config from '../config';
import { CoordinateInterface } from "./coordinate";
import { Point, PointInterface } from './point';
import protocols from './protocols';

export default class Scanner {
  scan: Point[];
  protocols: string[];

  constructor(protocols: string[], scan: PointInterface[]) {
    this.protocols = protocols;
    this.scan = scan.map(el => new Point(el.coordinates, el.enemies, el.allies)).filter(el => el.getDistance() <= config.maxDistance);
  }

  calculateNextTarget(): CoordinateInterface {
    for (let i = 0; i < this.protocols.length; i += 1) {
      if (!protocols[this.protocols[i]]) {
        throw new Error('protocol not found');
      } else {
        const protocol = new protocols[this.protocols[i]];
        this.scan = protocol.apply(this.scan);
      }
    }
    return this.scan[0].getCoordinatesAsJSON();
  }
}
