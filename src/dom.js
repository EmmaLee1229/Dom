window.dom = {
    create(string) {
        const container = document.createElement('template')
        //trim函数清除空格
        container.innerHTML = string.trim()
        return container.content.firstChild
    },
    after(node, node2) {
        node.parentNode.insertBefore(node2, node.nextSibling)
    },
    before(node, node2) {
        node.parentNode.insertBefore(node2, node)
    },
    append(parent, node) {
        parent.appendChild(node)
    },
    //用node2包裹node
    wrap(node, node2) {
        dom.before(node, node2)
        dom.append(node2, node)
    },
    remove(node) {
        node.parentNode.removeChild(node)
        return node
    },
    empty(node) {
        //可简写为 const {childNodes} = node
        const childNodes = node.childNodes
        const arr = []
        let x = node.firstChild
        while (x) {
            arr.push(dom.remove(x))
            x = node.firstChild
        }
        return arr
    },
    attr(node, name, value) {
        //重载
        if (arguments.length === 3) {
            node.setAttribute(name, value)
        } else if (arguments.length === 2) {
            return node.getAttribute(name)
        }
    },
    text(node, string) {
        if (arguments.length === 2) {
            if ('innerText' in node) {
                node.innerText = string
            } else {
                node.contentText = string
            }
        } else if (arguments.length === 1) {
            if ('innerText' in node) {
                return node.innerText
            } else {
                return node.contentText
            }
        }
    },
    html(node, string) {
        if (arguments.length === 2) {
            node.innerHTML = string
        } else if (arguments.length === 1) {
            return node.innerHTML
        }
    },
    style(node, name, value) {
        if (arguments.length === 3) {
            //(node,'color','red')
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                //(node,'color')
                return node.style[name]
            } else if (name instanceof Object) {
                //(node,{color:'red', border:'1px solid red'})
                for (let key in name) {
                    node.style[key] = name[key]
                }
            }
        }
    },
    class:{
        add(node,className){
            node.classList.add(className)
        },
        remove(node,className){
            node.classList.remove(className)
        },
        has(node,className){
            return node.classList.contains(className)
        }
    },
    on(node,event,fn) {
        node.addEventListener(event,fn)
    },
    off(node,event,fn){
        node.removeEventListener(event,fn)
    },
    find(selector,scope){
        return (scope||document).querySelectorAll(selector)
    },
    parent(node){
        return node.parentNode
    },
    children(node){
        return node.children
    },
    siblings(node){
        //只有数组可以使用filter
       return Array.from(node.parentNode.children).filter(n => n!== node)
    },
    next(node){
        let x = node.nextSibling
        while(x && x.nodeType===3){
            x = x.nextSibling
        }
        return x
    },
    previous(node){
        let x = node.previousSibling
        while(x && x.nodeType===3){
            x = x.previousSibling
        }
        return x
    },
    travel(nodeList,fn){
        for(let i = 0;i<nodeList.length;i++){
            fn.call(null,nodeList[i])
        }
    },
    index(node){
        let x = dom.previous(node)
        let count =0
        while(x){
            x = dom.previous(x)
            count+=1
        }
        return count
        //或采取遍历其他的兄弟节点
        // const list = dom.children(node.parentNode)
        // let i
        // for(i=0;i<list.length;i++){
        //     if(list[i]===node)
        //     break
        // }
        // return i
    }

};