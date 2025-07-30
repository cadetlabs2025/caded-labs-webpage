import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  Hexagon,
  Triangle,
  Square,
  Circle,
  ChevronRight,
} from "lucide-react";
import Navigation from "@/components/Navigation";

export default function IndexOption3() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Geometric Hero */}
      <section className="min-h-[95vh] flex items-center relative overflow-hidden">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-primary/20 rotate-45"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-ocean-light/10 rounded-full"></div>
          <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-primary/5 transform rotate-12"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 border border-ocean-medium/30 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Main Content */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-8">
                <Badge
                  variant="outline"
                  className="bg-primary/5 border-primary/20 text-primary px-4 py-2"
                >
                  Advanced Maritime Solutions
                </Badge>

                <div className="space-y-6">
                  <h1 className="text-6xl lg:text-8xl font-bold leading-none tracking-tight">
                    <span className="block text-foreground">SMART</span>
                    <span className="block text-primary">SEAS</span>
                  </h1>

                  <div className="max-w-md">
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      Precision-engineered AI systems for maritime excellence.
                      Clear data. Smart decisions. Reliable outcomes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button size="lg" className="px-8">
                    Start Now
                  </Button>
                  <Button variant="outline" size="lg" className="px-8">
                    Learn More
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Geometric Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Hexagon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-ocean-medium/10 flex items-center justify-center mx-auto mb-3">
                    <Triangle className="h-8 w-8 text-ocean-medium" />
                  </div>
                  <div className="text-2xl font-bold text-ocean-medium">
                    24/7
                  </div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-ocean-dark/10 flex items-center justify-center mx-auto mb-3">
                    <Square className="h-8 w-8 text-ocean-dark" />
                  </div>
                  <div className="text-2xl font-bold text-ocean-dark">50+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
              </div>
            </div>

            {/* Geometric Visual */}
            <div className="lg:col-span-5">
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Main Container */}
                <div className="absolute inset-8 bg-gradient-to-br from-primary/5 to-ocean-medium/5 rounded-3xl border border-border/50"></div>

                {/* Floating Geometric Elements */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-lg transform -rotate-12">
                  <Hexagon className="h-10 w-10 text-white" />
                </div>

                <div className="absolute top-8 right-0 w-16 h-16 bg-ocean-medium rounded-xl flex items-center justify-center shadow-lg transform rotate-12">
                  <Circle className="h-8 w-8 text-white" />
                </div>

                <div className="absolute bottom-0 left-8 w-18 h-18 bg-ocean-dark rounded-2xl flex items-center justify-center shadow-lg transform rotate-6">
                  <Triangle className="h-9 w-9 text-white" />
                </div>

                <div className="absolute bottom-8 right-0 w-14 h-14 bg-gradient-to-br from-primary to-ocean-medium rounded-xl flex items-center justify-center shadow-lg transform -rotate-6">
                  <Square className="h-7 w-7 text-white" />
                </div>

                {/* Center Element */}
                <div className="absolute inset-1/4 bg-background rounded-2xl shadow-xl border flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      AI
                    </div>
                    <div className="text-sm text-muted-foreground">Powered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimalist Services Grid */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Core Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          {/* Clean Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1 max-w-6xl mx-auto">
            {[
              {
                title: "AI Systems",
                description: "Intelligent automation for maritime operations",
                icon: Hexagon,
                color: "bg-primary",
              },
              {
                title: "Security",
                description: "Advanced threat detection and response",
                icon: Triangle,
                color: "bg-ocean-medium",
              },
              {
                title: "Analytics",
                description: "Data-driven insights and reporting",
                icon: Square,
                color: "bg-ocean-dark",
              },
              {
                title: "Integration",
                description: "Seamless system connectivity",
                icon: Circle,
                color: "bg-primary",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="border-0 rounded-none bg-background hover:bg-muted/50 transition-colors group cursor-pointer"
              >
                <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                  <div>
                    <div
                      className={`w-12 h-12 ${service.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                    >
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <ChevronRight className="h-4 w-4 mx-auto text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Geometric CTA */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-ocean-medium">
          <div
            className={
              'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpolygon points="50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40"/%3E%3C/g%3E%3C/svg%3E\')] opacity-30'
            }
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-5xl lg:text-6xl font-bold mb-8">
              Ready to Build?
            </h2>
            <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
              Transform your maritime operations with precision-engineered AI
              solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="px-12 py-6 text-lg"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-12 py-6 text-lg border-white text-white hover:bg-white hover:text-primary"
              >
                Contact Team
              </Button>
            </div>
          </div>
        </div>

        {/* Geometric Decorations */}
        <div className="absolute top-20 left-20 w-16 h-16 border-2 border-white/20 rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-white/10 rounded-full"></div>
      </section>
    </div>
  );
}
