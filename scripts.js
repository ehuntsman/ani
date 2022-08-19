import { gsap } from "gsap";

window.onresize = window.onload = function(){ gsap.set('.container', {x:'0%', opacity:1}) }

gsap.timeline({defaults:{duration:45}})
    .add(function(){
      $('#main').on('mousemove', function(e){
        gsap.to('.linegroup', {duration:0, x:function(i){return (e.clientX/window.innerWidth)/(i+1)*150}, y:function(i){return i*-20*(e.clientY/window.innerHeight)}, rotation:Math.random()*0.1, overwrite:'auto'});
        gsap.to('.line', {duration:0, attr:{opacity:1.1-0.75*(e.clientY/window.innerHeight)}})
      });

      $('#main').on('click', function(e){
        if (gsap.getProperty('.linegroup','scale')!=1) return; //prevent overlapping bouncy tweens
        const collection = document.getElementsByClassName("example");
        e.target.style.stroke = "green";
        console.log("triggered", e.target, e.target.style);
      });
    },)

