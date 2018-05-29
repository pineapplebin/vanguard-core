import State from "./State";
import { repeat } from "../../utils/basic";

export default class PrepareState extends State {
  readonly name = 'prepare state';

  constructor(core, conf = {}) {
    super(core, conf);
  }

  active(): boolean {
    const core = this.core;
    Object.keys(core.players).forEach(player_id => {
      const player = core.players[player_id];
      // // 拿出FV
      // player.zones.main_deck.moveCard(
      //   player.deck_info.fv_index,
      //   player.zones.field.vanguard_circle);
      // // 洗牌
      // player.zones.main_deck.suffle();
      // // 5张起始手牌
      // repeat(() => {
      //   player.zones.main_deck.moveCard(0, player.zones.hand);
      // }, 5);
    });
    return true;
  }

  getNextState() {
    return null;
  }

  enterAction() { }

  exitAction() { }
}
