import {
	DiscordLogoIcon,
	GitHubLogoIcon,
	InstagramLogoIcon,
	LinkedInLogoIcon,
	TwitterLogoIcon,
} from '@radix-ui/react-icons'
import { MailIcon } from 'lucide-react'
import Link from 'next/link'

const socials = {
	linkedin: {
		name: 'Linkedin',
		href: 'https://linkedin.com/in/gabrielcamposdecarvalho',
		icon: <LinkedInLogoIcon className='size-5' />,
	},
	github: {
		name: 'Github',
		href: 'https://github.com/gabrielccarvalho',
		icon: <GitHubLogoIcon className='size-5' />,
	},
	twitter: {
		name: 'Twitter',
		href: 'https://twitter.com/deliciadecampos',
		icon: <TwitterLogoIcon className='size-5' />,
	},
	instagram: {
		name: 'Instagram',
		href: 'https://instagram.com/gabrielcampospc/',
		icon: <InstagramLogoIcon className='size-5' />,
	},
	discord: {
		name: 'Discord',
		href: 'https://discordapp.com/users/388128351493029889',
		icon: <DiscordLogoIcon className='size-5' />,
	},
}

export function Footer() {
	return (
		<footer className='md:flex items-center justify-center text-gray-500 text-sm py-6 gap-8 grid grid-cols-3'>
			{Object.keys(socials).map((social) => (
				<a
					key={socials[social as keyof typeof socials].name}
					href={socials[social as keyof typeof socials].href}
					target='_blank'
					rel='noreferrer'
					className='flex items-center gap-1 hover:text-white transition-colors duration-300'
				>
					{socials[social as keyof typeof socials].icon}
					{socials[social as keyof typeof socials].name}
				</a>
			))}
			<Link
				href='/contact'
				className='flex items-center gap-1 hover:text-white transition-colors duration-300'
			>
				<MailIcon className='size-5' />
				Email
			</Link>
		</footer>
	)
}
