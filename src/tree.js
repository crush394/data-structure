// 新建树
const createTree = value =>{
    return{
        data:value,
        children:null,
        parent:null
    }
}
// 添加孩子
const addChild = (node,value) =>{
    const newNode = {
        data: value,
        children:null,
        parent:node
    }
    node.children = node.children || []
    node.children.push(newNode)
    return newNode
}
// 遍历树
const trave = (tree,fn) =>{
    fn(tree)
    if(!tree.children){
        return
    }
    for(let i =0 ; i<tree.children.length;i++){
        trave(tree.children[i],fn)
    }
}

// 找节点
const find = (tree,node) =>{
    if(tree === node){
        return tree
    }else if(tree.children){
        for(let i = 0 ; i<tree.children.length; i++){
            const result = find(tree.children[i],node)
            if(result){ return result}
        }
        return undefined
    }
    return undefined
}
// 删除节点
const removeNode = (tree,node)=>{
    // siblings是node的兄弟姐妹
    const siblings = node.parent.children
    let index = 0
    for(let i =1 ;i < siblings.length;i++){
        if(siblings[i] === node){
            index = i
        }
    }
    siblings.splice(index,1)
}
const tree = createTree(10)
const node2 = addChild(tree,20)
addChild(tree,30)
const node4 = addChild(tree,40)
addChild(tree,50)
addChild(node2,201)
addChild(node2,202)
addChild(node2,203)
addChild(node2,204)
console.log(tree)

const fn = node =>{
    console.log(node.data)
}

console.log(find(tree,node2))
trave(tree,fn)

removeNode(tree,node4)
console.log(tree)