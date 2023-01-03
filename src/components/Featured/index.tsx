import { FeaturedContainer } from './styles'
import { HiOutlineArrowRight } from 'react-icons/hi'

import bannerNews from '../../assets/banner.svg'

export function Featured() {
	return (
		<FeaturedContainer>
			<div>
				<h1>
					Veja o guia definitivo para conquistar seus objetivos como DEV em 2022
				</h1>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique placerat hac.
				</p>

				<a href='#'>
					Veja mais
					<HiOutlineArrowRight size={22} />
				</a>
			</div>
			<div className='image-news'>
				<img src={bannerNews} alt='' />
			</div>
		</FeaturedContainer>
	)
}
