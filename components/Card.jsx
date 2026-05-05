import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Card({ programs, color }) {
	return (
		<motion.div
			className='program-card'
			initial={{ opacity: 0, y: 10 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.1 }}
		>
			<Image
				src={programs.image}
				alt='program image'
				width={380}
				height={215}
				className='program-img'
			/>
			<div className='card-footer'>
				<div className='prices'>
					<p className='price'>{programs.price} ₽</p>
					<p className='old-price'>
						{programs.oldPrice} ₽ <span className='line'></span>
					</p>
					<p className='discount'>-{programs.discount}%</p>
				</div>
				<h3 className='program-title'>{programs.title}</h3>
				<div className='card-down'>
					<a href='#feedback'>
						<button className='green-btn' style={{ background: color }}>
							Забронировать
						</button>
					</a>
					<p className='program-date'>{programs.date}</p>
				</div>
			</div>
		</motion.div>
	)
}
