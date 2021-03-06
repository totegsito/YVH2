import { Point } from "../../../src/models/point";
import { Enemies} from "../../../src/constants/enemies";
import AvoidCrossfireProtocol from "../../../src/models/protocols/avoidCrossfire";

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
    type: Enemies.MECH,
    number: 2,
  }
};

const hasAlliesMocked1 = {
  ...noAlliesMocked1,
  allies: 20,
};

describe(' protocol suite', () => {
  it('should return the same array when there is no allies present', (done) => {
    const AvoidCrossfireProtocolHandler = new AvoidCrossfireProtocol("avoid-crossfire");
    const Point1 = new Point(noAlliesMocked1.coordinates, noAlliesMocked1.enemies);
    const Point2 = new Point(noAlliesMocked2.coordinates, noAlliesMocked2.enemies);
    const PointList = [Point1, Point2];
    const hasAllies = AvoidCrossfireProtocolHandler.apply(PointList);
    expect(hasAllies.length).toEqual(PointList.length);
    expect(hasAllies[0]).toBe(Point1);
    done();
  });

  it('should return an empty array when no arguments', (done) => {
    const AvoidCrossfireProtocolHandler = new AvoidCrossfireProtocol("avoid-crossfire");
    const PointList = [];
    const hasAllies = AvoidCrossfireProtocolHandler.apply(PointList);
    expect(hasAllies.length).toEqual(PointList.length);
    done();
  });

  it('should return the list without allies', (done) => {
    const AvoidCrossfireProtocolHandler = new AvoidCrossfireProtocol("avoid-crossfire");
    const Point1 = new Point(hasAlliesMocked1.coordinates, hasAlliesMocked1.enemies, hasAlliesMocked1.allies);
    const Point2 = new Point(noAlliesMocked2.coordinates, noAlliesMocked2.enemies);
    const PointList = [Point1, Point2];
    const hasAllies = AvoidCrossfireProtocolHandler.apply(PointList);
    expect(hasAllies.length).toEqual(PointList.length - 1);
    expect(hasAllies[0]).toBe(Point2);
    done();
  });
});
