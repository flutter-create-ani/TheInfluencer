import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    description: "Perfect for getting started",
    price: "$29",
    features: [
      "Up to 100 influencer searches/month",
      "Basic filters",
      "Export to CSV",
      "Email support",
    ],
  },
  {
    name: "Pro",
    description: "Best for growing businesses",
    price: "$99",
    features: [
      "Unlimited searches",
      "Advanced filters",
      "Audience insights",
      "Campaign tracking",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: "Custom",
    features: [
      "Everything in Pro",
      "Custom integrations",
      "Dedicated account manager",
      "Custom reporting",
      "SLA",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="py-20">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
            Simple, Transparent Pricing
          </h1>
          <p className="mx-auto max-w-[600px] text-foreground/60">
            Choose the plan that's right for you
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={plan.popular ? "border-primary" : undefined}
            >
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-6">{plan.price}</div>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-foreground/60">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
