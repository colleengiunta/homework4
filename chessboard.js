let size = 8;
let board = "";
for (let i = 1; i <= size; i = i + 1){
    if(i%2 == 0){
        for (let j = 1; j <= size; j = j + 1){
            if(j%2 == 0){
                board += "#";
            }
            else{
                board += " ";
            }
        }
    }
    else{
        for (let j = 1; j <= size; j = j + 1){
            if(j%2 == 0){
                board += " ";
            }
            else{
                board += "#";
            }
        }
    }

    if(i != size){
        board += "\n";
    }
}
console.log(board);