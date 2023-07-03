export interface Pagination {
  offset: number
  limit: number
}

export interface IPage<T> {
  results: T[]
  count: number
  next: string | null
  previous: string | null
}

export interface Ability {
  name: string
  url: string
}

export interface UIAbility {
  slot: number
  is_hidden: boolean
  ability: Ability
}

export interface PokemonItem {
  name: string
  url: string
}

export interface PokemonDetail {
  name: string
  weight: number
  uiAbilities: UIAbility[]
}
