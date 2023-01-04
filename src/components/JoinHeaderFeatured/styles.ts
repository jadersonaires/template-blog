import styled from 'styled-components'

export const JoinHeaderFeaturedContainer = styled.div`
	background-color: ${props => props.theme['purple-700']};
	border-bottom: 6px solid ${props => props.theme['green-500']};
	padding-top: 1rem;
	padding-bottom: 1.5rem;

	@media (min-width: 768px) {
		padding-top: 4rem;
		padding-bottom: 4.3rem;
	}

`
