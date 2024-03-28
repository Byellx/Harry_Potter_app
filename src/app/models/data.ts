import { Book } from './book'
import { Character } from './character'
import { Movie } from './movie'
import { Potion } from './potion'
import { Spell } from './spell'

export interface Data{
    attributes: Data_Type,
    id: string,
    links: any,
    type: string
}

type Data_Type = Book | Character | Movie | Potion | Spell