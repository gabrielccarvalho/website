'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

const formSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	message: z.string(),
})

export function MailForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	})

	const handleSubmit = form.handleSubmit(
		async (data: z.infer<typeof formSchema>) => {
			console.log(data)
		},
	)

	return (
		<div className='flex flex-col gap-8'>
			<h3 className='text-2xl'>Send an email</h3>
			<form onSubmit={handleSubmit} className='max-w-sm space-y-4'>
				<div className='space-y-2'>
					<Label htmlFor='name' className='uppercase text-gray-400 text-xs'>
						Name
					</Label>
					<Input
						id='name'
						placeholder='John'
						required
						type='text'
						{...form.register('name')}
						className='border-white/40'
					/>
				</div>
				<div className='space-y-2'>
					<Label htmlFor='email' className='uppercase text-gray-400 text-xs'>
						Email
					</Label>
					<Input
						id='email'
						placeholder='m@example.com'
						required
						type='email'
						{...form.register('email')}
						className='border-white/40'
					/>
				</div>
				<div className='space-y-2'>
					<Label htmlFor='message' className='uppercase text-gray-400 text-xs'>
						Message
					</Label>
					<Textarea
						id='message'
						placeholder='How can I help you?'
						rows={5}
						required
						{...form.register('message')}
						className='border-white/40 resize-none'
					/>
				</div>
				<Button type='submit' className='w-full'>
					Send
				</Button>
			</form>
		</div>
	)
}
