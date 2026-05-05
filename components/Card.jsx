import React from 'react'
import Image from 'next/image'

export default function Card({ programs, color }) {
	return (
		<div className='program-card' >
			<Image
				src={programs.image}
				alt='program image'
				width={380}
				height={215}
				className='program-img'
			/>
			<div className="card-footer">

			<div className='prices'>
				<p className='price'>{programs.price} ₽</p>
				<p className='old-price'>{programs.oldPrice} ₽ <span className='line'></span></p>
				<p className='discount'>-{programs.discount}%</p>
			</div>
			<h3 className='program-title'>{programs.title}</h3>
			<div className='card-down'>
				<a href="#feedback">

				<button className='green-btn' style={{ background: color }}>Забронировать</button>
				</a>
				<p className='program-date'>{programs.date}</p>
			</div>
			</div>
		</div>
	)
}
