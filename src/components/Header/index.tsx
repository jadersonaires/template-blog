import { HeaderContainer } from './styles'
import { CgSearch } from 'react-icons/cg'

import logoBlog from '../../assets/logo.svg'

export function Header () {
	return (
		<HeaderContainer>
			<div>
				<img src={logoBlog} alt='' />
			</div>
			<nav>
				<ul>
					<li><a href='#'>Home</a></li>
					<li><a href='#'>Sobre</a></li>
					<li><a href='#'>Categorias</a></li>
					<li><a href='#'>Contato</a></li>
				</ul>
			</nav>
			<div>
				<form>
					<input type='text' placeholder='Buscar' />
					<button type='button'>
						<CgSearch size={24} color="#FFF" />
					</button>
				</form>
			</div>
		</HeaderContainer>
	)
}
