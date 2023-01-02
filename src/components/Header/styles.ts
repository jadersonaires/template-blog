import styled from 'styled-components'


export const HeaderContainer = styled.header`
	margin: 0rem auto 4rem;
	max-width: 73.125rem;

	display: grid;
	grid-template-columns: 25% 1fr 25%;
	grid-auto-rows: minmax(44px, auto);

	align-items: center;
	//background: red;

	nav {
		display: flex;
		align-items: center;
		justify-content: center;

		ul {
			list-style-type: none;
			margin: 0;
			padding: 0;

			li{
				display: inline-block;

				a {
					font-size: 1.125rem;
					color: ${props => props.theme['white-900']};
					text-decoration: none;
					border-left: 2px solid transparente;
					padding-left: 3px;
					transition: font-weight 300ms;

					&:hover {
						font-weight: 500;
						border-left: 2px solid ${props => props.theme['green-500']};
					}
				}
			}

			li + li {
				margin-left: 2rem;
			}
		}
	}

	form {
		display: flex;

		input{
			background: ${props => props.theme['purple-900']};
			color: ${props => props.theme['white-900']};
			font-size: 0.875rem;
			padding: 0.875rem .5rem 0.875rem 1.5rem;
			border: none;
			border-top-left-radius: 5px;
			border-bottom-left-radius: 5px;
			height: 44px;
			flex: 1;
		}

		button {
			border: none;
			padding: 0.4rem 1.4rem;
			border-top-right-radius: 5px;
			border-bottom-right-radius: 5px;
			background: ${props => props.theme['purple-800']};
			cursor: pointer;

			&:hover{
				background: ${props => props.theme['purple-800']};
			}
		}
	}
`
