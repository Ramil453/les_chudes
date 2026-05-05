'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import MainBanner from '../components/MainBanner'
import Programs from '../components/Programs'
import Analytics from '../components/Analytics'
import Table from '../components/Table'
import Feedback from '../components/Feedback'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'


export default function Home() {
type Season = 'summer' | 'autumn' | 'spring' | 'winter'

const [timeOfYear, setTimeOfYear] = useState<Season>('summer')
const [color, setColor] = useState('')

const seasonColors: Record<Season, string> = {
	summer: '#2C6E2F',
	autumn: '#B7410E',
	spring: '#FFAABB',
	winter: '#1b3b6f',
}

const handleTime = (t: Season) => {
	// ← тип Season вместо string
	setTimeOfYear(t)
	setColor(seasonColors[t]) // ✅ Работает
}
	useEffect(() => {
		console.log(timeOfYear)
		console.log(color)
	}, [timeOfYear])

	return (
		<>
			<Header color={color} />
			<div className='container'>
				<div className='subheader'>
					<motion.p
						className='season-name'
						style={{ border: `2px solid ${color}` }}
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0 }}
					>
						{timeOfYear === 'summer' && 'Летний сезон 2026'}
						{timeOfYear === 'autumn' && 'Золотая осень 2026'}
						{timeOfYear === 'spring' && 'Весеннее пробуждение 2026'}
						{timeOfYear === 'winter' && 'Новогодний сезон 2026'}
					</motion.p>
					<motion.div
						className='season-icons'
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0 }}
					>
						<Image
							src='/image/autumn.svg'
							alt='autumn icon'
							width={45}
							height={45}
							onClick={() => handleTime('autumn')}
						/>
						<Image
							src='/image/summer.svg'
							alt='summer icon'
							width={45}
							height={45}
							onClick={() => handleTime('summer')}
						/>
						<Image
							src='/image/spring.svg'
							alt='spring icon'
							width={45}
							height={45}
							onClick={() => handleTime('spring')}
						/>
						<Image
							src='/image/winter.svg'
							alt='winter icon'
							width={45}
							height={45}
							onClick={() => handleTime('winter')}
						/>
					</motion.div>
				</div>
			</div>
			<MainBanner color={color} timeOfYear={timeOfYear} />
			<Programs color={color} timeOfYear={timeOfYear} />
			<Analytics color={color} timeOfYear={timeOfYear} />
			<Table color={color} />
			<Feedback color={color} timeOfYear={timeOfYear} />
			<Footer />
		</>
	)
}
