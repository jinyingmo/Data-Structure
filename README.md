# 数据结构的练习

## Binary Tree 二叉树

## Linked List 链表

- 定义

```
链表是一组节点组成的集合，每个节点都使用一个对象的引用来指向它的后一个节点。
```

- 定义一个链表的节点

```
function Node(element) {
    this.element = element;
    this.next = null;
}
```

- 定义链表类

```
function LList () {
    this.head = new Node( 'head' );     //头节点
    this.find = find;                   //查找节点
    this.insert = insert;               //插入节点
    this.remove = remove;               //删除节点
    this.findPrev = findPrev;           //查找前一个节点
    this.display = display;             //显示链表
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
