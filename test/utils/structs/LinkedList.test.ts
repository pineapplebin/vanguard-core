import LinkedList from '../../../src/utils/structs/LinkedList'

test('test LinkedList create & leftAppend & append', () => {
  const list = new LinkedList<string>();
  expect(list.head.next).toBeNull();
  expect(list.head.value).toBeNull();
  expect(list.head).toEqual(list.tail);

  list.append('left append');
  expect(list.head).not.toEqual(list.tail);
  expect(list.head.next.value).toEqual('left append');
  expect(list.tail.value).toEqual('left append');

  list.append('string');
  expect(list.head.next.next.value).toEqual('string');
  expect(list.tail.value).toEqual('string');
});

test('test LinkedList with init values', () => {
  const list = new LinkedList<number>([1, 2, 3]);
  expect(list.head.next).not.toBeNull();
  const first_node = list.head.next;
  expect(first_node.value).toEqual(1);
  const second_node = first_node.next;
  expect(second_node.value).toEqual(2);
  const third_node = second_node.next;
  expect(third_node.value).toEqual(3);
  expect(third_node.next).toBeNull();
});

test('test LinkedList get & remove', () => {
  const list = new LinkedList<number>([1, 2, 3]);
  const node = list.get(1);
  expect(node.value).toEqual(2);
  expect(node.next.value).toEqual(3);
  expect(() => {
    list.get(3);
  }).toThrowError(RangeError);

  const removed = list.remove(1);
  expect(removed).toEqual(2);
  const n_node = list.get(1);
  expect(n_node.value).toEqual(3);

  expect(list.tail.value).toEqual(3);
  list.remove(1);
  expect(list.tail.value).toEqual(1);

  expect(() => {
    list.remove(1);
  }).toThrowError(RangeError);
});

test('test LinkedList array property', () => {
  const list = new LinkedList<number>([1, 2, 3]);
  expect(list.array).toEqual([1, 2, 3]);
  list.append(4);
  expect(list.array).toEqual([1, 2, 3, 4]);
  list.remove(1);
  expect(list.array).toEqual([1, 3, 4]);
})

test('test LinkedList destroy', () => {
  const list = new LinkedList<number>([1, 2, 3]);
  expect(list.head.next).not.toBeNull();
  list.destroy()
  expect(list.head).toBeUndefined()
  expect(() => {
    list.append(1);
  }).toThrow()
})
