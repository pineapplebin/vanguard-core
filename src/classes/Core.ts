import Base from "./Base";
import Player from "./Player";
import { repeat } from "../utils/basic";
import { DeckType } from "./types/Duel";
import StateMechine from "./core-states";
import PrepareState from "./core-states/PrepareState";

type CoreConfig = {
}

export default class Core extends Base {
  readonly players: { [prop: string]: Player } = {};
  readonly flow: StateMechine;

  constructor(conf: CoreConfig) {
    super();
    this.flow = new StateMechine(this);
  }

  setPlayerInfo(player_id: string, deck_info: DeckType) {
    this.players[player_id] = new Player({ player_id, deck_info });
    return this.players[player_id];
  }

  startGame() {
    if (Object.keys(this.players).length !== 2) {
      throw new Error('can not start game when not giving enough 2 players info');
    }
    this.flow.addNewState(new PrepareState(this));
  }

  tick() {
    this.flow.active();
  }
}
