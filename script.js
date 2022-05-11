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

  unshift(data) {
    const node = new ListNode(data)
    if (!this.head) return this.push()
    this.head.previous = node
    node.next = this.head
    this.head = node
    this.length++
    return this;
  }

  get(index) {
    if (index < 0 || index > this.length || !this.head) return undefined
    let count = 0
    if (index > this.length / 2) {
      console.log('end')
      let current = this.tail
      let i = this.length - index
      while (count < i) {
        current = current.previous
        count++
      }
      return current
    } else {
      console.log('start')
      let current = this.head
      while (count < index) {
        current = current.next
        count++
      }
      return current
    }
  }
}

const ll = new DoublyLinkedList()

ll.push(100)
ll.push(200)
ll.push(300)
ll.push(400)
ll.push(500)
ll.push(600)
ll.unshift(0)
ll.get(3)
console.log(ll)
