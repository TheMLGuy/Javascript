function getDate(){
    var date=new Date()

    var hour=date.getHours().toString();
    var minutes=date.getMinutes().toString();
    var seconds=date.getSeconds().toString();
    var day=date.getDay().toString();
    if (hour.length<2){
        hour='0'+hour;
    }
    if (minutes.length<2){
        minutes='0'+minutes;
    }
    if (seconds.length<2){
        seconds='0'+seconds
    }
    days=['Mon','Tue','Wed','Thur','Fri','Sat','Sun']
    var clock=days[day-1]+' '+hour+':'+minutes+':'+seconds;
    
    document.getElementById('clock').innerHTML=clock;
}
getDate();

setInterval(getDate,1000);