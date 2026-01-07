
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';

interface ProductInquiryModalProps {
    productName: string | null;
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

const ProductInquiryModal = ({ productName, isOpen, onOpenChange }: ProductInquiryModalProps) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        socials: '',
        requirements: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setSuccessMessage(null);
        setErrorMessage(null);

        try {
            const payload = {
                ...formData,
                productName,
                type: 'product_inquiry'
            };

            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                throw new Error('Failed to send inquiry');
            }

            setSuccessMessage("Thanks! We've received your inquiry and will be in touch shortly.");
            setFormData({ name: '', email: '', phone: '', socials: '', requirements: '' });

            // Close modal after a delay on success
            setTimeout(() => {
                onOpenChange(false);
                setSuccessMessage(null);
            }, 3000);

        } catch (err) {
            console.error(err);
            setErrorMessage("Something went wrong. Please try again or email us directly.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[500px] border-primary/20 bg-background/95 backdrop-blur-xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Inquire about {productName}</DialogTitle>
                    <DialogDescription>
                        Complete the form below to initiate your build. We'll review your requirements and schedule a briefing.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Full Name *</label>
                        <Input
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your Name"
                            className="bg-card/50"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email *</label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="you@company.com"
                                className="bg-card/50"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="+1 (555)..."
                                className="bg-card/50"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="socials" className="text-sm font-medium">Social Media Links</label>
                        <Input
                            id="socials"
                            name="socials"
                            value={formData.socials}
                            onChange={handleInputChange}
                            placeholder="LinkedIn, Twitter, Instagram URL..."
                            className="bg-card/50"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="requirements" className="text-sm font-medium">Your Needs / Requirements *</label>
                        <Textarea
                            id="requirements"
                            name="requirements"
                            required
                            value={formData.requirements}
                            onChange={handleInputChange}
                            placeholder="Tell us about yourself and what you need..."
                            className="bg-card/50 resize-none"
                            rows={4}
                        />
                    </div>

                    {successMessage && (
                        <div className="p-3 text-sm text-green-400 bg-green-900/20 border border-green-900/50 rounded-md">
                            {successMessage}
                        </div>
                    )}

                    {errorMessage && (
                        <div className="p-3 text-sm text-red-400 bg-red-900/20 border border-red-900/50 rounded-md">
                            {errorMessage}
                        </div>
                    )}

                    <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                        disabled={submitting}
                    >
                        {submitting ? 'Sending...' : 'Submit Inquiry'}
                        {!submitting && <Send className="ml-2 h-4 w-4" />}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default ProductInquiryModal;
