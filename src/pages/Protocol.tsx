import { motion } from 'framer-motion';
import { Cpu, Scan, Layers, Zap, Database, Aperture, ArrowRight } from 'lucide-react';
import { GradientButton } from '@/components/ui/gradient-button';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Link } from 'react-router-dom';

const Protocol = () => {
  const steps = [
    {
      id: "01",
      title: "Algorithmic Ingestion",
      icon: <Database className="text-primary" size={32} />,
      description: "We don't ask for a 'brief'. We ingest your raw data.",
      detail: "We feed your whitepapers and technical documentation into our proprietary logic stack. Using custom-tuned analytical algorithms, we extract the 'Contrarian Truths' hidden in your data—the specific insights that trigger investor FOMO."
    },
    {
      id: "02",
      title: "Narrative Architecture",
      icon: <Layers className="text-primary" size={32} />,
      description: "We structure the argument before we design the pixels.",
      detail: "Using a 10-slide 'Investor Logic' framework, we map out the psychological journey of the viewer. Every slide has a tactical purpose: to move the audience from 'Curiosity' to 'Conviction' using behavioral triggers."
    },
    {
      id: "03",
      title: "Generative Synthesis",
      icon: <Aperture className="text-primary" size={32} />,
      description: "We create visuals that do not exist in reality.",
      detail: "Leveraging a hybrid stack of generative models, we synthesize high-fidelity, abstract technical imagery. We use 'Cinematic Industrialism' prompting parameters to achieve lighting and texture that mimics high-budget production."
    },
    {
      id: "04",
      title: "The Alpha Polish",
      icon: <Cpu className="text-primary" size={32} />,
      description: "Where Artificial Intelligence ends, Human Design begins.",
      detail: "Raw algorithmic output is never the final product. We process every asset through a rigorous manual design phase—applying film grain, color grading, and Swiss-style typography to ensure the final output feels organic, not synthetic."
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        
        {/* Hero Section */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <h1 className="text-hero mb-6">
              The AlphaFrame <span className="text-primary">Protocol</span>
            </h1>
            <p className="text-subtitle max-w-3xl mx-auto">
              A closed-loop workflow designed to extract technical genius and project undeniable authority —
              condensed into a compact, classified briefing.
            </p>
          </div>
        </AnimatedSection>

        {/* Compact Bento Grid Workflow (2x2) */}
        <section className="mb-16">
          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04, duration: 0.22 }}
                  className="bg-card/40 backdrop-blur rounded-xl border-[0.5px] border-border p-6"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-primary/90 mt-1">{step.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs tracking-wider text-muted-foreground">PHASE {step.id}</div>
                          <h3 className="text-lg font-semibold leading-tight">{step.title}</h3>
                        </div>
                        <div className="text-sm text-muted-foreground">{/* compact label area */}</div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2 leading-snug">{step.description}</p>
                      <p className="text-sm text-muted-foreground/80 mt-3 break-words">{step.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* The Deliverables (denser) */}
        <section className="mb-16">
          <AnimatedSection>
            <div className="bg-card/40 backdrop-blur rounded-2xl border-[0.5px] border-border p-8">
              <div className="text-center mb-8">
                <h2 className="text-section mb-3">The Output</h2>
                <p className="text-sm max-w-2xl mx-auto text-muted-foreground">
                  Deployment-ready strategic assets — delivered with technical precision.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg border-[0.5px] border-border bg-background/20">
                  <div className="flex items-center gap-3 text-sm font-semibold text-primary mb-2">
                    <Layers size={18} />
                    <span>The Narrative Carousel</span>
                  </div>
                  <p className="text-xs text-muted-foreground">10-slide visual document that deconstructs a single technical concept.</p>
                </div>

                <div className="p-4 rounded-lg border-[0.5px] border-border bg-background/20">
                  <div className="flex items-center gap-3 text-sm font-semibold text-primary mb-2">
                    <Aperture size={18} />
                    <span>The Technical Loop</span>
                  </div>
                  <p className="text-xs text-muted-foreground">8-second, 4K carefully curated loops that visualize hardware or process.</p>
                </div>

                <div className="p-4 rounded-lg border-[0.5px] border-border bg-background/20">
                  <div className="flex items-center gap-3 text-sm font-semibold text-primary mb-2">
                    <Scan size={18} />
                    <span>The Visual Audit</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Monthly intelligence reports highlighting competitor gaps and opportunities.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* CTA Section (tighter) */}
        <section className="mb-8">
          <AnimatedSection>
            <div className="text-center bg-card/40 backdrop-blur p-8 rounded-xl border-[0.5px] border-border">
              <h2 className="text-xl font-bold mb-3">System Ready.</h2>
              <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-6">
                The Protocol is deployed on a first-come, first-served basis. We cap our active roster to maintain quality control.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <Link to="/contact">
                  <GradientButton className="min-w-[180px]">Initiate Protocol</GradientButton>
                </Link>
                <Link to="/audit-portfolio">
                  <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground py-2">See Case Studies</Button>
                </Link>
               </div>
            </div>
          </AnimatedSection>
        </section>

      </div>
    </div>
  );
};

export default Protocol;