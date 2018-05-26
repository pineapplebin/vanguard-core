import Base from "./Base";
import Zone from "./Zone";
import { repeat } from "../utils/basic";

export default class FieldZone extends Base {
  guardian_circle: Zone;
  circles: [
    [Zone, Zone, Zone],
    [Zone, Zone, Zone]
  ];

  constructor() {
    super();
    this.guardian_circle = new Zone();
    this.circles = [
      [new Zone(), new Zone(), new Zone()],
      [new Zone(), new Zone(), new Zone()]
    ];
  }
}
