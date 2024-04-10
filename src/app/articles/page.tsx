import { MaxWidthWrapper } from '@/components/max-width-wrapper'

export default function ArticlesPage() {
	return (
		<MaxWidthWrapper className='flex flex-col md:min-h-[calc(100vh-8rem)] min-h-[calc(100vh-11rem)] p-6 py-16 gap-8'>
			<h1 className='text-4xl font-extrabold font-display bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-500'>
				Stories. Thoughts. Guides.
			</h1>
			<p className='text-gray-500 leading-loose'>
				Here begins my journey of{' '}
				<span className='text-white'>writing articles</span>. You can read about
				web development, <span className='text-white'>build in public</span>,
				and tech related topics.
			</p>
		</MaxWidthWrapper>
	)
}
