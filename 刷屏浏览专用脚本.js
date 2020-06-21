//辅助自动刷屏定制AutoJs脚本 版本 1.02
//June 21, 2020
//主要包括:
//过滤函数find_and_swipe，find_and_view·
//滑动浏览函数 swipe_act
//非滑动浏览函数 view_act

auto.waitFor();
//debug 模式， 0表示关闭
var debug = 0;
var height = device.height;
var width = device.width;
toast("\n设备宽 " + width + "，" + "设备高 " + height);
setScreenMetrics(width, height);
console.show();

//每个规则需要分别定义：
//活动名称 allrules
//活动界面关键字 uikeys
//活动按键关键字 actkeys
//只浏览不刷屏按键关键字 viewkeys
//部分非活动按键关键字 noactkeys
//开始浏览计时关键字 startkeys
//结束浏览关键字 finishkeys
//界面跳转等待时间 jumptime
//浏览时间 watchtime

// rule = 0, no rules，备用
var allrules = ["未定义"];
var uikeys = [""];
var actkeys = ["去完成"];
var viewkeys = [""];
var noactkeys = [""];
var startkeys = [""];
var finishkeys = [""];
var awardkeys = [""];
var jumptimes = [5000];
var watchtimes = [15000];
var rule = 0;
var i = 0;
// rule = 0, no rules，备用

//Start of Rule，京喜-全民赚大钱-每日赚财富
allrules.push("京喜财富岛");
uikeys.push("日常赚财富");
actkeys.push("去逛逛");
viewkeys.push("");
noactkeys.push("");
startkeys.push("");
finishkeys.push("");
awardkeys.push("领奖励");
jumptimes.push(7000);
watchtimes.push(5000);
//End of Rule，京喜-全民赚大钱-每日赚财富

//Start of Rule，京喜-任务赚财富-做任务赚金币-浏览任务
allrules.push("京喜浏览赚金币");
uikeys.push("浏览任务");
actkeys.push("浏览+1");
viewkeys.push("");
noactkeys.push("");
startkeys.push("");
finishkeys.push("");
awardkeys.push("");
jumptimes.push(5000);
watchtimes.push(3000);
//End of Rule，京喜-任务赚财富-做任务赚金币-浏览任务

//Start of Rule，淘宝特价版-赚特币-赚币
allrules.push("淘宝特币");
uikeys.push("赚币中心");
actkeys.push("去完成|去浏览|去发现");
viewkeys.push("");
noactkeys.push("买就返");
startkeys.push("");
finishkeys.push("");
awardkeys.push("");
jumptimes.push(3000);
watchtimes.push(15000);
//End of Rule，淘宝特价版-赚特币-赚币

//Start of Rule，淘宝-搜索天猫精彩盒-
allrules.push("天猫精彩盒");
uikeys.push("开箱能量");
actkeys.push("去逛逛");
viewkeys.push("");
noactkeys.push("");
startkeys.push("浏览");
finishkeys.push("完成");
awardkeys.push("");
jumptimes.push(3000);
watchtimes.push(5000);
//End of Rule，淘宝-搜索天猫精彩盒-


autoplay();

function autoplay(){
        log("辅助刷屏定制Js脚本,ver 1.02");
        sleep(2000);
        var rule=dialogs.singleChoice("请选择当前的项目", allrules);
        log("你选择的脚本是"+allrules[rule]);

        actkeys_arr=actkeys[rule].split("|");
        for(var j=0; j<actkeys_arr.length; j++){
            log("当前关键字是："+actkeys_arr[j]);
            find_and_swipe(uikeys[rule],
                actkeys_arr[j],noactkeys[rule],
                startkeys[rule],finishkeys[rule],
                jumptimes[rule],watchtimes[rule]);
        }

        // find_and_view(uikeys[rule],
        //     viewkeys[rule],
        //     jumptimes[rule],watchtimes[rule])

        if(awardkeys[rule] != ""){getaward(awardkeys[rule],jumptimes[rule]);}

        log("脚本结束,可以关闭控制台。\n（202006, by fy）。");
    }
    
function find_and_swipe(uikey,actkey,noactkey,startkey,finishkey,jumptime,watchtime){
    sleep(2000);
    while(true){
        if(debug == true) {log("检查主界面："+uikey+textContains(uikey).exists());}
        if(check_uikey(uikey,jumptime) == false){
            log("异常：未能找到主界面，退出！");
            return(1);
        }
    
        // act_all = textContains(actkey).find();
        // 浏览关键字修改为精确匹配
        act_all = text(actkey).find();
        if(debug == true){log("找到"+act_all.length+"个任务")}
        if(act_all.length == 0){
            log("无剩余任务，退出！");
            return(2);
        }
        var j = 0;
        //遍历所有任务名称，统计非有效任务数目
        if(noactkey != ""){
            var k = 0;
            for(j=0; j<act_all.length; j++){
                curr_index=act_all[j].indexInParent();
                curr_tip=act_all[j].parent().child(curr_index-1);
                curr_tip_text=get_tip_text(curr_tip);
                if(debug == true){log("目前任务是"+curr_tip_text);}
                if(curr_tip_text.indexOf(noactkey) != -1){k++;}
                if(debug == true){log("找到"+k+"个无效任务");}
            }
            if(k == act_all.length){
                log("无剩余有效任务，退出！");
                return(2);
            }
       }

        //浏览第一个正确的任务，然后退出for循环，开始下一个while循环判断有效任务数
        for(j=0; j<act_all.length; j++){
            curr_index=act_all[j].indexInParent();
            curr_tip=act_all[j].parent().child(curr_index-1);
            curr_tip_text=get_tip_text(curr_tip);
            
            if (noactkey == ""){
                log("当前任务:"+curr_tip_text);
                swipe_act(act_all[j],startkey,finishkey,watchtime,jumptime);
                break;
            } else {
                if(curr_tip_text.indexOf(noactkey) == -1){
                    log("当前有效任务:"+curr_tip_text);
                    swipe_act(act_all[j],startkey,finishkey,watchtime,jumptime);
                    break;
                }
            }
        }
    } //end of while

}//end of function

function swipe_act(act_btn,startkey,finishkey,watchtime,jumptime){
    act_btn.click();
    // some use textContains, some use descContains, some use picture
    sleep(jumptime);
    check_startkey(startkey);
    swipe_random();
    sleep(random(200,2000)+watchtime*0.4);
    swipe_random();
    sleep(random(200,2000)+watchtime*0.4);
    swipe_random();
    sleep(random(200,2000)+watchtime*0.4);
    check_finishkey(finishkey);
    back();
    log("完成了第"+(++i)+"个任务");
    sleep(jumptime); 
}

function check_uikey(key,time){
    if(textContains(key).exists() == false){
        //还要增加恢复主界面的方法
        //尝试增加一次返回键检测是否能回到主界面
        if(debug == true){log("第一次没有找到"+key);}
        sleep(time);
        if(textContains(key).exists() == false){
            if(debug == true){log("第二次没有找到"+key);}
            back();
            sleep(time);
        }
        if(textContains(key).exists() == false){return(false);}
        }
    return(true);
}

function check_startkey(key){
    if(key == "") {
        sleep(5000);
        return(false);
    }
    for(var j=0; j<5; j++){
        if(textContains(key).exists() || descContains(key).exists()){
            log("找到了"+key);
            return(true);
        }
        sleep(1000);
    }
    return(false);
}

function check_finishkey(key){
    if(key == "") {
        sleep(5000);
        return(false);
    }
    for(var j=0; j<5; j++){
        if(textContains(key).exists() || descContains(key).exists()){
            log("找到了"+key);
            return(true);
        }
        sleep(1000);
    }
    return(false);
}

function get_tip_text(tip){
    var child_num = tip.childCount();
    var tip_text = "";
    if(child_num == 0) {return(tip.text()+tip.desc());}
    for(var j=0; j<child_num; j++){
        tip_text=tip_text+tip.child(j).text()+tip.child(j).desc();
    }
    return(tip_text);
}

function swipe_random(){
    swipe(width/(random(18,22)*0.1),height-random(200,600),
        width/(random(18,22)*0.1),random(0,50),random(10,200)+300);
}

function getaward(key,time){
    var j = 0;
    log("开始领奖励，关键字是"+key);
    while(textContains(key).exists()){        
        toast("存在" + key);
        textContains(key).findOne().click();
        sleep(time);
        log("领取第"+(++j)+"个奖励");
    }
    toast("完成领取奖励");
}