import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
  CheckCircle,
  Mail,
  Phone,
  ChevronDown,
  ChevronUp,
  Database,
  BarChart3,
  Ship,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const getContainerVariants = (reduceMotion: boolean) => ({
  hidden: { opacity: reduceMotion ? 1 : 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: reduceMotion ? 0 : 0.1,
    },
  },
});

const getItemVariants = (reduceMotion: boolean) => ({
  hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: reduceMotion ? 0 : 0.5,
      ease: "easeOut",
    },
  },
});

const getFadeInUp = (reduceMotion: boolean) => ({
  hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: reduceMotion ? 0 : 0.6, ease: "easeOut" },
  },
});

const getHeroTextVariants = (reduceMotion: boolean) => ({
  hidden: { opacity: reduceMotion ? 1 : 0, x: reduceMotion ? 0 : -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: reduceMotion ? 0 : 0.6, ease: "easeOut" },
  },
});

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
      "Industry-leading security solutions tailored for maritime and industrial environments.",
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
      "Security framework implementation and maritime compliance standards",
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
      "Their cybersecurity expertise helped us achieve full regulatory compliance efficiently.",
    author: "Tech Director",
    company: "Maritime Security Corp",
    rating: 5,
  },
];

const northStarValues = [
  {
    title: "Built from the Deck Up",
    description:
      "We are seasoned sailors first, technologists second. We don't guess at maritime problems; we solve the ones we've lived through. Our empathy for the crew drives every feature we build.",
  },
  {
    title: "Pragmatism Over Hype",
    description:
      "We understand the trade-offs between people, process, and technology. We don't build tech for tech's sake; we only solution when there is a genuine need that moves the business forward.",
  },
  {
    title: "The Human at the Helm",
    description:
      "We distinguish between submitting to AI and being fueled by it. Our tools are designed to amplify human judgment, not replace it. We ensure the user always retains command.",
  },
  {
    title: "Uncompromising Stewardship",
    description:
      "In maritime, risks are high and security is non-negotiable. We take full ownership of our product's lifecycle and security impact, treating your vessel's data with the same care as the vessel itself.",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="min-h-screen">
        <HomeTab />
      </main>
    </div>
  );
}

interface TabProps {
  onTabChange?: (tab: string) => void;
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

          {/* Microsoft Partnership Section */}
          <div className="mt-8 pt-6 border-t border-primary-foreground/20">
            <img
              src="/microsoft-for-startups.png"
              alt="Microsoft for Startups"
              className="h-16 w-auto opacity-95 hover:opacity-100 transition-all duration-300 hover:scale-105 filter brightness-110"
            />
          </div>
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
  const prefersReducedMotion = useReducedMotion();
  
  const containerVariants = getContainerVariants(prefersReducedMotion);
  const itemVariants = getItemVariants(prefersReducedMotion);
  const fadeInUp = getFadeInUp(prefersReducedMotion);
  const heroTextVariants = getHeroTextVariants(prefersReducedMotion);

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
          {/* Floating geometric shapes - static when reduced motion preferred */}
          {prefersReducedMotion ? (
            <>
              <div className="absolute top-20 right-20 w-32 h-32 bg-cyan-200/20 rounded-full blur-xl" />
              <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-200/30 rounded-full blur-lg" />
              <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-teal-200/25 rounded-full blur-md" />
            </>
          ) : (
            <>
              <motion.div
                className="absolute top-20 right-20 w-32 h-32 bg-cyan-200/20 rounded-full blur-xl"
                animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-40 left-20 w-24 h-24 bg-blue-200/30 rounded-full blur-lg"
                animate={{ y: [0, 15, 0], scale: [1, 0.9, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              <motion.div
                className="absolute top-1/2 right-1/3 w-16 h-16 bg-teal-200/25 rounded-full blur-md"
                animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
            </>
          )}
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Column - Content */}
            <motion.div
              className="space-y-8 lg:pr-8"
              initial={prefersReducedMotion ? "visible" : "hidden"}
              animate="visible"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <Badge className="inline-block bg-cyan-100 text-cyan-800 border-cyan-200 px-4 py-2 text-sm font-medium hover:bg-cyan-200 transition-colors cursor-default">
                  AI-Powered Maritime Solutions
                </Badge>
              </motion.div>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                  <motion.span
                    className="block"
                    variants={heroTextVariants}
                    initial={prefersReducedMotion ? "visible" : "hidden"}
                    animate="visible"
                    transition={{ delay: prefersReducedMotion ? 0 : 0.2 }}
                  >
                    Fleet Above.
                  </motion.span>
                  <motion.span
                    className="block text-cyan-600"
                    variants={heroTextVariants}
                    initial={prefersReducedMotion ? "visible" : "hidden"}
                    animate="visible"
                    transition={{ delay: prefersReducedMotion ? 0 : 0.4 }}
                  >
                    Data Below.
                  </motion.span>
                  <motion.span
                    className="block text-3xl lg:text-4xl font-normal text-slate-600 mt-4"
                    variants={heroTextVariants}
                    initial={prefersReducedMotion ? "visible" : "hidden"}
                    animate="visible"
                    transition={{ delay: prefersReducedMotion ? 0 : 0.6 }}
                  >
                    We Hold the Line
                  </motion.span>
                </h1>

                <motion.p
                  className="text-2xl text-slate-600 leading-relaxed italic font-medium"
                  variants={fadeInUp}
                  initial={prefersReducedMotion ? "visible" : "hidden"}
                  animate="visible"
                  transition={{ delay: prefersReducedMotion ? 0 : 0.8 }}
                >
                  And thank goodness someone does.
                </motion.p>
              </div>

              <motion.div
                className="space-y-6 text-lg text-slate-600 leading-relaxed"
                variants={itemVariants}
              >
                <p>
                  While you chase typhoons and tight turnarounds, we wrestle
                  malformed spreadsheets, temper tantrum–throwing databases, and
                  the occasional AI hallucination.
                </p>
                <p>
                  Think of us as the below-deck crew in your digital engine room.
                  Not glamorous, perhaps, but absolutely vital.
                </p>
                <p>
                  At Cadet Labs, we build systems that make maritime data
                  behave: structured when it's messy, traceable when it's shady,
                  and intelligent when it's just plain dull.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <Link to="/products">
                  <Button
                    size="lg"
                    className="group"
                  >
                    Explore Products
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - Highlighted Logo/Image */}
            <motion.div
              className="flex items-center justify-center lg:justify-end relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Background highlight effect */}
              <div className="absolute inset-0 bg-white/30 rounded-3xl blur-3xl transform scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-cyan-100/40 rounded-2xl transform rotate-3"></div>

              {/* Logo container with enhanced styling */}
              <motion.div
                className="relative z-10 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/GPT_Marine.jpeg"
                  alt="GPT Maritime AI Container Ship"
                  className="h-80 lg:h-96 xl:h-[28rem] w-auto max-w-full filter drop-shadow-xl"
                />

                {/* Decorative elements around logo - static when reduced motion preferred */}
                {prefersReducedMotion ? (
                  <>
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full opacity-60" />
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-400 rounded-full opacity-40" />
                    <div className="absolute top-1/2 -left-6 w-4 h-4 bg-teal-400 rounded-full opacity-50" />
                  </>
                ) : (
                  <>
                    <motion.div
                      className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full opacity-60"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-400 rounded-full opacity-40"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                    />
                    <motion.div
                      className="absolute top-1/2 -left-6 w-4 h-4 bg-teal-400 rounded-full opacity-50"
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    />
                  </>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900">
              Our Mission
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              At Cadet Labs, we use technology carefully and purposefully, learning from the human grind of maritime work and building solutions through the eyes of the peers who live it every day.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Our North Star */}
      <section className="py-20 bg-wave-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900">Our North Star</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto italic">
                Build from Lived Experiences
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {northStarValues.map((value, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="border-0 bg-background/60 backdrop-blur h-full">
                    <CardHeader>
                      <CardTitle className="text-xl text-slate-900">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
              Why Choose Cadet Labs?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We combine deep domain expertise with cutting-edge technology to
              deliver solutions that actually work.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 h-full group hover:-translate-y-2">
                  <CardHeader>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <feature.icon className="h-12 w-12 text-cyan-600 mx-auto mb-4 group-hover:text-cyan-500 transition-colors" />
                    </motion.div>
                    <CardTitle className="text-xl text-slate-900 group-hover:text-cyan-700 transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
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
    <section className="py-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative AI solutions designed specifically for maritime and
            industrial applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto px-4 mb-16">
          {/* PMS Asset Builder */}
          <Card className="hover:shadow-lg transition-shadow p-6 relative border-2 border-cyan-500/30 ring-2 ring-cyan-500/20">
            <Badge className="absolute top-4 right-4 bg-cyan-500 text-white">Featured</Badge>
            <CardHeader className="pb-6">
              <Link to="/products/pms-asset-builder">
                <CardTitle className="text-2xl font-bold mb-4 hover:text-cyan-600 cursor-pointer transition-colors">
                  PMS Asset Builder
                </CardTitle>
              </Link>
              <CardDescription className="text-lg text-primary">
                AI-driven extraction and structuring of PMS data, 5× faster.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                PMS Asset Builder is our AI-augmented scribe, built to decipher
                the dense, oil-smudged scriptures of vessel manuals and spin
                them into clean, structured PMS data. It doesn't just speed up
                the data building. It builds a living library of reusable
                equipment intelligence while shaping every output to fit your
                target PMS like a glove. Less grunt work, more smart work,
                exactly what your chief engineer would've wanted.
              </p>
              <div className="flex gap-3">
                <Link to="/products/pms-asset-builder">
                  <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="/PMS Asset Builder Brochure.pdf" download="PMS Asset Builder Brochure.pdf">
                  <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                    Download Brochure
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Data Anchorage */}
          <Card className="hover:shadow-lg transition-shadow p-6">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-bold mb-4">
                Data Anchorage
              </CardTitle>
              <CardDescription className="text-lg text-primary">
                Enterprise data restructured for agentic AI and clean cutovers.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-base text-muted-foreground leading-relaxed">
                Data Anchorage is a maritime-grade data integration and
                migration platform. It standardizes enterprise data for agentic
                AI use cases and enables seamless transitions between software
                systems while preserving full historical context and transactional
                integrity. Designed for ship operators and managers, it turns
                messy datasets into structured intelligence without friction or
                loss.
              </p>
            </CardContent>
          </Card>
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
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "PMS Data Building",
      icon: Database,
      shortDescription:
        "Deep maritime expertise and digital innovation to deliver reliable PMS data from day one.",
      image: "/Service1.jpeg",
      fullDescription:
        "At Cadet Labs, we bring deep maritime expertise and digital innovation together to deliver PMS data that you can rely on from day one.",
      sectionTitle: "Why choose us?",
      benefits: [
        {
          title: "Accuracy that matters",
          description:
            "99% guaranteed accuracy through AI-powered extraction validated by marine engineers.",
        },
        {
          title: "Speed of delivery",
          description:
            "Projects completed in a fraction of the time compared to traditional data builders.",
        },
        {
          title: "Quality control by experts",
          description:
            "Every dataset reviewed by engineers who understand PMS requirements inside out.",
        },
        {
          title: "Future-ready datasets",
          description:
            "Clean, structured and consistent data designed to power your PMS effectively.",
        },
        {
          title: "Trusted approach",
          description:
            "No compromise on data quality while accelerating results with technology.",
        },
      ],
      highlightText:
        "With Cadet Labs, you get PMS data that is not only built faster but also built right.",
    },
    {
      id: 2,
      title: "PMS Data Migration",
      icon: Ship,
      shortDescription:
        "Expert-led migration projects ensuring data integrity and usability throughout the process.",
      image: "/Service2.jpeg",
      fullDescription:
        "Migrating PMS data between applications is not just a technical task, it requires a deep understanding of the maritime context. At Cadet Labs, our migration projects are led by experienced marine engineers who ensure the integrity and usability of your data throughout the process.",
      sectionTitle: "Why choose us?",
      benefits: [
        {
          title: "Context-driven migration",
          description:
            "We recognize that PMS data does not follow a universal schema. Our domain expertise ensures that every data element is mapped and migrated with its operational meaning intact.",
        },
        {
          title: "AI-powered intelligence",
          description:
            "Our domain-trained AI models help interpret the data context, making migrations more accurate and reducing manual intervention.",
        },
        {
          title: "Marine engineers in the loop",
          description:
            "Each migration is supervised by experts who understand the technical and operational implications of your PMS data.",
        },
        {
          title: "Seamless transition",
          description:
            "We ensure smooth migration between applications without data loss or misinterpretation.",
        },
        {
          title: "Trusted expertise",
          description:
            "A combination of maritime knowledge and digital tools to safeguard the value of your data.",
        },
      ],
      highlightText:
        "With Cadet Labs, PMS data migration is not just about moving data but about preserving its accuracy, relevance and operational value.",
    },
    {
      id: 3,
      title: "Vessel Performance Analytics",
      icon: BarChart3,
      shortDescription:
        "Cut through the noise with rigorous statistical methods and maritime expertise to diagnose performance issues.",
      image: "/Service3.jpeg",
      fullDescription:
        "Vessel underperformance is a costly problem. From penalties imposed by charterers to rising fuel consumption, the consequences of poor performance ripple across operations and profitability. Many operators are overwhelmed by data but lack the clarity needed to uncover the true drivers of inefficiency. At Cadet Labs, our Vessel Performance Analytics service is designed to cut through the noise. We combine rigorous statistical methods with deep maritime domain expertise to diagnose performance issues with precision. Our team dissects your noon reports, engine performance data, weather inputs and sea trial benchmarks to highlight the exact factors affecting your vessels.",
      sectionTitle: "Our approach delivers:",
      benefits: [
        {
          title: "",
          description:
            "A comprehensive evaluation of your data quality and reliability.",
        },
        {
          title: "",
          description: "Root cause analysis of performance deviations.",
        },
        {
          title: "",
          description:
            "Actionable insights to improve compliance, fuel efficiency and charter party performance.",
        },
        {
          title: "",
          description:
            "Recommendations that balance technical feasibility with operational practicality.",
        },
      ],
      additionalText:
        "Unlike generic analytics providers, we understand vessel operations at the granular level. Every variable, from hull condition to engine load, is interpreted by experts with years of maritime experience. This ensures that our findings are not just theoretical but directly applicable to your fleet.",
      highlightText:
        "With Cadet Labs, you gain a clear, unbiased view of your vessels' performance and a roadmap for measurable improvement.",
    },
  ];

  const selectService = (serviceId: number) => {
    setSelectedService(serviceId);
  };

  const backToOverview = () => {
    setSelectedService(null);
  };

  const getSelectedServiceData = () => {
    return services.find((service) => service.id === selectedService);
  };

  // If a service is selected, show detailed view
  if (selectedService) {
    const service = getSelectedServiceData();
    if (!service) return null;

    return (
      <section className="py-20 bg-wave-light min-h-screen">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="max-w-6xl mx-auto mb-8">
            <Button
              variant="outline"
              onClick={backToOverview}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Button>
          </div>

          {/* Service Detail View */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-wave-light/50 to-ocean-light/30 rounded-lg overflow-hidden">
              <div className="px-8 py-12">
                {/* Hero Section with Image and Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                  {/* Content Side */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                        {service.title}
                      </h1>
                    </div>
                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                      {service.fullDescription}
                    </p>
                  </div>

                  {/* Image Side */}
                  <div>
                    <img
                      src={service.image}
                      alt={`${service.title} Service`}
                      className="w-full h-80 object-cover rounded-lg shadow-xl"
                    />
                  </div>
                </div>

                {/* Detailed Content Section */}
                <div className="bg-background rounded-lg p-8 shadow-sm">
                  <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                    {service.sectionTitle}
                  </h2>

                  <div className="grid md:grid-cols-2 gap-8 mb-10">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <div
                        key={benefitIndex}
                        className="flex items-start gap-4 p-6 bg-accent/20 rounded-lg"
                      >
                        <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          {benefit.title && (
                            <h3 className="font-bold text-foreground mb-3 text-lg">
                              {benefit.title}
                            </h3>
                          )}
                          <p className="text-muted-foreground">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {service.additionalText && (
                    <div className="mb-8">
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {service.additionalText}
                      </p>
                    </div>
                  )}

                  <div className="bg-primary/10 border-l-4 border-primary p-8 rounded-r-lg mb-8">
                    <p className="text-foreground font-semibold text-xl">
                      {service.highlightText}
                    </p>
                  </div>

                  {/* Call to Action Footer */}
                  <div className="text-center">
                    <p className="text-muted-foreground mb-6 text-lg">
                      Ready to get started with {service.title}?
                    </p>
                    <Button
                      variant="default"
                      size="lg"
                      onClick={() => onTabChange("contact")}
                      className="px-12 py-3 text-lg"
                    >
                      Contact Our Team
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-primary mt-16">
          <div className="container mx-auto px-4">
            <Footer onTabChange={onTabChange} />
          </div>
        </div>
      </section>
    );
  }

  // Default: Show services overview
  return (
    <section className="py-20 bg-wave-light min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Click on any service to explore detailed information, benefits, and
            how we can help transform your maritime operations.
          </p>
        </div>

        {/* Services Overview */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-background border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
              onClick={() => selectService(service.id)}
            >
              {/* Service Image */}
              <div className="relative">
                <img
                  src={service.image}
                  alt={`${service.title} Service`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <ChevronDown className="h-6 w-6 text-white bg-black/50 rounded-full p-1" />
                </div>
              </div>

              {/* Service Title and Description */}
              <div className="p-6 hover:bg-accent/30 transition-colors duration-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {service.shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* General Service Inquiry */}
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground">
            For service-related inquiries, our team is ready to assist you.
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
              Cadet Labs wasn’t born. It happened. Somewhere between
              caffeine-fueled rants and maritime war stories, a curious crew of
              ex-seafarers, data whisperers, and product alchemists stumbled
              into a common cause: why is marine data still such a tangled net?
            </p>
            <p>
              As we sparred over schemas and swapped sea tales, something
              unexpected occurred. Domain met technology, and instead of turning
              away, they shook hands. Out of that uneasy truce came an
              accidental company with a very deliberate mission.
            </p>
            <p>
              We believe in grinding through the hard problems. We take the long
              route when shortcuts would only leave cracks behind. We think like
              the users we once were, knowing that real value lies in tools that
              work in the mess of daily operations, not just in polished demos.
            </p>
            <p>
              We don’t worship AI, and we don’t dismiss it either. Machines
              should shoulder the heavy lifting so that the mariner’s mind can
              focus on judgment, skill, and the decisions only humans can make.
            </p>
            <p>
              So here we are. Part workshop, part think tank, part confessional
              for broken ETLs. Building the tools we once wished we had. And if
              our solutions feel oddly intuitive, it is because they are forged
              from lived chaos, not lab theory.
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
              We're building something extraordinary at Cadet Labs where
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
                  Secure maritime operations with industry-leading expertise
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
              and we'd love to hear from you!
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
            <p className="text-primary-foreground/80">contact@cadetlabs.io</p>
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
