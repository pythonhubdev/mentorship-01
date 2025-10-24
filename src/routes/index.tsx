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
import { siGithub, siX } from "simple-icons";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<div class="bg-black">
			{/* Hero Section */}
			<section class="relative overflow-hidden min-h-screen flex items-center">
				{/* Subtle Background Elements */}
				<div class="absolute inset-0 opacity-[0.02]">
					<Motion.div
						animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
						transition={{ duration: 20, repeat: Infinity }}
						class="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-[100px]"
					/>
					<Motion.div
						animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
						transition={{ duration: 25, repeat: Infinity }}
						class="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-[120px]"
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
						<Badge class="px-4 py-1.5 bg-transparent text-gray-300 border border-white/5 hover:border-white/10 transition-colors duration-700">
							<Sparkles class="w-3 h-3 mr-2" />
							Your Journey Into Tech Starts Here
						</Badge>
					</Motion.div>

					{/* Hero Headline */}
					<Motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.1 }}
						class="text-6xl sm:text-7xl lg:text-8xl font-light text-center text-white mb-8 tracking-[-0.02em] leading-[1.1]"
					>
						Transform Your{" "}
						<span class="font-normal italic">Tech Journey</span>
					</Motion.h1>

					<Motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
						class="text-xl sm:text-2xl text-gray-300 text-center max-w-2xl mx-auto mb-16 leading-relaxed font-light"
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
						class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
					>
						<Button
							class="group relative bg-white text-black hover:bg-gray-100 px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all duration-700 overflow-hidden hover:scale-105"
							size="lg"
						>
							<span class="relative z-10 flex items-center">
								Give Feedback
								<ArrowRight class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-500" />
							</span>
							<div class="absolute inset-0 bg-white/90 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
						</Button>

						<Button
							class="group bg-transparent text-white hover:bg-white/5 px-8 py-4 text-sm font-medium tracking-wide uppercase border border-white/10 hover:border-white/20 transition-all duration-700 hover:scale-105"
							size="lg"
							variant="outline"
						>
							<span class="flex items-center">
								Take Career Quiz
								<ArrowRight class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-500" />
							</span>
						</Button>
					</Motion.div>

					{/* Session Highlights */}
					<Motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.4 }}
						class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
					>
						<Motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							class="text-center group cursor-default"
						>
							<div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-transparent mb-4 border border-white/5 group-hover:border-white/10 transition-all duration-700 group-hover:scale-110">
								<svg
									role="img"
									viewBox="0 0 24 24"
									class="w-5 h-5 text-gray-400 group-hover:text-gray-200 transition-colors duration-700 fill-current"
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>GitHub</title>
									<path d={siGithub.path} />
								</svg>
							</div>
							<p class="text-xs font-medium text-gray-400 uppercase tracking-wider">
								GitHub Mastery
							</p>
						</Motion.div>

						<Motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.6 }}
							class="text-center group cursor-default"
						>
							<div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-transparent mb-4 border border-white/5 group-hover:border-white/10 transition-all duration-700 group-hover:scale-110">
								<svg
									role="img"
									viewBox="0 0 24 24"
									class="w-5 h-5 text-gray-400 group-hover:text-gray-200 transition-colors duration-700 fill-current"
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>X</title>
									<path d={siX.path} />
								</svg>
							</div>
							<p class="text-xs font-medium text-gray-400 uppercase tracking-wider">
								X Updates
							</p>
						</Motion.div>

						<Motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.7 }}
							class="text-center group cursor-default"
						>
							<div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-transparent mb-4 border border-white/5 group-hover:border-white/10 transition-all duration-700 group-hover:scale-110">
								<Users class="w-5 h-5 text-gray-400 group-hover:text-gray-200 transition-colors duration-700" />
							</div>
							<p class="text-xs font-medium text-gray-400 uppercase tracking-wider">
								Career Guidance
							</p>
						</Motion.div>
						<Motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.8 }}
							class="text-center group cursor-default"
						>
							<div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-transparent mb-4 border border-white/5 group-hover:border-white/10 transition-all duration-700 group-hover:scale-110">
								<TrendingUp class="w-5 h-5 text-gray-400 group-hover:text-gray-200 transition-colors duration-700" />
							</div>
							<p class="text-xs font-medium text-gray-400 uppercase tracking-wider">
								Skill Growth
							</p>
						</Motion.div>
					</Motion.div>

					{/* Scroll Indicator */}
					<Motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.7, delay: 0.9 }}
						class="absolute bottom-12 left-1/2 -translate-x-1/2"
					>
						<div class="animate-bounce">
							<ChevronDown class="w-5 h-5 text-gray-500" />
						</div>
					</Motion.div>
				</div>
			</section>

			{/* Role Comparison Section */}
			<section class="relative py-32 bg-black border-t border-white/5">
				<div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
					<Motion.div
						initial={{ opacity: 0, y: 50 }}
						inView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						class="text-center mb-20"
					>
						<h2 class="text-5xl sm:text-6xl font-light text-white mb-6 tracking-[-0.02em]">
							Discover Your{" "}
							<span class="font-normal italic">Perfect Role</span>
						</h2>
						<p class="text-lg text-gray-300 max-w-xl mx-auto font-light">
							Not sure where you fit in tech? Explore the
							possibilities.
						</p>
					</Motion.div>

					{/* Role Cards */}
					<div class="grid md:grid-cols-3 gap-6">
						{/* Frontend Developer Card */}
						<Motion.div
							initial={{ opacity: 0, y: 50 }}
							inView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
						>
							<Card class="group relative overflow-hidden bg-transparent border border-white/5 hover:border-white/10 transition-all duration-700 hover:translate-y-[-4px] h-full flex flex-col">
								<div class="absolute inset-0 bg-white/1 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
								<CardHeader class="relative p-8">
									<div class="w-10 h-10 rounded-full bg-transparent flex items-center justify-center mb-6 border border-white/5 group-hover:border-white/10 transition-all duration-700">
										<Code class="w-5 h-5 text-gray-400 group-hover:text-gray-200 transition-colors duration-700" />
									</div>
									<CardTitle class="text-2xl mb-3 text-white font-light">
										Frontend Developer
									</CardTitle>
									<CardDescription class="text-sm text-gray-400 font-light">
										The visual architect of the web
									</CardDescription>
								</CardHeader>
								<CardContent class="relative p-8 pt-0 space-y-6 flex-1 flex flex-col">
									<p class="text-gray-300 leading-relaxed text-sm font-light">
										Create stunning, interactive websites
										that users love. Craft beautiful
										interfaces with HTML, CSS, and
										JavaScript.
									</p>
									<div class="space-y-3 flex-1">
										<p class="text-xs font-medium text-gray-400 uppercase tracking-wider">
											You'll love it if you enjoy
										</p>
										<div class="flex flex-wrap gap-2">
											<Badge
												variant="secondary"
												class="bg-transparent text-gray-400 border border-white/5 text-xs px-3 py-1 hover:border-white/10 hover:text-gray-200 hover:scale-105 transition-all duration-300 cursor-default"
											>
												Visual Design
											</Badge>
											<Badge
												variant="secondary"
												class="bg-transparent text-gray-400 border border-white/5 text-xs px-3 py-1 hover:border-white/10 hover:text-gray-200 hover:scale-105 transition-all duration-300 cursor-default"
											>
												Creativity
											</Badge>
											<Badge
												variant="secondary"
												class="bg-transparent text-gray-400 border border-white/5 text-xs px-3 py-1 hover:border-white/10 hover:text-gray-200 hover:scale-105 transition-all duration-300 cursor-default"
											>
												User Experience
											</Badge>
										</div>
									</div>
									<div class="pt-4 border-t border-white/5 mt-auto">
										<Button
											variant="ghost"
											class="group/btn p-0 h-auto text-xs text-gray-400 hover:text-gray-200 uppercase tracking-wider font-medium hover:bg-transparent"
										>
											Learn More
											<ArrowRight class="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform duration-500" />
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
							<Card class="group relative overflow-hidden bg-transparent border border-white/5 hover:border-white/10 transition-all duration-700 hover:translate-y-[-4px] h-full flex flex-col">
								<div class="absolute inset-0 bg-white/1 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
								<CardHeader class="relative p-8">
									<div class="w-10 h-10 rounded-full bg-transparent flex items-center justify-center mb-6 border border-white/5 group-hover:border-white/10 transition-all duration-700">
										<Database class="w-5 h-5 text-gray-400 group-hover:text-gray-200 transition-colors duration-700" />
									</div>
									<CardTitle class="text-2xl mb-3 text-white font-light">
										Backend Developer
									</CardTitle>
									<CardDescription class="text-sm text-gray-400 font-light">
										The brain behind the scenes
									</CardDescription>
								</CardHeader>
								<CardContent class="relative p-8 pt-0 space-y-6 flex-1 flex flex-col">
									<p class="text-gray-300 leading-relaxed text-sm font-light">
										Build powerful engines that make apps
										work. Design databases, APIs, and server
										logic using Python, Java, or Node.js.
									</p>
									<div class="space-y-3 flex-1">
										<p class="text-xs font-medium text-gray-400 uppercase tracking-wider">
											You'll love it if you enjoy
										</p>
										<div class="flex flex-wrap gap-2">
											<Badge
												variant="secondary"
												class="bg-transparent text-gray-400 border border-white/5 text-xs px-3 py-1 hover:border-white/10 hover:text-gray-200 hover:scale-105 transition-all duration-300 cursor-default"
											>
												Problem Solving
											</Badge>
											<Badge
												variant="secondary"
												class="bg-transparent text-gray-400 border border-white/5 text-xs px-3 py-1 hover:border-white/10 hover:text-gray-200 hover:scale-105 transition-all duration-300 cursor-default"
											>
												Logic
											</Badge>
											<Badge
												variant="secondary"
												class="bg-transparent text-gray-400 border border-white/5 text-xs px-3 py-1 hover:border-white/10 hover:text-gray-200 hover:scale-105 transition-all duration-300 cursor-default"
											>
												Data
											</Badge>
										</div>
									</div>
									<div class="pt-4 border-t border-white/5 mt-auto">
										<Button
											variant="ghost"
											class="group/btn p-0 h-auto text-xs text-gray-400 hover:text-gray-200 uppercase tracking-wider font-medium hover:bg-transparent"
										>
											Learn More
											<ArrowRight class="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform duration-500" />
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
							<Card class="group relative overflow-hidden bg-transparent border border-white/5 hover:border-white/10 transition-all duration-700 hover:translate-y-[-4px] h-full flex flex-col">
								<div class="absolute inset-0 bg-white/1 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
								<CardHeader class="relative p-8">
									<div class="w-10 h-10 rounded-full bg-transparent flex items-center justify-center mb-6 border border-white/5 group-hover:border-white/10 transition-all duration-700">
										<Palette class="w-5 h-5 text-gray-400 group-hover:text-gray-200 transition-colors duration-700" />
									</div>
									<CardTitle class="text-2xl mb-3 text-white font-light">
										UI/UX Designer
									</CardTitle>
									<CardDescription class="text-sm text-gray-400 font-light">
										The experience creator
									</CardDescription>
								</CardHeader>
								<CardContent class="relative p-8 pt-0 space-y-6 flex-1 flex flex-col">
									<p class="text-gray-300 leading-relaxed text-sm font-light">
										Design delightful experiences users
										love. Blend art and psychology to create
										beautiful, intuitive interfaces using
										tools like Figma.
									</p>
									<div class="space-y-3 flex-1">
										<p class="text-xs font-medium text-gray-400 uppercase tracking-wider">
											You'll love it if you enjoy
										</p>
										<div class="flex flex-wrap gap-2">
											<Badge
												variant="secondary"
												class="bg-transparent text-gray-400 border border-white/5 text-xs px-3 py-1 hover:border-white/10 hover:text-gray-200 hover:scale-105 transition-all duration-300 cursor-default"
											>
												Aesthetics
											</Badge>
											<Badge
												variant="secondary"
												class="bg-transparent text-gray-400 border border-white/5 text-xs px-3 py-1 hover:border-white/10 hover:text-gray-200 hover:scale-105 transition-all duration-300 cursor-default"
											>
												Empathy
											</Badge>
											<Badge
												variant="secondary"
												class="bg-transparent text-gray-400 border border-white/5 text-xs px-3 py-1 hover:border-white/10 hover:text-gray-200 hover:scale-105 transition-all duration-300 cursor-default"
											>
												Innovation
											</Badge>
										</div>
									</div>
									<div class="pt-4 border-t border-white/5 mt-auto">
										<Button
											variant="ghost"
											class="group/btn p-0 h-auto text-xs text-gray-500 hover:text-gray-300 uppercase tracking-wider font-medium hover:bg-transparent"
										>
											Learn More
											<ArrowRight class="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform duration-500" />
										</Button>
									</div>
								</CardContent>
							</Card>
						</Motion.div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section class="relative py-32 overflow-hidden border-t border-white/5">
				<div class="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
					<Motion.h2
						initial={{ opacity: 0, y: 30 }}
						inView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						class="text-5xl sm:text-6xl font-light text-white mb-6 tracking-[-0.02em]"
					>
						Ready to{" "}
						<span class="font-normal italic">
							Shape Your Future
						</span>
					</Motion.h2>
					<Motion.p
						initial={{ opacity: 0, y: 30 }}
						inView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.1 }}
						class="text-lg text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto font-light"
					>
						Your feedback helps us create better mentorship
						experiences. Our career quiz helps you discover where
						you truly belong.
					</Motion.p>

					<Motion.div
						initial={{ opacity: 0, y: 30 }}
						inView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
						class="flex flex-col sm:flex-row gap-4 justify-center"
					>
						<Button
							class="group relative bg-white text-black hover:bg-gray-100 px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all duration-700 overflow-hidden hover:scale-105"
							size="lg"
						>
							<span class="relative z-10 flex items-center">
								Share Your Feedback
								<ArrowRight class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-500" />
							</span>
							<div class="absolute inset-0 bg-white/90 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
						</Button>

						<Button
							class="group bg-transparent text-white hover:bg-white/5 px-8 py-4 text-sm font-medium tracking-wide uppercase border border-white/10 hover:border-white/20 transition-all duration-700 hover:scale-105"
							size="lg"
							variant="outline"
						>
							<span class="flex items-center">
								Discover Your Path
								<ArrowRight class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-500" />
							</span>
						</Button>
					</Motion.div>
				</div>
			</section>

			{/* Footer */}
			<footer class="bg-black border-t border-white/5 py-6">
				<div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
					<div class="text-center">
						<p class="text-xs text-gray-400 uppercase tracking-wider font-medium">
							Made for aspiring technologists
						</p>
						<p class="text-xs mt-2 text-gray-400">
							© 2025 Mentorship.01
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
