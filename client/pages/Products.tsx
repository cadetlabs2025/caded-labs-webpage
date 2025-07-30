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
import { Brain, Shield, Globe, Eye, FileText, TrendingUp } from "lucide-react";

const products = [
  {
    name: "Maritime AI Vision",
    description:
      "Advanced computer vision solutions for vessel monitoring, port security, and automated surveillance systems.",
    tech: ["Computer Vision", "Deep Learning", "Real-time Analytics"],
    category: "AI",
    icon: Eye,
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
    tech: ["Security Analytics", "Threat Detection", "NIST 2.0"],
    category: "Security",
    icon: Shield,
    features: [
      "NIST 2.0 compliance",
      "Threat intelligence",
      "Incident response",
      "Security monitoring",
    ],
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-wave-light to-ocean-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Products
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Cutting-edge AI and cybersecurity solutions designed specifically
              for maritime and industrial applications.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {products.map((product, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <product.icon className="h-12 w-12 text-primary" />
                    <Badge variant="secondary">{product.category}</Badge>
                  </div>
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                  <CardDescription className="text-lg">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.tech.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button className="flex-1">Request Demo</Button>
                      <Button variant="outline" className="flex-1">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Contact us to discuss how our products can be customized for your
              specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
