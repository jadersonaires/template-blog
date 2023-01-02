import { Featured } from '../Featured'
import { Header } from '../Header'
import { JoinHeaderFeaturedContainer } from './styles'

export function JoinHeaderFeatured () {
	return (
		<JoinHeaderFeaturedContainer>
			<Header />
			<Featured />
		</JoinHeaderFeaturedContainer>
	)
}
