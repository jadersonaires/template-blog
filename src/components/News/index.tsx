import { NewsContainer } from './styles'

import imageNoticia from '../../assets/noticia.svg'

export function News () {
	return (
		<NewsContainer>
			<div className="detach" >
				<img src={imageNoticia} alt='' />
				<p>Janeiro 04, 2022</p>
				<h2>Começando no ReactJS em 2022</h2>
				<span>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.
				</span>
			</div>
			<div className='news-primary'>
				<p>Janeiro 04, 2022</p>
				<h2>Conheça as principais técnicas para conseguir uma vaga internacional em programação</h2>
				<span>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.
				</span>
			</div>
			<div className='news-secondary'>
				<p>Janeiro 04, 2022</p>
				<h2>Veja a evolução do Front-end na prática</h2>
				<span>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque.
				</span>
			</div>
		</NewsContainer>
	)
}
