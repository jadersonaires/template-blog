import { GroupNewsContainer, SmallNews } from './styles'

import smallNews1 from '../../assets/small-news-1.svg'
import smallNews2 from '../../assets/small-news-2.svg'
import smallNews3 from '../../assets/small-news-3.svg'

export function GroupNews () {
	return (
		<GroupNewsContainer>
			<SmallNews>
				<img src={smallNews1} alt='' />
				<p>Janeiro 04, 2022</p>
				<h3>10 dicas para conseguir a vaga desejada</h3>
				<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. </span>
			</SmallNews>
			<SmallNews>
				<img src={smallNews2} alt='' />
				<p>Janeiro 04, 2022</p>
				<h3>10 dicas para conseguir a vaga desejada</h3>
				<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. </span>
				<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. </span>
			</SmallNews>
			<SmallNews>
				<img src={smallNews3} alt='' />
				<p>Janeiro 04, 2022</p>
				<h3>10 dicas para conseguir a vaga desejada</h3>
				<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. </span>
			</SmallNews>
		</GroupNewsContainer>
	)
}
