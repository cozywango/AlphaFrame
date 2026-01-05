import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Protocol from "./pages/Protocol";
import Audit from "./pages/services/Audit";
import DeepDives from "./pages/services/DeepDives";
import Cinematic from "./pages/services/Cinematic";
import Decks from "./pages/services/Decks";
import Ghost from "./pages/services/Ghost";
import Retainer from "./pages/services/Retainer";
import ForCreators from './pages/ForCreators';
import AuditPortfolio from './app/audit-portfolio/page';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main className="pt-20">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/for-creators" element={<ForCreators />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/protocol" element={<Protocol />} />
              <Route path="/audit-portfolio" element={<AuditPortfolio />} />

              {/* services routes */}
              <Route path="/services/audit" element={<Audit />} />
              <Route path="/services/deep-dives" element={<DeepDives />} />
              <Route path="/services/cinematic" element={<Cinematic />} />
              <Route path="/services/decks" element={<Decks />} />
              <Route path="/services/ghost" element={<Ghost />} />
              <Route path="/services/retainer" element={<Retainer />} />

              {/* catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
