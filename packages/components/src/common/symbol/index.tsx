import { splitProps } from 'solid-js'
import { SymbolProps } from './types'
import * as style from './styles'
import { symbols_list } from '@components/constants'

function Symbol(props: SymbolProps) {
	/* ------------------- props manegment ------------------ */

	const [{ ...stitches }, rest] = splitProps(props, ['size', 'css', 'style', 'name'])

	/* ----------------------- render ----------------------- */

	return symbols_list[props.name]({ class: style.container({ ...stitches }), ...rest})
}

export { Symbol }