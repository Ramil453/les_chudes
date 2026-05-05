import React from 'react'
import { motion } from 'framer-motion'

export default function Analytics({ timeOfYear, color }) {
	return (
		<section
			className='analytics-section'
			id='analytics'
			style={{
				background:
					timeOfYear === 'spring'
						? 'rgba(255, 170, 187, 0.39)'
						: timeOfYear === 'winter'
							? 'rgba(27, 59, 111, 0.24)'
							: timeOfYear === 'autumn'
								? 'rgba(183, 65, 14, 0.37)'
								: 'rgba(44, 110, 47, 0.18)',
			}}
		>
			<div className='container'>
				<div className='analytics-card'>
					<motion.h3
						initial={{ opacity: 0, x: 0 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						Заключение о состоянии сайта и потребностях ЦА
					</motion.h3>
					<motion.p
						initial={{ opacity: 0, x: 0 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						На основе анализа Google Trends, Яндекс.Вордстат и соцсетей выявлены
						ключевые потребности целевых групп по сезонам.
					</motion.p>
					<div className='analytics-tags'>
						<motion.p
							style={{ background: color }}
							initial={{ opacity: 0, y: 5 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							Зимний отдых с детьми
						</motion.p>
						<motion.p
							style={{ background: color }}
							initial={{ opacity: 0, y: 5 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
						>
							Резиденция Кыш Бабая
						</motion.p>
						<motion.p
							style={{ background: color }}
							initial={{ opacity: 0, y: 5 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.5 }}
						>
							Зимние свадьбы
						</motion.p>
						<motion.p
							style={{ background: color }}
							initial={{ opacity: 0, y: 5 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.6 }}
						>
							Дни рождения
						</motion.p>
						<motion.p
							style={{ background: color }}
							initial={{ opacity: 0, y: 5 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.7 }}
						>
							Новогодние программы
						</motion.p>
					</div>
				</div>
				<div className='principle'>
					<motion.h2
						className='principle-title'
						initial={{ opacity: 0, y: 0 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						Принцип <br /> трех <br /> кликов
					</motion.h2>
					<div className='principle-steps'>
						<p className='principle-step-number' style={{ background: color }}>
							<motion.span
								initial={{ opacity: 0, x: 0 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: 0.1 }}
							>
								1
							</motion.span>
						</p>
						<span
							className='principle-line'
							style={{ background: color }}
						></span>
						<p className='principle-step-number' style={{ background: color }}>
							<motion.span
								initial={{ opacity: 0, x: 0 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: 0.1 }}
							>
								2
							</motion.span>
						</p>
						<span
							className='principle-line'
							style={{ background: color }}
						></span>
						<p className='principle-step-number' style={{ background: color }}>
							<motion.span
								initial={{ opacity: 0, x: 0 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: 0.1 }}
							>
								3
							</motion.span>
						</p>
						<motion.p
							className='principle-step__title'
							initial={{ opacity: 0, x: 15 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
						>
							Главная
						</motion.p>
						<motion.p
							className='principle-step__title'
							initial={{ opacity: 0, x: -15 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
						>
							Выбор услуги
						</motion.p>
						<motion.p
							className='principle-step__title'
							initial={{ opacity: 0, x: 15 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
						>
							Бронирование
						</motion.p>
					</div>
				</div>
			</div>
		</section>
	)
}
