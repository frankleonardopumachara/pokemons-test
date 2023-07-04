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

export interface Type {
  name: string
  url: string
}

export interface UIType {
  slot: number
  type: Type
}

export interface PokemonItem {
  name: string
  url: string
}

export interface Form {
  name: string
  url: string
}

export interface PokemonDetail {
  id: number
  name: string
  weight: number
  height: number
  abilities: UIAbility[]
  types: UIType[]
  forms: Form[]
}
