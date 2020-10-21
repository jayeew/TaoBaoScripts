
auto();

console.show();
var postpone = rawInput("全局延迟设定(建议1-5，越低越快，越高越稳定但慢");
postpone = postpone * 1000;
launch("com.taobao.taobao");
sleep(5000);

console.log("准备进入活动界面，若未出现进入界面成功的提示，请开高延迟");
desc("搜索").findOne().click();
sleep(postpone);
id("searchEdit").findOne().setText("双十一");
sleep(postpone);
id("searchbtn").findOne().click();
sleep(postpone * 2);

var enter = desc("进入").findOne();
click(enter.bounds().centerX(),
    enter.bounds().centerY());
sleep(postpone * 2);
text("活动链接").findOne().click();
sleep(postpone * 2);

console.log("进入活动界面成功");

text("赚喵币").findOne().click();
sleep(postpone * 2);

while (true) {
    var t=new Date();
    var golook = text("去浏览").findOnce();
    if (golook) {
        golook.click();
        var x=random(1,5);
        while(x--){
        sleep(5000+t.getSeconds()*10);
        swipe(700+t.getSeconds(),
        2000-t.getSeconds()*10,
        200+t.getMilliseconds(),
        700+t.getMilliseconds(),
        1000);
        }
        sleep(15000+t.getSeconds()*10);
        back();
        sleep(1000);
    } else
        break;
}

while (true) {
    var t=new Date();
    var golook = text("去完成").findOnce(1);
    if (golook) {
        golook.click();
        var x=random(1,5);
        while(x--){
        sleep(5000+t.getSeconds()*10);
        swipe(700+t.getSeconds(),
        2000-t.getSeconds()*10,
        200+t.getMilliseconds(),
        700+t.getMilliseconds(),
        1000);
        }
        if (text("50000").findOnce()) {
            back();
            continue;
        }
        sleep(15000+t.getSeconds()*10);
        back();
        sleep(1000);
    } else
        break;
}
console.log("浏览任务已经完成");
indexInParent(0).text("关闭").findOne().click();
sleep(postpone);
console.log("开始升级");
var merge = textContains("喂猫升级").findOne();
while (true) {
    merge.click();
    sleep(postpone);
    var receive = textContains("开心收下").findOnce();
    if (receive) {
        receive.click();
        //sleep(postpone);
    }
    var non_enough = text("哎哟，喵币不足啦").findOnce();
    if (non_enough) {
        indexInParent(3).text("关闭").findOne().click();
        break;
    }
    var decoration = text("领取成就勋章").findOnce();
    if (decoration) {
        indexInParent(4).text("关闭").findOne().click();
        break;
    }
}
console.log("执行完毕，开始拍猫");

while(true) {
    var num = rawInput("输入拍猫次数（中途不可退，次数别太多）,输入-1退出");
    if (num<0) {
        break;
    }
    while (num--) {

        var cat=text("我的猫，点击撸猫").findOne();
        click(cat.bounds().centerX()+random(1,5)*5,
        cat.bounds().centerY()+random(1,5)*5);
        sleep(200);
    }
}
console.log("完活儿");
