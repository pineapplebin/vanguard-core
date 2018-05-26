import Card from '../classes/Card'
import { Grade, Nation, Clan, Race } from '../classes/types/CardInfo';

export default class extends Card {
  readonly card_id = 'v-td-001';
  readonly grade = Grade.GRADE_0;
  readonly nation = Nation.UNITED_SANCTUARY;
  readonly clan = Clan.ROYAL_PALADIN;
  readonly race = Race.HIGH_BEAST;
  readonly shield = 10000;
  readonly power = 6000;
  readonly name = '古莱姆';

  constructor() {
    super()
  }
}
