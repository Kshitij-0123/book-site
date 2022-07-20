const button=document.querySelector("button");
const user_profile=document.querySelector(".user_profile")
button.addEventListener("click",()=>{
    user_profile.classList.toggle("user_profile_active")
})

const button_ico=document.querySelector(".site_icon");
const searchbar=document.querySelector(".search")
button_ico.addEventListener("click",()=>{
    searchbar.classList.toggle("search_active")
})


const activeStatus=document.querySelector(".act");
const t1=document.querySelector(".ta.na");
const t2=document.querySelector(".tb");
const t3=document.querySelector(".tc");
const t4=document.querySelector(".td");
const s1=document.querySelector(".stat.sa")
const s2=document.querySelector(".stat.sb")
const s3=document.querySelector(".stat.sc")
const s4=document.querySelector(".stat.sd")


t1.addEventListener("click",()=>{
    let ac=activeStatus.classList.item(2)
    activeStatus.classList.toggle(ac);
    activeStatus.classList.toggle("ta");
    if(ac==="tb"){
        s2.classList.toggle("stat_active");
    }
    else if(ac==="tc"){
        s3.classList.toggle("stat_active");
    }
    else if(ac==="td"){
        s4.classList.toggle("stat_active");
    }  
    else{return 0;}
    s1.classList.toggle("stat_active");  
    
});
t2.addEventListener("click",()=>{
    let ac=activeStatus.classList.item(2)
    activeStatus.classList.toggle(ac);
    activeStatus.classList.toggle("tb");
    if(ac==="ta"){
        s1.classList.toggle("stat_active");
    }
    else if(ac==="tc"){
        s3.classList.toggle("stat_active");
    }
    else if(ac==="td"){
        s4.classList.toggle("stat_active");
    }  
    else{return 0;}
    s2.classList.toggle("stat_active"); 
});

t3.addEventListener("click",()=>{
    let ac=activeStatus.classList.item(2)
    activeStatus.classList.toggle(ac);
    activeStatus.classList.toggle("tc");
    if(ac==="ta"){
        s1.classList.toggle("stat_active");
    }
    else if(ac==="tb"){
        s2.classList.toggle("stat_active");
    }
    else if(ac==="td"){
        s4.classList.toggle("stat_active");
    } 
    else{return 0;}
    s3.classList.toggle("stat_active"); 
});
t4.addEventListener("click",()=>{
    let ac=activeStatus.classList.item(2)
    activeStatus.classList.toggle(ac);
    activeStatus.classList.toggle("td");
    if(ac==="ta"){
        s1.classList.toggle("stat_active");
    }
    else if(ac==="tb"){
        s2.classList.toggle("stat_active");
    }
    else if(ac==="tc"){
        s3.classList.toggle("stat_active");
    }  
    else{return 0;}
    s4.classList.toggle("stat_active"); 
});

// const skillName = document.querySelectorAll(".skillName");
const skillRatingsf = document.querySelectorAll(".f");
const skillRatingsnf = document.querySelectorAll(".nf");
skillRatingsColor = {
    n:["#fa960a","#05c5fa","#ffb803","#1e6ffa","#a5cf36","rgba(24, 24, 29, 0.811)","#e05509","#f74848"],
    f:["#ffae3d","#2dcefa","#fac02d","#0850cc","#b1f005","rgba(24, 24, 29, 0.811)","#fc6c1e","#e83c3c"],
    nf:["#ffc370","#70dbff","#fae22d","#5c85cc","#d0ff4f","rgba(35, 35, 44, 0.811)","#f09767","#b35656"]
}
for (let i = 0; i < skillRatingsf.length; i++) {
    // skillName[i].style.color = skillRatingsColor["n"][i];
    // skillName[i].style.textShadow = `0 0 1px ${skillRatingsColor["n"][i]}`;
    skillRatingsf[i].style.color = skillRatingsColor["f"][i];
    skillRatingsnf[i].style.color = skillRatingsColor["nf"][i];
}

const nav = document.querySelector("nav");
let scrollC=window.scrollY;
window.addEventListener("scroll",()=>{
    if(window.scrollY > scrollC){
        nav.classList.add("nav-hidden");
        user_profile.classList.remove("user_profile_active")
    }
    else{
        nav.classList.remove("nav-hidden");
    }
    scrollC=window.scrollY;
})