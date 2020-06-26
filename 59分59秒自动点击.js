//获取时间并自动点击相应按钮 版本 1.02
//June 25, 2020

auto.waitFor();
//debug 模式， 0表示关闭
var debug = 1;

//需要定义开始分钟数
//需要定义开始秒数，及下一分钟的结束秒数
var startMinute = 59;
var startSecond = 59;
var stopSecond = 2;
//定义目标时间
var target_d = new Date();
target_d.setMinutes(startMinute);
target_d.setSeconds(startSecond);
target_time = target_d.getTime();

console.show();
log("59秒辅助抢购定制Js脚本\nversion 1.02");

var allrules = ["未定义"];
allrules.push("阿里巴巴元宝兑换");

sleep(2000);
var rule=dialogs.singleChoice("请选择当前的项目", allrules);
log("你选择的脚本是:\n"+allrules[rule]);

var d = new Date();//获取系统当前时间
var nowHour = d.getHours();
var nowMinute = d.getMinutes();
var nowSecond = d.getSeconds();
var nowMSecond = d.getMilliseconds();

log("当前时间：");
log(nowHour+"时"+nowMinute+"分"+nowSecond+"秒"+nowMSecond+"毫秒");
log("目标时间：");
log(target_d.getHours()+"时"+target_d.getMinutes()+"分"+target_d.getSeconds()+"秒");
if(debug == 1){log(target_time);}
log("距离目标还剩余："+(target_d-d)/1000+"秒");

//定义分类规则
var rule = 1;
if(rule == 1){
    //场景1，阿里巴巴，元宝兑换红包，10点，14点
    var clickKey = "300个元宝";
    var endKey = "";
    log("……3秒后试点一下……\n……注意看是否有响应……");
    sleep(3000);
    get_btn(1,clickKey).click();
    find_and_autoClick(1,clickKey,endKey);
}

if(rule == 2){
    //场景2，待补充
    ;
}

log("脚本结束,可以关闭控制台。\n（202006, by fy）。");
//主程序结束


//获取按键的方法，需要根据项目增加
function get_btn(rule,key){
    var btn;
    switch(rule){
        case 1: btn=get_btn_1688(key); break;
        default: log("规则不存在");
    }
    return(btn);
}

function get_btn_1688(key){
    //正常返回按钮控件，没找到则返回false
    try{
        var btn = descContains(key).findOne(3000).parent();
        return(btn);
    }
    catch(e){
        log(e.name+":"+e.message);
        return(false);
    }
}

function find_and_autoClick(rule,clickKey,endKey){
    //其它时间参数，单位秒
    var btn_wait = 0.1;
    var short_wait = 0.5;
    var long_wait = 10;
    var prepareSecond = long_wait+5;

    var i = 0;
    var btn = get_btn(rule,clickKey);

    while(true){
        d = new Date();
        nowMinute = d.getMinutes();
        nowSecond = d.getSeconds();
        nowMSecond = d.getMilliseconds();
        nowTime = d.getTime();
    
        if(nowTime >= target_time+(60-startSecond+stopSecond)*1000){
            log(nowMinute+"分"+nowSecond+"秒"+nowMSecond+"毫秒");
            log("超时结束，退出！");
            break;
        }
        if(nowTime > target_time-prepareSecond*1000){
            if(nowTime >= target_time){
                btn.click();
                log(nowMinute+"分"+nowSecond+"秒"+nowMSecond+"毫秒");
                log("跑……");

                if(nowTime >= target_time+(60-startSecond+1)*1000 && endKey != ""){
                    if(txtContains(endKey) || descContains(endKey)){
                        log(nowMinute+"分"+nowSecond+"秒"+nowMSecond+"毫秒");
                        log("抢购结束，退出！");
                        break;
                    }
                }
            } else{
                    if(i++ == 0){
                        log(nowMinute+"分"+nowSecond+"秒"+nowMSecond+"毫秒");
                        log("预……备……");
                    }
                sleep(short_wait);
            }
        } else{
            log("等一会儿……");
            log(nowMinute+"分"+nowSecond+"秒"+nowMSecond+"毫秒");
            log("距离目标还剩余："+(target_d-d)/1000+"秒");
            btn = get_btn(rule,clickKey);
            sleep(long_wait*1000);
        }
        sleep(btn_wait*1000);
    }
} 
