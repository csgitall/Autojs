auto.waitFor();
var height = device.height;
var width = device.width;
toast("\n设备宽" + width + "\n" + "设备高" + height + "\n")
setScreenMetrics(width, height);
autoplay();

function swipe(act){
    while(textContains(act).exists()){        
        toast("存在" + act);
        textContains(act).findOne().click();
        sleep(random(10,1000)+2000);
        swipe(width / 2, height - 500, width / 2, 0, random(1,200)+300);
        sleep(random(10,1000)+6000);
        swipe(width / 2, height - 500, width / 2, 0, random(1,200)+300);
        sleep(random(10,1000)+6000);
        swipe(width / 2, height - 500, width / 2, 0, random(1,200)+300);
        sleep(random(10,1000)+6000);
        if(textContains("完成").exists()){
            back();
        } else {
        sleep(2345);
        back();
        }
        sleep(2468);
    }
    toast("完成[" + act + "]检测");
    sleep(1357);
}

   
function autoplay(){
    sleep(2000);
    swipe("去浏览");
    toast("领取结束");
}
