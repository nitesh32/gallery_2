var one=document.getElementById("one");
var two=document.getElementById("two");
var three=document.getElementById("three");
var four=document.getElementById("four");
var five=document.getElementById("five");
function dejhrf(){
    one.style.width="19.5%";
    two.style.width="19.5%";
    three.style.width="19.5%";
    four.style.width="19.5%";
    five.style.width="19.5%";
}
one.addEventListener('mouseenter',function(){
    one.style.width="30%";
    two.style.width="14.5%";
    three.style.width="15%";
    one.style.transition="2s";
    two.style.transition="2s";
    three.style.transition="2s";
})
one.addEventListener('mouseleave',function(){
    dejhrf();
})
two.addEventListener('mouseenter',function(){
    one.style.width="15%";
    two.style.width="30%";
    three.style.width="15%"
    one.style.transition="2s";
    two.style.transition="2s";
    three.style.transition="2s";
})
two.addEventListener('mouseleave',function(){
    dejhrf();
})
three.addEventListener('mouseenter',function(){
    two.style.width="15%";
    three.style.width="30%";
    four.style.width="15%"
    four.style.transition="2s";
    two.style.transition="2s";
    three.style.transition="2s";
})
three.addEventListener('mouseleave',function(){
    dejhrf();
})
four.addEventListener('mouseenter',function(){
    three.style.width="15%";
    four.style.width="30%";
    five.style.width="15%"
    four.style.transition="2s";
    five.style.transition="2s";
    three.style.transition="2s";
})
four.addEventListener('mouseleave',function(){
    dejhrf();
})
five.addEventListener('mouseenter',function(){
    five.style.width="30%";
    four.style.width="14.5%";
    three.style.width="15%";
    five.style.transition="2s";
    four.style.transition="2s";
    three.style.transition="2s";
})
five.addEventListener('mouseleave',function(){
    dejhrf();
})