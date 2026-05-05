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
					<p className='season-name' style={{ border: `2px solid ${color}` }}>
						{timeOfYear === 'summer' && 'Летний сезон 2026'}
						{timeOfYear === 'autumn' && 'Золотая осень 2026'}
						{timeOfYear === 'spring' && 'Весеннее пробуждение 2026'}
						{timeOfYear === 'winter' && 'Новогодний сезон 2026'}
					</p>
					<div className='season-icons'>
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
					</div>
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
