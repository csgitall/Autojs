auto.waitFor();
var height = device.height;
var width = device.width;
var i = 0;
toast("\n设备宽" + width + "\n" + "设备高" + height)
setScreenMetrics(width, height);
console.show();
autoplay();

function swipe_random(){
    swipe(width/(random(18,22)*0.1),height-random(200,600),width/(random(18,22)*0.1),random(0,50),random(10,200)+300);
}

function swipe_act(actkey,startkey,finishkey,waittime,swipetime,returntime){
    log("目前关键字是"+actkey);
    while(textContains(actkey).exists()){  
        toast("存在" + actkey);
        textContains(actkey).findOne().click();
        sleep(waittime);
        descContains(startkey).findOne(5000);
        if(descContains(startkey).exists()){
            log("找到了"+startkey);
        }
        if(descContains(finishkey).exists()){
            back();
            sleep(returntime);  
            continue;
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
    toast("完成[" + actkey + "]检测");
}

function view_act(actkey,finishkey,time){
        while(textContains(actkey).exists()){        
            toast("存在" + actkey);
            textContains(actkey).findOne().click();
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

   
function autoplay(){
    if(textEndsWith("签到").exists()){
        textEndsWith("签到").findOne().click();
        sleep(1600);
        toast("签到成功");
    }
    sleep(2000);

    swipe_act("去浏览","浏览","完成",2500,15000,3000);
    view_act("去观看","完成",15000);
    
    log("脚本结束");
}