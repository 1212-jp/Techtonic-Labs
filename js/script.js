
let size=parseInt(localStorage.getItem('fontSize')||'16');

function announce(msg){
 const live=document.getElementById('live-region');
 if(!live) return;
 live.textContent='';
 setTimeout(()=>{
   live.textContent=msg;
   setTimeout(()=>{live.textContent='';},1200);
 },50);
}

function applyFont(){
 document.documentElement.style.fontSize=size+'px';
 document.body.style.fontSize=size+'px';
 localStorage.setItem('fontSize',size);
}

function changeFont(v){
 if(v===0){size=16;announce('Font reset to 16 pixels');}
 else if(v>0){size+=2;announce('Font increased to '+size+' pixels');}
 else {size=Math.max(12,size-2);announce('Font decreased to '+size+' pixels');}
 applyFont();
}

function toggleTheme(){
 document.body.classList.toggle('light');
 const isLight=document.body.classList.contains('light');
 localStorage.setItem('theme',isLight?'light':'dark');
 announce(isLight?'Website is light mode':'Website is dark mode');
}

window.addEventListener('load',()=>{
 applyFont();
 if(localStorage.getItem('theme')==='light'){
   document.body.classList.add('light');
 }
});

function toggleMenu(){const n=document.getElementById('main-nav'); if(n) n.classList.toggle('show');}
