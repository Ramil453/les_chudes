'use client'
import { useState, useEffect } from "react"

export default function MainBanner({ color, timeOfYear }) {
	const [imageUrl, setImageUrl] = useState('/image/bg-summer.svg')

	useEffect(() => {
		setImageUrl(`/image/bg-${timeOfYear}.svg`)
	}, [timeOfYear]) // когда timeOfYear меняется, обновляем imageUrl

	return (
		<div
			className='main-banner__bg'
			style={{ backgroundImage: `url(${imageUrl})` }}
		>
			<div className='container'>
				<h2 className='main-banner__title'>
					{timeOfYear === 'autumn' && (
						<>
							<span style={{ color: color }}>Осенний </span>
							фестиваль красок
						</>
					)}
					{timeOfYear === 'summer' && (
						<>
							<span style={{ color: color }}>Летние </span>
							приключения в Лесу чудес
						</>
					)}
					{timeOfYear === 'spring' && (
						<>
							<span style={{ color: color }}>Весеннее </span>
							пробуждение
						</>
					)}
					{timeOfYear === 'winter' && (
						<>
							<span style={{ color: color }}>Зимняя </span>
							сказка
						</>
					)}
				</h2>
				<p className='main-banner__description'>
					Квесты на открытом воздухе, семейный отдых, свадьбы и выпускные под
					солнцем Татарстана
				</p>
				<a href="#services">

				<button className='green--btn' style={{ background: color }}>
					Выбрать программу
				</button>
				</a>
			</div>
		</div>
	)
}
