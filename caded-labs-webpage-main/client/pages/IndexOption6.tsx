import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Ship,
  Anchor,
  Compass,
  Waves,
  Shield,
  BarChart3,
  Users,
  Globe,
  TrendingUp,
  Zap,
  Navigation as NavigationIcon,
} from "lucide-react";
import Navigation from "@/components/Navigation";

export default function IndexOption6() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Maritime Focus */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Animated Waves */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-600/20 to-transparent">
            <div className="absolute inset-0">
              <svg
                className="absolute bottom-0 w-full h-24 animate-pulse"
                viewBox="0 0 1200 120"
                fill="none"
              >
                <path
                  d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
                  fill="rgba(59, 130, 246, 0.1)"
                  className="animate-pulse"
                />
              </svg>
            </div>
          </div>

          {/* Floating Ship Icons */}
          <div className="absolute top-20 left-20 animate-float">
            <Ship className="h-8 w-8 text-blue-400/30" />
          </div>
          <div
            className="absolute top-40 right-32 animate-float"
            style={{ animationDelay: "2s" }}
          >
            <Anchor className="h-6 w-6 text-blue-300/40" />
          </div>
          <div
            className="absolute bottom-40 left-1/4 animate-float"
            style={{ animationDelay: "4s" }}
          >
            <Compass className="h-10 w-10 text-blue-500/30" />
          </div>

          {/* Grid Pattern */}
          <div
            className={
              'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')] opacity-50'
            }
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30 px-4 py-2">
                Maritime Technology Leaders
              </Badge>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  MARITIME
                  <span className="block text-blue-400">INTELLIGENCE</span>
                </h1>

                <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
                  Advanced AI systems powering the future of maritime
                  operations. From port management to vessel navigation, we
                  deliver intelligent solutions for the seas.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8"
                >
                  Discover Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-slate-900 px-8"
                >
                  View Portfolio
                </Button>
              </div>

              {/* Animated Stats */}
              <div className="flex gap-8 pt-8 border-t border-blue-400/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 animate-pulse">
                    50+
                  </div>
                  <div className="text-sm text-blue-200">Maritime Projects</div>
                </div>
                <div className="text-center">
                  <div
                    className="text-3xl font-bold text-blue-400 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  >
                    99.9%
                  </div>
                  <div className="text-sm text-blue-200">System Uptime</div>
                </div>
                <div className="text-center">
                  <div
                    className="text-3xl font-bold text-blue-400 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  >
                    24/7
                  </div>
                  <div className="text-sm text-blue-200">Global Support</div>
                </div>
              </div>
            </div>

            {/* Right Visual - Maritime Professional */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-blue-600/20 to-slate-700/20 rounded-3xl relative overflow-hidden border border-blue-400/20">
                {/* Placeholder for Maritime Professional Image */}
                <div className="absolute inset-8 bg-gradient-to-br from-blue-900/30 to-slate-800/30 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <Ship className="h-24 w-24 mx-auto mb-4 text-blue-400" />
                    <h3 className="text-xl font-semibold mb-2">
                      Maritime Professional
                    </h3>
                    <p className="text-blue-200 text-sm">
                      Advanced Navigation Systems
                    </p>
                  </div>
                </div>

                {/* Animated Overlay Elements */}
                <div className="absolute top-4 left-4 w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center animate-pulse">
                  <NavigationIcon className="h-8 w-8 text-blue-400" />
                </div>
                <div
                  className="absolute bottom-4 right-4 w-14 h-14 bg-slate-700/30 rounded-xl flex items-center justify-center animate-pulse"
                  style={{ animationDelay: "1.5s" }}
                >
                  <Waves className="h-6 w-6 text-blue-300" />
                </div>
              </div>

              {/* Floating Information Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      Live Tracking
                    </div>
                    <div className="text-xs text-slate-600">
                      Real-time Updates
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl animate-float"
                style={{ animationDelay: "2s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      Secure Operations
                    </div>
                    <div className="text-xs text-slate-600">
                      Advanced Protection
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Maritime Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">
              Maritime Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive technology suite for modern maritime operations
            </p>
          </div>

          {/* Animated Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Ship,
                title: "Fleet Management",
                description:
                  "Advanced vessel tracking and operational optimization systems",
                color: "bg-blue-500",
                delay: "0s",
              },
              {
                icon: Anchor,
                title: "Port Operations",
                description:
                  "Intelligent port management and cargo handling solutions",
                color: "bg-indigo-500",
                delay: "0.2s",
              },
              {
                icon: Compass,
                title: "Navigation AI",
                description:
                  "Smart routing and weather-aware navigation assistance",
                color: "bg-cyan-500",
                delay: "0.4s",
              },
              {
                icon: Shield,
                title: "Maritime Security",
                description:
                  "Comprehensive cybersecurity for maritime infrastructure",
                color: "bg-slate-600",
                delay: "0.6s",
              },
              {
                icon: BarChart3,
                title: "Analytics Platform",
                description:
                  "Real-time data insights for operational excellence",
                color: "bg-emerald-500",
                delay: "0.8s",
              },
              {
                icon: Globe,
                title: "Global Connectivity",
                description: "Worldwide communication and data synchronization",
                color: "bg-purple-500",
                delay: "1s",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 border-0 bg-white hover:-translate-y-2"
                style={{ animationDelay: service.delay }}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="group-hover:text-blue-600 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Statistics */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-600/10 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-blue-600/10 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Global Maritime Impact</h2>
            <p className="text-xl text-slate-300">
              Trusted by maritime leaders worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-float">
              <div className="text-5xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-slate-300">Vessels Managed</div>
            </div>
            <div className="animate-float" style={{ animationDelay: "0.5s" }}>
              <div className="text-5xl font-bold text-cyan-400 mb-2">25+</div>
              <div className="text-slate-300">Countries Served</div>
            </div>
            <div className="animate-float" style={{ animationDelay: "1s" }}>
              <div className="text-5xl font-bold text-indigo-400 mb-2">
                99.9%
              </div>
              <div className="text-slate-300">System Reliability</div>
            </div>
            <div className="animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="text-5xl font-bold text-emerald-400 mb-2">
                24/7
              </div>
              <div className="text-slate-300">Global Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8">Ready to Set Sail?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Transform your maritime operations with cutting-edge AI technology.
            Join the leaders shaping the future of maritime industry.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="px-12 py-6 text-lg text-blue-600"
            >
              Start Your Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-12 py-6 text-lg border-white text-white hover:bg-white hover:text-blue-600"
            >
              Contact Specialists
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
