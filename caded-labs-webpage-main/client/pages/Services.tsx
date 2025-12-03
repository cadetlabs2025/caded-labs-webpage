import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Shield,
  Globe,
  Database,
  TrendingUp,
  Cog,
  Search,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const getContainerVariants = (reduceMotion: boolean) => ({
  hidden: { opacity: reduceMotion ? 1 : 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: reduceMotion ? 0 : 0.12,
    },
  },
});

const getItemVariants = (reduceMotion: boolean) => ({
  hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 25 },
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

const services = [
  {
    title: "Cybersecurity Consultancy",
    description:
      "Comprehensive security assessments and implementations following industry-standard frameworks and maritime regulations.",
    icon: Shield,
    details: [
      "Security Framework Implementation",
      "MSC Circulars Compliance",
      "Vulnerability Assessments",
      "Security Policy Development",
      "Incident Response Planning",
      "Employee Security Training",
    ],
  },
  {
    title: "Digital Transformation Consultancy",
    description:
      "Strategic guidance for modernizing operations through technology adoption and process optimization.",
    icon: Globe,
    details: [
      "Digital Strategy Development",
      "Technology Assessment",
      "Process Automation",
      "Change Management",
      "ROI Analysis",
      "Implementation Roadmaps",
    ],
  },
  {
    title: "ERP Advisory & Implementation",
    description:
      "Expert guidance in selecting, customizing, and implementing ERP solutions for maritime operations.",
    icon: Cog,
    details: [
      "ERP Selection & Evaluation",
      "Custom Configuration",
      "Data Migration",
      "User Training Programs",
      "System Integration",
      "Ongoing Support",
    ],
  },
  {
    title: "Data Governance",
    description:
      "Establish robust data management practices ensuring compliance, quality, and accessibility.",
    icon: Database,
    details: [
      "Data Quality Assessment",
      "Governance Framework Design",
      "Compliance Monitoring",
      "Data Privacy Implementation",
      "Metadata Management",
      "Data Lifecycle Management",
    ],
  },
  {
    title: "Advanced Data Analytics",
    description:
      "Transform your data into actionable insights with machine learning and statistical analysis.",
    icon: TrendingUp,
    details: [
      "Predictive Modeling",
      "Business Intelligence",
      "Real-time Analytics",
      "Performance Dashboards",
      "Custom Reporting",
      "ML Model Development",
    ],
  },
  {
    title: "Maritime Research & Development",
    description:
      "Innovative R&D services focusing on emerging technologies for maritime applications.",
    icon: Search,
    details: [
      "Technology Research",
      "Prototype Development",
      "Feasibility Studies",
      "Innovation Consulting",
      "Grant Application Support",
      "Academic Partnerships",
    ],
  },
];

export default function Services() {
  const prefersReducedMotion = useReducedMotion();
  
  const containerVariants = getContainerVariants(prefersReducedMotion);
  const itemVariants = getItemVariants(prefersReducedMotion);
  const fadeInUp = getFadeInUp(prefersReducedMotion);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-wave-light to-ocean-light overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={prefersReducedMotion ? "visible" : "hidden"}
            animate="visible"
            variants={fadeInUp}
          >
            <motion.h1
              className="text-4xl lg:text-6xl font-bold text-foreground mb-6"
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.2 }}
            >
              Comprehensive consulting and implementation services to accelerate
              your digital transformation journey.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial={prefersReducedMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center hover:shadow-2xl transition-all duration-300 h-full group md:hover:-translate-y-2 border-2 hover:border-primary/20 active:shadow-xl active:border-primary/10">
                  <CardHeader>
                    <div className="group-hover:scale-110 md:group-hover:rotate-3 transition-transform duration-300">
                      <service.icon className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-4 group-hover:text-primary/80 transition-colors" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full group/btn">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-wave-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Service Details
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {services.map((service, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background rounded-lg border px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-4">
                      <service.icon className="h-6 w-6 text-primary" />
                      <div>
                        <h3 className="text-lg font-semibold">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div className="pl-10">
                      <h4 className="font-semibold mb-3">What we deliver:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {service.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 flex gap-3">
                        <Button size="sm">Get Quote</Button>
                        <Button variant="outline" size="sm">
                          Schedule Call
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Process
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "Understanding your challenges and objectives",
                },
                {
                  step: "02",
                  title: "Strategy",
                  description: "Developing tailored solutions and roadmaps",
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "Executing solutions with minimal disruption",
                },
                {
                  step: "04",
                  title: "Support",
                  description: "Ongoing optimization and maintenance",
                },
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Let's discuss how our services can help transform your operations
              and achieve your business objectives.
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
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
