import { Point } from "../../../src/models/point";
import { Enemies} from "../../../src/constants/enemies";
import AvoidMechProtocol from "../../../src/models/protocols/avoidMech";

const noAlliesMocked1 = {
  coordinates: {
    x: 0,
    y: 0,
  },
  enemies: {
    type: Enemies.SOLDIER,
    number: 20,
  }
};

const noAlliesMocked2 = {
  coordinates: {
    x: 1,
    y: 1,
  },
  enemies: {
    type: Enemies.SOLDIER,
    number: 2,
  }
};

const hasMechaMocked = {
  ...noAlliesMocked1,
  enemies: {
    ...noAlliesMocked1.enemies,
    type: Enemies.MECH
  },
  allies: 20,
};

describe('avoidMech protocol suite', () => {
  it('should return the same array when there is no mechs present', (done) => {
    const AvoidMechProtocolHandler = new AvoidMechProtocol("avoid-mech");
    const Point1 = new Point(noAlliesMocked1.coordinates, noAlliesMocked1.enemies);
    const Point2 = new Point(noAlliesMocked2.coordinates, noAlliesMocked2.enemies);
    const PointList = [Point1, Point2];
    const hasAllies = AvoidMechProtocolHandler.apply(PointList);
    expect(hasAllies.length).toEqual(PointList.length);
    expect(hasAllies[0]).toBe(Point1);
    done();
  });

  it('should return an empty array when no arguments', (done) => {
    const AvoidMechProtocolHandler = new AvoidMechProtocol("avoid-mech");
    const PointList = [];
    const hasAllies = AvoidMechProtocolHandler.apply(PointList);
    expect(hasAllies.length).toEqual(PointList.length);
    done();
  });

  it('should return the list without mechs', (done) => {
    const AvoidMechProtocolHandler = new AvoidMechProtocol("avoid-mech");
    const Point1 = new Point(noAlliesMocked1.coordinates, noAlliesMocked1.enemies);
    const Point2 = new Point(hasMechaMocked.coordinates, hasMechaMocked.enemies);
    const PointList = [Point1, Point2];
    const hasAllies = AvoidMechProtocolHandler.apply(PointList);
    expect(hasAllies.length).toEqual(PointList.length - 1);
    expect(hasAllies[0]).toBe(Point1);
    done();
  });
});
