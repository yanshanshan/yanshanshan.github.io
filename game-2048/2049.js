/**
 * Created by db on 16/7/27.
 */


function main(){
    //1,初始化
    init()

    //绑定事件
    bindEvents()
}

function init(){
    //1，生成1个随机数
    var num = getRandomNumber()
    //2，找到1个随机空位；
    var node = getRandomEmptyNode()
    //3，把随机数数放进去
    setText(node, num)
}

function moveLeft(){

    //mergeLeftData()
    //去空格
    deleteEmptyNode()
    //合并相同数据
    mergeLeftData()
    //设置新的随机节点
    setNewData()
}


function deleteEmptyNode(){
    //
}

function mergeLeftData(){
    //
}

function setNewData(){
    //1，得到一个随机的空姐点： 1:获取所有的空姐点，2，随机从所有的空节点里面取除一个节点
    var node = getRandomEmptyNode()
    //2，生成一个随机数
    var index = getRandomNumber()
    //3,将随机数放到空节点上
    node.innerText = index
}

function getRandomEmptyNode(){
    var nodes = getAllEmptyNodes()

}

function getRandomNumber(){

}

function getRandomIndex(){

}

function bindEvents(){
    document.addEventListener('keyup', function (event) {
        var keyCode = event.keyCode

        if (keyCode == 37) {
            //处理向左
            moveLeft()
        } else if (keyCode == 38) {
            //处理向上
            moveUp()
        } else if (keyCode == 39) {
            //处理向右
            moveRight()
        } else if (keyCode == 40) {
            //处理向下的情况
            moveDown()
        } else {

        }

    }, false)
}

main()
