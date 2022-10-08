let squares = document.getElementsByTagName("div");
let new_button = document.getElementsByTagName("button")
let positions = {}
let current = ''
let winner = false
let page_loaded = false

function new_game(){
    current = ''
    winner = false
    positions = {}
    let status = document.getElementById("status")
    status.removeAttribute("class")
    status.textContent = "Move your mouse over a square and click to play an X or an O."
    reset_game(squares)
    load_game(squares)
}

function load_game(squares_list){
    for (let i = 3; i < 12; i++) {
        squares_list[i].setAttribute("class","square");
        squares_list[i].setAttribute("id",i-3)
        squares_list[i].onmouseover = function(){
            squares_list[i].classList.add("class","hover")
        }
        squares_list[i].onmouseout = function(){
            squares_list[i].classList.remove("class","hover")

        }
        squares_list[i].setAttribute("onclick","input_option(this)")
    }

}

function reset_game(squares_list){
    for (let i = 3; i < 12; i++) {
        squares_list[i].textContent = ""
        squares_list[i].removeAttribute("class");
        squares_list[i].removeAttribute("id")
        squares_list[i].removeAttribute("onclick")
        console.log(squares_list[i])
    }

}

function row_check(tiles,choice){
    for(let i = 0 + tiles[0];i<tiles.length+tiles[0];i++){
        if(positions[i] != choice)
            return false
            //console.log(positions[i]+" "+i)
    }
    return true
}

function column_check(tiles,choice){ 
    for(let i = 0;i<tiles.length;i++){
        //console.log("Current Tiles "+tiles[i])
        if(positions[tiles[i]] != choice)
            return false
    
    }
    return true
}

function diagonal_check(tiles,choice){ 
    for(let i = 0;i<tiles.length;i++){
        //console.log("Current Tiles "+tiles[i])
        if(positions[tiles[i]] != choice)
            return false
    
    }
    return true
}

function input_option(square){
    // console.log(square)
    // console.log([squares[i]])
    // console.log(positions[squares[i].id])
    if (winner == false){
        let rows = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        ]
        let columns = [
            [0,3,6],
            [1,4,7],
            [2,5,8]
        ]
        let diagonals = [
            [0,4,8],
            [2,4,6]
        ]
        
        let current_row = 0
        let current_column = 0
        let current_diagonal = 0
        
        if ((current == '' || current == 'O') && (positions[square.id] == undefined )){
            current = 'X'
            positions[square.id] = current
            square.classList.add("class","X")
            square.textContent = 'X'
            
        }
        else if(current == 'X' && positions[square.id] == undefined ){
            current = 'O'
            positions[square.id] = current
            square.classList.add("class","O")
            square.textContent = 'O'
            
        } 

        if (square.id < 3){
            current_row = 0
        }
        else if (square.id < 6 && square.id > 2 ){
            current_row = 1
        }
        else{
            current_row = 2
        }
        
        if (square.id == 0 || square.id == 3 ||square.id == 6){
            current_column = 0
        }
        if (square.id == 1 || square.id == 4 ||square.id == 7){
            current_column = 1
        }
        else if (square.id == 2 || square.id == 5 ||square.id == 8){
            current_column = 2
        }

        if (square.id == 0 || square.id == 4 ||square.id == 8){
            current_diagonal = 0
        }
        if (square.id == 2 || square.id == 4 ||square.id == 6){
            current_diagonal = 1
        }
        winner = row_check(rows[current_row], positions[square.id])
        if (winner != true){
                winner = column_check(columns[current_column], positions[square.id])
                if (winner != true)
                    winner = diagonal_check(diagonals[current_diagonal], positions[square.id])
        }
        if (winner == true){
            console.log("The winner is "+current)
            let winner_msg = document.getElementById("status")
            winner_msg.textContent = "Congratulations! "+current+" is the Winner!"
            winner_msg.classList.add("class","you-won")
        }
    }
}
onload = function(){
    page_loaded = true
    if (page_loaded == true){
        load_game(squares)
        new_button[0].setAttribute("onclick","new_game()")
    }
}