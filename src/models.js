export const board = {
    state: {
        player_piece: 'X',
        board: ["", "", "", "", "", "", "", "", ""]
    },
    reducer:{
        boxClicked: (state) => {
            state.player_piece = "O"
            return {...state}
        }
    },
    effects:{

    }
}