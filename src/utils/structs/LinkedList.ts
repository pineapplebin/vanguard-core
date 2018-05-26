class LinkedListNode<T> {
  next: LinkedListNode<T> = null;
  value: T = null;

  constructor(next: LinkedListNode<T>, value: T) {
    this.next = next;
    this.value = value;
  }
}

export default class LinkedList<T> {
  head: LinkedListNode<T> = null;
  tail: LinkedListNode<T> = null;
  private _temp_array: Array<T> = null;

  constructor(values: Array<T> = null) {
    this.head = new LinkedListNode(null, null);
    this.tail = this.head;

    if (values) {
      values.forEach(value => this.append(value))
    }
  }

  get array(): ReadonlyArray<T> {
    if (this._temp_array)
      return [...this._temp_array];

    let node = this.head.next;
    let arr = [];
    while (node) {
      arr.push(node.value);
      node = node.next;
    }
    this._temp_array = arr;
    return arr;
  }

  leftAppend(value: T): void {
    const node = new LinkedListNode(null, value);
    const temp_node = this.head.next
    this.head.next = node
    node.next = this.head.next
    if (temp_node === null)
      this.tail = node
  }

  append(value: T): void {
    const node = new LinkedListNode(null, value);
    this.tail.next = node;
    this.tail = node;
    this._temp_array = null;
  }

  get(index: number): LinkedListNode<T> {
    let count = index;
    let temp_node = this.head.next;
    while (count > 0) {
      if (temp_node === null || temp_node.next === null) {
        throw new RangeError('index out of range');
      }
      temp_node = temp_node.next;
      count--;
    }
    return temp_node;
  }

  remove(index: number): T {
    let temp_node;
    if (index > 0)
      temp_node = this.get(index - 1);
    else
      temp_node = this.head;
    if (temp_node.next === null)
      throw new RangeError('index out of range');

    const target = temp_node.next;
    const next_node = target.next;
    const rst = target.value;

    delete target.next;
    delete target.value;

    temp_node.next = next_node;
    if (next_node === null)
      this.tail = temp_node

    this._temp_array = null;
    return rst;
  }

  destroy() {
    let temp_node = this.head.next;
    while (temp_node) {
      const temp_next = temp_node.next
      delete temp_node.value
      delete temp_node.next
      temp_node = temp_next
    }
    delete this.head
    delete this.tail
    delete this._temp_array
  }
}
