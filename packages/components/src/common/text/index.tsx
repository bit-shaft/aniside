import { TextProps } from './types'
import * as style from './styles'
import { splitProps } from 'solid-js'
import { createElement } from '@components/utils'

function Text(props: TextProps) {

	/* ------------------- props manegment ------------------ */

	const [{ ...stitches }, rest] = splitProps(props, ['size', 'bold', 'italic', 'css', 'style'])

	/* ----------------------- render ----------------------- */
  
	return createElement<TextProps>(props.as || 'p', {
		...rest,
		className: style.container({ ...stitches }),
	})
}

export { Text }
