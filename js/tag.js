$(function(){

    $("#tag").on("click",function(event){
        var $li = $("aside>ul").children("li");
        $li.stop(false,true).slideToggle(500);
        event.stopPropagation();
    })

    /* 添加 */
    $("#com>span>button").on("click",function(event){
        var $tag = $("#com>span>input[name='com']").val();
        event.stopPropagation();
        $.ajax({
            type:"get",
            dataType:"json",
            url:"tag.php",
            success:function(xhr){
                console.log(xhr["jsonNum"]);
              var tagName = "No." + xhr["jsonNum"];  
                console.log(tagName);
              var num = Number(xhr["jsonNum"]) + 1;
               console.log(num);
                $.ajax({
                    type:"get",
                    url:"tagAdd.php",
                    data:{
                        "tag": tagName,
                        "msg" : $tag,
                        "jsonNum": num
                    },
                    success:function(){
                        location.reload();
                    },
                    error:function(xhr){
                        console.log("error in adding"+xhr.status);
                    }
                })
            },
            error:function(xhr){
                console.log(xhr);
            }
        })
    })

    /* 删除 */












})

