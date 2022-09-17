import { DefaultProps } from '@components/types'
import { splitProps } from 'solid-js'

function handleProps<T>(props: DefaultProps & T) {

	/* ----------------- variant properties ----------------- */

	const variants_keys = Object.keys(props)
		.map((key) => key as keyof T)
  
	/* ------------------- spliting props ------------------- */

	const [{ ...stitches }, rest] =
    splitProps(props, [...variants_keys, 'style', 'css'])

	/* ----------------------- render ----------------------- */

	return { styles: stitches, element: rest}
}

export { handleProps }