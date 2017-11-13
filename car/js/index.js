$(function () {
    /*1.全屏切换的初始化*/
    // 2.设置每个屏幕的背景颜色

    $('.container').fullpage({
       // 配置参数

       sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
       verticalCentered : false,

       //滚动到某一屏后的回调函数，接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算
        afterLoad :function(link,index) {
             $('.section').eq(index-1).addClass('now');
        },
       navigation : true,
       onLeave:function(index,nextIndex,direction) {
        if (index == 2&&nextIndex == 3) {
            $('.section').eq(index-1).addClass('leave');
        }
        if (index == 3&&nextIndex == 4) {
            $('.section').eq(index-1).addClass('leave');
        }
        if (index == 5&&nextIndex == 6) {
            $('.section').eq(index-1).addClass('leave');
            $('.serrion6').addClass('show');
        }
        if (index == 6&&nextIndex == 7) {
            $('.section').eq(index-1).addClass('leave');
            $('.star img').each(function(i,item) {
                  $(this).delay(i*0.55*1000).fadeIn();
            });
        }
             
       },
       // 在页面全部初始化完成后触发该函数，
       afterRender:function() {

        /*jquery插件初始的时候封装这个方法*/
            /*1.回想jquery插件的封装 $.fn.fullpage = function(){} */
           $('.more').on('click',function() {
            $.fn.fullpage.moveSectionDown();
           });

           $('.cart04').on('transitionend',function() {
                  $('.address').show().find('img:last').fadeIn(1000);
                   $('.text04').addClass('show');
           });
           $('.say06').on('transitionend',function() {
                $('.text206').fadeIn(500);
           });


           $('.serrion8').on('mousemove',function (e) {
                /*鼠标的坐标设置给手*/
                $(this).find('.hand08').css({
                    left:e.clientX -190,
                    top:e.clientY - 20
                });
            }).find('.again').on('click',function () {
                /*2.点击再来一次重置动画跳回第一页*/
                /*动画怎么怎么进行的？*/
                /*2.1 加now  类*/
                /*2.2 加leaved  类*/
                /*2.3 加show 类*/
                $('.now,.leave,.show').removeClass('now').removeClass('leave').removeClass('show');
                /*2.4 加css属性  后果：加一个style属性*/
                /*2.5 用jquery方法  show() fadeIn() 后果：加一个style属性*/
                $('.center [style]').removeAttr('style');

                /*跳回第一页*/
                $.fn.fullpage.moveTo(1);
            });
       }
    });
});