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
  }

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
  }

}

const ll = new DoublyLinkedList()

ll.push(100)
ll.push(200)
ll.push(300)
ll.shift()
console.log(ll)
