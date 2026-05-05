'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function BurgerMenu() {
	const [active, setActive] = useState(false)

	const handleActive = () => {
		setActive(prev => !prev)
	}

	return (
		<>
			<div
				className='burger-menu__background'
				style={{ display: active ? 'block' : 'none' }}
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
					className='burger-menu__content-banner'
					style={{ right: active ? '0' : '-400px' }}
				>
					<span className='cross' onClick={handleActive}>
						&times;
					</span>
          <div className="burger-menu__header">

          <h2>Лес чудес</h2>
					<Image src='/image/logo-green.svg' width={22} height={22} alt='Logo' />
          </div>
					<ul className='burger-menu__list'>
						<li className='burger-menu__item'>
							<a href='#services'>Услуги</a>
						</li>
						<li className='burger-menu__item'>
							<a href='#analytics'>Аналитика</a>
						</li>
						<li className='burger-menu__item'>
							<a href='#requests'>Запросы</a>
						</li>
						<li className='burger-menu__item'>
							<a href='#feedback'>Спецпредложение</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}
