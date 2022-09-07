import { splitProps } from 'solid-js'
import { ButtonProps } from './types'
import * as style from './styles'
import { createElement } from '@components/utils'

function Button(props: ButtonProps) {

	/* ------------------- props manegment ------------------ */

	const [{ ...stitches }, rest] =
    splitProps(props, ['size', 'type', 'full', 'variant', 'css', 'style'])

	/* ----------------------- render ----------------------- */
	
	return createElement<ButtonProps>(props.as || 'button', {
		...rest,
		className: style.container({ ...stitches }),
	})
}

export { Button }