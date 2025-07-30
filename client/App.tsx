import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import IndexOption1 from "./pages/IndexOption1";
import IndexOption2 from "./pages/IndexOption2";
import IndexOption3 from "./pages/IndexOption3";
import IndexOption4 from "./pages/IndexOption4";
import IndexOption5 from "./pages/IndexOption5";
import IndexOption6 from "./pages/IndexOption6";
import IndexOption7 from "./pages/IndexOption7";
import Products from "./pages/Products";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/option1" element={<IndexOption1 />} />
          <Route path="/option2" element={<IndexOption2 />} />
          <Route path="/option3" element={<IndexOption3 />} />
          <Route path="/option4" element={<IndexOption4 />} />
          <Route path="/option5" element={<IndexOption5 />} />
          <Route path="/option6" element={<IndexOption6 />} />
          <Route path="/option7" element={<IndexOption7 />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
