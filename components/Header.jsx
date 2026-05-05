import Image from 'next/image'
import BurgerMenu from './BurgerMenu'
import { motion } from 'framer-motion'


export default function Header({ color }) {
	return (
		<header style={{ background: color }}>
			<motion.div
				className='container'
				initial={{ opacity: 0, y: -5 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.1 }}
			>
				<div className='logo-wrapper'>
					<h1>Лес чудес</h1>
					<Image src='/image/logo.svg' alt='logo' width={25} height={25} />
				</div>
				<ul className='header-list'>
					<li>
						<a href='#services'>Услуги</a>
					</li>
					<li>
						<a href='#analytics'>Аналитика</a>
					</li>
					<li>
						<a href='#requests'>Запросы</a>
					</li>
					<li>
						<a href='#feedback'>Спецпредложение</a>
					</li>
				</ul>
				<a href='#feedback'>
					<button className='reservation--btn' style={{ color: color }}>
						Забронировать
					</button>
				</a>
				<BurgerMenu />
			</motion.div>
		</header>
	)
}
