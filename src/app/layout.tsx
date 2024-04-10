import type { Metadata } from 'next'

import { Footer } from '@/components/footer'
import { Nav } from '@/components/nav'
import { NavMobile } from '@/components/nav-mobile'
import { cn } from '@/lib/utils'
import { inter, satoshi } from '@/styles/fonts'
import '@/styles/global.css'

export const metadata: Metadata = {
	title: 'Gabriel Campos | Software Engineer',
	description: 'My personal website and blog.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={cn(satoshi.variable, inter.variable)}>
				<main className='px-6'>
					<Nav />
					<NavMobile />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	)
}
