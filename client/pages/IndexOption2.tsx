import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  ArrowRight,
  Anchor,
  Compass,
  Ship,
  Waves,
  Radar,
} from "lucide-react";
import Navigation from "@/components/Navigation";

export default function IndexOption2() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Full-Width Immersive Hero */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-light/20 via-background to-primary/10">
          <div
            className={
              'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2317B5C4" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')] opacity-40'
            }
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-8 bg-primary/10 text-primary border-primary/20 px-6 py-2">
              Maritime Technology Leaders
            </Badge>

            <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="block">Future-Ready</span>
              <span className="block text-primary">Maritime</span>
              <span className="block text-muted-foreground text-4xl lg:text-5xl font-normal">
                Intelligence
              </span>
            </h1>

            <p className="text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Transforming maritime operations through intelligent automation
              and data-driven decision making.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button size="lg" className="text-lg px-8 py-6">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Interactive Icons */}
            <div className="flex justify-center gap-8 opacity-60">
              <div className="group cursor-pointer">
                <Anchor className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div className="group cursor-pointer">
                <Ship className="h-8 w-8 text-ocean-medium group-hover:scale-110 transition-transform" />
              </div>
              <div className="group cursor-pointer">
                <Compass className="h-8 w-8 text-ocean-dark group-hover:scale-110 transition-transform" />
              </div>
              <div className="group cursor-pointer">
                <Radar className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-ocean-medium rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-ocean-dark rounded-full animate-pulse delay-700"></div>
      </section>

      {/* Timeline Process Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to maritime technology implementation
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="max-w-4xl mx-auto">
            {[
              {
                phase: "01",
                title: "Analysis & Discovery",
                description:
                  "Deep dive into your operational challenges and requirements",
                icon: Compass,
                color: "bg-primary",
                textColor: "text-primary",
              },
              {
                phase: "02",
                title: "Solution Architecture",
                description:
                  "Custom system design tailored to your specific needs",
                icon: Ship,
                color: "bg-ocean-medium",
                textColor: "text-ocean-medium",
              },
              {
                phase: "03",
                title: "Implementation",
                description:
                  "Seamless deployment with minimal operational disruption",
                icon: Anchor,
                color: "bg-ocean-dark",
                textColor: "text-ocean-dark",
              },
              {
                phase: "04",
                title: "Optimization",
                description:
                  "Continuous monitoring and performance enhancement",
                icon: Radar,
                color: "bg-primary",
                textColor: "text-primary",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="relative flex items-center mb-20 group"
              >
                {/* Timeline Line */}
                {index < 3 && (
                  <div className="absolute left-8 top-20 w-0.5 h-20 bg-border"></div>
                )}

                {/* Timeline Node */}
                <div
                  className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform z-10`}
                >
                  <step.icon className="h-7 w-7 text-white" />
                </div>

                {/* Content */}
                <div className="ml-12 flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span
                      className={`text-6xl font-bold ${step.textColor} opacity-20`}
                    >
                      {step.phase}
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground max-w-2xl">
                    {step.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="hidden lg:block w-32 h-20 bg-gradient-to-r from-transparent via-border to-transparent opacity-30 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Width CTA with Wave Pattern */}
      <section className="relative py-32 bg-gradient-to-r from-primary to-ocean-medium text-white overflow-hidden">
        {/* Wave SVG Background */}
        <div className="absolute inset-0 opacity-20">
          <svg
            className="absolute bottom-0 w-full h-40"
            viewBox="0 0 1200 120"
            fill="currentColor"
          >
            <path d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-8">Transform Your Operations</h2>
          <p className="text-2xl opacity-90 mb-12 max-w-3xl mx-auto">
            Ready to harness the power of maritime AI? Let's discuss your
            specific needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-10 py-6"
            >
              Start Your Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-6 border-white text-white hover:bg-white hover:text-primary"
            >
              Contact Specialists
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
