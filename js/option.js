$(function(){
    /* 选项 */
    $("#settings").on("click",function(event){
        var $li = $("#settings>span>ul").children("li");
        $li.stop(false,true).slideDown(500);
        event.stopPropagation();
    })
    /* 全局关闭 */
    $("body,html").on("click",function(){
        var $li = $("#settings>span>ul").children("li");
        $li.slideUp(500);
    })

    /* 选项 */
    $("#settings>span>ul").children("li").eq(2).on("click",function(event){
        var $optionA = $("body").children("#alertOption");
        $optionA.fadeIn(500);
        event.stopPropagation();
    })
    /* 全局关闭 */
    $("#alertOption").on("click",function(event){
        var $optionA = $("body").children("#alertOption");
        $optionA.fadeOut(500);
        event.stopPropagation();
    })
    /* 区域内不关闭 */
    $("#alertOption>#com").on("click",function(event){
        event.stopPropagation();
    })
    /* 关闭按钮 */
    $("#alertOption>#com>div").on("click",function(event){
        var $optionA = $("body").children("#alertOption");
        $optionA.fadeOut(500);
        event.stopPropagation();
    })















    $("#tag>span>ul").children("li").eq(1).on("click",function(){
        alert("123");







    })
    $("#tag>span>ul").children("li").eq(0).on("click",function(){
        alert("123");







    })














})