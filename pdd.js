/*
拼多多 多多精灵 每晚20点 钻石秒杀脚本 (本人已经成功秒杀多次)

使用方法
打开拼多多活动界面，一堆精灵的菜园子那个
在19点59分50秒启动本脚本，然后全程不用管了
(在代码第50行双引号内预先填入商品名字)
可以根据自己实际情况调整第45行阈值，你手机加载越快值越大且<1000

*/
auto.waitFor();
auto.setMode("fast");

console.show();

var h = 0,
    m = 0,
    s = 8;
ss = 0;
while (true) {
    var myDate = new Date();
    console.log("当前 : %d 。", myDate.getSeconds());
    if (myDate.getHours() >= h &&
        myDate.getMinutes() >= m &&
        myDate.getSeconds() % 10 >= s &&
        myDate.getMilliseconds() >= ss)
        break;
}

var myDate = new Date();
console.log("加载拼多多 : %d 。", myDate.getSeconds());
launch("com.xunmeng.pinduoduo");

var myDate = new Date();
console.log("进入界面 : %d 。", myDate.getSeconds());

var next = text("立即兑换").findOne();
console.log(next.text());

while (true) {
    var myDate = new Date();
    console.log(myDate.getSeconds() + ":" +
        myDate.getMilliseconds());
    if (myDate.getSeconds() % 10 == 9 &&
        myDate.getMilliseconds() > 600)
        break;
}

next.click();
var goods = textContains("惠百施牙刷2支").findOne();

console.log("找到%s", goods.text());

click(goods.bounds().centerX(), goods.bounds().centerY());

var confirm = text("确认兑换").findOne();
confirm.click();
console.log(confirm);
console.log("点击 确认 成功");


sleep(250);
while (true)
    click(700, 1850);

/*
console.log("等待地址加载...");
var address = text("川建国").findOne();
console.log(address);
click(address.bounds().centerX(), address.bounds().centerY());

var myDate = new Date();
console.log("抢购成功 : %d 。", myDate.getSeconds());

*/