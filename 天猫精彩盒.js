auto.waitFor();
var height = device.height;
var width = device.width;
var i = 0;
var rule = 0;
// rule = 0, no rules
// rule = 1, rules for 京喜城市玩家
// rule = 2, rules for 淘宝特币
toast("\n设备宽" + width + "\n" + "设备高" + height)
setScreenMetrics(width, height);
console.show();
autoplay();

//find & swipe 函数 版本 1.01
//June 14, 2020
//包括 过滤函数find_swipe_act 和 滑动函数swipe_act
//参数包括：
//按键文字，按键控件
//开始浏览计时关键字（可空），结束浏览计时（不确定则写完成）
//按键进入等待时间，滑动时间，返回主界面等待时间
function find_swipe_act(actkey,startkey,finishkey,waittime,swipetime,returntime){
    log("目前关键字是"+actkey);
    //过滤规则0， 即无过滤规则，存在单行多次任务
    if(rule == 0){
        toast("存在" + actkey);
        while(textContains(actkey).exists()){
            act_btn = textContains(actkey).findOne(5000);
            curr_index=act_btn.indexInParent();
            log(act_btn.parent().child(curr_index-1).text());
            swipe_act(act_btn,startkey,finishkey,waittime,swipetime,returntime);
        } 
        return(1);
    }
    //过滤规则1,2，均为单次任务
    act_all = textContains(actkey).find(5000);
    var j = 0;
    for(j=0; j<act_all.length; j++){
        if(rule == 1){
        // 过滤规则1： 京喜城市玩家
            curr_index=act_all[j].indexInParent();
            //log(button_all[j].text());
            log(act_all[j].parent().child(curr_index-1).text());
            curr_tip=act_all[j].parent().child(curr_index-1).text();
            if(curr_tip.indexOf("逛") != -1){ 
                toast("存在" + actkey);
                swipe_act(act_all[j],startkey,finishkey,waittime,swipetime,returntime);
            }
        }
        if(rule == 2){
        // 过滤规则2：淘宝特币
        curr_index=act_all[j].indexInParent();
        log(act_all[j].parent().child(curr_index-1).child(0).text());
        log(act_all[j].parent().child(curr_index-1).child(1).text());
        toast("存在" + actkey);
        swipe_act(act_all[j],startkey,finishkey,waittime,swipetime,returntime);
        }
    }
}

function swipe_act(act_btn,startkey,finishkey,waittime,swipetime,returntime){
    act_btn.click();
    sleep(waittime);
    // some use textContains, some use descContains, some use picture
    if(startkey != ""){
        descContains(startkey).findOne(5000);
        if(descContains(startkey).exists()){
            log("找到了"+startkey);
        }
    }
    if(descContains(finishkey).exists()){
        back();
        sleep(returntime);  
        return(1);
        }
    swipe_random();
    sleep(random(100,2000)+swipetime*0.5);
    swipe_random();
    sleep(random(100,2000)+swipetime*0.5);
    swipe_random();
    sleep(random(100,2000)+swipetime*0.5);
    if(descContains(finishkey).exists()){
        back();
        log("找到了"+finishkey);
    } else {
        sleep(2500);
        back();
        }
    log("完成了第"+(++i)+"个任务");
    sleep(returntime);  
}

function swipe_random(){
    swipe(width/(random(18,22)*0.1),height-random(200,600),width/(random(18,22)*0.1),random(0,50),random(10,200)+300);
}

function view_act(actkey,finishkey,time){
    while(textContains(actkey).exists()){        
        toast("存在" + actkey);
        textContains(actkey).findOne(5000).click();
        sleep(time*1.5);
        if(textContains(finishkey).exists()){
            back();
        } else {
        sleep(5000);
        back();
        }
        sleep(2000);
    }
    toast("完成[" + actkey + "]检测");
}

function getaward(actkey,time){
    log("目前关键字是"+actkey);
    while(text(actkey).exists()){ 
        //使用text() 可以精确匹配
        //log(text(actkey).findOne());      
        text(actkey).findOne(5000).click();
        sleep(time);
        log("领取第"+(++i)+"个奖励");
    }
}

   
function autoplay(){

    if(text("去签到").exists()){
            text("去签到").findOne(5000).click();
            sleep(2000);
            log("签到成功");
    }
    sleep(2000);
    i = 0;
    find_swipe_act("去逛逛","浏览","完成",2500,15000,3000);

    log("脚本结束");
}

