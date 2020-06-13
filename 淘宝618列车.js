auto.waitFor();
var height = device.height;
var width = device.width;
toast("\n设备宽" + width + "\n" + "设备高" + height + "\n" + "手机型号" + device.model + "\n安卓版本" + device.release)
setScreenMetrics(width, height);
toast("设备高"+height);
autoplay();

function swipe_act(act){
    while(textContains(act).exists()){        
        toast("存在" + act);
        textContains(act).findOne().click();
        sleep(random(200,2000)+1500);
        swipe(width / 2, height - 500, width / 2, 0, 500);
        sleep(random(200,2000)+2500);
        swipe(width / 2, height - 500, width / 2, 0, 500);
        sleep(random(200,2000)+9000);
        swipe(width / 2, height - 500, width / 2, 0, 500);
        sleep(random(200,2000)+8000);
        if(textContains("完成").exists()){
            back();
        } else {
        sleep(2200);
        back();
        }
        sleep(1600);
    }
    toast("完成[" + act + "]检测");
    sleep(2000);
}

function swipe_act2(act){
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
            sleep(2000);
        }
        toast("完成[" + act + "]检测");
        sleep(2000);
    }

   
function autoplay(){
    if(textEndsWith("签到").exists()){
        textEndsWith("签到").findOne().click();
        sleep(1600);
        toast("签到成功");
    }
    sleep(2000);
    toast("完成[签到]检测");

    swipe_act("去浏览");
    swipe_act("去搜索");
    swipe_act("去围观");
    swipe_act2("去观看");
    
   
    toast("结束");
}