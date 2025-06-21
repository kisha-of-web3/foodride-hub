import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import FoodDelivery from "@/pages/food-delivery";
import RideBooking from "@/pages/ride-booking";
import HowItWorks from "@/pages/how-it-works";
import SignIn from "@/pages/sign-in";
import SignUp from "@/pages/sign-up";
import Support from "@/pages/support";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/food-delivery" component={FoodDelivery} />
      <Route path="/ride-booking" component={RideBooking} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/support" component={Support} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
