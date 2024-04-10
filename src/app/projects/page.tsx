import { MaxWidthWrapper } from '@/components/max-width-wrapper'

export default function ProjectsPage() {
	return (
		<MaxWidthWrapper className='flex flex-col md:min-h-[calc(100vh-8rem)] p-6 py-16 gap-8'>
			<h1 className='text-4xl font-extrabold font-display bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-orange-400 to-yellow-300'>
				Work. Hobby. Open Source.
			</h1>
			<p className='text-gray-500 leading-loose'>
				I'm obsessed with side projects and recently started{' '}
				<span className='text-white'>building in public</span>. Here you can
				navigate through my projects. SOme projects are still active, others
				have been discontinued.
			</p>
		</MaxWidthWrapper>
	)
}
