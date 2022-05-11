class ListNode {
  constructor(data) {
    this.data = data
    this.next = null
    this.previous = null
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  };

  push(data) {
    const node = new ListNode(data)
    if (!this.head) {
      this.head = node
      this.tail = node
      this.length++
      return this
    }
    this.tail.next = node
    node.previous = this.tail;
    this.tail = node;
    this.length++
    return this
  }

  pop() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    };
    const oldTail = this.tail;
    this.tail = oldTail.previous
    this.tail.next = null;
    oldTail.previous = null;
    this.length--;
    return oldTail;
  }

  shift() {
    if (!this.head) return undefined
    if (this.length === 1) return this.pop()
    const oldHead = this.head
    this.head = oldHead.next
    this.head.previous = null
    oldHead.next = null
    this.length--
    return oldHead
  };

  unshift(data) {
    const node = new ListNode(data)
    if (!this.head) return this.push()
    this.head.previous = node
    node.next = this.head
    this.head = node
    this.length++
    return this;
  };

  get(index) {
    if (index < 0 || index > (this.length - 1) || !this.head) return undefined
    let count = 0
    if (index > this.length / 2) {
      let current = this.tail
      let i = this.length - (index + 1)
      while (count < i) {
        current = current.previous
        count++
      }
      return current
    } else {
      console.log('here')
      let current = this.head
      while (count < index) {
        current = current.next
        count++
      }
      return current
    }
  };

  set(index, data) {
    if (!this.get(index)) return false;
    const node = this.get(index);
    node.data = data;
    return true;
  };

  logData() {
    let current = this.head
    while (current) {
      console.log(current.data)
      current = current.next
    }
  };

  insert(index, data) {
    if (!this.head || index > this.length || index < 0) return undefined;
    if (index === 0) return this.unshift(data)
    if (index === this.length) return this.push(data)

    const node = new ListNode(data);
    let current = this.head;
    let previous;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    };

    previous.next = node, node.previous = previous;
    current.previous = node, node.next = current;
    this.length++
    return this;
  };

  remove(index) {
    if (!this.head || index >= this.length || index < 0) return undefined;
    if (index === (this.length - 1)) return this.pop();
    if (index === 0) return this.shift();

    const current = this.get(index)
    const prev = this.get(index - 1)
    const after = this.get(index + 1)

    prev.next = after, after.prev = prev
    current.next = null, current.prev = null
    this.length--
    return current
  }
}

const ll = new DoublyLinkedList()

