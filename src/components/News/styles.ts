import styled from 'styled-components'

export const NewsContainer = styled.section`
	margin: 4rem auto 4rem;
	max-width: 73.125rem;

	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-auto-rows: minmax(100px, auto);
	column-gap: 8.125rem;

	.detach {
		grid-column: 1 / 4;
		grid-row: 1 / 4;  //1 / 3;
	}

	.news-primary {
		grid-column: 4 / -1;
		padding-bottom: 1.4rem;
		border-bottom: 1px solid #F2E7FA;
	}

	.news-secondary {
		grid-column: 4 / -1;
		margin-top: 1.4rem;
	}

	img {
		width: 100%;
		height: 100%;
		max-height: 340px;
		object-fit: cover;
		border-radius: 8px;
	}

	p {
		color: ${props => props.theme['black-900']};
		line-height: 19px;
		margin-bottom: .5rem;
	}

	h2 {
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

`
