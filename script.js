class ListNode {
  constructor(data) {
    this.next = null
    this.previous = null
    this.data = data
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
}