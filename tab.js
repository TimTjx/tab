$.fn.extend({
    tabs:function(tab){
        //获取实参设置默认值
        if(tab.effect === undefined){
            tab.effect = true;//默认渐隐渐现
        }else{
            tab.effect = false;//滑动
        }
        // 点击前颜色
        tab.btnColor =  tab.btnColor || "#000 "
        //点击btn字体变颜色
        tab.btnClickColor = tab.btnClickColor || "red"
        //点击或鼠标放上
        if(tab.clickOrMouseover ===undefined){
            tab.clickOrMouseover = true
        }else{
            tab.clickOrMouseover = false
        }
        
        //为当前调用方法元素添加class
        this.addClass("btn");
        //当前元素父级的（div）孩子
        var con = this.parent().children("div").eq(0);
        //btn点击前字体颜色
        $(".btn li").css({
            color:tab.btnColor
        })
        //显示第一个btn颜色
        $(".btn li").eq(0).css({
            color:tab.btnClickColor
        })

        if(tab.clickOrMouseover){
            if(tab.effect){
                //隐藏con里面的所有
                con.children().hide();
                //显示con里面的第一个
                con.children().eq(0).show();
                $(".btn li").click(function(){
                    $(".btn li").css({
                        color:tab.btnColor 
                    })
                    $(this).css({
                        color:tab.btnClickColor
                    })
                    //btn的index值付给n
                    var n  = $(this).index();
                    con.children().hide();
                    //显示当前的内容
                    con.children().eq(n).fadeIn();
                })
            }else{
                // 创建div
                var con_div = $("<div></div>");
                con_div.appendTo(con);
                //所用内容div插入con_div
                con.children().appendTo(con_div);
                // con_div下面第一个div的宽度
                var con_divChildWidth = con_div.children().eq(0).width()
                //最外层div宽度溢出隐藏
                con.css({
                    width: con_divChildWidth,
                    overflow:"hidden"
                })
                //包涵内容的div宽度
                con_div.css({
                    width: con_divChildWidth * con_div.children().length
                })
                con_div.children().css({
                    float:"left"
                })
                $(".btn li").click(function(){
                    //btn 点击前字体颜色
                    $(".btn li").css({
                        color:tab.btnColor 
                    })
                    //点击之后的btn字体颜色
                    $(this).css({
                        color:tab.btnClickColor
                    })
                    //btn的index值付给n
                    var n  = $(this).index();
                    con_div.animate({
                        marginLeft:-(n*con_divChildWidth)
                    })
                })
            }
        }else{
            if(tab.effect){
                //隐藏con里面的所有
                con.children().hide();
                //显示con里面的第一个
                con.children().eq(0).show();
                $(".btn li").mouseover(function(){
                    $(".btn li").css({
                        color:tab.btnColor 
                    })
                    $(this).css({
                        color:tab.btnClickColor
                    })
                    //btn的index值付给n
                    var n  = $(this).index();
                    con.children().hide();
                    //显示当前的内容
                    con.children().eq(n).fadeIn();
                })
            }else{
                // 创建div
                var con_div = $("<div></div>");
                con_div.appendTo(con);
                //所用内容div插入con_div
                con.children().appendTo(con_div);
                // con_div下面第一个div的宽度
                var con_divChildWidth = con_div.children().eq(0).width()
                //最外层div宽度溢出隐藏
                con.css({
                    width: con_divChildWidth,
                    overflow:"hidden"
                })
                //包涵内容的div宽度
                con_div.css({
                    width: con_divChildWidth * con_div.children().length
                })
                con_div.children().css({
                    float:"left"
                })
                $(".btn li").mouseover(function(){
                    //btn 点击前字体颜色
                    $(".btn li").css({
                        color:tab.btnColor 
                    })
                    //点击之后的btn字体颜色
                    $(this).css({
                        color:tab.btnClickColor
                    })
                    //btn的index值付给n
                    var n  = $(this).index();
                    con_div.animate({
                        marginLeft:-(n*con_divChildWidth)
                    })
                })
            }
        }
       
    }
})