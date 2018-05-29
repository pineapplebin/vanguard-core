import Base from "./Base";
import { DeckType } from "./types/Duel";
import MainDeckZone from "./zones/MainDeckZone";
import FieldZone from "./zones/FieldZone";
import HandZone from "./zones/HandZone";
import DropZone from "./zones/DropZone";

type PlayerConfig = {
  player_id: string,
  deck_info: DeckType,
}

type ZonesType = {
  main_deck: MainDeckZone,
  field: FieldZone,
  hand: HandZone,
  drop: DropZone,
}

export default class Player extends Base {
  deck_info: DeckType;
  player_id: string;
  zones: ZonesType;

  constructor(conf: PlayerConfig) {
    super();
    this.deck_info = conf.deck_info;
    this.player_id = conf.player_id;
    this.zones = {
      main_deck: new MainDeckZone(conf.deck_info.main),
      field: new FieldZone(),
      hand: new HandZone(),
      drop: new DropZone(),
    }
  }
}
