import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ForCreators = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h1 className="text-hero mb-4">
              Don’t Just Post. <span className="text-primary">Publish.</span>
            </h1>
            <p className="text-subtitle max-w-3xl mx-auto">
              We bring Deep-Tech precision to personal branding. High-performance, "Catalog-Mode" websites for creators and businesses who demand Visual Authority.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-card/30 backdrop-blur rounded-2xl border-[0.5px] border-border p-8">
            <h2 className="text-section mb-4">The Philosophy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Social media is rented land. The algorithm changes, and you disappear. AlphaFrame Websites builds your permanent digital asset. We do not build "cookie-cutter" sites. We deploy Visual Authority—the same psychological design principles we use for deep-tech venture capital—adapted for your personal brand or business catalog.
            </p>

            <h3 className="text-lg font-semibold mt-6">Our Promise:</h3>
            <ul className="list-disc list-inside text-muted-foreground mb-6">
              <li>Speed: Deployed in days, not months.</li>
              <li>Polish: "Fortune-500" grade aesthetics.</li>
              <li>Simplicity: No complex backends. No crashing plugins. Just pure, high-fidelity frontend code.</li>
            </ul>

            <h3 className="text-section mt-6 mb-4">The "Catalog-Mode" Standard</h3>
            <p className="text-muted-foreground mb-4">We do not build shopping carts. We build Showcases. You handle the sales (via WhatsApp, DM, or external links); we handle the desire.</p>
            <ul className="list-disc list-inside text-muted-foreground mb-6">
              <li>Zero Transaction Fees: We don’t touch your money.</li>
              <li>Visual-First: Designed to display your products or portfolio like a high-end gallery.</li>
              <li>Mobile-Native: Engineered for the "Link-in-Bio" generation.</li>
            </ul>

            <h3 className="text-section mt-6 mb-4">Pricing: Creator Series</h3>
            <p className="text-muted-foreground mb-4">If you are a personality, influencer, or artist monetizing your personal brand, the Creator Series is engineered to turn your audience into a community.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-background/10 rounded-lg border border-border">
                <h4 className="font-bold mb-2">Tier 1 — Bio‑Link ($80‑150)</h4>
                <p className="text-muted-foreground">Single long-scroll page • Bio & social links • 1 featured image/video • Contact button • No hosting included</p>
                <div className="mt-4">
                  <Link to="/audit-portfolio"><Button variant="outline" size="sm" className="w-full sm:w-auto">See Examples</Button></Link>
                </div>
              </div>

              <div className="p-6 bg-background/10 rounded-lg border border-border">
                <h4 className="font-bold mb-2">Tier 2 — Portfolio ($170‑270)</h4>
                <p className="text-muted-foreground">Home + About + Work pages • 10-item gallery grid • Downloadable CV/kit • Mobile optimized • No hosting included</p>
                <div className="mt-4">
                  <Link to="/audit-portfolio"><Button variant="outline" size="sm" className="w-full sm:w-auto">See Examples</Button></Link>
                </div>
              </div>

              <div className="p-6 bg-background/10 rounded-lg border border-border">
                <h4 className="font-bold mb-2">Tier 3 — Content Hub ($290‑390)</h4>
                <p className="text-muted-foreground">Home + Blog/Newsletter pages • Dynamic content feed • Email capture form • Hosting included • Mobile & desktop optimization</p>
                <div className="mt-4">
                  <Link to="/audit-portfolio"><Button variant="outline" size="sm" className="w-full sm:w-auto">See Examples</Button></Link>
                </div>
              </div>

              <div className="p-6 bg-background/10 rounded-lg border border-border">
                <h4 className="font-bold mb-2">Tier 4 — Icon ($400+)</h4>
                <p className="text-muted-foreground">Full personal site (5 pages) • Motion effects (parallax) • Press/media kit section • Custom domain setup • Hosting included • Mobile & desktop optimization</p>
                <div className="mt-4">
                  <Link to="/audit-portfolio"><Button variant="outline" size="sm" className="w-full sm:w-auto">See Examples</Button></Link>
                </div>
              </div>
            </div>

            <h3 className="text-section mt-6 mb-4">Pricing: Business Series</h3>
            <p className="text-muted-foreground mb-4">If you are an entity, agency, or retailer selling products or services, the Business Series is architected to turn your traffic into customers.</p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-6 bg-background/10 rounded-lg border border-border">
                <h4 className="font-bold mb-2">Tier 1 — The Card ($120‑220)</h4>
                <p className="text-muted-foreground">Single landing page • Business info & map • “WhatsApp Us” button • Hero image • No hosting included</p>
                <div className="mt-4">
                  <Link to="/audit-portfolio"><Button variant="outline" size="sm" className="w-full sm:w-auto">See Examples</Button></Link>
                </div>
              </div>

              <div className="p-6 bg-background/10 rounded-lg border border-border">
                <h4 className="font-bold mb-2">Tier 2 — The Catalog ($250‑350)</h4>
                <p className="text-muted-foreground">Product gallery (up to 20 items) • Categorized layouts • Product detail pop-ups • Direct-to-DM buttons • No hosting included</p>
                <div className="mt-4">
                  <Link to="/audit-portfolio"><Button variant="outline" size="sm" className="w-full sm:w-auto">See Examples</Button></Link>
                </div>
              </div>

              <div className="p-6 bg-background/10 rounded-lg border border-border">
                <h4 className="font-bold mb-2">Tier 3 — The Firm ($380‑480)</h4>
                <p className="text-muted-foreground">Service menu / price list • Team bios section • Client testimonials • Booking link integration • Hosting included • Mobile & desktop optimization</p>
                <div className="mt-4">
                  <Link to="/audit-portfolio"><Button variant="outline" size="sm" className="w-full sm:w-auto">See Examples</Button></Link>
                </div>
              </div>

              <div className="p-6 bg-background/10 rounded-lg border border-border">
                <h4 className="font-bold mb-2">Tier 4 — Enterprise Lite ($800+)</h4>
                <p className="text-muted-foreground">Multi-page architecture • High-end motion graphics • Case studies section • Competitor analysis audit • Hosting included • Mobile & desktop optimization</p>
                <div className="mt-4">
                  <Link to="/audit-portfolio"><Button variant="outline" size="sm" className="w-full sm:w-auto">See Examples</Button></Link>
                </div>
              </div>
            </div>

            <h3 className="text-section mt-6 mb-4">The AlphaFrame Process</h3>
            <ol className="list-decimal list-inside text-muted-foreground mb-6">
              <li>The Brief: You fill out our structured visual questionnaire.</li>
              <li>The Build: We construct your site using our proprietary "Visual Authority" templates.</li>
              <li>The Review: You get one round of "Redline" revisions.</li>
              <li>The Handover: We transfer the keys. You own it 100%.</li>
            </ol>

            <h3 className="text-section mt-6 mb-4">FAQ</h3>
            <div className="text-muted-foreground mb-6">
              <p className="mb-3"><strong>Can I process credit card payments?</strong><br/>No. We build the frontend experience. For payments, we link your buttons to Stripe Links, PayPal, or your WhatsApp Business. We keep your site lightweight and hack-proof by removing the database risk.</p>
              <p className="mb-3"><strong>What is the hosting cost?</strong><br/>We build on modern, low-cost infrastructure (e.g., Framer/Webflow/Vercel). Hosting usually costs you between $0 - $20/month depending on the platform you choose. We advise; you pay the provider directly.</p>
              <p className="mb-3"><strong>Why AlphaFrame?</strong><br/>Because we usually design for Quantum Computing and Biotech firms. We bring that same level of discipline, cleanliness, and speed to your business.</p>
              <p className="mb-3"><strong>Can you register a custom domain for me?</strong><br/>Yes — we can assist with domain registration and setup (example TLDs: .com, .net, .io, .co). Domain costs vary by availability and extension; expect roughly $20–$100 depending on the name and TLD. If you’ve purchased Tier 1 or Tier 2 we can discuss including the domain fee as part of onboarding, though domain registration can be arranged for any package and is not exclusive to those tiers.</p>
            </div>

            <div className="text-center">
              <Link to="/contact"><Button className="bg-primary text-primary-foreground hover:bg-primary/90">START PROJECT</Button></Link>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

export default ForCreators;
