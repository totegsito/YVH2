import FurthestEnemiesProtocol from "../../../src/models/protocols/furthestEnemies";
import {Point} from "../../../src/models/point";
import {Enemies} from "../../../src/constants/enemies";

const PointBase = {
  enemies: {
    type: Enemies.MECH,
    number: 5,
  }
};

const closestEnemyMocked = {
  ...PointBase,
  coordinates: {
    x: 1,
    y: 1,
  },
};

const furthestEnemyMocked = {
  ...PointBase,
  coordinates: {
    x: 5,
    y: 5,
  },
};

describe('furthest-enemies protocol suite', () => {
  it('should return the same list when is already sorted', (done) => {
    const furthestEnemiesProtocolHandler = new FurthestEnemiesProtocol('furthest-enemies');
    const Point1 = new Point(closestEnemyMocked.coordinates, closestEnemyMocked.enemies);
    const Point2 = new Point(furthestEnemyMocked.coordinates, furthestEnemyMocked.enemies);
    const PointList = [Point2, Point1];
    const pointsOrdered = furthestEnemiesProtocolHandler.apply(PointList);
    expect(pointsOrdered.length).toBe(PointList.length);
    expect(pointsOrdered[0]).toBe(Point2);
    done();
  });

  it('should return the same list when points has the same distance', (done) => {
    const furthestEnemiesProtocolHandler = new FurthestEnemiesProtocol('furthest-enemies');
    const Point1 = new Point(closestEnemyMocked.coordinates, closestEnemyMocked.enemies);
    const PointList = [Point1, Point1];
    const pointsOrdered = furthestEnemiesProtocolHandler.apply(PointList);
    expect(pointsOrdered.length).toBe(PointList.length);
    expect(pointsOrdered[0]).toBe(Point1);
    done();
  });

  it('should return the list ordered by distance', (done) => {
    const furthestEnemiesProtocolHandler = new FurthestEnemiesProtocol('furthest-enemies');
    const Point1 = new Point(closestEnemyMocked.coordinates, closestEnemyMocked.enemies);
    const Point2 = new Point(furthestEnemyMocked.coordinates, furthestEnemyMocked.enemies);
    const PointList = [Point1, Point2];
    const pointsOrdered = furthestEnemiesProtocolHandler.apply(PointList);
    expect(pointsOrdered.length).toBe(PointList.length);
    expect(pointsOrdered[0]).toBe(Point2);
    done();
  });
});
