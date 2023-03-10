import styled from 'styled-components'

export const GroupNewsContainer = styled.article`
	margin: 0 auto 5rem;
	width: 100%;

	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: auto;
	grid-gap: 1rem;

	@media (min-width: 460px) {}

	@media (min-width: 768px) {
		margin: 0 auto 5rem;
		max-width: 73.125rem;

		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: auto;
		grid-gap: 2rem;
	}
`

export const SmallNews = styled.div`

	display: flex;
	flex-direction: column;
	padding: 0 .9rem;

	img {
		width: 100%;
		height: 100%;
		max-height: 260px;
		object-fit: cover;
		border-radius: 16px;
		margin-bottom: 1rem;
	}

	p {
		color: ${props => props.theme['black-900']};
		line-height: 19px;
		margin-bottom: .5rem;
	}

	h3 {
		font-family: 'Roboto';
		font-size: 1.5rem;
		line-height: 36px;
		font-weight: 700;
		color: ${props => props.theme['purple-700']};
		margin-bottom: .5rem;
	}

	span {
		font-size: 1rem;
		color: ${props => props.theme['black-900']};
		line-height: 24px;
	}

	@media (min-width: 768px) {
		padding: 0 0rem;
	}
`
