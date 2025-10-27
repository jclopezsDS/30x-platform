import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const ThirtyX = lazy(() => import("./pages/ThirtyX"));
const XtremeSales = lazy(() => import("./pages/XtremeSales"));
const EverybodyAI = lazy(() => import("./pages/EverybodyAI"));
const Fundraising = lazy(() => import("./pages/Fundraising"));
const AIFirstVC = lazy(() => import("./pages/AIFirstVC"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LazyMotion features={domAnimation} strict>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-1">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/executive" element={<ThirtyX />} />
                  <Route path="/xtreme-sales" element={<XtremeSales />} />
                  <Route path="/everybody-ai" element={<EverybodyAI />} />
                  <Route path="/fundraising" element={<Fundraising />} />
                  <Route path="/ai-first-vc" element={<AIFirstVC />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </LazyMotion>
  </QueryClientProvider>
);

export default App;
