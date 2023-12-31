var icon = document.getElementById('icon');

let localData = localStorage.getItem("theme");

if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme","light")
}

if(localData == "light"){
    icon.src="dark theme icon/moon.png"
    document.body.classList.remove("Dark-mode")
}else if(localData == "dark"){
    icon.src="dark theme icon/sun.png";
    document.body.classList.add("Dark-mode")
}

icon.onclick =  function myF(){
    document.body.classList.toggle("Dark-mode")

    if(document.body.classList.contains("Dark-mode")){
        icon.src="dark theme icon/sun.png"
        localStorage.setItem("theme","dark")
    }else{
        icon.src="dark theme icon/moon.png"
        localStorage.setItem("theme","light")
    }
}

if(localStorage.getItem('dark')) {
    body.classList.add('dark');
}

function openNav() {
    document.getElementById("mySidenav").style.width = "50%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }