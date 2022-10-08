onload = function(){
    let squares = document.getElementsByTagName("div")
    for (let i = 3; i < 12; i++) {
    squares[i].setAttribute("class","square")
    }
};

