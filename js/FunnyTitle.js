// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href');
        document.title = '╭(°A°`)╮这就走了？';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href');
        document.title = '(ฅ>ω<*ฅ)欢迎回来｜' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
