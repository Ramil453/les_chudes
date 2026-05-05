import React from 'react'

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
					<h3>Заключение о состоянии сайта и потребностях ЦА</h3>
					<p>
						На основе анализа Google Trends, Яндекс.Вордстат и соцсетей выявлены
						ключевые потребности целевых групп по сезонам.
					</p>
					<div className='analytics-tags'>
						<p style={{ background: color }}>Зимний отдых с детьми</p>
						<p style={{ background: color }}>Резиденция Кыш Бабая</p>
						<p style={{ background: color }}>Зимние свадьбы</p>
						<p style={{ background: color }}>Дни рождения</p>
						<p style={{ background: color }}>Новогодние программы</p>
					</div>
				</div>
				<div className='principle'>
					<h2 className='principle-title'>
						Принцип <br /> трех <br /> кликов
					</h2>
					<div className='principle-steps'>
						<p className='principle-step-number' style={{ background: color }}>
							1
						</p>
						<span
							className='principle-line'
							style={{ background: color }}
						></span>
						<p className='principle-step-number' style={{ background: color }}>
							2
						</p>
						<span
							className='principle-line'
							style={{ background: color }}
						></span>
						<p className='principle-step-number' style={{ background: color }}>
							3
						</p>
						<p className='principle-step__title'>Главная</p>
						<p className='principle-step__title'>Выбор услуги</p>
						<p className='principle-step__title'>Бронирование</p>
					</div>
				</div>
			</div>
		</section>
	)
}
