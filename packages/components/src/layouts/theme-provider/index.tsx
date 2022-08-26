/** compose */
import { globalStyles } from './styles'
import { ThemeProviderProps } from './types'

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	globalStyles()

	return children
}