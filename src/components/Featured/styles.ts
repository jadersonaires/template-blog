import styled from 'styled-components'

export const FeaturedContainer = styled.main`
	margin: 0 auto;
	width: 100%;
	padding: 0 0.9rem;

	display: grid;
	grid-template-columns: repeat(1, 1fr);
	column-gap: 1.875rem;

	h1 {
		font-weight: 700;
		font-size: 2.25rem;
		line-height: 54px;
		color: ${props => props.theme['purple-800']};
		margin-bottom: 1rem;
	}

	p {
		color: ${props => props.theme['gray-400']};
		font-weight: 400;
		font-size: 18px;
		line-height: 27px;
		margin-bottom: 1.5rem;
	}

	a {
		display: flex;
		align-items: center;

		text-decoration: none;
		font-weight: 700;
		font-size: 1.125rem;
		line-height: 27px;
		color: ${props => props.theme['purple-800']};

		svg {
			color: ${props => props.theme['green-500']};
			margin-left: 10px;
		}
	}

	.image-news {

		display: flex;
    align-items: center;
    justify-content: center;

		img {
			object-fit: cover;
			width: 100%;
			height: 100%;
			max-height: 340px;
			border-radius: 16px;
		}
	}

	@media (min-width: 460px) {}

	@media (min-width: 768px) {
		max-width: 73.125rem;
		padding: 0 0rem;

		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 6rem;
	}
`
