
/** 
 * Uncomment the board array variable declaration for tic-tak-toe game to test under various        scenarios
 * 
    let board = [[1,0,0], [0, 1, 1], [0, 0, 1]]; // for diagonal testing
    let board = [[0,1,1], [1, 0, 0], [1, 1, 0]]; // for diagonal testing
    let board = [[1, 0, 0], [1, 1, 1], [0, 1, 0]]; // for row testing
    let board = [[0, 1, 1], [0, 0, 0], [1 , 1, 0]]; // for row testing
    let board = [[0,1,0], [0,1,1], [1,1,0]]; // for col testing
    let board = [[1,0,1], [1,0,0], [0,0,1]]; // for col testing
    let board = [[1,0,1], [0,1,0], [1,0,0]]; // no one wins
*/

/* 
  By default we are taking user1 will mark 0 on the board 
      User 1 => 0  
  and user2 will mark 1 on the board
      User 2 => 1
*/

let row = [0,0];
let col = [0,0];
let diagonal = [0,0];


for(let i=0; i< board.length; i++){
  row = [0, 0]; col = [0, 0];
  for(let j=0; j< board.length; j++){
    // Checking Diagonal items are matching or not
    if(i == j){
      if( board[i][j] == 0) diagonal[0] += 1; 
      else if(board[i][j] == 1) diagonal[1] += 1;
    }
    // Checking Row items are matching or not
    if(board[i][j] == 1) row[1] += 1;
    else if (board[i][j] == 0) row[0] += 1;

    // Checking Column items are matching or not
    if(board[j][i] == 1) col[1] += 1;
    else if (board[j][i] == 0) col[0] += 1;
  }

  // If in the first iteration we find the match then we will break the loop
  if(row[0] == board.length || col[0] == board.length) break;
  else if (row[1] == board.length || col[1] == board.length)  break;

}

if(diagonal[0] == board.length || row[0] == board.length || col[0] == board.length){
  console.log("User 1 wins !!!");
}
else if (diagonal[1] == board.length || row[1] == board.length || col[1] == board.length){
  console.log("User 2 wins !!!");
}
else{
  console.log("Nobody wins");
}