import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from '@radix-ui/react-icons'

export default function Home() {
	return (
		<MaxWidthWrapper className='flex flex-col md:min-h-[calc(100vh-8rem)] h-[calc(100vh-11rem)] justify-center p-6 py-16 gap-8'>
			<h1 className='text-4xl font-extrabold font-display px-4'>
				Gabriel Campos
			</h1>
			<div className='flex flex-col gap-1'>
				<span className='px-4'>Software Engineer</span>
				<span className='text-gray-500 px-4'>
					Passionate about javascript and open-source.
				</span>
				<Button variant='ghost' className='self-start rounded-lg mt-4'>
					<span>
						Press <kbd className='bg-gray-600 px-1.5 py-0.5 rounded-sm'>⌘</kbd>{' '}
						<kbd className='bg-gray-600 px-1.5 py-0.5 rounded-sm'>k</kbd> to
						start
					</span>
					<ArrowRightIcon className='size-5 ml-1' />
				</Button>
			</div>
		</MaxWidthWrapper>
	)
}
