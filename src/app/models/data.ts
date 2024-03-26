import { Book } from './book'
import { Movie } from './movie'

export interface Data{
    attributes: Book,
    id: string,
    links: any,
    type: string
}