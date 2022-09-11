import { Item, Wrapper } from './stack'
import { GridComponent } from './types'

const Grid = Wrapper as GridComponent
Grid.Item = Item

export { Grid }