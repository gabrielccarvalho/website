import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import { MailForm } from './_components/mail-form'

export default function ContactPage() {
	return (
		<MaxWidthWrapper className='flex flex-col md:min-h-[calc(100vh-8rem)] min-h-[calc(100vh-11rem)] p-6 py-16 gap-8'>
			<h1 className='text-4xl font-extrabold font-display bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-sky-300 to-indigo-500'>
				Email me. Like in the old days.
			</h1>
			<p className='text-gray-500 leading-loose'>
				If you find my work interesting and want to get in touch, feel free to
				send me an email. I'll do my best to get back to you as soon as
				possible.
			</p>
			<MailForm />
		</MaxWidthWrapper>
	)
}
