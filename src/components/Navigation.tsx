import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { GradientButton } from '@/components/ui/gradient-button';
import { GlowingEffect } from '@/components/ui/glowing-effect';

export const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);

	const navItems = [
		{ href: '/', label: 'Overview' },
		{ href: '/protocol', label: 'The Protocol' },
		{ href: '/for-creators', label: 'For Creators' },
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Contact' },
	];

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
			<div className="container mx-auto px-6">
				<div className="flex items-center justify-between h-20">
					{/* Logo */}
					<div className="relative inline-flex items-center gap-3">
						<GlowingEffect
							disabled={false}
							glow
							className="pointer-events-none rounded-md"
						/>
						<Link
							to="/"
							style={{ transform: 'none' }}
							className="flex items-center text-2xl font-bold relative z-10 px-1 !transform-none hover:!scale-100 focus:!scale-100 active:!scale-100"
						>
							<img
								src="/logo.png"
								alt="AlphaFrame logo"
								className="h-8 w-auto mr-3"
							/>
							<span className="text-primary">Alpha</span>
							<span className="text-foreground">Frame</span>
						</Link>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navItems.map((item) => (
							<div
								key={item.href}
								className="relative inline-block !transform-none"
								style={{ transform: 'none' }}
							>
								<GlowingEffect
									disabled={false}
									glow
									className="pointer-events-none rounded-md"
								/>
								<Link
									to={item.href}
									style={{ transform: 'none' }}
									className="text-muted-foreground transition-colors duration-300 font-medium relative z-10 px-1 hover:!text-muted-foreground hover:bg-transparent focus:bg-transparent hover:!scale-100 focus:!scale-100 active:!scale-100 !transform-none"
								>
									{item.label}
								</Link>
							</div>
						))}
						<Link to="/audit-portfolio">
							<GradientButton className="w-fit">Audit Portfolio</GradientButton>
						</Link>
					</div>

					{/* Mobile Menu Toggle */}
					<button
						className="md:hidden p-2"
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className="md:hidden py-6 border-t border-border"
					>
						<div className="flex flex-col space-y-4">
							{navItems.map((item) => (
								<div
									key={item.href}
									className="relative !transform-none"
									style={{ transform: 'none' }}
								>
									<GlowingEffect
										disabled={false}
										glow
										className="pointer-events-none rounded-md"
									/>
									<Link
										to={item.href}
										style={{ transform: 'none' }}
										className="text-muted-foreground transition-colors duration-300 font-medium relative z-10 hover:!text-muted-foreground hover:bg-transparent focus:bg-transparent hover:!scale-100 focus:!scale-100 active:!scale-100 !transform-none"
										onClick={() => setIsOpen(false)}
									>
										{item.label}
									</Link>
								</div>
							))}
							<Link to="/audit-portfolio">
								<GradientButton className="w-fit">Audit Portfolio</GradientButton>
							</Link>
						</div>
					</motion.div>
				)}
			</div>
		</nav>
	);
};