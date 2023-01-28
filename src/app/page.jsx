import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<main className={styles.main}>

			<div className={styles.center}>
				<Image
					className={styles.logo}
					src="/black.png"
					alt="Agway Sports Logo"
					width={250}
					height={57}
					priority
				/>
				<p>
				We are coming very soon</p>
			</div>
		</main>
	)
}
