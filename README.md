# 数据结构的练习

## Binary Tree 二叉树

## Linked List 链表

### 单向链表

- 定义

```
单向链表是一组节点组成的集合，每个节点都使用一个对象的引用来指向它的后一个节点。
```

- 定义一个链表的节点

```
function Node(element) {
    this.element = element
    this.next = null
}
```

- 定义链表类

```
function LList () {
    this.head = new Node( 'head' )    //头节点
    this.find = find                  //查找节点
    this.insert = insert              //插入节点
    this.remove = remove              //删除节点
    this.findPrev = findPrev          //查找前一个节点
}
```

- 查找给定节点

```
function find(item) {
  let current = this.head
  while(current.element != item && current) {
    current = current.next
  }
  return current
}
```

- 插入节点

```
// 在item节点之后插入新的节点
function insert ( newElement , item ) {
    var newNode = new Node( newElement );
    var currNode = this.find( item );
    newNode.next = currNode.next;
    currNode.next = newNode;
}
```

- 查找节点的前一个节点

```
function findPrev(item) {
  let current = this.head
  while(current && current.next.element != item) {
    current = current.next
  }
  return current
}
```

- 删除节点

```
function delete(item) {
  const prevNode = this.findPrev(item)
  if(prevNode.next) {
    prevNode.next = prevNode.next.next
  }
}
```

### 双向链表

- 定义

```
双链表，是链表的一种，它的每个数据结点中都有两个指针，分别指向直接后继和直接前驱。
```

- 定义双向链表的节点

```
function Node(element) {
    this.element = element
    this.next = null
    this.previous = null
}
```

- 插入节点

```
function insert ( newElement , item ) {
  var newNode = new Node( newElement )
  var currNode = this.find( item )
  newNode.next = currNode.next
  newNode.previous = currNode
  currNode.next.previous = newNode
  currNode.next = newNode
}
```

- 删除节点

```
function remove ( item ) {
  var currNode = this.find ( item )
  if( !( currNode.next == null ) ){
    currNode.previous.next = currNode.next
    currNode.next.previous = currNode.previous
    currNode.next = null
    currNode.previous = null
  }
}
```

## Array 数组
