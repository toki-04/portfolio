ROWS = 6;
COLS = 7;

let board = [];
let player_turn = 1;
const WIN_COUNT = 4;
let is_winner = false;

const turn_element = document.getElementById("turn");
turn_element.style.color = "yellow";

let score_player_1 = 0;
let score_player_2 = 0;
const score_player_1_element = document.getElementById("score_player_1");
const score_player_2_element = document.getElementById("score_player_2");

const reset_btn = document.getElementById("reset_btn");
reset_btn.addEventListener("click", reset);

const container = document.getElementById("container");

function generate_board(rows, cols) {
  let item = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      item.push(0);
    }
    board[i] = item;
    item = [];
  }
}

generate_board(ROWS, COLS);
update_board();

function update_board() {
  if (container.childNodes.length > 0) {
    container.innerHTML = "";
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let cell = document.createElement("div");
      cell.setAttribute("id", `cell${i}${j}`);
      cell.setAttribute("class", "cell");

      if (board[i][j] === 0) {
        let empty = document.createElement("div");
        empty.setAttribute("class", "empty");
        cell.appendChild(empty);
      }

      if (board[i][j] === 1) {
        let player = document.createElement("div");
        player.setAttribute("id", "player1");
        player.setAttribute("class", "player1");
        cell.appendChild(player);
      } else if (board[i][j] === 2) {
        let player = document.createElement("div");
        player.setAttribute("id", "player2");
        player.setAttribute("class", "player2");
        cell.appendChild(player);
      }

      cell.addEventListener("click", function () {
        if (!is_winner) {
          turn(i, j);
        } else {
          alert("Winner");
        }
      });

      container.appendChild(cell);
    }
  }
}

function turn(row, col) {
  count = 0;
  for (let i = 5; i >= 0; i--) {
    if (board[i][col] == 0) {
      board[i][col] = player_turn;
      break;
    }

    if (board[i][col] > 0) {
      count++;
    }
  }

  if (count < 6) {
    if (player_turn === 1) {
      turn_element.style.color = "red";
      turn_element.innerText = "Turn Red";
      player_turn = 2;
    } else if (player_turn === 2) {
      turn_element.style.color = "yellow";
      turn_element.innerText = "Turn Yellow";
      player_turn = 1;
    }

    update_board();
    check_winner();
  }
}

function check_winner() {
  let count_player_1;
  let count_player_2;
  let hightlight_win = [];

  for (let i = 0; i < board.length; i++) {
    // CHECK ROW
    count_player_1 = 0;
    count_player_2 = 0;
    hightlight_win = [];
    for (let j = 0; j < board.length; j++) {
      if (board[j][i] === 1) {
        count_player_1++;
        hightlight_win.push(document.getElementById(`cell${j}${i}`));
        if (count_player_1 >= WIN_COUNT) {
          winner(1, hightlight_win);
        }
      } else {
        count_player_1 = 0;
      }

      if (board[j][i] === 2) {
        count_player_2++;
        hightlight_win.push(document.getElementById(`cell${j}${i}`));
        if (count_player_2 >= WIN_COUNT) {
          winner(2, hightlight_win);
        }
      } else {
        count_player_2 = 0;
      }
    }

    // CHECK COLUMN
    count_player_1 = 0;
    count_player_2 = 0;
    hightlight_win = [];
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        count_player_1++;
        hightlight_win.push(document.getElementById(`cell${i}${j}`));
        if (count_player_1 >= WIN_COUNT) {
          winner(1, hightlight_win);
        }
      } else count_player_1 = 0;

      if (board[i][j] === 2) {
        count_player_2++;
        hightlight_win.push(document.getElementById(`cell${i}${j}`));
        if (count_player_2 >= WIN_COUNT) {
          winner(2, hightlight_win);
        }
      } else count_player_2 = 0;
    }

    // CHECK DIAGONAL
    count_player_1 = 0;
    count_player_2 = 0;
    hightlight_win = [];

    // for (let j = 0; j < board[i].length; j++) {
    //   if (i >= j) {
    //     let row = i - j;
    //     let col = 0;
    //
    //     for (; row <= 5; row++, col++) {
    //       if (board[row][col] === 1) {
    //         count_player_1++;
    //         hightlight_win.push(document.getElementById(`cell${i}${j}`));
    //         if (count_player_1 >= WIN_COUNT) {
    //           winner(1, hightlight_win);
    //         }
    //       } else count_player_1 = 0;
    //     }
    //   }
    // }
  }

  // // CHECK DIAGONAL
  // count = 0;
  // if (row >= col) {
  //   let i = row - col;
  //   let j = 0;
  //
  //   for (; i <= 5; i++, j++) {
  //     if (board[i][j] === player_turn) {
  //       count++;
  //       if (count >= WIN_COUNT) {
  //         winner(player_turn);
  //       }
  //     } else {
  //       count = 0;
  //     }
  //   }
  // } else {
  //   let i = 0;
  //   let j = col - row;
  //
  //   for (; j <= 6; i++, j++) {
  //     if (board[i][j] === player_turn) {
  //       count++;
  //       if (count >= WIN_COUNT) {
  //         winner(player_turn);
  //       }
  //     } else {
  //       count = 0;
  //     }
  //   }
  // }
  //
  // // Check for secondary diagonal
  // count = 0;
  // if (row + col <= 5) {
  //   let i = row + col;
  //   let j = 0;
  //
  //   for (; i >= 0 && j <= row + col; i--, j++) {
  //     if (board[i][j] === player_turn) {
  //       count++;
  //       if (count >= WIN_COUNT) {
  //         winner(player_turn);
  //       }
  //     } else {
  //       count = 0;
  //     }
  //   }
  // } else {
  //   let i = 5;
  //   let j = row + col - 5;
  //
  //   for (; j <= 6; j++, i--) {
  //     if (board[i][j] === player_turn) {
  //       count++;
  //       if (count >= WIN_COUNT) {
  //         winner(player_turn);
  //       }
  //     } else {
  //       count = 0;
  //     }
  //   }
  // }
  //
  // count = 0;
  // return false;
}
function winner(player, hightlight_win) {
  console.log(hightlight_win);
  for (let cell_idx = 0; cell_idx < hightlight_win.length; cell_idx++) {
    let class_name = "highlight_win " +
      hightlight_win[cell_idx].childNodes[0].className;

    hightlight_win[cell_idx].childNodes[0].className = class_name;
  }

  if (player === 1) {
    score_player_1++;
    score_player_1_element.innerText = `Yellow: ${score_player_1}`;
    turn_element.innerText = `Winner: Yellow`;
    turn_element.style.color = "yellow";
  } else {
    score_player_2++;
    score_player_2_element.innerText = `Red: ${score_player_2}`;
    turn_element.innerText = `Winner: Red`;
    turn_element.style.color = "red";
  }

  is_winner = true;
  return true;
}

function reset() {
  container.innerHTML = "";
  board = [];
  player_turn = 1;
  turn_element.style.color = "yellow";
  turn_element.innerText = "Turn Yellow";
  is_winner = false;
  generate_board(ROWS, COLS);
  update_board();
}
