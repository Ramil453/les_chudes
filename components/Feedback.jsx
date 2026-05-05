import React from 'react'

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
				<h3 className='feedback-title'>Скидка 15% на летний отдых</h3>
				<p className='feedback-description'>
					Оставьте email — и мы сразу свяжемся свяжемся с Вами
				</p>
				<input type='text' className='feedback-input' placeholder='Ваше имя' />
				<input
					type='email'
					className='feedback-input'
					placeholder='Электронная почта'
				/>
				<input type='phone' className='feedback-input' placeholder='Телефон' />
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
