const MyLists = require('./cartData.json')
//console.log(MyLists.items)

function iterateDiv() {
    let outerHtml = document.createElement('div');
    for(var i = 0; i < MyLists.items.length; i++){
        let node = document.createElement('div');
        node.classList.add('item'+i );
        let text = document.createTextNode(MyLists.items[i]['name']);
        node.appendChild(text);
        //document.body.appendChild(node)
        outerHtml.appendChild(node);  
    }
    return outerHtml;
}