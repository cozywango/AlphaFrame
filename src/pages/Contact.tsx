import { motion } from 'framer-motion';
import { Mail, MapPin, Twitter, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { AnimatedSection } from '@/components/AnimatedSection';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-20">
            <h1 className="text-hero mb-8">
              Secure Your <span className="text-primary">Visual</span> Authority
            </h1>
            <p className="text-subtitle max-w-2xl mx-auto">
              We operate on a capped retainer model. Inquire now to check availability 
              for the upcoming month.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <AnimatedSection>
            <div className="bg-card p-12 rounded-3xl border border-border">
              <h2 className="text-3xl font-bold mb-8">Apply for Protocol</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-3">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border"
                      placeholder="Founder Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-3">
                      Work Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border"
                      placeholder="founder@company.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-3">
                    Company Website / LinkedIn
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="bg-background border-border"
                    placeholder="URL to your current brand"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-3">
                    Goal / Pain Point *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-background border-border resize-none"
                    placeholder="E.g., 'Our technology is great, but our deck is losing investors...'"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group"
                >
                  Request Narrative Audit
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact Information */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-12">
              {/* Contact Details */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-12 rounded-3xl border border-border">
                <h3 className="text-2xl font-bold mb-8">Agency Direct</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/20 p-3 rounded-xl">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Founder Direct</h4>
                      <p className="text-muted-foreground">joelwango@outlook.com</p>
                      <p className="text-muted-foreground">audit@alphaframe.co.ke</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/20 p-3 rounded-xl">
                      <MapPin className="text-accent-foreground" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Operations</h4>
                      <p className="text-muted-foreground">Nairobi, Kenya</p>
                      <p className="text-muted-foreground">Serving Global Timezones</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-card p-12 rounded-3xl border border-border">
                <h3 className="text-2xl font-bold mb-8">Connect</h3>
                
                <div className="space-y-4">
                  <a 
                    href="https://x.com/alphaframe55" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 group"
                  >
                    <Twitter className="text-primary group-hover:scale-110 transition-transform" size={24} />
                    <div>
                      <h4 className="font-semibold">X / Twitter</h4>
                      <p className="text-muted-foreground text-sm">@alphaframe55</p>
                    </div>
                  </a>
                  
                  <a
                    href="https://www.instagram.com/alphaframeonline/?utm_source=ig_web_button_share_sheet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 group"
                  >
                    <span className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" aria-hidden>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                        <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10z" />
                        <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zM17.5 6a.9.9 0 11-1.8 0 .9.9 0 011.8 0z" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-semibold">Instagram</h4>
                      <p className="text-muted-foreground text-sm">@alphaframeonline</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://linkedin.com/company/alphaframe" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 group"
                  >
                    <Linkedin className="text-primary group-hover:scale-110 transition-transform" size={24} />
                    <div>
                      <h4 className="font-semibold">LinkedIn</h4>
                      <p className="text-muted-foreground text-sm">Official Agency Page</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-8 rounded-2xl border border-border text-center">
                <h3 className="text-xl font-bold mb-3">Audit Turnaround</h3>
                <p className="text-muted-foreground mb-2">Initial audit delivered within</p>
                <p className="text-3xl font-bold text-primary">48 Hours</p>
                <p className="text-sm text-muted-foreground mt-2">For qualified Series A+ leads</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Office Hours & Additional Info */}
        <AnimatedSection delay={0.4}>
          <div className="mt-32 grid md:grid-cols-2 gap-8 justify-items-center">
            <div className="text-center bg-card p-8 rounded-2xl border border-border max-w-md w-full">
              <h3 className="text-xl font-bold mb-4">Marketers</h3>
              <p className="text-muted-foreground">
                Apply for our "Hunter" program. Commission only, high-ticket payouts.
              </p>
            </div>
            
            <div className="text-center bg-card p-8 rounded-2xl border border-border max-w-md w-full">
              <h3 className="text-xl font-bold mb-4">Founders</h3>
              <p className="text-muted-foreground">
                Seeking a visual partner? Let's discuss your next funding round.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Contact;