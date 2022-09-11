import { lazily } from 'solidjs-lazily'

const io_icon = lazily(() => import('solid-icons/io'))
const bi_icon = lazily(() => import('solid-icons/bi'))

const symbols_list = {
	like: io_icon.IoHeart,

	comment: io_icon.IoChatbubble,

	share: io_icon.IoShareSocial,
  
	donate: bi_icon.BiRegularDollar,
}

export { symbols_list }