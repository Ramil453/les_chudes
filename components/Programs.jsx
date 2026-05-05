import React from 'react'
import Card from '../components/Card'

export default function Programs({ timeOfYear, color }) {
  const programs = [
		{
			id: 1,
			image: '/image/summer-img1.svg',
			price: 2400,
			oldPrice: 2900,
			discount: 17,
			title: 'Квесты на открытом воздухе',
			date: 'Ежедневно',
		},
		{
			id: 2,
			image: '/image/summer-img2.svg',
			price: 8500,
			oldPrice: 10000,
			discount: 15,
			title: 'Семейный отдых выходного дня',
			date: 'Сб-Вс',
		},
		{
			id: 3,
			image: '/image/summer-img3.svg',
			price: 42000,
			oldPrice: 49000,
			discount: 14,
			title: 'Свадьба в парке',
			date: 'Под заказ',
		},
		{
			id: 4,
			image: '/image/summer-img4.svg',
			price: 6800,
			oldPrice: 8000,
			discount: 15,
			title: 'День рождения с квестом ',
			date: 'Ежедневно',
		},
		{
			id: 5,
			image: '/image/summer-img5.svg',
			price: 16000,
			oldPrice: 19000,
			discount: 16,
			title: 'Выпускной на природе',
			date: 'Июнь',
		},
		{
			id: 6,
			image: '/image/summer-img6.svg',
			price: 3800,
			oldPrice: 4500,
			discount: 16,
			title: 'Фотосессия',
			date: 'По записи',
		},
	]
	return (
		<div className='container'>
			<section className='programs-section' id='services'>
				<div className='programs-section__text'>
					<h3 className='section-title'>
						Программы
					</h3>
					<p className='section-description'>
						Экскурсии, квесты на открытом воздухе, семейный отдых, свадьбы, дни
						рождения, выпускные
					</p>
				</div>
				<div className='program-cards'>
					{programs.map(programs => (
						<Card key={programs.id} programs={programs} color={color}/>
					))}
				</div>
			</section>
		</div>
	)
}
