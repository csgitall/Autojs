auto.waitFor();
var height = device.height;
var width = device.width;
var i = 0;
var keys = ["去浏览","去观看","去看看","去逛逛","领奖励","去完成","去发现"]
toast("\n设备宽" + width + "\n" + "设备高" + height)
setScreenMetrics(width, height);
console.show();
autoplay();

function swipe_act(act){
    //滑动浏览
    while(textContains(act).exists()){  
        toast("存在" + act);
        textContains(act).findOne().click();
        sleep(2000);
        swipe(width / 2, height - 500, width / 2, 0, random(10,200)+300);
        textContains("滑动浏览").findOne(5000);
        if(textContains("完成").exists()){
            back();
            sleep(2000);  
            continue;
          }
        swipe(width / 2, height - 500, width / 2, 0, random(10,200)+300);
        sleep(random(100,2000)+6000);
        swipe(width / 2, height - 500, width / 2, 0, random(10,200)+300);
        sleep(random(100,2000)+6000);
        swipe(width / 2, height - 500, width / 2, 0, random(10,200)+300);
        sleep(random(100,2000)+6000);
        if(textContains("完成").exists()){
            back();
          } else {
           sleep(5000);
           back();
         }
         log("完成第"+(i++)+"次任务\n");
         sleep(2000);  
    }
    toast("完成[" + act + "]任务");
}

function swipe_act2(act){
        //非滑动浏览
        while(textContains(act).exists()){        
            toast("存在" + act);
            textContains(act).findOne().click();
            sleep(20000);
            if(textContains("完成").exists()){
                back();
            } else {
            sleep(5000);
            back();
            }
            log("完成第"+(i++)+"次任务\n");
            sleep(2000);
        }
        toast("完成[" + act + "]检测");
        sleep(2000);
    }

function getaward(act){
    //主界面点击领奖励
        while(textContains(act).exists()){        
            toast("存在" + act);
            textContains(act).findOne().click();
                sleep(5000);
        }
        toast("完成[" + act + "]检测");
        sleep(1000);
    }
   
function autoplay(){
    sleep(2000);
    log("请选择刷屏浏览的关键字\n");
    var selecti=dialogs.multiChoice("选择浏览关键字", keys);
    for(var i=0;i<selecti.length;i++) {
        select_key=keys[selecti[i]];
        log("当前关键字是:"+select_key);
        sleep(2000);
        if(select_key.indexOf("观看") != -1) {swipe_act2("去观看");continue;}
        if(select_key.indexOf("奖励") != -1) {getaward("领奖励"); continue;}
        swipe_act(select_key);
    }
    toast("脚本结束");
}
