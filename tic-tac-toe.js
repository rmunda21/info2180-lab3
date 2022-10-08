let squares = document.getElementsByTagName("div");
const positions = {}
let current = ''
onload = function(){
    for (let i = 3; i < 12; i++) {
    squares[i].setAttribute("class","square");
    squares[i].setAttribute("id","pos"+i)
    squares[i].onmouseover = function(){
        squares[i].classList.add("class","hover")
    }
    squares[i].onmouseout = function(){
        squares[i].classList.remove("class","hover")

    }
    squares[i].onclick = function(){
        // console.log(current)
        console.log(positions)
        // console.log([squares[i]])
        // console.log(positions[squares[i].id])
        if ((current == '' || current == 'O') && (positions[squares[i].id] == undefined )){
            current = 'X'
            positions[squares[i].id] = current
            squares[i].classList.add("class","X")
            squares[i].textContent = 'X'
            
        }
        else if(current == 'X' && positions[squares[i].id] == undefined ){
            current = 'O'
            positions[squares[i].id] = current
            squares[i].classList.add("class","O")
            squares[i].textContent = 'O'
            
        }
        
    }
    };
}



