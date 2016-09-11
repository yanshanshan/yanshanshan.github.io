/**
 * Created by db on 16/8/8.
 */


var n = 0
$(function(){
    var $button = $('.ctrl-item')
    var $item = $('.item')

    $button.click(function(){
        var $index = $button.index(this)
        $button.eq($index).addClass('ctrl-item1').siblings().removeClass('ctrl-item1')


        $item.not('.item-active').css('display','none')
        $item.filter('.item-active').fadeOut(function(){
            $(this).removeClass('item-active')
        })
        $item.eq($index).fadeIn(function(){
            $(this).addClass('item-active')
        })
    })
    var t = setInterval('cl()',1500)


    $button.hover(function(){
        clearInterval(t)
    },function(){
        t = setInterval('cl()',1500)
    })



})
function cl(){
    if(n >= 3){
        n=0
    }else{
        n+=1
    }
    $('.ctrl-item').eq(n).trigger('click',2000)
}

$('.ctrl-item').click(function(){
     n = $('.ctrl-item').index(this)
})


