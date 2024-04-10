'use client'

import * as React from 'react'

import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from '@/components/ui/command'
import { Code2, Command, Link, MailIcon } from 'lucide-react'
import { Button } from './ui/button'

export function DialogCommand() {
	const [open, setOpen] = React.useState(false)

	React.useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault()
				setOpen((open) => !open)
			}
		}

		document.addEventListener('keydown', down)
		return () => document.removeEventListener('keydown', down)
	}, [])

	return (
		<>
			<Button size='icon' variant='ghost' onClick={() => setOpen(!open)}>
				<Command className='size-6' />
			</Button>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder='Type a command or search...' />
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandGroup heading='General'>
						<CommandItem>
							<Link className='mr-2 size-4' />
							<span>Copy Link</span>
						</CommandItem>
						<CommandItem>
							<MailIcon className='mr-2 size-4' />
							<span>Send Email</span>
						</CommandItem>
						<CommandItem>
							<a href='' target='_blank' rel='noopener noreferrer'>
								<Code2 className='mr-2 size-4' />
								<span>View Source Code</span>
							</a>
						</CommandItem>
					</CommandGroup>
					<CommandSeparator />
				</CommandList>
			</CommandDialog>
		</>
	)
}
