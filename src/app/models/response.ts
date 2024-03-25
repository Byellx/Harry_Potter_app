import { Data } from './data'
import { Links } from './links'
import { Meta } from './meta'

export interface Response {
    data: Data[],
    links: Links,
    meta: Meta
}

