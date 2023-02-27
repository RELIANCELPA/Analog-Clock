hour = document.querySelector(".hour");
minute = document.querySelector(".minute");
seconds = document.querySelector(".second");

function updateclock() {
    d = new Date();
    setTimeout(updateclock, 1000);
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

hour.style.transform = `rotate(${hrotation}deg)`;
minute.style.transform = `rotate(${mrotation}deg)`;
seconds.style.transform =`rotate(${srotation}deg)`;    
   
}
updateclock();