auto.waitFor();
var height = device.height;
var width = device.width;
var i = 0;
var j = 0;
toast("\n设备宽" + width + "\n" + "设备高" + height)
console.show();
setScreenMetrics(width, height);
autoplay();

function swipe_random(){
    swipe(width/(random(18,22)*0.1),height-random(200,600),width/(random(18,22)*0.1),random(0,50),random(10,200)+300);
}

function swipe_act(actkey,startkey,finishkey,swipetime,returntime){
    log("目前关键字是"+actkey);
    while(textContains(actkey).exists()){  
        toast("存在" + actkey);
        textContains(actkey).findOne().click();
        sleep(5000);
        //textContains(startkey).findOne(5000);
        //if(textContains(finishkey).exists()){
        //    back();
        //    sleep(2000);  
        //    continue;
        //  }
        swipe_random();
        sleep(random(100,2000)+swipetime);
        //swipe_random();
        //sleep(random(100,2000)+time*0.5);
        //swipe_random();
        //sleep(random(100,2000)+time*0.5);
        if(!textContains(startkey).exists()){
            back();
        } else {
        sleep(5000);
        back();
        }
     log("完成了第"+(++i)+"个任务");
     sleep(returntime);  
    }
    toast("完成[" + actkey + "]检测");
}

function getaward(actkey,time){
    log("目前关键字是"+actkey);
    while(textContains(actkey).exists()){        
        toast("存在" + actkey);
        textContains(actkey).findOne().click();
        sleep(time);
        log("领取第"+(++j)+"个奖励");
    }
    toast("完成[" + actkey + "]检测");
}
   
function autoplay(){
    sleep(2000);
    swipe_act("去逛逛","滑动浏览","",5000,8000);
    getaward("领奖励",5000);   
    log("脚本结束");
}
