import {Enemies} from "../constants/enemies";

export interface EnemyInterface {
  type: Enemies;
  number: number;
}

export class Enemy implements EnemyInterface{
  type: Enemies;
  number: number;

  constructor(type, number) {
    this.type = type;
    this.number = number;
  }

  getType() {
    return this.type;
  }
}
