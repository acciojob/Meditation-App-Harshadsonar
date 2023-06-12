const cloc = document.getElementById("clock");
const player = document.getElementById("player1");
const backImg = document.getElementById('app')

var timer;
let min, sec, flag = 0;

function set(minutes, seconds){
     min = minutes;
     sec = seconds;
    if (timer != null){
        
        clearInterval(timer);
    }

    timer = setInterval(()=>{
            cloc.innerHTML = min + ":" + sec;
            sec--;
            if (sec < 0){
                min--;
                sec = 59;
            }

            if(min < 0){
                clearInterval(timer);
            }
    }, 1000)
    
}

function pause(){
    clearInterval(timer);
    player.src = "https://cdn-icons-png.flaticon.com/512/26/26920.png?w=740&t=st=1684664534~exp=1684665134~hmac=eaa3a69518af6e84bee2fed79fd46e7af2f9783c6d46284f119e7986361b551b";    cloc.innerHTML = cloc.innerHTML = min + ":" + sec;
    backImg.style.background = "url('https://media.istockphoto.com/id/1300163718/photo/blurred-of-tropical-colorful-sunset-over-ocean-on-the-beach-at-thailand-tourism-background.jpg?s=612x612&w=0&k=20&c=LRDWMEp2XQ6OcNxKWPVEBF5Gnyui6Qu-a4asd9xCvoQ=')"
}

function play(){
    player.src = "https://static.vecteezy.com/system/resources/previews/000/630/415/original/vector-play-button-icon-design-illustration.jpg";
    backImg.style.background = "url('https://images.pexels.com/photos/311039/pexels-photo-311039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
    set(min, sec);
}

function exec(){
    if(flag){
        pause();
        flag = 0;
    }else{
        play();
        flag = 1;
    }
}