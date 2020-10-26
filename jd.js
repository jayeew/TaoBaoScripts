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