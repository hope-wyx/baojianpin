$(function () {
    footer();
    footerStyle();
});

function footer() {
    var str = "";
    str += `
    <div class="indexFooter">
        <div class="indexFooterContent">
            <div>
                <a class="footer_style_orange" href="work.html">
                    <img src="img/gongzuo-xuanzhong@2x.png" />
                    <h3>工作</h3>
                </a>
            </div>
            <div>
                <a class="footer_style_gray" href="Purchase.html">
                    <img src="img/chanpinxiangqingsheji@2x.png" />
                    <h3>进销存</h3>
                </a>
            </div>
           
            <div>
                <a class="footer_style_gray" href="news.html">
                    <img src="img/wangyesheji@2x.png" />
                    <h3>消息</h3>
                </a>
            </div>
            <div>
                <a class="footer_style_gray" href="wd.html">
                    <img src="img/xingxiangsheji@2x.png" />
                    <h3>我</h3>
                </a>
            </div>
        </div>
    </div>
    `
    $("footer").html(str);
}



// 底部导航栏切换样式(预留)
function footerStyle() {
    $(".indexFooterContent>div>a").each(function (inx, val) {
        var $this = $(this);
        if ($this[0].href == window.location.href) {
            if (inx != 0) {
                $(".indexFooterContent>div>a").first().find("img").attr("src", "img/banner@2x2 (10).png");
            }
            switch (inx) {
                case 1:
                    $(this).find("img").attr("src", "img/jinlaixuan.png");
                    break;
                case 2:
                    $(this).find("img").attr("src", "img/footed.png");
                    break;
                case 3:
                    $(this).find("img").attr("src", "img/banner@2x2 (11).png");
                    break;
            }
            $this.addClass("footer_style_orange").removeClass("footer_style_gray").parent().siblings().find("a").removeClass("footer_style_orange").addClass("footer_style_gray");
        }
    });
}