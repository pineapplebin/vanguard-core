import Zone from "./Zone";
import Card from "../Card";
import Base from "../Base";

class Circle extends Base {
  row: number;
  col: number;
}

class VanguardCircle extends Circle {
  row = 0;
  col = 1;
  vanguard: Card = null;
}

class RearGuardCircle extends Circle {
  read_guard: Card = null;

  constructor(row, col) {
    super();
    this.row = row;
    this.col = col;
  }
}

class GuardianCircle extends Circle {
  readonly row = null;
  readonly col = null;
  guardians: Array<Card>;

  constructor() {
    super();
    this.guardians = [];
  }
}

export default class FieldZone extends Zone {
  readonly name = 'field zone';
  vanguard_circle: VanguardCircle;
  rear_guard_circles: Array<RearGuardCircle>;
  guardian_circle: GuardianCircle;

  constructor() {
    super();
  }

  getVanguardCircle(): VanguardCircle {
    return null;
  }

  getRearGuardCircle(no: number): RearGuardCircle {
    return null;
  }

  getGuardianCircle(): GuardianCircle {
    return null;
  }

  moveIn(card: Card) { }

  moveOut(card: Card) { }
}
