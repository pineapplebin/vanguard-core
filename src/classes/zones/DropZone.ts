import Zone from "./Zone";
import Card from "../Card";

export default class DropZone extends Zone {
  readonly name = 'drop zone';

  moveIn(card: Card) { }

  moveOut(card: Card) { }
}
