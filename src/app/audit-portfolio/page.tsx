import React from 'react';
import AnimatedFolder from '@/components/ui/3d-folder';
import { AnimatedSection } from '@/components/AnimatedSection';

const portfolioData = [
	{
		title: 'Branding',
		gradient: 'linear-gradient(135deg, #e73827, #f85032)',
		projects: [
			{
				id: 'b1',
				image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
				title: 'Lumnia Identity',
			},
			{
				id: 'b2',
				image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800',
				title: 'Prism Collective',
			},
			{
				id: 'b3',
				image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=800',
				title: 'Vertex Studio',
			},
		],
	},
	{
		title: 'Web Design',
		gradient: 'linear-gradient(to right, #f7b733, #fc4a1a)',
		projects: [
			{
				id: 'w1',
				image: '/laylamumo.png',
				title: 'Tier 1 Creator Website',
				link: 'https://layla-mumo-bio.vercel.app/',
			},
			{
				id: 'w2',
				image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
				title: 'Echo Analytics',
			},
		],
	},
];

const AuditPortfolioPage = () => {
	return (
		<div className="min-h-screen py-24">
			<div className="container mx-auto px-6">
				<AnimatedSection>
					<h1 className="text-hero mb-6">Audit Portfolio</h1>
					<p className="text-muted-foreground mb-12">A curated selection of recent work.</p>
				</AnimatedSection>

				<div className="grid md:grid-cols-2 gap-8">
					{portfolioData.map((group) => (
						<AnimatedFolder key={group.title} title={group.title} gradient={group.gradient} projects={group.projects} />
					))}
				</div>
			</div>
		</div>
	);
};

export default AuditPortfolioPage;
