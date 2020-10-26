auto.waitFor();
auto.setMode("normal");

console.show();
var postpone = rawInput("全局延迟设定(建议1-5，越低越快，越高越稳定但慢");
postpone = postpone * 1000;
console.log("准备进入活动界面，若未出现进入界面成功的提示，请开高延迟");


function startApp(url) {
    app.startActivity({
        action: "VIEW",
        data: url
    })
    sleep(5000);
    work(url.substring(0, 6));
    sleep(postpone);
    levelUp();
    sleep(postpone);
    fuckCat();
}

function work(s) {
    console.log("进入活动界面成功");
    text("赚喵币").findOne().click();
    sleep(postpone * 2);
    console.log("开始执行任务");
    //taobao
    if (s == "taobao") {
        mission("去浏览");
        mission("去完成");
        mission("去逛逛");
        mission("去搜索");
    }
    //alipay
    else
        mission("逛一逛");
}

function mission(s) {
    var start = 0;
    if (s == "去完成") start = 1;
    while (true) {
        var t = new Date();
        var golook = text(s).findOnce(start);
        if (golook) {
            golook.click();
            sleep(postpone * 2);
            var x = random(3, 4);
            while (x--) {
                t = new Date();
                sleep(5000 + t.getSeconds() * 10);
                swipe(700 + t.getSeconds(),
                    2000 - t.getSeconds() * 10,
                    200 + t.getMilliseconds(),
                    700 + t.getMilliseconds(),
                    1000);
                if (text("50000").findOnce()) {
                    start += 1;
                    break;
                }
            }
            back();
            sleep(postpone);
        } else
            break;
    }
    console.log("任务%s完成。", s);
}

function levelUp() {
    textContains("关闭").findOne().click();
    sleep(postpone);
    console.log("开始升级");
    var merge = textContains("喂猫升级").findOne();
    while (true) {
        merge.click();
        sleep(postpone);
        var close = textContains("关闭").findOnce();
        if (close) {
            close.click();
        }
        sleep(postpone / 2);
        var coin = textContains("我的喵币").findOnce().text().substr(5);
        if (coin < "60000") break;
    }
}

function fuckCat() {
    console.log("开始拍猫");
    var num = rawInput("输入拍猫次数（中途不可退，次数别太多）,输入-1退出");
    while (num--) {
        var cat = text("我的猫，点击撸猫").findOne();
        click(cat.bounds().centerX() + random(-10, 10) * 10,
            cat.bounds().centerY() + random(-10, 10) * 10);
        sleep(200 + random(-100, 100));
    }
}

startApp("taobao://pages.tmall.com/wow/z/hdwk/act-20201111/index");
toast("切换到支付宝");
sleep(postpone * 3);
startApp("alipays://platformapi/startapp?appId=68687502");
console.log("完活儿");
device.vibrate(1000);