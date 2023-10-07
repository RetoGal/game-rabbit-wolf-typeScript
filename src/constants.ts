import { CharacterParams } from "./interfaces"

export const FREE_CELL: number = 0
export const RABBIT: string = "rabbit"
export const WOLF: string = "wolf"
export const HOME: string = "home"
export const BAN: string = "ban"
export const BOX_SIZE: number = 65

export const GAME_BOARD_ID = "gameBoard"
export const NEW_GAME_BTN_ID = "btn"
export const SELECT_ID = "select"
export const MESSAGE_WRAPPER_ID = "message"

export const YOU_WON = "youWon"
export const GAME_OVER = "gameOver"


export const CHARACTERS_PARAMS: CharacterParams = {
    rabbit: { name: RABBIT, imgUrl: "./img/rabbit.png", count: 1 },
    wolf: { name: WOLF, imgUrl: "./img/wolf.png", count: 3 },
    ban: { name: BAN, imgUrl: "./img/ban.png", count: 2 },
    home: { name: HOME, imgUrl: "./img/home.png", count: 1 },
  }