import { Item, Wrapper } from './stack'
import { SampleGridComponent } from './types'

const SampleGrid = Wrapper as SampleGridComponent
SampleGrid.Item = Item

export { SampleGrid }