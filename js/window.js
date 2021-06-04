/* 防止溢出 */
if($(window).width()<=1000){
    $("#body").addClass("hidden");
}
$(window).resize(function () { 
    if($(window).width()<=1000){
        $("#body").addClass("hidden");
    }
    if($(window).width()>1000){
        $("#body").removeClass("hidden");
    }

})

/* 监听enter */

var focus = 0;
$("#search>input[name='search']").focus(function(){
    focus = 1;
});
$("#search>input[name='search']").blur(function(){
    focus = 0;
});
$(document).keypress(function(e){
    if (e.which == 13){
        if(focus == 1){
            $("#search>#enter").click();
            focus == 0;
        }
        else if(focus == 0){
            $("#search>input[name='search']").focus();
        }
    }
})
/* 载入笔札 */
window.onload = function(){

    $.ajax({
        type: "get",
        dataType:"json",
        url: "tag.php",
        success: function(xhr){
            for(let i=0;i<xhr["jsonNum"];i++){
                var jsonDataTmp = "No."+i;
                var $newLi = $("<li>"+xhr[jsonDataTmp]+"<br/><span></span></li>");
                $newLi.attr("name",xhr["jsonNum"]);
                $("aside>ul").append($newLi);
                $("aside>ul>li").children("span").css({
                    "width": "20px",
                    "height": "20px",
                    "display": "block",
                    "background-color": "white",
                    "position": "absolute",
                    "right": "0",
                    "bottom": "0"
                });
                $("aside>ul>li").children("span").on("click",function(event){
                    var $liName = $(this).closest("li").attr("name");
                    $.ajax({
                        type:"get",
                        url:"tagDelete.php",
                        data:{
                            "num" : $liName
                        },
                        success: function(xhr){
                            location.reload();
                        },
                        error:function(xhr){
                            console.log(xhr.status)
                        }
                    })
                    event.stopPropagation();
                })
            
            }
            $("#tag").click();
        },
        error: function(xhr){
            alert(xhr.status);
        }
    })
}