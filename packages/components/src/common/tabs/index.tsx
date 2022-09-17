/* ---------------- Utilitaries --------------- */
import { handleProps } from '@components/utils'
import { createSignal, For } from 'solid-js'

/* ----------------- Composers ---------------- */
import * as s from './styles'

/* -------------- Types and Props ------------- */
import { TabsProps, ComponentWrapper } from './types'

function Tabs({ ...rest }: TabsProps) {

	/* -------------------------------------------- */
	/* Props manegment                              */
	/* -------------------------------------------- */

	const { element, styles } = handleProps<ComponentWrapper>(rest)

	/* -------------------------------------------- */
	/* Signals                                      */
	/* -------------------------------------------- */

	const [options, set_options] = createSignal(rest.options)

	/* -------------------------------------------- */
	/* Callbacks                                    */
	/* -------------------------------------------- */

	function onChangeTab(tab: string) {
		const updated_tabs = options().map(opt =>
			opt.title === tab
				? ({ ...opt, active: true })
				: ({ ...opt, active: false })
		)

		set_options(updated_tabs)
	}

	/* -------------------------------------------- */
	/* Render                                       */
	/* -------------------------------------------- */

	return (
		<ul class={s.component_wrapper({ ...styles })} {...element}>
			<For each={options()}>
				{({ title, active }) => (
					<li
						onClick={() => onChangeTab(title)}
						class={s.tab({ active })}
					>
						{title}
					</li>
				)}
			</For>
		</ul>
	)
}

/* ------------------ exports ----------------- */
export { Tabs }