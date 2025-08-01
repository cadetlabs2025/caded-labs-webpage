import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Waves,
  Shield,
  Brain,
  Globe,
  Users,
  ChevronRight,
  Star,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import Navigation from "@/components/Navigation";

const features = [
  {
    icon: Brain,
    title: "AI-Augmented Solutions",
    description:
      "AI as an explainable superpower to humans, enhancing decision-making in maritime operations.",
  },
  {
    icon: Shield,
    title: "Cybersecurity Excellence",
    description:
      "NIST 2.0 compliant security solutions tailored for maritime and industrial environments.",
  },
  {
    icon: Globe,
    title: "Maritime Domain Expertise",
    description:
      "Deep understanding of maritime operations, regulations, and industry-specific challenges.",
  },
  {
    icon: Users,
    title: "Long-term Partnerships",
    description:
      "Building lasting relationships with clients through reliable, scalable solutions.",
  },
];

const products = [
  {
    name: "Maritime AI Vision",
    description:
      "Computer vision solutions for vessel monitoring and port security",
    tech: ["Computer Vision", "Deep Learning", "Real-time Analytics"],
    category: "AI",
  },
  {
    name: "Document Intelligence",
    description: "Automated document processing for shipping and compliance",
    tech: ["NLP", "Document AI", "OCR"],
    category: "LegalTech",
  },
  {
    name: "Predictive Analytics",
    description: "Forecasting solutions for maritime operations and logistics",
    tech: ["Machine Learning", "Time Series", "Statistical Modeling"],
    category: "Forecasting",
  },
];

const services = [
  {
    title: "Cybersecurity Consultancy",
    description:
      "NIST 2.0 framework implementation and MSC circulars compliance",
    icon: Shield,
  },
  {
    title: "Digital Transformation",
    description:
      "Comprehensive digital transformation strategy and implementation",
    icon: Globe,
  },
  {
    title: "Advanced Data Analytics",
    description:
      "Turn your data into actionable insights with advanced analytics",
    icon: Brain,
  },
];

const testimonials = [
  {
    quote:
      "Cadet Labs transformed our maritime operations with AI that actually makes sense to our team.",
    author: "Captain Sarah Mitchell",
    company: "Global Shipping Co.",
    rating: 5,
  },
  {
    quote:
      "Their cybersecurity expertise helped us achieve NIST 2.0 compliance efficiently.",
    author: "Tech Director",
    company: "Maritime Security Corp",
    rating: 5,
  },
];

export default function Index() {
  const [activeTab, setActiveTab] = useState("home");

  const renderTabContent = () => {
    switch (activeTab) {
      case "home":
        return <HomeTab onTabChange={setActiveTab} />;
      case "products":
        return <ProductsTab onTabChange={setActiveTab} />;
      case "services":
        return <ServicesTab onTabChange={setActiveTab} />;
      case "about":
        return <AboutTab onTabChange={setActiveTab} />;
      case "careers":
        return <CareersTab onTabChange={setActiveTab} />;
      case "contact":
        return <ContactTab onTabChange={setActiveTab} />;
      default:
        return <HomeTab onTabChange={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="min-h-screen">{renderTabContent()}</main>
    </div>
  );
}

interface TabProps {
  onTabChange: (tab: string) => void;
}

// Footer Component
function Footer({ onTabChange }: TabProps) {
  return (
    <div className="border-t border-primary-foreground/20 pt-12">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Feacf4d198f7d471b831a310bf0945bc6%2Fa48a907ee5aa467a8baf67f3e82847ad?format=webp&width=800"
            alt="Cadet Labs"
            className="h-10 w-auto mb-4 brightness-0 invert"
          />
          <p className="text-primary-foreground/80 mb-4 max-w-md">
            AI-powered maritime and cybersecurity solutions that make complex
            technology accessible and actionable.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-primary-foreground">
            Company
          </h3>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>
              <button
                onClick={() => onTabChange("about")}
                className="hover:text-primary-foreground transition-colors"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => onTabChange("careers")}
                className="hover:text-primary-foreground transition-colors"
              >
                Careers
              </button>
            </li>
            <li>
              <button
                onClick={() => onTabChange("contact")}
                className="hover:text-primary-foreground transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-primary-foreground">Legal</h3>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>CIN - U62099TN2025PTC181900</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
        <p>&copy; 2025 Cadet Labs. All rights reserved.</p>
      </div>
    </div>
  );
}

// Home Tab Component
function HomeTab({ onTabChange }: TabProps) {
  return (
    <>
      {/* Hero Section - Full Background with 2 Column Layout */}
      <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
        {/* Full Background Pattern/Texture */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/90 via-cyan-50/70 to-blue-100/50"></div>

        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div
            className={
              'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2306b6d4" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')] opacity-30'
            }
          />
          {/* Floating geometric shapes */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-cyan-200/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-200/30 rounded-full blur-lg"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-teal-200/25 rounded-full blur-md"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Column - Content */}
            <div className="space-y-8 lg:pr-8">
              <Badge className="inline-block bg-cyan-100 text-cyan-800 border-cyan-200 px-4 py-2 text-sm font-medium">
                AI-Powered Maritime Solutions
              </Badge>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                  <span className="block">Fleet Above.</span>
                  <span className="block text-cyan-600">Data Below.</span>
                  <span className="block text-3xl lg:text-4xl font-normal text-slate-600 mt-4">
                    We Hold the Line
                  </span>
                </h1>

                <p className="text-2xl text-slate-600 leading-relaxed italic font-medium">
                  — and thank goodness someone does.
                </p>
              </div>

              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  While you chase typhoons and tight turnarounds, we wrestle
                  malformed spreadsheets, temper tantrum–throwing databases, and
                  the occasional AI hallucination.
                </p>
                <p>
                  Think of us as the below-deck crew in your digital engine room
                  — not glamorous, perhaps, but absolutely vital.
                </p>
                <p>
                  At Cadet Labs, we build systems that make maritime data
                  behave: structured when it's messy, traceable when it's shady,
                  and intelligent when it's just plain dull.
                </p>
              </div>
            </div>

            {/* Right Column - Highlighted Logo/Image */}
            <div className="flex items-center justify-center lg:justify-end relative">
              {/* Background highlight effect */}
              <div className="absolute inset-0 bg-white/30 rounded-3xl blur-3xl transform scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-cyan-100/40 rounded-2xl transform rotate-3"></div>

              {/* Logo container with enhanced styling */}
              <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50">
                <img
                  src="/GPT_Marine.jpeg"
                  alt="GPT Maritime AI Container Ship"
                  className="h-80 lg:h-96 xl:h-[28rem] w-auto max-w-full filter drop-shadow-xl"
                />

                {/* Decorative elements around logo */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full opacity-60"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-400 rounded-full opacity-40"></div>
                <div className="absolute top-1/2 -left-6 w-4 h-4 bg-teal-400 rounded-full opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900">
              Our Mission
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              <strong className="text-cyan-600">
                "AI is an explainable superpower to humans."
              </strong>{" "}
              We believe in making artificial intelligence transparent,
              understandable, and truly beneficial for maritime professionals
              and industrial leaders who need reliable, intelligent solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
              Why Choose Cadet Labs?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We combine deep domain expertise with cutting-edge technology to
              deliver solutions that actually work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center border-0 bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                  <CardTitle className="text-xl text-slate-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-primary">
        <div className="container mx-auto px-4">
          <Footer onTabChange={onTabChange} />
        </div>
      </section>
    </>
  );
}

// Products Tab Component
function ProductsTab({ onTabChange }: TabProps) {
  return (
    <section className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative AI solutions designed specifically for maritime and
            industrial applications.
          </p>
        </div>

        <div className="space-y-16">
          {/* PMS Asset Builder */}
          <div className="max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-3xl font-bold">
                  PMS Asset Builder
                </CardTitle>
                <CardDescription className="text-xl text-primary">
                  <a
                    href="/PMS Asset Builder Brochure.pdf"
                    download="PMS Asset Builder Brochure.pdf"
                    className="hover:underline cursor-pointer"
                    onClick={(e) => {
                      // You can add analytics tracking here if needed
                      console.log("PDF download initiated");
                    }}
                  >
                    AI-driven extraction and structuring of PMS data — 5×
                    faster.
                  </a>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  PMS Asset Builder is our AI-augmented scribe, built to
                  decipher the dense, oil-smudged scriptures of vessel manuals
                  and spin them into clean, structured PMS data. It doesn't just
                  speed up the data building — it builds a living library of
                  reusable equipment intelligence while shaping every output to
                  fit your target PMS like a glove. Less grunt work, more smart
                  work — exactly what your chief engineer would've wanted.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Data Anchorage */}
          <div className="max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-3xl font-bold">
                  Data Anchorage
                </CardTitle>
                <CardDescription className="text-xl text-primary">
                  Enterprise data restructured for agentic AI and clean
                  cutovers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Data Anchorage is a maritime-grade data integration and
                  migration platform. It standardizes enterprise data for
                  agentic AI use cases and enables seamless transitions between
                  software systems — preserving full historical context and
                  transactional integrity. Designed for ship operators and
                  managers, it turns messy datasets into structured intelligence
                  without friction or loss.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-primary">
        <div className="container mx-auto px-4">
          <Footer onTabChange={onTabChange} />
        </div>
      </div>
    </section>
  );
}

// Services Tab Component
function ServicesTab({ onTabChange }: TabProps) {
  return (
    <section className="py-20 bg-wave-light min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Coming Soon
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-primary">
        <div className="container mx-auto px-4">
          <Footer onTabChange={onTabChange} />
        </div>
      </div>
    </section>
  );
}

// About Tab Component
function AboutTab({ onTabChange }: TabProps) {
  return (
    <section className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold mb-8 text-center">
            About Us
          </h1>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Cadet Labs wasn't born — it happened. Somewhere between
              caffeine-fuelled rants and maritime war stories, a curious crew of
              ex-seafarers, data whisperers, and product alchemists stumbled
              into a common cause: why, in Neptune's name, is marine data still
              such a tangled net?
            </p>
            <p>
              As we sparred over schemas and swapped sea tales, something odd
              occurred — domain met technology, and didn't run away screaming. A
              bridge was built (well, argued into existence), and across it
              marched an accidental company with a very deliberate mission.
            </p>
            <p>
              We don't worship AI, nor do we scoff at it. We're not here to
              automate souls out of the system, but to let machines do the heavy
              lifting so the mariner's mind can do what it does best — think.
              Every line of code we write, every dashboard we sketch, is an
              attempt to anchor intelligence (the human kind) at the heart of
              digital progress.
            </p>
            <p>
              So here we are — part workshop, part think tank, part confessional
              booth for broken ETLs — building the tools we once wished we had.
              And if our solutions feel oddly intuitive, it's because they're
              forged from lived chaos, not lab theory.
            </p>
            <p className="text-primary font-semibold text-xl text-center mt-8">
              Fleet above. Data below. We hold the line.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-primary">
        <div className="container mx-auto px-4">
          <Footer onTabChange={onTabChange} />
        </div>
      </div>
    </section>
  );
}

// Careers Tab Component
function CareersTab({ onTabChange }: TabProps) {
  return (
    <section className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-8">Careers</h1>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="text-2xl mb-8">
              🚀{" "}
              <strong className="text-primary">
                Exciting Opportunities Ahead!
              </strong>
            </p>
            <p>
              We're building something extraordinary at Cadet Labs — where
              maritime expertise meets cutting-edge AI technology. Our team is
              growing, and we're looking for passionate individuals who share
              our vision of making complex maritime data intelligent and
              actionable.
            </p>
            <p>
              While we're currently setting up our career opportunities page,
              we're always interested in connecting with talented:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8 text-left">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-primary">
                  🤖 AI/ML Engineers
                </h3>
                <p className="text-sm">
                  Build intelligent systems that understand maritime operations
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-primary">
                  ⚓ Maritime Domain Experts
                </h3>
                <p className="text-sm">
                  Bridge the gap between sea experience and digital solutions
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-primary">
                  🔒 Cybersecurity Specialists
                </h3>
                <p className="text-sm">
                  Secure maritime operations with NIST 2.0 expertise
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-primary">
                  💻 Full-Stack Developers
                </h3>
                <p className="text-sm">
                  Create intuitive interfaces for complex maritime data
                </p>
              </div>
            </div>
            <p className="mt-8 text-xl">
              Interested in joining our crew? Drop us a line at{" "}
              <button
                onClick={() => onTabChange("contact")}
                className="text-primary hover:underline font-semibold"
              >
                our contact page
              </button>{" "}
              — we'd love to hear from you!
            </p>
          </div>
        </div>

        <div className="mt-16 bg-primary text-primary-foreground p-0 rounded-lg">
          <Footer onTabChange={onTabChange} />
        </div>
      </div>
    </section>
  );
}

// Contact Tab Component
function ContactTab({ onTabChange }: TabProps) {
  return (
    <section className="py-20 bg-primary min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Contact Us
          </h1>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-8 text-center text-primary-foreground mb-16">
          <div>
            <Mail className="h-8 w-8 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-primary-foreground/80">ranjith@cadetlabs.io</p>
          </div>
          <div>
            <Phone className="h-8 w-8 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-primary-foreground/80">+919940211712</p>
          </div>
          <div>
            <MapPin className="h-8 w-8 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-primary-foreground/80">Chennai, India</p>
          </div>
        </div>

        {/* Footer content */}
        <Footer onTabChange={onTabChange} />
      </div>
    </section>
  );
}
