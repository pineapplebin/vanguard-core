import Core from "../../src/classes/Core";
import StateMechine from "../../src/classes/core-state";

test('test core init', () => {
  const core = new Core({});
  expect(core.flow).toBeInstanceOf(StateMechine);
  expect(core.players).toEqual({});
});
