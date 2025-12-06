import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Ship,
  BarChart3,
  Shield,
  Activity,
  Play,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function IndexOption7() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Full-Screen Hero with Integrated Navigation */}
      <section
        id="home"
        className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className={
              'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2306b6d4" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')]'
            }
          />
        </div>

        {/* Integrated Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 pt-6 pb-4 bg-slate-900/90 backdrop-blur-lg border-b border-slate-700/50">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">C</span>
                  </div>
                  <span className="text-white font-semibold text-lg hidden sm:block">
                    CadetLabs
                  </span>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                <a
                  href="#home"
                  className="text-slate-300 hover:text-white transition-colors scroll-smooth"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("home")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Home
                </a>
                <a
                  href="#products"
                  className="text-slate-300 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("products")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Products
                </a>
                <a
                  href="#services"
                  className="text-slate-300 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="text-slate-300 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  About Us
                </a>
                <a
                  href="#contact"
                  className="text-slate-300 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Contact Us
                </a>
              </div>

              {/* Desktop CTA Buttons */}
              <div className="hidden lg:flex items-center gap-4">
                <Button
                  variant="ghost"
                  className="text-slate-300 hover:text-white hover:bg-slate-800"
                >
                  Demo
                </Button>
                <Button className="bg-teal-500 hover:bg-teal-600 text-white">
                  Get Started
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-300 hover:text-white"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="lg:hidden mt-4 pb-4 border-t border-slate-700">
                <div className="flex flex-col space-y-4 pt-4">
                  <a
                    href="#home"
                    className="text-slate-300 hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("home")
                        ?.scrollIntoView({ behavior: "smooth" });
                      setMobileMenuOpen(false);
                    }}
                  >
                    Home
                  </a>
                  <a
                    href="#products"
                    className="text-slate-300 hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("products")
                        ?.scrollIntoView({ behavior: "smooth" });
                      setMobileMenuOpen(false);
                    }}
                  >
                    Products
                  </a>
                  <a
                    href="#services"
                    className="text-slate-300 hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("services")
                        ?.scrollIntoView({ behavior: "smooth" });
                      setMobileMenuOpen(false);
                    }}
                  >
                    Services
                  </a>
                  <a
                    href="#about"
                    className="text-slate-300 hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("about")
                        ?.scrollIntoView({ behavior: "smooth" });
                      setMobileMenuOpen(false);
                    }}
                  >
                    About Us
                  </a>
                  <a
                    href="#contact"
                    className="text-slate-300 hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                      setMobileMenuOpen(false);
                    }}
                  >
                    Contact Us
                  </a>
                  <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-slate-700">
                    <Button
                      variant="ghost"
                      className="text-slate-300 hover:text-white hover:bg-slate-800 justify-start"
                    >
                      Demo
                    </Button>
                    <Button className="bg-teal-500 hover:bg-teal-600 text-white justify-start">
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Content - Full Screen Layout */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 relative z-10 pt-20">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Badge */}
            <Badge className="bg-teal-500/20 text-teal-300 border-teal-400/30 px-4 py-2 backdrop-blur-sm mx-auto">
              Advanced Maritime Intelligence
            </Badge>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold leading-tight tracking-tight">
                <span className="block text-white">NEXT-GEN</span>
                <span className="block bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                  MARITIME
                </span>
              </h1>
              <p className="text-3xl lg:text-4xl text-slate-300 font-light">
                AI Solutions
              </p>
            </div>

            {/* Description */}
            <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Revolutionary AI-powered systems transforming maritime operations
              worldwide. Intelligent automation, predictive analytics, and
              real-time monitoring.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-10 py-6 text-xl font-medium"
              >
                <Play className="mr-3 h-6 w-6" />
                Watch Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-10 py-6 text-xl font-medium backdrop-blur-sm"
              >
                Explore Platform
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Floating Shield Element */}
          <div className="absolute top-1/4 right-1/4 hidden xl:block z-40">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/25 animate-float">
              <Shield className="h-6 w-6 text-white" />
            </div>
          </div>

          {/* Floating Chart Element */}
          <div
            className="absolute bottom-1/3 left-1/4 hidden xl:block animate-float z-40"
            style={{ animationDelay: "2s" }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg flex items-center justify-center shadow-lg">
              <BarChart3 className="h-5 w-5 text-teal-300" />
            </div>
          </div>
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-400 rounded-full animate-pulse opacity-60" />
          <div
            className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-40"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse opacity-50"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 right-1/4 w-1 h-1 bg-cyan-300 rounded-full animate-pulse opacity-30"
            style={{ animationDelay: "3s" }}
          />
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        className="min-h-screen bg-slate-800 relative flex items-center"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                PRODUCTS
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Cutting-edge maritime AI solutions designed for modern operations
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Fleet Management AI",
                description:
                  "Advanced autonomous fleet coordination and optimization systems",
                icon: Ship,
              },
              {
                title: "Navigation Intelligence",
                description:
                  "Real-time navigation assistance with predictive routing",
                icon: Shield,
              },
              {
                title: "Port Analytics",
                description:
                  "Smart port operations with automated cargo handling",
                icon: BarChart3,
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-slate-700/50 p-8 rounded-2xl border border-slate-600/50 hover:bg-slate-700/70 transition-all"
              >
                <product.icon className="h-12 w-12 text-teal-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  {product.title}
                </h3>
                <p className="text-slate-400">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 relative flex items-center"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                SERVICES
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Comprehensive maritime intelligence services powered by AI
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-3">
                  24/7 Monitoring
                </h3>
                <p className="text-slate-400">
                  Continuous vessel tracking and performance monitoring
                </p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-3">
                  Predictive Maintenance
                </h3>
                <p className="text-slate-400">
                  AI-driven maintenance scheduling and optimization
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-3">
                  Route Optimization
                </h3>
                <p className="text-slate-400">
                  Intelligent route planning with weather integration
                </p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-3">
                  Risk Assessment
                </h3>
                <p className="text-slate-400">
                  Advanced risk analysis and threat detection
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen bg-slate-800 relative flex items-center"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl lg:text-7xl font-bold mb-8 text-white">
              <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
                ABOUT US
              </span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed mb-12">
              We're pioneering the future of maritime operations through
              artificial intelligence. Our team of experts combines deep
              maritime knowledge with cutting-edge AI technology to deliver
              solutions that transform how the industry operates.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { value: "750+", label: "Vessels Monitored" },
                { value: "40+", label: "Global Ports" },
                { value: "99.8%", label: "Accuracy Rate" },
                { value: "24/7", label: "Support" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 relative flex items-center"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl lg:text-7xl font-bold mb-8 text-white">
              <span className="bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                CONTACT
              </span>
            </h2>
            <p className="text-xl text-slate-400 mb-12">
              Ready to transform your maritime operations? Get in touch with our
              team.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-10 py-6 text-xl font-medium"
              >
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-10 py-6 text-xl font-medium backdrop-blur-sm"
              >
                Schedule Demo
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-slate-400">contact@cadetlabs.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-slate-400">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Location
                </h3>
                <p className="text-slate-400">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
