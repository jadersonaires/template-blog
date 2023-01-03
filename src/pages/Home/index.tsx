import { GroupNews } from '../../components/GroupNews'
import { JoinHeaderFeatured } from '../../components/JoinHeaderFeatured'
import { News } from '../../components/News'
import { HomeContainer } from './styles'

export function Home () {
	return (
		<HomeContainer>
			<JoinHeaderFeatured />
			<News />
			<GroupNews />
		</HomeContainer>
	)
}
