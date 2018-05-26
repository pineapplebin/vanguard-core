import Card from "../Card";
import Zone from "../Zone";
import FieldZone from "../FieldZone";

export type DeckType = {
  fv_index: number,
  main: Array<Card>,
  extra: Array<Card>,
}

export type ZonesType = {
  main_deck: Zone,
  extra_deck: Zone,
  hand: Zone,
  drop: Zone,
  damage: Zone,
  bind: Zone,
  trigger: Zone,
  removal: Zone,
  soul: Zone,
  field: FieldZone,
}
