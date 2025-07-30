import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  BarChart3,
  Shield,
  Database,
  Anchor,
  Radar,
  Ship,
  Compass,
  Waves,
  Users,
  Settings,
  TrendingUp,
  Clock,
  Star,
} from "lucide-react";
import Navigation from "@/components/Navigation";

export default function IndexOption5() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Clean Header Section */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="outline"
              className="mb-6 bg-primary/5 text-primary border-primary/20 px-4 py-2"
            >
              Maritime Technology Platform
            </Badge>
            <h1 className="text-5xl font-bold mb-6 text-foreground">
              Complete Maritime Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Integrated platform for maritime operations, security, and
              analytics. Everything you need to manage modern maritime
              operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid - Zoho Style */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Maritime Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Comprehensive suite of maritime technology solutions designed for
              modern operations.
            </p>
          </div>

          {/* Primary Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: Ship,
                title: "Fleet Manager",
                description:
                  "Advanced fleet management platform for vessel operations and monitoring.",
                color: "bg-blue-500",
                badge: "Core",
              },
              {
                icon: Shield,
                title: "Security Hub",
                description:
                  "Comprehensive cybersecurity solutions with real-time threat detection.",
                color: "bg-red-500",
                badge: "Security",
              },
              {
                icon: BarChart3,
                title: "Analytics Pro",
                description:
                  "Live data analytics and reporting platform for operational insights.",
                color: "bg-green-500",
                badge: "Analytics",
              },
              {
                icon: Anchor,
                title: "Port Connect",
                description:
                  "Advanced port management and scheduling application for consultations.",
                color: "bg-purple-500",
                badge: "Operations",
              },
              {
                icon: Radar,
                title: "Navigation AI",
                description:
                  "AI-powered field service management platform for maritime service and support teams.",
                color: "bg-orange-500",
                badge: "AI",
              },
              {
                icon: Waves,
                title: "Ocean Plus",
                description:
                  "Unified platform for enhanced maritime service and support operations.",
                color: "bg-teal-500",
                badge: "Premium",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 border border-border/50 group cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold">
                          {service.title}
                        </h3>
                        <Badge
                          variant="secondary"
                          className="text-xs px-2 py-0.5"
                        >
                          {service.badge}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-0 h-auto text-primary hover:bg-transparent"
                      >
                        Learn More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Secondary Services */}
          <div className="border-t border-border pt-16">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
              <p className="text-lg text-muted-foreground">
                Specialized tools and integrations for enhanced maritime
                operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  icon: Database,
                  title: "Data Storage",
                  description: "Secure maritime data storage and management",
                  color: "bg-slate-500",
                },
                {
                  icon: Users,
                  title: "Team Hub",
                  description: "Collaborative platform for maritime teams",
                  color: "bg-indigo-500",
                },
                {
                  icon: Settings,
                  title: "Integration API",
                  description: "Connect with existing maritime systems",
                  color: "bg-gray-500",
                },
                {
                  icon: TrendingUp,
                  title: "Performance",
                  description: "Monitor and optimize maritime operations",
                  color: "bg-emerald-500",
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="hover:shadow-md transition-shadow border border-border/30 group cursor-pointer"
                >
                  <CardContent className="p-4 text-center">
                    <div
                      className={`w-10 h-10 ${service.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
                    >
                      <service.icon className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2 text-sm">
                      {service.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Active Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-ocean-medium mb-2">
                99.9%
              </div>
              <div className="text-muted-foreground">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-ocean-dark mb-2">
                24/7
              </div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Industry</h2>
            <p className="text-lg text-muted-foreground">
              Leading maritime organizations rely on our platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote:
                  "The platform has transformed our fleet operations with incredible efficiency gains.",
                author: "Sarah Chen",
                role: "Fleet Operations Director",
                company: "Global Maritime Co.",
                rating: 5,
              },
              {
                quote:
                  "Outstanding security features that give us peace of mind for our maritime operations.",
                author: "Captain Rodriguez",
                role: "Port Authority",
                company: "Mediterranean Ports",
                rating: 5,
              },
              {
                quote:
                  "Real-time analytics have revolutionized our decision-making process at sea.",
                author: "Dr. Kim",
                role: "Operations Manager",
                company: "Pacific Shipping",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border border-border/30">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-primary">
                      {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join leading maritime organizations using our platform to optimize
            their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8">
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Contact Sales
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>30-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>24/7 support included</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
