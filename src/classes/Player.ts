import Base from "./Base";
import { DeckType, ZonesType } from "./types/Duel";
import Zone from "./Zone";
import FieldZone from "./FieldZone";

type PlayerConfig = {
  player_id: string,
  deck: DeckType,
}

export default class Player extends Base {
  player_id: string;
  zones: ZonesType;

  constructor(conf: PlayerConfig) {
    super();
    this.player_id = conf.player_id;
    this.zones = {
      main_deck: new Zone(conf.deck.main),
      extra_deck: new Zone(conf.deck.extra),
      hand: new Zone(),
      drop: new Zone(),
      damage: new Zone(),
      bind: new Zone(),
      trigger: new Zone(),
      removal: new Zone(),
      soul: new Zone(),
      field: new FieldZone(),
    }
  }
}
