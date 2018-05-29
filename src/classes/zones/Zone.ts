import Base from '../Base';
import Card from '../Card';

export default abstract class Zone extends Base {
  abstract readonly name: string;

  constructor() {
    super();
  }

  abstract moveIn(card: Card, ...args): void;

  abstract moveOut(card: Card, ...args): void;
}
