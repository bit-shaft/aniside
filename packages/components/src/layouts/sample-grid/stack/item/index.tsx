import { splitProps } from 'solid-js'
import { ItemProps } from './types'
import * as style from './styles'
import { createElement } from '@components/utils'

function Item(props: ItemProps) {

	/* ------------------- props manegment ------------------ */

	const [{ ...stitches }, rest] =
    splitProps(props, ['gap', 'col', 'row', 'justify', 'align', 'wrap', 'css', 'style'])

	/* ----------------------- render ----------------------- */

	return createElement<ItemProps>(props.as || 'button', {
		...rest,
		className: style.container({ ...stitches }),
	})
}

export { Item }