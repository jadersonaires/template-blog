import { GroupNews } from './components/GroupNews'
import { JoinHeaderFeatured } from './components/JoinHeaderFeatured'
import { News } from './components/News'

export function App() {
	return (
		<>
			<JoinHeaderFeatured />
			<News />
			<GroupNews />
		</>
	)
}
