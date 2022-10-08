let squares = document.getElementsByTagName("div");
onload = function(){
    for (let i = 3; i < 12; i++) {
    squares[i].setAttribute("class","square");
    squares[i].onmouseover = function(){
        squares[i].classList.add("class","hover")
    }
    squares[i].onmouseout = function(){
        squares[i].classList.remove("class","hover")

    }
    };
}



