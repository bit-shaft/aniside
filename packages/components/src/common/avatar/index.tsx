import { splitProps } from 'solid-js'
import { AvatarProps } from './types'
import * as style from './styles'
import { Stitches } from '@aniside/design'

function Avatar(props: AvatarProps) {

	/* ------------------- props manegment ------------------ */

	const variants_keys = Object.keys(props)
		.map((key) => key as keyof Stitches.VariantProps<typeof style.container>)

	const [{ ...stitches }, rest] = 
    splitProps(props, [...variants_keys, 'css', 'style', 'picture', 'name'])

	/* ----------------------- render ----------------------- */

	return (
		<div class={style.container({ ...stitches })} {...rest}>
			<img src={props.picture} alt={props.name} class={style.profile_img()} />
		</div>
	)
}

export { Avatar }