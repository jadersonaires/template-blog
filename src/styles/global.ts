import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    :focus {
        outline: none;
        box-shadow: 0 0 0 2px ${props => props.theme['purple-700']};
    }

    body {
        font-family: 'Roboto', sans-serif;
        background: ${props => props.theme['white-900']};
        color: ${props => props.theme['black-900']}
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Roboto', sans-serif;
    }

    h1,h2, h3, h4, h5, h6 {
        font-family: 'Poppins', sans-serif;
    }
`
