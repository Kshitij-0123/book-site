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