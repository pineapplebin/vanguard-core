import Base from "./Base";
import { Grade, Nation, Race, Clan, Trigger } from "./types/CardInfo";

export default class Card extends Base {
  readonly card_id: string;
  readonly grade: Grade;
  readonly nation: Nation;
  readonly clan: Clan;
  readonly race: Race;
  readonly trigger_type: Trigger = Trigger.NONE;
  readonly trigger_power: number = 0;
  readonly critical: number = 1;
  readonly shield: number;
  readonly power: number;
  readonly name: string;

  constructor() {
    super()
   }
}
