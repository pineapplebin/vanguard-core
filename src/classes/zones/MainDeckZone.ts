import Zone from './Zone';
import LinkedList from '../../utils/structs/LinkedList';
import Card from '../Card';

export default class MainDeckZone extends Zone {
  readonly name = 'main deck';
  cards: LinkedList<Card>;

  constructor(cards: Array<Card>) {
    super();
    this.cards = new LinkedList<Card>(cards);
  }

  suffle(): void { }

  moveIn(card: Card) { }

  moveOut(card: Card) { }
}
