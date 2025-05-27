import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background w-full max-w-full overflow-x-hidden">
          <Home />
          <FloatingWhatsApp />
        </div>
      </TooltipProvider>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;