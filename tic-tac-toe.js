let squares = document.getElementsByTagName("div");
const positions = {}
let current = ''
let winner = false
onload = function(){
    for (let i = 3; i < 12; i++) {
    squares[i].setAttribute("class","square");
    squares[i].setAttribute("id",i-3)
    squares[i].onmouseover = function(){
        squares[i].classList.add("class","hover")
    }
    squares[i].onmouseout = function(){
        squares[i].classList.remove("class","hover")

    }
    squares[i].onclick = function(){
        // console.log(current)
        // console.log([squares[i]])
        //console.log(positions[squares[i].id])
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

            if (squares[i].id < 3){
                current_row = 0
            }
            else if (squares[i].id < 6 && squares[i].id > 2 ){
                current_row = 1
            }
            else{
                current_row = 2
            }
            
            if (squares[i].id == 0 || squares[i].id == 3 ||squares[i].id == 6){
                current_column = 0
            }
            if (squares[i].id == 1 || squares[i].id == 4 ||squares[i].id == 7){
                current_column = 1
            }
            else if (squares[i].id == 2 || squares[i].id == 5 ||squares[i].id == 8){
                current_column = 2
            }

            if (squares[i].id == 0 || squares[i].id == 4 ||squares[i].id == 8){
                current_diagonal = 0
            }
            if (squares[i].id == 2 || squares[i].id == 4 ||squares[i].id == 6){
                current_diagonal = 1
            }
            winner = row_check(rows[current_row], positions[squares[i].id])
            if (winner != true){
                    winner = column_check(columns[current_column], positions[squares[i].id])
                    if (winner != true)
                        winner = diagonal_check(diagonals[current_diagonal], positions[squares[i].id])
            }
            if (winner == true){
                console.log("The winner is "+current)
                let winner_msg = document.getElementById("status")
                winner_msg.textContent = "Congratulations! "+current+" is the Winner!"
                winner_msg.classList.add("class","you-won")
            }
        }
    }
    };
}



