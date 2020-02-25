const win_combo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

export const board = {
    state: {
        player_piece: 'X',
        board: ["", "", "", "", "", "", "", "", ""]
    },
    reducers:{
        boxClicked: (state, index) => {
            let board = state.board;
            let player_piece = state.player_piece;
    
            if (board[index] !== ""){
                alert("Can't put there!");
                return {
                    player_piece: player_piece,
                    board: board
                };
            }
            board[index] = player_piece;

            //check there is a Tie game
            if (!board.includes("")) {
                alert("It's a Tie Game");
                window.location.reload();
            }
    
            //travel through the whole list, checking if the board there is an matching win row
            for (let i = 0; i < win_combo.length; i++) {
                let row_win = win_combo[i];
                let p1 = row_win[0];
                let p2 = row_win[1];
                let p3 = row_win[2];
                if (board[p1] === player_piece && board[p2] === player_piece && board[p3] === player_piece){
                    alert(`${player_piece} Win the Game !`)
                    window.location.reload();   // when there is a Winner, refresh the page
                    return null;
                }
            }
            
            player_piece = (player_piece === 'X' ? 'O' : 'X');
            return({
                player_piece: player_piece,
                board: board
            })
        }
    },
    effects:{

    }
}