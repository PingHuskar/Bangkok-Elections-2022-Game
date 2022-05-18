window.OnLoad = $.map($('img'),function(e) { 
    Prep(e);
    console.log(e)
})
var pp = $('p')

var mar = $('marquee')
console.log(mar)
for (var i=0;i<mar.length;i++) {
    mar[i].setAttribute("scrollamount",10+Math.random()*80)
}
console.log('done')
function GameOver() {
    $('p').css('color','black');
    document.body.style.backgroundColor = 'blue'
    alert("Game Over! You Score : "+document.getElementById('score').innerHTML)
    // history.back()
    document.getElementById('score').innerHTML = 0;
    // open('https://mgronline.com/business/detail/9650000040118')
}
function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
function f() {
    document.getElementById('candit1').style.display = 'initial';
    for (var i=0;i<pp.length;i++) {
        pp[i].style.color = "#" + Math.floor(Math.random()*16777215).toString(16);
    }
        document.body.style.backgroundColor = "#" + `${getRandomNumberBetween(0,9)}${getRandomNumberBetween(0,9)}${getRandomNumberBetween(0,9)}`
    $.map($('img'),function(e) { 
    Prep(e);
    console.log(e)
})
}
function Prep(obj){
    window_Height = window.innerHeight;
    window_Width = window.innerWidth;
    image_Element = document.getElementById(obj.getAttribute('id'));
    image_Height = image_Element.clientHeight;
    image_Width = image_Element.clientWidth;
    
    availSpace_V = window_Height - image_Height;
    availSpace_H = window_Width - image_Width;
    var randNum_V = Math.round(Math.random() * availSpace_V);
    var randNum_H = Math.round(Math.random() * availSpace_H);
    
    image_Element.style.top = randNum_V + "px";
    image_Element.style.left = randNum_H + "px";
    
}