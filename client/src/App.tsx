import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/hooks/use-language";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Home from "@/pages/home-new";
import Policies from "@/pages/policies-clean";
import Campaign from "@/pages/campaign";
import Community from "@/pages/community-new";
import About from "@/pages/about-new";
import Volunteer from "@/pages/volunteer-new";
import AdminLogin from "@/pages/admin-login";
import AdminDashboard from "@/pages/admin-dashboard";
import AdminLogin from "@/pages/admin/Login";
import NotFound from "@/pages/not-found";

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function Router() {
  const [location] = useLocation();
  const isAdminRoute = location.startsWith('/admin');

  if (isAdminRoute) {
    return (
      <>
        <ScrollToTop />
        <Switch>
          <Route path="/admin/login" component={AdminLogin} />
          <Route path="/admin/dashboard" component={AdminDashboard} />
          <Route component={NotFound} />
        </Switch>
      </>
    );
  }

  return (
    <>
      <ScrollToTop />
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/policies" component={Policies} />
        <Route path="/campaign" component={Campaign} />
        <Route path="/community" component={Community} />
        <Route path="/about" component={About} />
        <Route path="/volunteer" component={Volunteer} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
