import { createFileRoute } from "@tanstack/solid-router";
import {
	ArrowRight,
	ChevronDown,
	Code,
	Database,
	Palette,
	Sparkles,
	TrendingUp,
	Users,
	Menu,
	X,
	Target,
	Compass,
	Star,
	Award,
	BookOpen,
	MessageCircle,
	Shield,
	Check,
} from "lucide-solid";
import { Motion } from "solid-motionone";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "~/components/ui/card";
import { siGithub } from "simple-icons";
import { createSignal } from "solid-js";

export const Route = createFileRoute("/")({ component: App });

function App() {
	const [mobileMenuOpen, setMobileMenuOpen] = createSignal(false);

	return (
		<div class="bg-black relative">
			{/* Premium Navigation */}
			<nav class="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
				<div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
					<div class="flex items-center justify-between h-16">
						<Motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							class="flex items-center space-x-2"
						>
							<div class="w-8 h-8 rounded-lg bg-linear-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10">
								<Sparkles class="w-4 h-4 text-white" />
							</div>
							<span class="text-white font-medium tracking-tight">
								Mentorship.01
							</span>
						</Motion.div>

						{/* Desktop Menu */}
						<Motion.div
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							class="hidden md:flex items-center space-x-1"
						>
							<Button
								variant="ghost"
								class="text-gray-300 hover:text-white hover:bg-white/5 text-sm font-medium"
							>
								About
							</Button>
							<Button
								variant="ghost"
								class="text-gray-300 hover:text-white hover:bg-white/5 text-sm font-medium"
							>
								Sessions
							</Button>
							<Button
								variant="ghost"
								class="text-gray-300 hover:text-white hover:bg-white/5 text-sm font-medium"
							>
								Career Quiz
							</Button>
							<div class="pl-4 ml-4 border-l border-white/10">
								<Button class="bg-white text-black hover:bg-gray-100 text-sm font-medium px-5">
									Give Feedback
								</Button>
							</div>
						</Motion.div>

						{/* Mobile Menu Button */}
						<button
							type="button"
							class="md:hidden text-white p-2"
							onClick={() => setMobileMenuOpen(!mobileMenuOpen())}
						>
							{mobileMenuOpen() ? (
								<X class="w-5 h-5" />
							) : (
								<Menu class="w-5 h-5" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{mobileMenuOpen() && (
					<Motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						class="md:hidden border-t border-white/5 bg-black/95 backdrop-blur-xl"
					>
						<div class="px-6 py-4 space-y-2">
							<Button
								variant="ghost"
								class="w-full justify-start text-gray-300 hover:text-white hover:bg-white/5"
							>
								About
							</Button>
							<Button
								variant="ghost"
								class="w-full justify-start text-gray-300 hover:text-white hover:bg-white/5"
							>
								Sessions
							</Button>
							<Button
								variant="ghost"
								class="w-full justify-start text-gray-300 hover:text-white hover:bg-white/5"
							>
								Career Quiz
							</Button>
							<Button class="w-full bg-white text-black hover:bg-gray-100 mt-4">
								Give Feedback
							</Button>
						</div>
					</Motion.div>
				)}
			</nav>

			{/* Hero Section */}
			<section class="relative overflow-hidden min-h-screen flex items-center pt-16">
				{/* Enhanced Background with Grid */}
				<div class="absolute inset-0">
					{/* Grid Pattern */}
					<div
						class="absolute inset-0 opacity-[0.02]"
						style={{
							"background-image":
								"linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
							"background-size": "50px 50px",
						}}
					/>

					{/* Gradient Orbs */}
					<Motion.div
						animate={{
							y: [0, -20, 0],
							x: [0, 10, 0],
							scale: [1, 1.1, 1],
						}}
						transition={{ duration: 20, repeat: Infinity }}
						class="absolute top-20 left-20 w-[500px] h-[500px] bg-linear-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-[120px]"
					/>
					<Motion.div
						animate={{
							y: [0, 20, 0],
							x: [0, -10, 0],
							scale: [1, 1.2, 1],
						}}
						transition={{ duration: 25, repeat: Infinity }}
						class="absolute bottom-20 right-20 w-[600px] h-[600px] bg-linear-to-br from-pink-500/10 to-orange-500/10 rounded-full blur-[120px]"
					/>
				</div>

				<div class="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-24">
					{/* Status Badge */}
					<Motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						class="flex justify-center mb-12"
					>
						<Badge class="px-5 py-2 bg-white/5 text-gray-300 border border-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-sm">
							<Sparkles class="w-3.5 h-3.5 mr-2" />
							<span class="text-sm font-medium">
								Your Journey Into Tech Starts Here
							</span>
						</Badge>
					</Motion.div>

					{/* Hero Headline */}
					<Motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.1 }}
						class="text-6xl sm:text-7xl lg:text-8xl font-light text-center text-white mb-8 tracking-[-0.03em] leading-[1.05]"
					>
						Transform Your{" "}
						<span class="block mt-2 bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent font-medium">
							Tech Career
						</span>
					</Motion.h1>

					<Motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
						class="text-xl sm:text-2xl text-gray-400 text-center max-w-3xl mx-auto mb-16 leading-relaxed font-light"
					>
						Thank you for attending our mentorship session. Share
						your experience, discover your perfect tech role, and
						unlock your potential.
					</Motion.p>

					{/* CTA Buttons */}
					<Motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.3 }}
						class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24"
					>
						<Button
							class="group relative bg-white text-black hover:bg-white/90 px-8 py-6 text-base font-medium transition-all duration-300 overflow-hidden hover:scale-[1.02] shadow-lg shadow-white/20"
							size="lg"
						>
							<span class="relative z-10 flex items-center">
								Give Feedback
								<ArrowRight class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
							</span>
						</Button>

						<Button
							class="group bg-white/5 text-white hover:bg-white/10 px-8 py-6 text-base font-medium border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm"
							size="lg"
							variant="outline"
						>
							<span class="flex items-center">
								Take Career Quiz
								<ArrowRight class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
							</span>
						</Button>
					</Motion.div>

					{/* Stats Grid */}
					<Motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.4 }}
						class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
					>
						<Motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							class="group cursor-default text-center p-6 rounded-2xl bg-white/2 border border-white/5 hover:border-white/10 hover:bg-white/4 transition-all duration-500"
						>
							<div class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 mb-4 border border-white/10 group-hover:border-white/20 group-hover:scale-110 transition-all duration-500">
								<svg
									role="img"
									viewBox="0 0 24 24"
									class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-500 fill-current"
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>GitHub</title>
									<path d={siGithub.path} />
								</svg>
							</div>
							<p class="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
								GitHub Mastery
							</p>
						</Motion.div>

						<Motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.6 }}
							class="group cursor-default text-center p-6 rounded-2xl bg-white/2 border border-white/5 hover:border-white/10 hover:bg-white/4 transition-all duration-500"
						>
							<div class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 mb-4 border border-white/10 group-hover:border-white/20 group-hover:scale-110 transition-all duration-500">
								<Users class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-500" />
							</div>
							<p class="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
								Career Guidance
							</p>
						</Motion.div>

						<Motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.7 }}
							class="group cursor-default text-center p-6 rounded-2xl bg-white/2 border border-white/5 hover:border-white/10 hover:bg-white/4 transition-all duration-500"
						>
							<div class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 mb-4 border border-white/10 group-hover:border-white/20 group-hover:scale-110 transition-all duration-500">
								<TrendingUp class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-500" />
							</div>
							<p class="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
								Skill Growth
							</p>
						</Motion.div>

						<Motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.8 }}
							class="group cursor-default text-center p-6 rounded-2xl bg-white/2 border border-white/5 hover:border-white/10 hover:bg-white/4 transition-all duration-500"
						>
							<div class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 mb-4 border border-white/10 group-hover:border-white/20 group-hover:scale-110 transition-all duration-500">
								<Award class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-500" />
							</div>
							<p class="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
								Best Practices
							</p>
						</Motion.div>
					</Motion.div>

					{/* Scroll Indicator */}
					<Motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.7, delay: 1 }}
						class="absolute bottom-12 left-1/2 -translate-x-1/2"
					>
						<Motion.div
							animate={{ y: [0, 8, 0] }}
							transition={{ duration: 2, repeat: Infinity }}
							class="flex flex-col items-center gap-2"
						>
							<span class="text-xs text-gray-500 uppercase tracking-wider">
								Scroll
							</span>
							<ChevronDown class="w-4 h-4 text-gray-500" />
						</Motion.div>
					</Motion.div>
				</div>
			</section>

			{/* Role Comparison Section */}
			<section class="relative py-32 bg-linear-to-b from-black via-black/95 to-black border-t border-white/5">
				<div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
					<Motion.div
						initial={{ opacity: 0, y: 50 }}
						inView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						class="text-center mb-20"
					>
						<Badge class="mb-6 px-4 py-2 bg-white/5 text-gray-300 border border-white/10 backdrop-blur-sm">
							<Compass class="w-3.5 h-3.5 mr-2" />
							<span class="text-sm font-medium">
								Find Your Path
							</span>
						</Badge>
						<h2 class="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6 tracking-[-0.03em]">
							Discover Your{" "}
							<span class="block mt-2 bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent font-medium">
								Perfect Role
							</span>
						</h2>
						<p class="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
							Not sure where you fit in tech? Explore different
							career paths and find what resonates with your
							passion.
						</p>
					</Motion.div>

					{/* Role Cards */}
					<div class="grid md:grid-cols-3 gap-6 mb-16">
						{/* Frontend Developer Card */}
						<Motion.div
							initial={{ opacity: 0, y: 50 }}
							inView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
						>
							<Card class="group relative overflow-hidden bg-linear-to-b from-white/3 to-white/1 border border-white/10 hover:border-white/20 transition-all duration-500 hover:translate-y-[-8px] h-full flex flex-col backdrop-blur-sm">
								<div class="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
								<CardHeader class="relative p-8 pb-6">
									<div class="w-14 h-14 rounded-2xl bg-linear-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center mb-6 border border-white/10 group-hover:border-white/20 group-hover:scale-110 transition-all duration-500">
										<Code class="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-500" />
									</div>
									<CardTitle class="text-2xl mb-3 text-white font-medium">
										Frontend Developer
									</CardTitle>
									<CardDescription class="text-base text-gray-400 font-light">
										The visual architect of the web
									</CardDescription>
								</CardHeader>
								<CardContent class="relative p-8 pt-0 space-y-6 flex-1 flex flex-col">
									<p class="text-gray-300 leading-relaxed text-base font-light">
										Create stunning, interactive websites
										that users love. Craft beautiful
										interfaces with HTML, CSS, and
										JavaScript.
									</p>
									<div class="space-y-4 flex-1">
										<p class="text-sm font-medium text-gray-400 uppercase tracking-wider">
											You'll excel if you enjoy
										</p>
										<div class="flex flex-wrap gap-2">
											<Badge
												variant="secondary"
												class="bg-white/5 text-gray-300 border border-white/10 text-sm px-4 py-1.5 hover:border-white/20 hover:text-white hover:scale-105 transition-all duration-300 cursor-default font-normal"
											>
												Visual Design
											</Badge>
											<Badge
												variant="secondary"
												class="bg-white/5 text-gray-300 border border-white/10 text-sm px-4 py-1.5 hover:border-white/20 hover:text-white hover:scale-105 transition-all duration-300 cursor-default font-normal"
											>
												Creativity
											</Badge>
											<Badge
												variant="secondary"
												class="bg-white/5 text-gray-300 border border-white/10 text-sm px-4 py-1.5 hover:border-white/20 hover:text-white hover:scale-105 transition-all duration-300 cursor-default font-normal"
											>
												User Experience
											</Badge>
										</div>
									</div>
									<div class="pt-6 border-t border-white/5 mt-auto">
										<Button
											variant="ghost"
											class="group/btn p-0 h-auto text-sm text-gray-400 hover:text-white uppercase tracking-wider font-medium hover:bg-transparent transition-colors duration-300"
										>
											Learn More
											<ArrowRight class="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
										</Button>
									</div>
								</CardContent>
							</Card>
						</Motion.div>

						{/* Backend Developer Card */}
						<Motion.div
							initial={{ opacity: 0, y: 50 }}
							inView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							<Card class="group relative overflow-hidden bg-linear-to-b from-white/3 to-white/1 border border-white/10 hover:border-white/20 transition-all duration-500 hover:translate-y-[-8px] h-full flex flex-col backdrop-blur-sm">
								<div class="absolute inset-0 bg-linear-to-br from-green-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
								<CardHeader class="relative p-8 pb-6">
									<div class="w-14 h-14 rounded-2xl bg-linear-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center mb-6 border border-white/10 group-hover:border-white/20 group-hover:scale-110 transition-all duration-500">
										<Database class="w-6 h-6 text-green-400 group-hover:text-green-300 transition-colors duration-500" />
									</div>
									<CardTitle class="text-2xl mb-3 text-white font-medium">
										Backend Developer
									</CardTitle>
									<CardDescription class="text-base text-gray-400 font-light">
										The brain behind the scenes
									</CardDescription>
								</CardHeader>
								<CardContent class="relative p-8 pt-0 space-y-6 flex-1 flex flex-col">
									<p class="text-gray-300 leading-relaxed text-base font-light">
										Build powerful engines that make apps
										work. Design databases, APIs, and server
										logic using Python, Java, or Node.js.
									</p>
									<div class="space-y-4 flex-1">
										<p class="text-sm font-medium text-gray-400 uppercase tracking-wider">
											You'll excel if you enjoy
										</p>
										<div class="flex flex-wrap gap-2">
											<Badge
												variant="secondary"
												class="bg-white/5 text-gray-300 border border-white/10 text-sm px-4 py-1.5 hover:border-white/20 hover:text-white hover:scale-105 transition-all duration-300 cursor-default font-normal"
											>
												Problem Solving
											</Badge>
											<Badge
												variant="secondary"
												class="bg-white/5 text-gray-300 border border-white/10 text-sm px-4 py-1.5 hover:border-white/20 hover:text-white hover:scale-105 transition-all duration-300 cursor-default font-normal"
											>
												Logic & Systems
											</Badge>
											<Badge
												variant="secondary"
												class="bg-white/5 text-gray-300 border border-white/10 text-sm px-4 py-1.5 hover:border-white/20 hover:text-white hover:scale-105 transition-all duration-300 cursor-default font-normal"
											>
												Data Architecture
											</Badge>
										</div>
									</div>
									<div class="pt-6 border-t border-white/5 mt-auto">
										<Button
											variant="ghost"
											class="group/btn p-0 h-auto text-sm text-gray-400 hover:text-white uppercase tracking-wider font-medium hover:bg-transparent transition-colors duration-300"
										>
											Learn More
											<ArrowRight class="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
										</Button>
									</div>
								</CardContent>
							</Card>
						</Motion.div>

						{/* UI/UX Designer Card */}
						<Motion.div
							initial={{ opacity: 0, y: 50 }}
							inView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
						>
							<Card class="group relative overflow-hidden bg-linear-to-b from-white/3 to-white/1 border border-white/10 hover:border-white/20 transition-all duration-500 hover:translate-y-[-8px] h-full flex flex-col backdrop-blur-sm">
								<div class="absolute inset-0 bg-linear-to-br from-pink-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
								<CardHeader class="relative p-8 pb-6">
									<div class="w-14 h-14 rounded-2xl bg-linear-to-br from-pink-500/10 to-purple-500/10 flex items-center justify-center mb-6 border border-white/10 group-hover:border-white/20 group-hover:scale-110 transition-all duration-500">
										<Palette class="w-6 h-6 text-pink-400 group-hover:text-pink-300 transition-colors duration-500" />
									</div>
									<CardTitle class="text-2xl mb-3 text-white font-medium">
										UI/UX Designer
									</CardTitle>
									<CardDescription class="text-base text-gray-400 font-light">
										The experience creator
									</CardDescription>
								</CardHeader>
								<CardContent class="relative p-8 pt-0 space-y-6 flex-1 flex flex-col">
									<p class="text-gray-300 leading-relaxed text-base font-light">
										Design delightful experiences users
										love. Blend art and psychology to create
										beautiful, intuitive interfaces using
										Figma.
									</p>
									<div class="space-y-4 flex-1">
										<p class="text-sm font-medium text-gray-400 uppercase tracking-wider">
											You'll excel if you enjoy
										</p>
										<div class="flex flex-wrap gap-2">
											<Badge
												variant="secondary"
												class="bg-white/5 text-gray-300 border border-white/10 text-sm px-4 py-1.5 hover:border-white/20 hover:text-white hover:scale-105 transition-all duration-300 cursor-default font-normal"
											>
												Aesthetics
											</Badge>
											<Badge
												variant="secondary"
												class="bg-white/5 text-gray-300 border border-white/10 text-sm px-4 py-1.5 hover:border-white/20 hover:text-white hover:scale-105 transition-all duration-300 cursor-default font-normal"
											>
												User Empathy
											</Badge>
											<Badge
												variant="secondary"
												class="bg-white/5 text-gray-300 border border-white/10 text-sm px-4 py-1.5 hover:border-white/20 hover:text-white hover:scale-105 transition-all duration-300 cursor-default font-normal"
											>
												Innovation
											</Badge>
										</div>
									</div>
									<div class="pt-6 border-t border-white/5 mt-auto">
										<Button
											variant="ghost"
											class="group/btn p-0 h-auto text-sm text-gray-400 hover:text-white uppercase tracking-wider font-medium hover:bg-transparent transition-colors duration-300"
										>
											Learn More
											<ArrowRight class="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
										</Button>
									</div>
								</CardContent>
							</Card>
						</Motion.div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section class="relative py-32 bg-black border-t border-white/5">
				<div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
					<Motion.div
						initial={{ opacity: 0, y: 30 }}
						inView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						class="text-center mb-20"
					>
						<Badge class="mb-6 px-4 py-2 bg-white/5 text-gray-300 border border-white/10 backdrop-blur-sm">
							<Star class="w-3.5 h-3.5 mr-2" />
							<span class="text-sm font-medium">
								Why Choose Us
							</span>
						</Badge>
						<h2 class="text-4xl sm:text-5xl font-light text-white mb-6 tracking-[-0.03em]">
							Built for Your Success
						</h2>
					</Motion.div>

					<div class="grid md:grid-cols-3 gap-6">
						<Motion.div
							initial={{ opacity: 0, y: 30 }}
							inView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							class="group p-8 rounded-2xl bg-white/2 border border-white/10 hover:border-white/20 hover:bg-white/4 transition-all duration-500"
						>
							<div class="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-all duration-500">
								<BookOpen class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-500" />
							</div>
							<h3 class="text-xl font-medium text-white mb-3">
								Expert Guidance
							</h3>
							<p class="text-gray-400 leading-relaxed font-light">
								Learn from industry professionals with years of
								real-world experience in tech.
							</p>
						</Motion.div>

						<Motion.div
							initial={{ opacity: 0, y: 30 }}
							inView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							class="group p-8 rounded-2xl bg-white/2 border border-white/10 hover:border-white/20 hover:bg-white/4 transition-all duration-500"
						>
							<div class="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-all duration-500">
								<MessageCircle class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-500" />
							</div>
							<h3 class="text-xl font-medium text-white mb-3">
								Personalized Feedback
							</h3>
							<p class="text-gray-400 leading-relaxed font-light">
								Get tailored advice and actionable insights to
								accelerate your growth.
							</p>
						</Motion.div>

						<Motion.div
							initial={{ opacity: 0, y: 30 }}
							inView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
							class="group p-8 rounded-2xl bg-white/2 border border-white/10 hover:border-white/20 hover:bg-white/4 transition-all duration-500"
						>
							<div class="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-all duration-500">
								<Shield class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-500" />
							</div>
							<h3 class="text-xl font-medium text-white mb-3">
								Proven Framework
							</h3>
							<p class="text-gray-400 leading-relaxed font-light">
								Follow a structured path designed to help you
								reach your career goals.
							</p>
						</Motion.div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section class="relative py-32 overflow-hidden border-t border-white/5">
				{/* Background Gradient */}
				<div class="absolute inset-0">
					<div class="absolute inset-0 bg-linear-to-b from-black via-purple-950/5 to-black" />
					<Motion.div
						animate={{
							scale: [1, 1.2, 1],
							opacity: [0.1, 0.15, 0.1],
						}}
						transition={{ duration: 15, repeat: Infinity }}
						class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-linear-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-[120px]"
					/>
				</div>

				<div class="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
					<Motion.div
						initial={{ opacity: 0, y: 30 }}
						inView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
					>
						<Badge class="mb-8 px-4 py-2 bg-white/5 text-gray-300 border border-white/10 backdrop-blur-sm">
							<Target class="w-3.5 h-3.5 mr-2" />
							<span class="text-sm font-medium">Take Action</span>
						</Badge>

						<h2 class="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 tracking-[-0.03em] leading-[1.1]">
							Ready to{" "}
							<span class="block mt-2 bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent font-medium">
								Shape Your Future?
							</span>
						</h2>

						<p class="text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
							Your feedback helps us create better mentorship
							experiences. Our career quiz helps you discover
							where you truly belong.
						</p>
					</Motion.div>

					<Motion.div
						initial={{ opacity: 0, y: 30 }}
						inView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
						class="flex flex-col sm:flex-row gap-4 justify-center mb-16"
					>
						<Button
							class="group relative bg-white text-black hover:bg-white/90 px-8 py-6 text-base font-medium transition-all duration-300 overflow-hidden hover:scale-[1.02] shadow-lg shadow-white/20"
							size="lg"
						>
							<span class="relative z-10 flex items-center">
								Share Your Feedback
								<ArrowRight class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
							</span>
						</Button>

						<Button
							class="group bg-white/5 text-white hover:bg-white/10 px-8 py-6 text-base font-medium border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm"
							size="lg"
							variant="outline"
						>
							<span class="flex items-center">
								Discover Your Path
								<ArrowRight class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
							</span>
						</Button>
					</Motion.div>

					{/* Trust Indicators */}
					<Motion.div
						initial={{ opacity: 0 }}
						inView={{ opacity: 1 }}
						transition={{ duration: 0.7, delay: 0.4 }}
						class="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400"
					>
						<div class="flex items-center gap-2">
							<Check class="w-4 h-4 text-green-400" />
							<span>Free Career Assessment</span>
						</div>
						<div class="flex items-center gap-2">
							<Check class="w-4 h-4 text-green-400" />
							<span>Instant Results</span>
						</div>
						<div class="flex items-center gap-2">
							<Check class="w-4 h-4 text-green-400" />
							<span>Expert Insights</span>
						</div>
					</Motion.div>
				</div>
			</section>

			{/* Footer */}
			<footer class="bg-black border-t border-white/5 py-12">
				<div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
					<div class="flex flex-col md:flex-row items-center justify-between gap-6">
						<div class="flex items-center space-x-2">
							<div class="w-8 h-8 rounded-lg bg-linear-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10">
								<Sparkles class="w-4 h-4 text-white" />
							</div>
							<span class="text-white font-medium tracking-tight">
								Mentorship.01
							</span>
						</div>

						<div class="flex items-center gap-8">
							<Button
								variant="ghost"
								class="text-gray-400 hover:text-white text-sm"
							>
								About
							</Button>
							<Button
								variant="ghost"
								class="text-gray-400 hover:text-white text-sm"
							>
								Privacy
							</Button>
							<Button
								variant="ghost"
								class="text-gray-400 hover:text-white text-sm"
							>
								Contact
							</Button>
						</div>

						<div class="text-center md:text-right">
							<p class="text-sm text-gray-400">
								© 2025 Mentorship.01. All rights reserved.
							</p>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
