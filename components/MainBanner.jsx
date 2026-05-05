'use client'
import { useState, useEffect } from "react"
import { motion } from 'framer-motion'

export default function MainBanner({ color, timeOfYear }) {
	const [imageUrl, setImageUrl] = useState('/image/bg-summer.svg')

	useEffect(() => {
		setImageUrl(`/image/bg-${timeOfYear}.svg`)
	}, [timeOfYear])

	return (
		<div
			className='main-banner__bg'
			style={{ backgroundImage: `url(${imageUrl})` }}
		>
			<div className='container'>
				<motion.h2
					className='main-banner__title'
					initial={{ opacity: 0, y: -10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0 }}
				>
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
				</motion.h2>
				<motion.p
					className='main-banner__description'
					initial={{ opacity: 0, y: -10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					Квесты на открытом воздухе, семейный отдых, свадьбы и выпускные под
					солнцем Татарстана
				</motion.p>
				<motion.a
					href='#services'
					initial={{ opacity: 0, y: -10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<button className='green--btn' style={{ background: color }}>
						Выбрать программу
					</button>
				</motion.a>
			</div>
		</div>
	)
}
