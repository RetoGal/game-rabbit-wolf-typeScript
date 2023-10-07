import { DirectionOffsets, GameState } from "./interfaces"
import { CoordsPair, Matrix } from "./types"
import {
  BAN,
  BOX_SIZE,
  FREE_CELL,
  GAME_BOARD_ID,
  GAME_OVER,
  HOME,
  MESSAGE_WRAPPER_ID,
  NEW_GAME_BTN_ID,
  RABBIT,
  SELECT_ID,
  WOLF,
  YOU_WON,
  CHARACTERS_PARAMS
} from "./constants"



const createMatrix = (gameBoardSize: number): Matrix => 
    Array.from({ length: gameBoardSize }, () =>
    Array.from({ length: gameBoardSize }, () => FREE_CELL))


const clearGameBoard = () => {
  const gameBoard = document.getElementById(GAME_BOARD_ID) as HTMLDivElement
  gameBoard.innerHTML = ""
}

const updateGame = (gameState: GameState) => {
  clearGameBoard()
  drawGameBoard(gameState)
}

const getRandomFreeCell = (matrix: Matrix): CoordsPair => {
  const x: number = Math.floor(Math.random() * matrix.length)
  const y: number = Math.floor(Math.random() * matrix.length)

  return matrix[x][y] === FREE_CELL ? [x, y] : getRandomFreeCell(matrix)
}

const wolfCount = (gameState: GameState) =>
  (CHARACTERS_PARAMS.wolf.count = Math.floor(
    (65 * gameState.matrix.length) / 100
  ))

const banCount = (gameState: GameState) =>
  (CHARACTERS_PARAMS.ban.count = Math.floor((45 * gameState.matrix.length) / 100))

const setCharacterInFreePosition = (
  matrix: Matrix,
  character: string
): void => {
  const [x, y] = getRandomFreeCell(matrix)
  matrix[x][y] = character
}

const setCharacterCountRecursively = (
  matrix: Matrix,
  count: number,
  character: string
): void => {
  if (count > 0) {
    setCharacterInFreePosition(matrix, character)
    setCharacterCountRecursively(matrix, count - 1, character)
  }
}

const getCordinatesOfCharacter = (
  gameState: GameState,
  character: string
): CoordsPair[] =>
  gameState.matrix.flatMap((row, x) =>
    row
      .map((_, y) => [x, y])
      .filter(([x, y]) => gameState.matrix[x][y] === character)
  )

const moveRabbit = (gameState: GameState, x: number, y: number): void => {
  const matrix = gameState.matrix
  const cordinateOfRabbit = getCordinatesOfCharacter(gameState, RABBIT)
  const [rabbitX, rabbitY] = cordinateOfRabbit[0]

  const isCellFree = (x: number, y: number) => matrix[x][y] === FREE_CELL
  const isCellWolf = (x: number, y: number) => matrix[x][y] === WOLF
  const isCellHome = (x: number, y: number) => matrix[x][y] === HOME

  matrix[rabbitX][rabbitY] = FREE_CELL

  if (isCellFree(x, y)) {
    matrix[x][y] = RABBIT
  } else if (isCellWolf(x, y)) {
    gameState.theGameContinues = false
    gameState.theResultOfTheGame = GAME_OVER
  } else if (isCellHome(x, y)) {
    gameState.theGameContinues = false
    gameState.theResultOfTheGame = YOU_WON
  } else {
    matrix[rabbitX][rabbitY] = RABBIT
  }
}

const isInRange = (gameState: GameState, [x, y]: CoordsPair): boolean =>
  x >= 0 && x < gameState.matrix.length && y >= 0 && y < gameState.matrix.length

const getNeighbouringCoordinates = (
  gameState: GameState,
  [x, y]: CoordsPair
): CoordsPair[] => {
  const cells = [
    [x - 1, y],
    [x + 1, y],
    [x, y + 1],
    [x, y - 1],
  ]
  return cells.filter((cell) => isInRange(gameState, cell))
}

const getFreeBoxNextToWolf = (
  gameState: GameState,
  [x, y]: CoordsPair
): CoordsPair[] => {
  const matrix: Matrix = gameState.matrix
  const sidesWolf = getNeighbouringCoordinates(gameState, [x, y])

  if (gameState.theGameContinues === false) {
    return []
  }
  return sidesWolf.filter(([x, y]) => matrix[x][y] === FREE_CELL)
}

const calculateDistance = ([x1, y1]: CoordsPair, [x2, y2]: CoordsPair) =>
  Math.round(Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)))

const getSidesLengthThreeAngle = (
  gameState: GameState,
  [x, y]: CoordsPair
): CoordsPair => {
  if (gameState.theGameContinues === false) {
    return []
  }

  const sidesWolf = getFreeBoxNextToWolf(gameState, [x, y])
  const cordRabbit = getCordinatesOfCharacter(gameState, RABBIT)
  return sidesWolf.map((item) => calculateDistance(item, cordRabbit[0]))
}

const getRabbitNextToWolf = (
  gameState: GameState,
  [x, y]: CoordsPair
): void => {
  if (gameState.theGameContinues === false) {
    return
  }

  const matrix: Matrix = gameState.matrix
  const sidesWolf = getNeighbouringCoordinates(gameState, [x, y])

  sidesWolf.forEach((freeCell) => {
    const [x, y] = freeCell
    if (matrix[x][y] === RABBIT) {
      gameState.theResultOfTheGame = GAME_OVER
      gameState.theGameContinues = false
    }
  })
}

const findNearestСell = (
  gameState: GameState,
  [x, y]: CoordsPair
): CoordsPair => {
  if (gameState.theGameContinues === false) {
    return []
  }
  const lengthCell = getSidesLengthThreeAngle(gameState, [x, y])
  const nearestСell = getFreeBoxNextToWolf(gameState, [x, y])
  const minIndex = lengthCell.indexOf(Math.min(...lengthCell))

  return nearestСell[minIndex]
}

const moveWolf =
  (gameState: GameState) =>
  ([Xwolves, Ywolves]: CoordsPair): void => {
    if (gameState.theGameContinues === false) {
      return
    }

    const matrix: Matrix = gameState.matrix
    const [XnearestСell, YnearestСell] = findNearestСell(gameState, [
      Xwolves,
      Ywolves,
    ])

    matrix[Xwolves][Ywolves] = FREE_CELL
    matrix[XnearestСell][YnearestСell] = WOLF
    getRabbitNextToWolf(gameState, [Xwolves, Ywolves])
  }

const moveWolvesOnNewBox = (gameState: GameState): void => {
  const wolvesCoords = getCordinatesOfCharacter(gameState, WOLF)
  wolvesCoords.forEach(moveWolf(gameState))
}

const gameMovement = (gameState: GameState, direction: string) => {
  if (gameState.theGameContinues === false) {
    return
  }
  const rabbitCoords = getCordinatesOfCharacter(gameState, RABBIT)
  const [x, y] = rabbitCoords[0]
  const matrix: Matrix = gameState.matrix

  const directionOffsets: DirectionOffsets = {
    ArrowLeft: [0, -1],
    ArrowRight: [0, 1],
    ArrowUp: [-1, 0],
    ArrowDown: [1, 0],
  }

  const [offsetX, offsetY] = directionOffsets[direction] || [0, 0]
  const newX = (x + offsetX + matrix.length) % matrix.length
  const newY = (y + offsetY + matrix[0].length) % matrix[0].length

  moveRabbit(gameState, newX, newY)
  moveWolvesOnNewBox(gameState)
  updateGame(gameState)
}

const installAllCharacter = (gameState: GameState): void => {
  wolfCount(gameState)
  banCount(gameState)
}

const putСharacterInCell = (imgUrl: string, box: HTMLDivElement): void => {
  const img = document.createElement("img") as HTMLImageElement
  img.src = imgUrl
  box.append(img)
}

const drawGameBoard = (gameState: GameState) => {
  const matrix: Matrix = gameState.matrix
  showGameBoard()
  matrix.forEach((box) =>
    box.forEach((cell) => {
      const gameBoard = document.getElementById(GAME_BOARD_ID) as HTMLDivElement
      gameBoard.style.width = matrix.length * BOX_SIZE + "px"
      const divBox = document.createElement("div") as HTMLDivElement
      divBox.classList.add("box")
      gameBoard?.appendChild(divBox)

      if (cell === RABBIT) {
        putСharacterInCell(CHARACTERS_PARAMS.rabbit.imgUrl, divBox)
      }
      if (cell === HOME) {
        putСharacterInCell(CHARACTERS_PARAMS.home.imgUrl, divBox)
      }
      if (cell === WOLF) {
        putСharacterInCell(CHARACTERS_PARAMS.wolf.imgUrl, divBox)
      }
      if (cell === BAN) {
        putСharacterInCell(CHARACTERS_PARAMS.ban.imgUrl, divBox)
      }
    })
  )
  drawMessage(gameState)
}

const gameStatusMessage = (gameState: GameState): void => {
  const gameBoard = document.getElementById(GAME_BOARD_ID) as HTMLDivElement
  const messageWrapper = document.getElementById(
    MESSAGE_WRAPPER_ID
  ) as HTMLDivElement

gameBoard.style.display = "none"
 messageWrapper.style.display = "block"
messageWrapper.innerHTML = gameState.theResultOfTheGame 
}

const showGameBoard = (): void => {
  const gameBoard = document.getElementById(GAME_BOARD_ID) as HTMLDivElement
  const messageWrapper = document.getElementById(
    MESSAGE_WRAPPER_ID
  ) as HTMLDivElement
  gameBoard.style.display = "flex"
  messageWrapper.style.display = "none"
}

const drawMessage = (gameState: GameState): void => {
  if (gameState.theResultOfTheGame !== "") {
    gameState.theGameContinues = false
    gameStatusMessage(gameState)
    return
  }
}

const initializeGame = (): void => {
  const select = document.getElementById(SELECT_ID) as HTMLSelectElement
  const gameBoardSize: number = parseInt(select.value)
  const matrix: Matrix = createMatrix(gameBoardSize)

  const gameState: GameState = {
    matrix: matrix,
    theGameContinues: true,
    theResultOfTheGame: "",
  }

  installAllCharacter(gameState)
  setInitialCharacterCounts(matrix)

  document.addEventListener("keyup", (e) => gameMovement(gameState, e.key))

  clearGameBoard()
  drawGameBoard(gameState)
}

const setInitialCharacterCounts = (matrix: Matrix): void =>
  Object.keys(CHARACTERS_PARAMS).forEach((character) => {
    const { count, name } = CHARACTERS_PARAMS[character]
    setCharacterCountRecursively(matrix, count, name)
  })

const newGameBTN = document.getElementById(NEW_GAME_BTN_ID) as HTMLDivElement

newGameBTN.addEventListener("click", initializeGame)
