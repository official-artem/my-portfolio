import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import MainImage from "../../assets/my-photo.jpg";

export const Home = () => {
  return (
		<div
			name='home'
			className='min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 flex items-center lg:mt-[-3rem]'>
			<div className='max-w-screen-lg mx-auto flex flex-col gap-4 items-center justify-center h-full px-4 md:flex-row'>
				<div className='flex flex-col justify-center h-full'>
					<h1 className='inline-block text-4xl sm:text-5xl sm:h-[8rem] lg:text-7xl lg:h-[10rem] max-sm:h-[100px] py-4 max-w-[40rem] font-bold text-white'>
						I&apos;m a Full Stack Developer
					</h1>
					<p className='text-gray-500 py-4 max-w-[50rem] text-justify'>
						Hello! In just a year, I&apos;ve gone from knowing nothing to
						becoming a full stack developer, and I&apos;m thoroughly enjoying
						the experience. I&apos;m looking to join a team where I can continue
						to grow and develop projects that will be of use to people. I work
						with React, Node.js, JavaScript, TypeScript, HTML5, CSS3, BEM, SCSS,
						and I&apos;m open to learning Angular or Vue. My goal is to find a
						job where I can reach my full potential and be as beneficial as
						possible.
					</p>

					<div>
						<Link
							to='portfolio'
							smooth
							duration={500}
							className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
							Portfolio
							<span className='group-hover:rotate-90 duration-300'>
								<MdOutlineKeyboardArrowRight className='ml-1' size={20} />
							</span>
						</Link>
					</div>
				</div>

				<div>
					<img
						src={MainImage}
						alt='My profile'
						className='rounded-2xl mx-auto w-2/3 md:w-full'
					/>
				</div>
			</div>
		</div>
	);
};
