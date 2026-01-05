import { motion } from 'framer-motion';
import { ArrowRight, Target, Eye, Zap } from 'lucide-react';
import { GradientButton } from '@/components/ui/gradient-button';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Link } from 'react-router-dom';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import ShaderBackground from '@/components/ui/shader-background';

const products = [
	{
		name: 'The Narrative Audit',
		description:
			'A strategic breakdown of your competitors\' visual gaps and your brand\'s missed opportunities.',
		href: '/services/audit',
	},
	{
		name: 'Visual Deep-Dives',
		description:
			'High-fidelity, 10-slide carousels that translate dense technical whitepapers into investor-ready narratives.',
		href: '/services/deep-dives',
	},
	{
		name: 'Cinematic Loops',
		description:
			'4K, high-end, carefully curated loops that showcase hardware concepts with luxury aesthetics.',
		href: '/services/cinematic',
	},
	{
		name: 'Investor Decks',
		description:
			'Pitch deck redesigns that move investors from logic to emotion using psychological visual triggers.',
		href: '/services/decks',
	},
	{
		name: 'Ghost Strategy',
		description:
			'Faceless execution for high-profile founders who need authority without the time investment.',
		href: '/services/ghost',
	},
	{
		name: 'The Authority Retainer',
		description:
			'Full-service monthly partnership providing continuous visual dominance on LinkedIn and X.',
		href: '/services/retainer',
	},
];

const stats = [
	{ value: '$50M+', label: 'Capital Influence' },
	{ value: '3', label: 'Days Turnaround' },
	{ value: '100%', label: 'Faceless Execution' },
];

const Index = () => {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
			  {/* Insert shader only for this hero area (absolute and behind content) */}
			  {/* Shader sits at z-0 so we can layer a dimming overlay behind or above it if needed */}
			  <ShaderBackground className="absolute inset-0 h-full w-full z-0 pointer-events-none" />

				{/* Background Gradient layers moved behind the shader (negative z) */}
				<div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-background" />
				<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_hsl(24_100%_50%/0.1)_0%,_transparent_50%)]" />

				{/* Floating Elements */}
				<div className="absolute top-20 right-20 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
				<div
					className="absolute bottom-32 left-16 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-float"
					style={{ animationDelay: '2s' }}
				/>

				<div className="container mx-auto px-6 text-center relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="max-w-4xl mx-auto"
					>
						<h1 className="text-hero mb-8">
							Sellability is a{' '}
							<span className="text-primary">Technical Signal</span>
						</h1>
						<p className="text-subtitle max-w-2xl mx-auto mb-12">
							AlphaFrame converts technical complexity into Visual Authority. 
							<br className="hidden sm:block" /> We ensure Deep-Tech Founders command the capital and attention they deserve.
						</p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3, duration: 0.6 }}
							className="flex flex-col sm:flex-row gap-4 justify-center items-center"
						>
							<div className="relative inline-block">
							  <GlowingEffect disabled={false} glow className="pointer-events-none rounded-md" />
							  <Link to="/protocol" className="relative z-10 inline-block">
							    <GradientButton className="group">
							      View The Protocol
							      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
							    </GradientButton>
							  </Link>
							</div>
							<Link to="/audit-portfolio">
								<Button
									variant="outline"
									size="lg"
									className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
								>
									Audit Your Brand
								</Button>
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Stats Section */}
			<AnimatedSection className="py-24 border-y border-border bg-card/20">
				<div className="container mx-auto px-6">
					<div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
						{stats.map((stat, index) => (
							<motion.div
								key={stat.label}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1, duration: 0.5 }}
								className="text-center"
							>
								<div className="text-4xl md:text-5xl font-bold text-primary mb-2">
									{stat.value}
								</div>
								<div className="text-muted-foreground font-medium">
									{stat.label}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</AnimatedSection>

			{/* Products Section */}
			<section className="py-32">
				<div className="container mx-auto px-6">
					<AnimatedSection className="text-center mb-20">
						<h2 className="text-section mb-6">The Protocol</h2>
						<p className="text-subtitle max-w-2xl mx-auto">
							A precision-engineered suite of visual deliverables designed to
							<br className="hidden sm:block" /> bridge the gap between your engineering and investor intuition.
						</p>
					</AnimatedSection>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{products.map((product, index) => (
							<ProductCard
								key={product.name}
								name={product.name}
								description={product.description}
								href={product.href}
								index={index}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Vision & Mission Section */}
			<section className="py-32 bg-card/30">
				<div className="container mx-auto px-6">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<AnimatedSection>
							<div className="space-y-12">
								<div className="flex items-start space-x-6">
									<div className="bg-primary/10 p-4 rounded-2xl">
										<Target className="text-primary" size={32} />
									</div>
									<div>
										<h3 className="text-2xl font-bold mb-4">Our Mission</h3>
										<p className="text-muted-foreground leading-relaxed">
											To eliminate the "Gray Noise" that buries brilliant founders.
											<br className="hidden sm:block" /> We make genius visible through high-fidelity design and strategic narrative.
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-6">
									<div className="bg-accent/10 p-4 rounded-2xl">
										<Eye className="text-accent-foreground" size={32} />
									</div>
									<div>
										<h3 className="text-2xl font-bold mb-4">Our Vision</h3>
										<p className="text-muted-foreground leading-relaxed">
											To be the standard-bearer for Visual Authority in the Deep-Tech and Climate sectors,
											<br className="hidden sm:block" /> proving that complex tech doesn't have to look boring.
										</p>
									</div>
								</div>
							</div>
						</AnimatedSection>

						<AnimatedSection delay={0.2}>
							<div className="bg-gradient-to-br from-primary/5 to-accent/5 p-12 rounded-3xl border border-border">
								<div className="flex items-center space-x-4 mb-8">
									<Zap className="text-primary" size={40} />
									<h3 className="text-3xl font-bold">The Opportunity Cost</h3>
								</div>

								<div className="space-y-6">
									<div className="flex justify-between items-center py-4 border-b border-border/50">
										<span className="font-medium">Attention Lost to Noise</span>
										<span className="text-2xl font-bold text-primary">80%</span>
									</div>
									<div className="flex justify-between items-center py-4 border-b border-border/50">
										<span className="font-medium">Trust through Visuals</span>
										<span className="text-2xl font-bold text-primary">94%</span>
									</div>
									<div className="flex justify-between items-center py-4">
										<span className="font-medium">Missed Capital</span>
										<span className="text-2xl font-bold text-white">
											Immeasurable
										</span>
									</div>
								</div>
							</div>
						</AnimatedSection>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-32">
				<div className="container mx-auto px-6">
					<AnimatedSection>
						<div className="text-center bg-gradient-to-br from-primary/10 via-transparent to-accent/10 p-16 rounded-3xl border border-border">
							<h2 className="text-section mb-6">
								Are You Ready to be Seen?
							</h2>
							<p className="text-subtitle max-w-2xl mx-auto mb-12">
								We only onboard two founders per month to ensure absolute quality.
								<br className="hidden sm:block" /> Secure your slot in the AlphaFrame Protocol.
							</p>

							<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
								<Button
									size="lg"
									className="bg-primary text-primary-foreground hover:bg-primary/90 animate-glow-pulse"
								>
									Apply for Protocol
								</Button>
								<Button
									variant="outline"
									size="lg"
									className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
								>
									See Case Studies
								</Button>
								<Button
									variant="ghost"
									size="lg"
									className="text-muted-foreground hover:text-foreground"
								>
									Marketer Inquiry
								</Button>
							</div>
						</div>
					</AnimatedSection>
				</div>
			</section>
		</div>
	);
};

export default Index;