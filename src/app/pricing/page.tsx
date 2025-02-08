"use client"

import { useState } from 'react';
import { Check } from 'lucide-react';
import { cn } from './../lib/utils';
import { Button } from './../components/ui/button';

function App() {
  const [isAnnual, setIsAnnual] = useState(false);

  const tiers = [
    {
      name: 'Hobby',
      description: 'The essentials to provide your best work for clients.',
      monthlyPrice: 19,
      annualPrice: 199,
      features: [
        '5 products',
        'Up to 1,000 subscribers',
        'Basic analytics',
      ],
    },
    {
      name: 'Freelancer',
      description: 'The essentials to provide your best work for clients.',
      monthlyPrice: 29,
      annualPrice: 299,
      features: [
        '5 products',
        'Up to 1,000 subscribers',
        'Basic analytics',
        '48-hour support response time',
      ],
    },
    {
      name: 'Startup',
      description: 'A plan that scales with your rapidly growing business.',
      monthlyPrice: 59,
      annualPrice: 599,
      featured: true,
      features: [
        '25 products',
        'Up to 10,000 subscribers',
        'Advanced analytics',
        '24-hour support response time',
        'Marketing automations',
      ],
    },
    {
      name: 'Enterprise',
      description: 'Dedicated support and infrastructure for your company.',
      monthlyPrice: 99,
      annualPrice: 999,
      features: [
        'Unlimited products',
        'Unlimited subscribers',
        'Advanced analytics',
        '1-hour, dedicated support response time',
        'Marketing automations',
        'Custom reporting tools',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black py-20 px-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-black to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-violet-200">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Choose the perfect plan for your needs. Always know what you'll pay.
          </p>
          
          {/* Billing Toggle */}
          <div className="mt-6 flex items-center justify-center">
            <div className="inline-flex rounded-full p-0.5 bg-gradient-to-r from-violet-500/20 to-violet-500/10 backdrop-blur-sm">
              <button
                onClick={() => setIsAnnual(false)}
                className={cn(
                  "px-6 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                  !isAnnual 
                    ? "bg-violet-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]" 
                    : "text-gray-400 hover:text-gray-300"
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={cn(
                  "px-6 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                  isAnnual 
                    ? "bg-violet-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]" 
                    : "text-gray-400 hover:text-gray-300"
                )}
              >
                Annually
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative rounded-2xl p-8 flex flex-col backdrop-blur-sm",
                tier.featured 
                  ? "bg-gradient-to-b from-violet-600/20 to-violet-600/5 ring-2 ring-violet-500"
                  : "bg-gradient-to-b from-gray-900/90 to-black/90 hover:ring-1 hover:ring-violet-500/50 transition-all duration-300"
              )}
            >
              {tier.featured && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-violet-600 px-3 py-2 text-sm font-medium text-white text-center shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                  Most popular
                </div>
              )}

              <div className="mb-8">
                <h3 className={cn(
                  "text-xl font-bold",
                  tier.featured ? "text-violet-400" : "text-white"
                )}>
                  {tier.name}
                </h3>
                <p className="mt-2 text-gray-400">{tier.description}</p>
                <div className="mt-6 flex items-baseline">
                  <span className="text-5xl font-bold tracking-tight text-white">
                    ${isAnnual ? tier.annualPrice : tier.monthlyPrice}
                  </span>
                  <span className="ml-1 text-lg text-gray-400">
                    /{isAnnual ? 'year' : 'month'}
                  </span>
                </div>
              </div>
              
                <Button
                  className={cn(
                    "w-full text-base transition-all duration-300",
                    tier.featured
                      ? "bg-violet-600 hover:bg-violet-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                      : "bg-gray-900 hover:bg-gray-800 text-white border border-violet-500/30 hover:border-violet-500/50"
                  )}
                >
                  Buy plan
                </Button>

              <ul className="mt-8 space-y-4 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className={cn(
                      "h-5 w-5 shrink-0",
                      tier.featured ? "text-violet-400" : "text-violet-500"
                    )} />
                    <span className="ml-3 text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;