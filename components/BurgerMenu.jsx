'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function BurgerMenu() {
	const [active, setActive] = useState(false)

	const handleActive = () => {
		setActive(prev => !prev)
	}

	// Блокируем скролл при открытом меню
	useEffect(() => {
		if (active) {
			document.body.classList.add('no-scroll')
			document.documentElement.classList.add('no-scroll')
		} else {
			document.body.classList.remove('no-scroll')
			document.documentElement.classList.remove('no-scroll')
		}

		return () => {
			document.body.classList.remove('no-scroll')
			document.documentElement.classList.remove('no-scroll')
		}
	}, [active])

	return (
		<>
			<div
				className={`burger-menu__background ${active ? 'active' : ''}`}
				onClick={handleActive}
			></div>
			<div className='burger-menu__wrapper'>
				<div className='burger-menu' onClick={handleActive}>
					<div className={`burger-menu__lines ${active ? 'active' : ''}`}>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<div
					className={`burger-menu__content-banner ${active ? 'active' : ''}`}
				>
					<span className='cross' onClick={handleActive}>
						&times;
					</span>
					<div className='burger-menu__header'>
						<h2>Лес чудес</h2>
						<Image
							src='/image/logo-green.svg'
							width={22}
							height={22}
							alt='Logo'
						/>
					</div>
					<ul className='burger-menu__list'>
						<li className='burger-menu__item'>
							<a href='#services' onClick={handleActive}>
								Услуги
							</a>
						</li>
						<li className='burger-menu__item'>
							<a href='#analytics' onClick={handleActive}>
								Аналитика
							</a>
						</li>
						<li className='burger-menu__item'>
							<a href='#requests' onClick={handleActive}>
								Запросы
							</a>
						</li>
						<li className='burger-menu__item'>
							<a href='#feedback' onClick={handleActive}>
								Спецпредложение
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}
