import { Coordinate } from "../../src/models/coordinate";

describe('Utils test suite', () => {
  describe('Coordinate tests', () => {
    it('should returns 0 when no params are used', (done) => {
      const coordinate = new Coordinate();
      const distance = coordinate.getDistance();
      expect(distance).toEqual(0);
      done();
    });
    it('should returns 5', (done) => {
      const coordinate = new Coordinate(5);
      const distance = coordinate.getDistance();
      expect(distance).toEqual(5);
      done();
    });
    it('should returns 2', (done) => {
      const coordinate = new Coordinate(0, 2);
      const distance = coordinate.getDistance();
      expect(distance).toEqual(2);
      done();
    });
  });
});
