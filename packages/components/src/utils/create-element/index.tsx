import { DefaultProps } from '@components/types'

function createElement
  <T extends DefaultProps>(tag: keyof HTMLElementTagNameMap, props: T) {

	/* ------------- element and body generation ------------ */

	const element = document.createElement(tag)
	const children = props.children.length > 1 ? props.children : [props.children]

	/* ----------------- mounting element ----------------- */

	element.onclick = () => props.onClick
	element.onchange = () => props.onChange
	element.append(...children)

	/* -------------------- adding styles ------------------- */

	element.className = props.className as string

	return element
}

export { createElement }  