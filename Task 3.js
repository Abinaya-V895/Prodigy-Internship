// Game state variables
let board = ['', '', '', '', '', '', '', '', '']; // Board array to track moves
let currentPlayer = 'X'; // Player X starts
let gameActive = true; // Track if the game is ongoing

// Get DOM elements
const gameBoard = document.getElementById('game-board');
const statusDisplay = document.getElementById('status');

// Initialize the game board
function initGameBoard() {
  gameBoard.innerHTML = ''; // Clear previous board if any
  board.forEach((cell, index) => {
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell');
    cellElement.setAttribute('data-index', index);
    cellElement.addEventListener('click', handleCellClick);
    cellElement.textContent = cell;
    gameBoard.appendChild(cellElement);
  });
}

// Handle cell click
function handleCellClick(event) {
  const index = event.target.getAttribute('data-index');

  if (board[index] !== '' || !gameActive) return; // Ignore click if cell is already filled or game is over

  board[index] = currentPlayer; // Set the cell to the current player's symbol (X or O)
  event.target.textContent = currentPlayer;

  if (checkWinner()) {
    statusDisplay.textContent = `Player ${currentPlayer} wins!`;
    gameActive = false; // End the game after a win
  } else if (board.every(cell => cell !== '')) {
    statusDisplay.textContent = "It's a tie!";
    gameActive = false; // End the game if it's a tie
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch player
    statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
  }
}

// Check for a winner
function checkWinner() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  return winningCombinations.some(combination => {
    const [a, b, c] = combination;
    return board[a] !== '' && board[a] === board[b] && board[a] === board[c];
  });
}

// Reset the game
function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;
  statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
  initGameBoard(); // Reinitialize the board
}

// Initialize the game when the page loads
window.onload = initGameBoard;
