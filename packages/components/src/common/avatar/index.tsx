/* ---------------- Utilitaries --------------- */
import { handleProps } from '@components/utils'

/* ----------------- Composers ---------------- */
import * as s from './styles'

/* -------------- Types and Props ------------- */
import { AvatarProps, ComponentWrapper } from './types'

function Avatar({ picture, name, ...rest }: AvatarProps) {

	/* -------------------------------------------- */
	/* Props manegment                              */
	/* -------------------------------------------- */

	const { element, styles } = handleProps<ComponentWrapper>(rest)

	/* -------------------------------------------- */
	/* Render                                       */
	/* -------------------------------------------- */
  
	return (
		<div class={s.component_wrapper({ ...styles })} {...element}>
			<img loading='lazy' src={picture} alt={name} class={s.profile_img()} />
		</div>
	)
}

/* ------------------ exports ----------------- */
export { Avatar }