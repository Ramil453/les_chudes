import React from 'react'

export default function Table({ color }) {
	return (
		<div className='container' id='requests'>
			<h2 className='section-title'>Поисковые запросы</h2>
			<div className='table-container'>
				<div className='table'>
					<div className='table-header' style={{ background: color }}>
						<p>Сезон</p>
						<p>Поисковые запросы</p>
						<p>Частота</p>
						<p>Тип</p>
					</div>
					<div className='table-row'>
						<p>Зима</p>
						<p>Резиденция Кыш Бабая 2026</p>
						<p>Высокая</p>
						<p>Коммерческий</p>
					</div>
					<div className='table-row'>
						<p>Зима</p>
						<p>Новогодние программы Татарстан</p>
						<p>Высокая</p>
						<p>Коммерческий</p>
					</div>
					<div className='table-row'>
						<p>Зима</p>
						<p>Зимние забавы парк Лес чудес</p>
						<p>Средняя</p>
						<p>Информационный</p>
					</div>
					<div className='table-row'>
						<p>Зима</p>
						<p>Свадьба зимой Казань парк</p>
						<p>Средняя</p>
						<p>Коммерческий</p>
					</div>
					<div className='table-row'>
						<p>Лето</p>
						<p>Выпускной на природе Казань</p>
						<p>Средняя</p>
						<p>Коммерческий</p>
					</div>
					<div className='table-row'>
						<p>Весна</p>
						<p>Мастер-классы Лес чудес</p>
						<p>Средняя</p>
						<p>Информационный</p>
					</div>
					<div className='table-row'>
						<p>Лето</p>
						<p>Семейный отдых Татарстан парк</p>
						<p>Высокая</p>
						<p>Коммерческий</p>
					</div>
					<div className='table-row'>
						<p>Лето</p>
						<p>Квесты на открытом воздухе</p>
						<p>Средняя</p>
						<p>Коммерческий</p>
					</div>
					<div className='table-row'>
						<p>Осень</p>
						<p>Урожайный фестиваль Казань</p>
						<p>Средняя</p>
						<p>Информационный</p>
					</div>
					<div className='table-row'>
						<p>Осень</p>
						<p>Осенние фотосессии парк</p>
						<p>Растущая</p>
						<p>Коммерческий</p>
					</div>
				</div>
			</div>
		</div>
	)
}
