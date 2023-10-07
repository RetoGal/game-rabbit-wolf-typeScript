import { CoordsPair } from "./types"

interface Character {
  name: string
  imgUrl: string
  count: number
}

export interface CharacterParams {
  [key: string]: Character
}
export interface GameState {
  matrix: (number | string)[][]
  theGameContinues: boolean
  theResultOfTheGame: string
}

export interface DirectionOffsets {
  [key: string]: CoordsPair
}
