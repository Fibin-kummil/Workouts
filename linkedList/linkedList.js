

class Node {
  constructor(value){
    this.value=value
    this.next=null
  }
}

class linkedList {
  constructor(){
    this.head=null
    this.size=0
  }
isEmpty(){
  return this.size==0
}

getSize(){
  return this.size
}

prepend(value){
  const node = new Node(value)
  if(this.isEmpty()){
    this.head=node
    this.tail=node
  }else{
    node.next = this.head
    this.head=node
  }
  this.size++
  console.log(this.head);
}
append(value){
  console.log(this.tail);
  const node = new Node(value)
  if(this.isEmpty()){
    this.head=node
    this.tail=node
  }else{
    this.tail.next=node
    this.tail=node
  }
  this.size++
}
insert(value,index){
  if(index<0||index>this.size){
    return null
  }
  if(index==0){
    this.prepend(value)
  }else{
    const node = new Node(value)
    let pre = this.head
    for (let i = 0; i < index-1; i++) {
      pre=pre.next
    }
   
      node.next=pre.next
      pre.next=node
      this.size++
    
  }
}
remove(index){
  if(index<0||index>this.size){
    return null
  }
  if(index==0){
    
    this.head=this.head.next
    this.size--
  }else{
   let pre = this.head
    for (let i = 0; i < index-1; i++) {
      pre=pre.next
    }
   let removeNode=pre.next
    pre.next=removeNode.next
    this.size--
}
}
removeValue(value){
  if(this.isEmpty()){
    return null
  }
  if(this.head.value==value){
    this.head=this.head.next
    this.size--
  }else{
   let pre = this.head
   while(pre.next&&pre.next.value!=value){
   pre=pre.next 
   }
  
  if(pre.next){
   const removeValue=pre.next
    pre.next =removeValue.next
    this.size--
  }
}
}
search(value){
    if (this.isEmpty()) {
      return null
    }
    let curr = this.head
   let i=0
    while(curr){
       if(curr.value==value){
        return i
       }else{
        curr =curr.next
        i++
       }
      }
      return null
}

reverse(){
  let prev = null
  let curr = this.head
  while(curr){
   let next = curr.next
    curr.next = prev
    prev =curr
    curr = next
  }
  this.head=prev
}
addToMiddle(value){
  const node = new Node(value)
  let curr = this.head
  for (let i = 1; i < this.size/2; i++) {
    curr = curr.next
  }
  if(curr.next){
    node.next=curr.next
    curr.next= node
    this.size++
  }
}

print(){
  if(this.isEmpty()){
    return null
  }else{
    let curr = this.head
    let listValuer=" "
    while(curr){
      listValuer+=`${curr.value}`
      curr = curr.next
    }
    console.log(listValuer);
  }
}

}
const list = new linkedList()
const node = new Node()

list.prepend(" "+10)
list.prepend(" "+20)
list.append(" "+50)
list.insert(" "+100,3)
// list.remove(2)
// list.removeValue(100)
 console.log(list.search(10));
 list.reverse()
 list.addToMiddle(" "+80)
//  let a = [22,3,5,6,4,7]
// a.forEach(e => list.append(" "+e))
list.print()
