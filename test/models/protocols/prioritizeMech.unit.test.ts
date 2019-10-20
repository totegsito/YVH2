import { Point } from "../../../src/models/point";
import { Enemies} from "../../../src/constants/enemies";
import PrioritizeMech from "../../../src/models/protocols/prioritizeMech";

const noMechsMocked1 = {
  coordinates: {
    x: 0,
    y: 0,
  },
  enemies: {
    type: Enemies.SOLDIER,
    number: 20,
  }
};

const noMechsMocked2 = {
  coordinates: {
    x: 1,
    y: 1,
  },
  enemies: {
    type: Enemies.SOLDIER,
    number: 2,
  }
};

const hasMechMocked1 = {
  ...noMechsMocked1,
  enemies: {
    ...noMechsMocked1.enemies,
    type: Enemies.MECH
  },
  allies: 20,
};

describe('prioritize-mech protocol suite', () => {
  it('should return the same array when there is no mechs', (done) => {
    const PrioritizeMechProtocolHandler = new PrioritizeMech("prioritize-mech");
    const Point1 = new Point(noMechsMocked1.coordinates, noMechsMocked1.enemies);
    const Point2 = new Point(noMechsMocked2.coordinates, noMechsMocked2.enemies);
    const PointList = [Point1, Point2];
    const hasAllies = PrioritizeMechProtocolHandler.apply(PointList);
    expect(hasAllies.length).toEqual(PointList.length);
    expect(hasAllies[0]).toBe(Point1);
    done();
  });

  it('should return an empty array when no arguments', (done) => {
    const PrioritizeMechProtocolHandler = new PrioritizeMech("prioritize-mech");
    const PointList = [];
    const hasAllies = PrioritizeMechProtocolHandler.apply(PointList);
    expect(hasAllies.length).toEqual(PointList.length);
    done();
  });

  it('should return the list with the same order when is already sorted', (done) => {
    const PrioritizeMechProtocolHandler = new PrioritizeMech("prioritize-mech");
    const Point1 = new Point(hasMechMocked1.coordinates, hasMechMocked1.enemies, hasMechMocked1.allies);
    const Point2 = new Point(noMechsMocked2.coordinates, noMechsMocked2.enemies);
    const PointList = [Point1, Point2];
    const hasAllies = PrioritizeMechProtocolHandler.apply(PointList);
    expect(hasAllies.length).toEqual(PointList.length);
    expect(hasAllies[0]).toBe(Point1);
    done();
  });

  it('should return the list of targets sorted', (done) => {
    const PrioritizeMechProtocolHandler = new PrioritizeMech("prioritize-mech");
    const Point1 = new Point(noMechsMocked1.coordinates, noMechsMocked1.enemies);
    const Point2 = new Point(hasMechMocked1.coordinates, hasMechMocked1.enemies, hasMechMocked1.allies);
    const PointList = [Point1, Point2];
    const hasAllies = PrioritizeMechProtocolHandler.apply(PointList);
    expect(hasAllies.length).toEqual(PointList.length);
    expect(hasAllies[0]).toBe(Point2);
    done();
  });
});
