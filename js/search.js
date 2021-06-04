$(function(){

    $("#search>#enter").on("click",function(event){
        window.open('https://cn.bing.com/search?q='+$("#search>input[name='search']").val());
        event.stopPropagation();
    })

    $("#searchIcon>span").on("click",function(event){
        var $li = $("#searchIcon>ul").children("li");
        $li.stop(false,true).slideDown(500);
        event.stopPropagation();
    })
    $("body,html").on("click",function(){
        var $li = $("#searchIcon>ul").children("li");
        $li.slideUp(500);
    })

    /* 选择引擎 */
    $("#searchIcon>ul>#bing").on("click",function(event){
        $("#searchIcon>span>img").prop("src","icon/bing.jpg");
        $("#search>#enter").unbind();
        $("#search>#enter").on("click",function(event){
            window.open('https://cn.bing.com/search?q='+$("#search>input[name='search']").val());
            event.stopPropagation();
        })
        var $li = $("#searchIcon>ul").children("li");
        $li.slideUp(500);
        event.stopPropagation();
    })
    
    $("#searchIcon>ul>#baidu").on("click",function(event){
        $("#searchIcon>span>img").prop("src","icon/baidu.jpg");
        $("#search>#enter").unbind();
        $("#search>#enter").on("click",function(event){
            window.open('https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd='+$("#search>input[name='search']").val());
            event.stopPropagation();
        })
        var $li = $("#searchIcon>ul").children("li");
        $li.slideUp(500);
        event.stopPropagation();
    })

    $("#searchIcon>ul>#fanyi").on("click",function(event){
        $("#searchIcon>span>img").prop("src","icon/google.jpg");
        $("#search>#enter").unbind();
        $("#search>#enter").on("click",function(event){
            window.open('https://translate.google.cn/#view=home&op=translate&sl=auto&tl=zh-CN&text='+$("#search>input[name='search']").val());
            event.stopPropagation();
        })
        var $li = $("#searchIcon>ul").children("li");
        $li.slideUp(500);
        event.stopPropagation();
    })

})

