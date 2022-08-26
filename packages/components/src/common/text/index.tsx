import { TextProps } from './types'
import * as s from './styles'

function Text(props: TextProps) {
	return (
		<p className={s.wrapper({ ...props })} {...props}>
			{props.children}
		</p>
	)
}

export { Text }
