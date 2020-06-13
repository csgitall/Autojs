auto.waitFor();
var height = device.height;
var width = device.width;
toast("\n设备宽" + width + "\n" + "设备高" + height + "\n")
setScreenMetrics(width, height);
autoplay();

function swipe_act(act){
    while(textContains(act).exists()){ 
        sleep(5000);     
        toast("存在" + act);
        textContains(act).findOne().click();
        sleep(2000);
        swipe(width / 2, height - 500, width / 2, 0, random(10,200)+300);
        textContains("滑动浏览").findOne(5000);
        if(textContains("完成").exists()){
            back();
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
           sleep(5000)；
           back();
         }
    }
    toast("完成[" + act + "]任务");
}

   
function autoplay(){
    sleep(2000);
    swipe_act("去浏览");
}
