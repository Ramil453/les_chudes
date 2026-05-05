import React from 'react'
import { motion } from 'framer-motion'

export default function Feedback({ color, timeOfYear }) {
	return (
		<section
			className='feedback-section'
			id='feedback'
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
				<motion.h3
					initial={{ opacity: 0, x: 0 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 1, delay: 0.1 }}
					className='feedback-title'
				>
					Скидка 15% на летний отдых
				</motion.h3>
				<motion.p
					initial={{ opacity: 0, x: 0 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 1.5, delay: 0.1 }}
					className='feedback-description'
				>
					Оставьте email — и мы сразу свяжемся свяжемся с Вами
				</motion.p>
				<motion.input
					type='text'
					className='feedback-input'
					placeholder='Ваше имя'
					initial={{ opacity: 0, y: 5 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
				/>
				<motion.input
					type='email'
					className='feedback-input'
					placeholder='Электронная почта'
					initial={{ opacity: 0, y: 5 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
				/>
				<motion.input
					type='phone'
					className='feedback-input'
					placeholder='Телефон'
					initial={{ opacity: 0, y: 5 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.1 }}
				/>
				<button
					className='green--btn feedback-btn'
					style={{ background: color, width: '43.5%', borderRadius: '10px' }}
				>
					Забронировать
				</button>
			</div>
		</section>
	)
}
