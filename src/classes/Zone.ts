import Base from "./Base";
import Card from "./Card";
import LinkedList from "../utils/structs/LinkedList";

export default class Zone extends Base {
  cards: LinkedList<Card>;

  constructor(cards: Array<Card> = []) {
    super()
    this.cards = new LinkedList<Card>(cards);
  }

  suffle(): void {
  }

  getCardList(): ReadonlyArray<Card> {
    return this.cards.array;
  }
}
