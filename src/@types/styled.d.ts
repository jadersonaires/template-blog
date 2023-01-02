import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type themeType = typeof defaultTheme

/* eslint-disable */
declare module 'styled-components' {
    export interface DefaultTheme extends themeType {}
}
/* eslint-disable */
