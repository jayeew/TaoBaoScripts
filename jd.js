/*
使用方法
1.手动打开京东活动页面
2.启动脚本

注意
现在包括js注入(我也在用)等方式在内，京东全民脚本已比较完备。
但仍有任务无法自动完成，遂写此脚本自用，并应要求上传。

手机加载慢的改延迟postpone大小，单位毫秒
加购任务，我没有好的解决办法，所以耍小聪明根据价格符号"¥"定位购物车按钮位置
二者平行，y坐标一样，x坐标根据我的分辨率(2k)设置为偏移值270。
所以，如果你加购任务无法顺利完成，请酌情加减x坐标(第53行)，y坐标无需改动。

祝，使用愉快。
*/
auto();

launch("com.jingdong.app.mall");
var postpone = 1000;
setScreenMetrics(device.width,device.height);
sleep(postpone);
//console.show();

var task = text("领金币").findOne();
task.click();
var start = 1;
var offset=270;
while (true) {
    sleep(postpone * 2);
    var golook = text("去完成").findOnce(start);
    if (!golook) break;
    golook.click();
    sleep(postpone * 3);
    var title1 = text("任意浏览以下5个商品").findOnce();
    var title2 = text("在当前页任意加购5个商品").findOnce();
    var title3 = text("品牌会员联合开卡").findOnce();
    if (title1) {
        for (var i = 0; i < 5; i++) {
            sleep(postpone * 2);
            var price = textEndsWith("jpg").depth(16).findOnce(i);
            //console.log(price.text());
            click(price.bounds().centerX(),
                price.bounds().centerY());
            sleep(postpone * 2);
            back();
        }
    } else if (title2) {
        sleep(postpone);
        for (var i = 0; i < 6; i++) {
            var price = textContains("¥").findOnce(i);
            console.log(price.text());
            click(price.bounds().centerX() + offset,
                price.bounds().centerY());
            if (i % 2 == 1) swipe(700, 2500, 700, 1500, 1000);
            sleep(postpone);
        }
        
        /*for (var i = 0; i < 5; i++) {
            sleep(postpone * 2);
            var price = id("jmdd-react-smash_"+i).depth(15).
            clickable().findOne();
            //console.log(price.text());
            price.click();
            sleep(postpone);
            back();
        }*/
    } else if (title3) {
        start += 1;
        sleep(postpone);
        back();
        continue;
    } else {
        var num = random(4, 5);
        while (num--)
            swipe(700 + random(-200, 200),
                2000 + random(-200, 200),
                700 + random(-200, 200),
                700 + random(-200, 200),
                2000);
    }
    back();
}