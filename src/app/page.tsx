import Image from "next/image";

export default function Home() {
	return (
		<main className="bg-gray-100 min-h-screen p-8">
			<header className="flex flex-wrap justify-between items-center py-4">
				<h1 className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">JobBoard</h1>
				<nav className="flex-shrink-0">
					<ul className="flex space-x-4">
						<li>
							<a href="/" className="text-gray-600 hover:text-gray-800">
								Home
							</a>
						</li>
						<li>
							<a href="/" className="text-gray-600 hover:text-gray-800">
								Jobs
							</a>
						</li>
						<li>
							<a href="/" className="text-gray-600 hover:text-gray-800">
								About
							</a>
						</li>
						<li>
							<a href="/" className="text-gray-600 hover:text-gray-800">
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</header>

			<section className="mt-12">
				<h2 className="text-4xl font-bold text-gray-800 mb-8">Featured Jobs</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div className="bg-white p-6 rounded-lg shadow-lg">
						<Image
							src="/frontend-developer.png"
							alt="Company Logo"
							width={400}
							height={240}
							className="mb-4"
						/>
						<h3 className="font-semibold text-xl text-gray-800 mb-2">Frontend Developer</h3>
						<p className="text-gray-600">
							A tech company in San Francisco is looking for a skilled Frontend Developer to join
							their team. Experience with React is a must.
						</p>
						<div className="flex justify-between items-center mt-4">
							<span className="text-sm text-gray-500">Full-time</span>
							<span className="text-sm text-gray-500">San Francisco, CA</span>
						</div>
						<div className="flex justify-between items-center mt-2">
							<span className="text-lg font-bold text-gray-800">$120k - $150k</span>
							<a href="/" className="text-blue-600 hover:underline text-sm">
								Learn more &rarr;
							</a>
						</div>
						<button
							type="button"
							className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
						>
							Apply Now
						</button>
					</div>
					{/* Backend Developer Job Card */}
					<div className="bg-white p-6 rounded-lg shadow-lg">
						<Image
							src="/backend-developer.png"
							alt="Backend Developer Logo"
							width={400}
							height={240}
							className="mb-4"
						/>
						<h3 className="font-semibold text-xl text-gray-800 mb-2">Backend Developer</h3>
						<p className="text-gray-600">
							Innovative startup seeks Backend Developer with Node.js experience.
						</p>
						<div className="flex justify-between items-center mt-4">
							<span className="text-sm text-gray-500">Full-time</span>
							<span className="text-sm text-gray-500">New York, NY</span>
						</div>
						<div className="flex justify-between items-center mt-2">
							<span className="text-lg font-bold text-gray-800">$110k - $135k</span>
							<a href="/" className="text-blue-600 hover:underline text-sm">
								Learn more &rarr;
							</a>
						</div>
						<button
							type="button"
							className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
						>
							Apply Now
						</button>
					</div>

					{/* Data Scientist Job Card */}
					<div className="bg-white p-6 rounded-lg shadow-lg">
						<Image
							src="/data-scientist.png"
							alt="Data Scientist Logo"
							width={400}
							height={240}
							className="mb-4"
						/>
						<h3 className="font-semibold text-xl text-gray-800 mb-2">Data Scientist</h3>
						<p className="text-gray-600">
							Leading tech firm requires Data Scientist skilled in machine learning and statistical
							analysis.
						</p>
						<div className="flex justify-between items-center mt-4">
							<span className="text-sm text-gray-500">Part-time</span>
							<span className="text-sm text-gray-500">Remote</span>
						</div>
						<div className="flex justify-between items-center mt-2">
							<span className="text-lg font-bold text-gray-800">$90k - $120k</span>
							<a href="/" className="text-blue-600 hover:underline text-sm">
								Learn more &rarr;
							</a>
						</div>
						<button
							type="button"
							className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
						>
							Apply Now
						</button>
					</div>

					{/* Full Stack Developer Job Card */}
					<div className="bg-white p-6 rounded-lg shadow-lg">
						<Image
							src="/full-stack-developer.png"
							alt="Full Stack Developer Logo"
							width={400}
							height={240}
							className="mb-4"
						/>
						<h3 className="font-semibold text-xl text-gray-800 mb-2">Full Stack Developer</h3>
						<p className="text-gray-600">
							Full Stack Developer needed for a dynamic team. Proficiency in React and Django is
							essential.
						</p>
						<div className="flex justify-between items-center mt-4">
							<span className="text-sm text-gray-500">Contract</span>
							<span className="text-sm text-gray-500">Austin, TX</span>
						</div>
						<div className="flex justify-between items-center mt-2">
							<span className="text-lg font-bold text-gray-800">$100k - $130k</span>
							<a href="/" className="text-blue-600 hover:underline text-sm">
								Learn more &rarr;
							</a>
						</div>
						<button
							type="button"
							className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
						>
							Apply Now
						</button>
					</div>
					{/* UI/UX Designer Job Card */}
					<div className="bg-white p-6 rounded-lg shadow-lg">
						<Image
							src="/ui-ux-designer.png"
							alt="UI/UX Designer Logo"
							width={400}
							height={240}
							className="mb-4"
						/>
						<h3 className="font-semibold text-xl text-gray-800 mb-2">UI/UX Designer</h3>
						<p className="text-gray-600">
							Creative agency seeking a UI/UX Designer with a passion for user-centered design and
							prototyping.
						</p>
						<div className="flex justify-between items-center mt-4">
							<span className="text-sm text-gray-500">Freelance</span>
							<span className="text-sm text-gray-500">Seattle, WA</span>
						</div>
						<div className="flex justify-between items-center mt-2">
							<span className="text-lg font-bold text-gray-800">$70k - $90k</span>
							<a href="/" className="text-blue-600 hover:underline text-sm">
								Learn more &rarr;
							</a>
						</div>
						<button
							type="button"
							className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
						>
							Apply Now
						</button>
					</div>
				</div>
			</section>

			<footer className="mt-12 pt-6 border-t border-gray-300 text-center">
				<p className="text-gray-600">&copy; 2024 JobBoard. All rights reserved.</p>
			</footer>
		</main>
	);
}
