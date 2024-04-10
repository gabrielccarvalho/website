'use client'

import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { navItems } from './nav'

export function NavMobile() {
	const [open, setOpen] = useState(false)
	useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
	}, [open])

	return (
		<>
			<button
				type='button'
				onClick={() => setOpen(!open)}
				className={
					'fixed right-3 top-3 z-40 rounded-full p-2 transition-colors duration-200 hover:bg-white/10 focus:outline-none active:bg-white/15 lg:hidden font-medium'
				}
			>
				{open ? (
					<X className='h-5 w-5 text-white' />
				) : (
					<Menu className='h-5 w-5 text-white' />
				)}
			</button>
			<nav
				className={cn(
					'fixed inset-0 z-20 hidden w-full bg-black px-5 py-16 lg:hidden font-medium',
					open && 'block',
				)}
			>
				<ul className='grid divide-y divide-white/20'>
					{navItems.map(({ name, slug }) => (
						<li key={slug} className='py-3'>
							<Link
								href={`/${slug}`}
								onClick={() => setOpen(false)}
								className='flex w-full font-medium capitalize'
							>
								{name}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</>
	)
}
