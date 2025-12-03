import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Shield, Globe, Eye, FileText, TrendingUp, ArrowRight, Database, Zap, Star } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const products = [
  {
    name: "PMS Asset Builder",
    description:
      "AI-augmented platform to accelerate PMS data creation and structuring. Build PMS data 5x faster with no guesswork.",
    tech: ["Document AI", "NLP", "Data Extraction", "PMS Integration"],
    category: "Featured",
    icon: Database,
    image: "/digital_document_pro_1a30a36e.jpg",
    features: [
      "AI-powered manual parsing",
      "Structured equipment metadata",
      "Export-ready PMS format",
      "7-day vessel delivery",
    ],
    featured: true,
    link: "/products/pms-asset-builder",
  },
  {
    name: "Maritime AI Vision",
    description:
      "Advanced computer vision solutions for vessel monitoring, port security, and automated surveillance systems.",
    tech: ["Computer Vision", "Deep Learning", "Real-time Analytics"],
    category: "AI",
    icon: Eye,
    image: "/maritime_vessel_moni_458599bd.jpg",
    features: [
      "Vessel detection and tracking",
      "Port security monitoring",
      "Automated incident detection",
      "Real-time alerts",
    ],
  },
  {
    name: "Document Intelligence",
    description:
      "Automated document processing and compliance checking for shipping documents, contracts, and regulatory filings.",
    tech: ["NLP", "Document AI", "OCR", "Compliance"],
    category: "LegalTech",
    icon: FileText,
    image: "/digital_document_pro_1a30a36e.jpg",
    features: [
      "Automated document extraction",
      "Compliance verification",
      "Multi-language support",
      "Digital workflow integration",
    ],
  },
  {
    name: "Predictive Analytics Suite",
    description:
      "Comprehensive forecasting solutions for maritime operations, logistics planning, and risk assessment.",
    tech: ["Machine Learning", "Time Series", "Statistical Modeling"],
    category: "Forecasting",
    icon: TrendingUp,
    image: "/data_analytics_dashb_80ee824c.jpg",
    features: [
      "Demand forecasting",
      "Route optimization",
      "Risk prediction",
      "Performance analytics",
    ],
  },
  {
    name: "Cybersecurity Platform",
    description:
      "Integrated cybersecurity solutions designed specifically for maritime and industrial environments.",
    tech: ["Security Analytics", "Threat Detection", "Compliance"],
    category: "Security",
    icon: Shield,
    image: "/cybersecurity_networ_f2b8b5eb.jpg",
    features: [
      "Regulatory compliance",
      "Threat intelligence",
      "Incident response",
      "Security monitoring",
    ],
  },
];

const getContainerVariants = (reduceMotion: boolean) => ({
  hidden: { opacity: reduceMotion ? 1 : 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: reduceMotion ? 0 : 0.15,
    },
  },
});

const getItemVariants = (reduceMotion: boolean) => ({
  hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: reduceMotion ? 0 : 0.5,
      ease: "easeOut",
    },
  },
});

const getHeroVariants = (reduceMotion: boolean) => ({
  hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: reduceMotion ? 0 : 0.6,
      ease: "easeOut",
    },
  },
});

export default function Products() {
  const [activeTab, setActiveTab] = useState("products");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const containerVariants = getContainerVariants(prefersReducedMotion);
  const itemVariants = getItemVariants(prefersReducedMotion);
  const heroVariants = getHeroVariants(prefersReducedMotion);

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-wave-light to-ocean-light overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={prefersReducedMotion ? "visible" : "hidden"}
            animate="visible"
            variants={heroVariants}
          >
            <motion.div
              initial={prefersReducedMotion ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
            >
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2">
                Enterprise Solutions
              </Badge>
            </motion.div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Our Products
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Cutting-edge AI and cybersecurity solutions designed specifically
              for maritime and industrial applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid lg:grid-cols-2 gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onTouchStart={() => setHoveredIndex(index)}
                onTouchEnd={() => setTimeout(() => setHoveredIndex(null), 300)}
              >
                <Card className={`relative overflow-hidden h-full group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 active:shadow-xl active:border-primary/20 ${(product as any).featured ? 'ring-2 ring-cyan-500/50 border-cyan-500/30' : ''}`}>
                  {/* Featured Badge */}
                  {(product as any).featured && (
                    <div className="absolute top-0 left-0 z-20 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 text-xs font-bold rounded-br-lg flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      FEATURED
                    </div>
                  )}
                  {/* Product Image */}
                  <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 md:group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                      <Badge className={`shadow-lg text-xs sm:text-sm ${(product as any).featured ? 'bg-cyan-500 text-white' : 'bg-white/90 text-primary'}`}>
                        {product.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl shadow-lg flex items-center justify-center group-hover:-translate-y-1 md:group-hover:-translate-y-2 transition-transform duration-300 ${(product as any).featured ? 'bg-gradient-to-br from-cyan-500 to-blue-600' : 'bg-white'}`}>
                        <product.icon className={`h-6 w-6 sm:h-7 sm:w-7 ${(product as any).featured ? 'text-white' : 'text-primary'}`} />
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    {(product as any).link ? (
                      <Link to={(product as any).link}>
                        <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300 cursor-pointer hover:underline">
                          {product.name}
                        </CardTitle>
                      </Link>
                    ) : (
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                        {product.name}
                      </CardTitle>
                    )}
                    <CardDescription className="text-base">
                      {product.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                          Key Features
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {product.features.map((feature, featureIndex) => (
                            <motion.li
                              key={featureIndex}
                              className="flex items-center text-sm"
                              initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: prefersReducedMotion ? 0 : featureIndex * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <div className="w-2 h-2 rounded-full bg-primary mr-2 flex-shrink-0" />
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {product.tech.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <Button className={`flex-1 group/btn ${(product as any).featured ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700' : ''}`}>
                          Request Demo
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                        {(product as any).link ? (
                          <Link to={(product as any).link} className="flex-1">
                            <Button 
                              variant={(product as any).featured ? "default" : "outline"} 
                              className={`w-full group/learn ${(product as any).featured ? 'bg-cyan-600 hover:bg-cyan-700 text-white' : ''}`}
                            >
                              Learn More
                              <ArrowRight className="ml-2 h-4 w-4 group-hover/learn:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        ) : (
                          <Button variant="outline" className="flex-1">
                            Learn More
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-16 bg-primary"
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl font-bold text-primary-foreground mb-4"
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: prefersReducedMotion ? 0 : 0.2 }}
            >
              Ready to Transform Your Operations?
            </motion.h2>
            <motion.p
              className="text-lg text-primary-foreground/80 mb-8"
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: prefersReducedMotion ? 0 : 0.3 }}
            >
              Contact us to discuss how our products can be customized for your
              specific needs.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: prefersReducedMotion ? 0 : 0.4 }}
            >
              <Button variant="secondary" size="lg" className="group">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Download Brochure
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
