console.log("Hi I am Dom ")
//ROOTNODE TO HTML NODE

// Dom is a tree like structure of web page so that we can access using root Node 
// root Node is an Document Object 
const rootNode = document.getRootNode();
console.log(rootNode.childNodes)//returns all child nodes in arrayLike Object [NodeList]
const htmlElementNode = rootNode.childNodes[1]
console.log(htmlElementNode)
console.dir(htmlElementNode)


console.log("================")
//CHILD OF HTML NODE
const htmlnodechild = htmlElementNode.childNodes
console.log(htmlnodechild)

const headNode = htmlnodechild[0]
const textNode = htmlnodechild[1]
const bodyNode = htmlnodechild[2]

// to check the parent node of an element
console.log(headNode.parentNode)
// to get siblings 
console.log(headNode.nextSibling)
// to ignore text Nodes contains newLine or spaces
console.log(headNode.nextElementSibling)
console.log(headNode.children)
console.log("part 2 ended")

// getting child nodes of title
const title = headNode.querySelector("title")
console.log(title)
console.log(title.childNodes)






