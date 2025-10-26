import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ThirtyX from "./pages/ThirtyX";
import XtremeSales from "./pages/XtremeSales";
import EverybodyAI from "./pages/EverybodyAI";
import Fundraising from "./pages/Fundraising";
import AIFirstVC from "./pages/AIFirstVC";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/executive" element={<ThirtyX />} />
              <Route path="/xtreme-sales" element={<XtremeSales />} />
              <Route path="/everybody-ai" element={<EverybodyAI />} />
              <Route path="/fundraising" element={<Fundraising />} />
              <Route path="/ai-first-vc" element={<AIFirstVC />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
