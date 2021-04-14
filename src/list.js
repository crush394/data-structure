// 新建
const createList = value =>{
    return createNode(value)
};
// 添加
const appendList = (list,value) =>{
    const node = createNode(value)
    let x = list
    while(x.next){
        x = x.next
    }
    x.next = node
    return node
};

const createNode = value =>{
    return {
        data:value,
        next:null
    };
};

// 删除
/* 无法删除第一个节点
const removeFromList = (list,node) =>{
    // debugger
    let x = list
    let p = null
    while(x !== node){
        p = x
        x = x.next
    }
    p.next = x.next
};
*/

const removeFromList = (list, node) => {
    let x = list;
    let p = node; //之前将 p 初始化为 null，这里改为 node
    while (x !== node && x !== null) { // 对 null 进行处理，如果 node 不在 list 中，x 就可能为 null
      p = x;
      x = x.next;
    }
    if(x === null){ // 若 x 为 null，则不需要删除，直接 return， false 表示无法删除不在list里的节点
      return false
    }else if(x === p){ // 这说明要删除的节点是第一个节点
      p = x.next
      return p // 如果删除的是第一个节点，那么就要把新 list 的头节点 p 返回给外面，即 newList = removeFromList(list, list)
    }else{
      p.next = x.next;
      return list // 如果删除的不是第一个节点，返回原来的 list 即可
    }
  };
  

// 遍历
const travelList = (list,fn) =>{
    let x = list
    while(x!==null){
        fn(x)
         x = x.next
    };
};


const list = createList(10) // 创建
const node2 = appendList(list,20)  // 添加
const node3 = appendList(list,30) 
const node4 = appendList(list,40) 
console.log('list')
console.log(list)
removeFromList(list,node3) // 删除
// 遍历节点
travelList(list,(node)=>{
    console.log(node.data)
})
