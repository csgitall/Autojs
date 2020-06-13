auto.waitFor();
var height = device.height;
var width = device.width;
toast("\n设备宽" + width + "\n" + "设备高" + height + "\n" )
setScreenMetrics(width, height);
autoplay();

function swipe(act){
    while(textContains(act).exists()){        
        toast("存在" + act);
        textContains(act).findOne().click();
        sleep(2000);
        swipe(width / 2, height - 500, width / 2, 0, 500);
        sleep(7000);
        swipe(width / 2, height - 500, width / 2, 0, 500);
        sleep(1000);
        back();
        sleep(8000);
    }
    toast("完成[" + act + "]检测");
    sleep(2000);
}

function getaward(act){
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
    swipe("去逛逛");
    getaward("领奖励");   
    toast("结束");
}
