import { createFileRoute } from "@tanstack/solid-router";
import {
	ArrowRight,
	ChevronDown,
	Code2,
	Database,
	Github,
	Linkedin,
	Palette,
	Sparkles,
	TrendingUp,
	Users,
} from "lucide-solid";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "~/components/ui/card";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<div class="min-h-screen bg-black">
			{/* Hero Section */}
			<section class="relative overflow-hidden min-h-screen flex items-center">
				{/* Subtle Background Elements */}
				<div class="absolute inset-0 opacity-[0.02]">
					<div class="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-[100px]" />
					<div class="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-[120px]" />
				</div>

				<div class="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-24">
					{/* Status Badge */}
					<div class="flex justify-center mb-12 opacity-0 animate-fade-in-up">
						<Badge class="px-4 py-1.5 bg-transparent text-gray-400 border border-white/5 hover:border-white/10 transition-colors duration-700">
							<Sparkles class="w-3 h-3 mr-2" />
							Your Journey Into Tech Starts Here
						</Badge>
					</div>

					{/* Hero Headline */}
					<h1
						class="text-6xl sm:text-7xl lg:text-8xl font-light text-center text-white mb-8 opacity-0 animate-fade-in-up tracking-[-0.02em] leading-[1.1]"
						style="animation-delay: 100ms"
					>
						Transform Your{" "}
						<span class="font-normal italic">Tech Journey</span>
					</h1>

					<p
						class="text-xl sm:text-2xl text-gray-500 text-center max-w-2xl mx-auto mb-16 opacity-0 animate-fade-in-up leading-relaxed font-light"
						style="animation-delay: 200ms"
					>
						Thank you for attending our mentorship session. Share
						your experience, discover your perfect tech role, and
						unlock your potential.
					</p>

					{/* CTA Buttons */}
					<div
						class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 opacity-0 animate-fade-in-up"
						style="animation-delay: 300ms"
					>
						<Button
							class="group relative bg-white text-black hover:bg-gray-100 px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all duration-700 overflow-hidden"
							size="lg"
						>
							<span class="relative z-10 flex items-center">
								Give Feedback
								<ArrowRight class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-500" />
							</span>
							<div class="absolute inset-0 bg-white/90 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
						</Button>

						<Button
							class="group bg-transparent text-white hover:bg-white/5 px-8 py-4 text-sm font-medium tracking-wide uppercase border border-white/10 hover:border-white/20 transition-all duration-700"
							size="lg"
							variant="outline"
						>
							<span class="flex items-center">
								Take Career Quiz
								<ArrowRight class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-500" />
							</span>
						</Button>
					</div>

					{/* Session Highlights */}
					<div
						class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto opacity-0 animate-fade-in-up"
						style="animation-delay: 400ms"
					>
						<div class="text-center group cursor-default">
							<div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-transparent mb-4 border border-white/5 group-hover:border-white/10 transition-all duration-700 group-hover:scale-110">
								<Github class="w-5 h-5 text-gray-600 group-hover:text-gray-400 transition-colors duration-700" />
							</div>
							<p class="text-xs font-medium text-gray-600 uppercase tracking-wider">
								GitHub Mastery
							</p>
						</div>
						<div class="text-center group cursor-default">
							<div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-transparent mb-4 border border-white/5 group-hover:border-white/10 transition-all duration-700 group-hover:scale-110">
								<Linkedin class="w-5 h-5 text-gray-600 group-hover:text-gray-400 transition-colors duration-700" />
							</div>
							<p class="text-xs font-medium text-gray-600 uppercase tracking-wider">
								LinkedIn Profile
							</p>
						</div>
						<div class="text-center group cursor-default">
							<div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-transparent mb-4 border border-white/5 group-hover:border-white/10 transition-all duration-700 group-hover:scale-110">
								<Users class="w-5 h-5 text-gray-600 group-hover:text-gray-400 transition-colors duration-700" />
							</div>
							<p class="text-xs font-medium text-gray-600 uppercase tracking-wider">
								Career Guidance
							</p>
						</div>
						<div class="text-center group cursor-default">
							<div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-transparent mb-4 border border-white/5 group-hover:border-white/10 transition-all duration-700 group-hover:scale-110">
								<TrendingUp class="w-5 h-5 text-gray-600 group-hover:text-gray-400 transition-colors duration-700" />
							</div>
							<p class="text-xs font-medium text-gray-600 uppercase tracking-wider">
								Skill Growth
							</p>
						</div>
					</div>

					{/* Scroll Indicator */}
					<div
						class="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up"
						style="animation-delay: 500ms"
					>
						<div class="animate-bounce">
							<ChevronDown class="w-5 h-5 text-gray-700" />
						</div>
					</div>
				</div>
			</section>

			{/* Role Comparison Section */}
			<section class="relative py-32 bg-black border-t border-white/5">
				<div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
					<div class="text-center mb-20">
						<h2 class="text-5xl sm:text-6xl font-light text-white mb-6 tracking-[-0.02em]">
							Discover Your{" "}
							<span class="font-normal italic">Perfect Role</span>
						</h2>
						<p class="text-lg text-gray-500 max-w-xl mx-auto font-light">
							Not sure where you fit in tech? Explore the
							possibilities.
						</p>
					</div>

					{/* Role Cards */}
					<div class="grid md:grid-cols-3 gap-6">
						{/* Frontend Developer Card */}
						<Card class="group relative overflow-hidden bg-transparent border border-white/5 hover:border-white/10 transition-all duration-700 hover:translate-y-[-4px]">
							<div class="absolute inset-0 bg-white/1 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
							<CardHeader class="relative p-8">
								<div class="w-10 h-10 rounded-full bg-transparent flex items-center justify-center mb-6 border border-white/5 group-hover:border-white/10 transition-all duration-700">
									<Code2 class="w-5 h-5 text-gray-600 group-hover:text-gray-400 transition-colors duration-700" />
								</div>
								<CardTitle class="text-2xl mb-3 text-white font-light">
									Frontend Developer
								</CardTitle>
								<CardDescription class="text-sm text-gray-600 font-light">
									The visual architect of the web
								</CardDescription>
							</CardHeader>
							<CardContent class="relative p-8 pt-0 space-y-6">
								<p class="text-gray-500 leading-relaxed text-sm font-light">
									Create stunning, interactive websites that
									users love. Craft beautiful interfaces with
									HTML, CSS, and JavaScript.
								</p>
								<div class="space-y-3">
									<p class="text-xs font-medium text-gray-600 uppercase tracking-wider">
										You'll love it if you enjoy
									</p>
									<div class="flex flex-wrap gap-2">
										<Badge
											variant="secondary"
											class="bg-transparent text-gray-600 border border-white/5 text-xs px-3 py-1"
										>
											Visual Design
										</Badge>
										<Badge
											variant="secondary"
											class="bg-transparent text-gray-600 border border-white/5 text-xs px-3 py-1"
										>
											Creativity
										</Badge>
										<Badge
											variant="secondary"
											class="bg-transparent text-gray-600 border border-white/5 text-xs px-3 py-1"
										>
											User Experience
										</Badge>
									</div>
								</div>
								<div class="pt-4 border-t border-white/5">
									<button class="group/btn flex items-center text-xs text-gray-500 hover:text-gray-300 uppercase tracking-wider font-medium transition-colors duration-500">
										Learn More
										<ArrowRight class="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform duration-500" />
									</button>
								</div>
							</CardContent>
						</Card>

						{/* Backend Developer Card */}
						<Card class="group relative overflow-hidden bg-transparent border border-white/5 hover:border-white/10 transition-all duration-700 hover:translate-y-[-4px]">
							<div class="absolute inset-0 bg-white/1 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
							<CardHeader class="relative p-8">
								<div class="w-10 h-10 rounded-full bg-transparent flex items-center justify-center mb-6 border border-white/5 group-hover:border-white/10 transition-all duration-700">
									<Database class="w-5 h-5 text-gray-600 group-hover:text-gray-400 transition-colors duration-700" />
								</div>
								<CardTitle class="text-2xl mb-3 text-white font-light">
									Backend Developer
								</CardTitle>
								<CardDescription class="text-sm text-gray-600 font-light">
									The brain behind the scenes
								</CardDescription>
							</CardHeader>
							<CardContent class="relative p-8 pt-0 space-y-6">
								<p class="text-gray-500 leading-relaxed text-sm font-light">
									Build powerful engines that make apps work.
									Design databases, APIs, and server logic
									using Python, Java, or Node.js.
								</p>
								<div class="space-y-3">
									<p class="text-xs font-medium text-gray-600 uppercase tracking-wider">
										You'll love it if you enjoy
									</p>
									<div class="flex flex-wrap gap-2">
										<Badge
											variant="secondary"
											class="bg-transparent text-gray-600 border border-white/5 text-xs px-3 py-1"
										>
											Problem Solving
										</Badge>
										<Badge
											variant="secondary"
											class="bg-transparent text-gray-600 border border-white/5 text-xs px-3 py-1"
										>
											Logic
										</Badge>
										<Badge
											variant="secondary"
											class="bg-transparent text-gray-600 border border-white/5 text-xs px-3 py-1"
										>
											Data
										</Badge>
									</div>
								</div>
								<div class="pt-4 border-t border-white/5">
									<button class="group/btn flex items-center text-xs text-gray-500 hover:text-gray-300 uppercase tracking-wider font-medium transition-colors duration-500">
										Learn More
										<ArrowRight class="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform duration-500" />
									</button>
								</div>
							</CardContent>
						</Card>

						{/* UI/UX Designer Card */}
						<Card class="group relative overflow-hidden bg-transparent border border-white/5 hover:border-white/10 transition-all duration-700 hover:translate-y-[-4px]">
							<div class="absolute inset-0 bg-white/1 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
							<CardHeader class="relative p-8">
								<div class="w-10 h-10 rounded-full bg-transparent flex items-center justify-center mb-6 border border-white/5 group-hover:border-white/10 transition-all duration-700">
									<Palette class="w-5 h-5 text-gray-600 group-hover:text-gray-400 transition-colors duration-700" />
								</div>
								<CardTitle class="text-2xl mb-3 text-white font-light">
									UI/UX Designer
								</CardTitle>
								<CardDescription class="text-sm text-gray-600 font-light">
									The experience creator
								</CardDescription>
							</CardHeader>
							<CardContent class="relative p-8 pt-0 space-y-6">
								<p class="text-gray-500 leading-relaxed text-sm font-light">
									Design delightful experiences users love.
									Blend art and psychology to create
									beautiful, intuitive interfaces using tools
									like Figma.
								</p>
								<div class="space-y-3">
									<p class="text-xs font-medium text-gray-600 uppercase tracking-wider">
										You'll love it if you enjoy
									</p>
									<div class="flex flex-wrap gap-2">
										<Badge
											variant="secondary"
											class="bg-transparent text-gray-600 border border-white/5 text-xs px-3 py-1"
										>
											Aesthetics
										</Badge>
										<Badge
											variant="secondary"
											class="bg-transparent text-gray-600 border border-white/5 text-xs px-3 py-1"
										>
											Empathy
										</Badge>
										<Badge
											variant="secondary"
											class="bg-transparent text-gray-600 border border-white/5 text-xs px-3 py-1"
										>
											Innovation
										</Badge>
									</div>
								</div>
								<div class="pt-4 border-t border-white/5">
									<button class="group/btn flex items-center text-xs text-gray-500 hover:text-gray-300 uppercase tracking-wider font-medium transition-colors duration-500">
										Learn More
										<ArrowRight class="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform duration-500" />
									</button>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section class="relative py-32 overflow-hidden border-t border-white/5">
				<div class="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
					<h2 class="text-5xl sm:text-6xl font-light text-white mb-6 tracking-[-0.02em]">
						Ready to{" "}
						<span class="font-normal italic">
							Shape Your Future
						</span>
					</h2>
					<p class="text-lg text-gray-500 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
						Your feedback helps us create better mentorship
						experiences. Our career quiz helps you discover where
						you truly belong.
					</p>

					<div class="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							class="group relative bg-white text-black hover:bg-gray-100 px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all duration-700 overflow-hidden"
							size="lg"
						>
							<span class="relative z-10 flex items-center">
								Share Your Feedback
								<ArrowRight class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-500" />
							</span>
							<div class="absolute inset-0 bg-white/90 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
						</Button>

						<Button
							class="group bg-transparent text-white hover:bg-white/5 px-8 py-4 text-sm font-medium tracking-wide uppercase border border-white/10 hover:border-white/20 transition-all duration-700"
							size="lg"
							variant="outline"
						>
							<span class="flex items-center">
								Discover Your Path
								<ArrowRight class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-500" />
							</span>
						</Button>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer class="bg-black border-t border-white/5 py-16">
				<div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
					<div class="text-center">
						<p class="text-xs text-gray-600 uppercase tracking-wider font-medium">
							Made for aspiring technologists
						</p>
						<p class="text-xs mt-4 text-gray-700">
							© 2025 Mentorship.01
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
