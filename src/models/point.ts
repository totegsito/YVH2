import { Coordinate, CoordinateInterface } from "./coordinate";
import { Enemy, EnemyInterface } from "./enemy";

export interface PointInterface {
  coordinates: CoordinateInterface;
  enemies: EnemyInterface,
  allies?: number;
}

export class Point implements PointInterface{
  coordinates: Coordinate;
  enemies: Enemy;
  allies?: number = 0;

  constructor(coordinates: CoordinateInterface, enemy: EnemyInterface, allies: number = 0) {
    this.coordinates = new Coordinate(coordinates.x, coordinates.y);
    this.enemies = new Enemy(enemy.type, enemy.number);
    this.allies = allies;
  }

  public getCoordinatesAsJSON(): CoordinateInterface {
    return this.coordinates.toJSON();
  }

  public getDistance(): number {
    return this.coordinates.getDistance();
  }

  public getEnemyType(): string {
    return this.enemies.getType();
  }

  public getAllies(): number {
    return this.allies;
  }
}
