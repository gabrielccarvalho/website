'use client'

import { Logo } from '@/components/logo'
import { useScroll } from '@/hooks/use-scroll'
import { cn } from '@/lib/utils'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { Command } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { DialogCommand } from './command-dialog'
import { Button } from './ui/button'

export const navItems = [
	{
		name: 'About',
		slug: 'about',
	},
	{
		name: 'Work',
		slug: 'work',
	},
	{
		name: 'Projects',
		slug: 'projects',
	},
	{
		name: 'Articles',
		slug: 'articles',
	},
	{
		name: 'Contact',
		slug: 'contact',
	},
]

export function Nav() {
	const scrolled = useScroll(80)
	const pathname = usePathname()

	return (
		<div
			className={cn('sticky inset-x-0 top-0 z-30 w-full transition-all', {
				'backdrop-blur-lg': scrolled,
			})}
		>
			<div className='flex h-14 items-center justify-between'>
				<Link href='/'>
					<Button size='icon' variant='ghost'>
						<Logo />
					</Button>
				</Link>
				<div className='flex items-center space-x-4'>
					<NavigationMenuPrimitive.Root
						delayDuration={0}
						className='relative hidden lg:block'
					>
						<NavigationMenuPrimitive.List className='flex flex-row space-x-8 p-4'>
							{navItems.map(({ name, slug }) => (
								<NavigationMenuPrimitive.Item key={slug} asChild>
									<Link
										id={`nav-${slug}`}
										key={slug}
										href={`/${slug}`}
										aria-selected={pathname === `/${slug}`}
										className='rounded-md px-3 py-2 text-xs uppercase font-medium text-gray-500 transition-colors duration-300 ease-out hover:text-white aria-selected:text-white aria-selected:underline aria-selected:underline-offset-8'
									>
										{name}
									</Link>
								</NavigationMenuPrimitive.Item>
							))}
						</NavigationMenuPrimitive.List>

						<NavigationMenuPrimitive.Viewport className='data-[state=closed]:animate-scale-out-content data-[state=open]:animate-scale-in-content absolute left-0 top-full flex w-[var(--radix-navigation-menu-viewport-width)] origin-[top_center] justify-start rounded-lg border border-gray-200 bg-white shadow-lg' />
					</NavigationMenuPrimitive.Root>
				</div>
				<DialogCommand />
			</div>
		</div>
	)
}
