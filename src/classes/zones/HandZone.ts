import Zone from "./Zone";
import Card from "../Card";

export default class HandZone extends Zone {
  readonly name = 'hand zone';

  moveIn(card: Card) { }

  moveOut(card: Card) { }
}
