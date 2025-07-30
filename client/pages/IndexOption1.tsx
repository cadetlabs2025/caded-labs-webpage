import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  Zap,
  Shield,
  Layers,
  Target,
  ChevronDown,
} from "lucide-react";
import Navigation from "@/components/Navigation";

export default function IndexOption1() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Split Hero Section */}
      <section className="min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <Badge
                variant="outline"
                className="bg-primary/5 border-primary/20 text-primary px-4 py-2 text-sm font-medium"
              >
                Maritime AI Specialists
              </Badge>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Smart
                  <span className="block text-primary">Solutions</span>
                  <span className="block text-2xl lg:text-3xl font-normal text-muted-foreground">
                    for Maritime Tech
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Advanced AI systems designed for real-world maritime
                  challenges. Clear insights, reliable results.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Explore Platform
                  <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  View Case Studies
                </Button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-8 border-t border-border">
                <div>
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl relative overflow-hidden">
                <div className="absolute inset-8 bg-background rounded-2xl shadow-xl border">
                  <div className="p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className="h-4 bg-primary/20 rounded-full w-3/4 mb-4"></div>
                      <div className="h-3 bg-muted rounded-full w-1/2 mb-2"></div>
                      <div className="h-3 bg-muted rounded-full w-2/3"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-16 bg-ocean-light/30 rounded-xl flex items-center justify-center">
                        <Zap className="h-6 w-6 text-primary" />
                      </div>
                      <div className="h-16 bg-ocean-medium/30 rounded-xl flex items-center justify-center">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-ocean-medium rounded-xl flex items-center justify-center shadow-lg">
                <Layers className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </section>

      {/* Dynamic Services Cards */}
      <section className="py-32 bg-wave-light/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized solutions for complex maritime operations
            </p>
          </div>

          {/* Staggered Cards Layout */}
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="lg:transform lg:translate-y-8 hover:shadow-xl transition-all duration-300 border-0 bg-background/80 backdrop-blur">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Security Systems</CardTitle>
                <CardDescription>
                  Advanced threat detection and response protocols
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Real-time monitoring</li>
                  <li>• Automated alerts</li>
                  <li>• Compliance tracking</li>
                </ul>
                <Button variant="ghost" className="mt-4 p-0 h-auto font-medium">
                  Learn more →
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-background/80 backdrop-blur">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-ocean-medium/10 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-ocean-medium" />
                </div>
                <CardTitle className="text-xl">AI Analytics</CardTitle>
                <CardDescription>
                  Smart data processing for operational insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Predictive modeling</li>
                  <li>• Pattern recognition</li>
                  <li>• Performance optimization</li>
                </ul>
                <Button variant="ghost" className="mt-4 p-0 h-auto font-medium">
                  Learn more →
                </Button>
              </CardContent>
            </Card>

            <Card className="lg:transform lg:translate-y-8 hover:shadow-xl transition-all duration-300 border-0 bg-background/80 backdrop-blur">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-ocean-dark/10 rounded-xl flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-ocean-dark" />
                </div>
                <CardTitle className="text-xl">Integration</CardTitle>
                <CardDescription>
                  Seamless connection with existing systems
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Legacy system support</li>
                  <li>• API development</li>
                  <li>• Custom workflows</li>
                </ul>
                <Button variant="ghost" className="mt-4 p-0 h-auto font-medium">
                  Learn more →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Connect with our specialists to explore how AI can enhance your
            maritime operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Download Resources
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
