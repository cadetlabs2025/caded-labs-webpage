import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Shield,
  Globe,
  Database,
  TrendingUp,
  Cog,
  Search,
  CheckCircle,
  ArrowRight,
  X,
} from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useToast } from "@/hooks/use-toast";

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
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [demoForm, setDemoForm] = useState({
    name: "",
    email: "",
    company: "",
    designation: "",
    country: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { toast } = useToast();

  const containerVariants = getContainerVariants(prefersReducedMotion);
  const itemVariants = getItemVariants(prefersReducedMotion);
  const fadeInUp = getFadeInUp(prefersReducedMotion);

  const handleDemoFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDemoForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!demoForm.name || !demoForm.email || !demoForm.company) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Try EmailJS first (frontend solution) if available
      let emailSent = false;
      const emailjsServiceId =
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const emailjsTemplateId =
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
      const emailjsPublicKey =
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      // Try EmailJS if configured and package is available
      if (
        emailjsServiceId !== "YOUR_SERVICE_ID" &&
        emailjsTemplateId !== "YOUR_TEMPLATE_ID"
      ) {
        try {
          // Dynamic import to handle missing package gracefully
          const emailjs = await import("@emailjs/browser").catch(() => null);
          if (emailjs) {
            await emailjs.default.send(
              emailjsServiceId,
              emailjsTemplateId,
              {
                to_email: "contact@cadetlabs.io",
                from_name: demoForm.name,
                from_email: demoForm.email,
                company: demoForm.company,
                designation: demoForm.designation || "Not provided",
                country: demoForm.country || "Not provided",
                service: "General Consultation",
                message: `New consultation request from ${demoForm.name} (${demoForm.email}) at ${demoForm.company}`,
                date: new Date().toLocaleString(),
              },
              emailjsPublicKey,
            );
            emailSent = true;
          }
        } catch (emailjsError) {
          console.error("EmailJS error:", emailjsError);
          // Continue to API fallback
        }
      }

      // Fallback to API endpoint (this will log to console if no email service configured)
      if (!emailSent) {
        const response = await fetch("/api/send-consultation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...demoForm,
            service: "General Consultation",
          }),
        });

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(
            data.message || "Failed to send consultation request",
          );
        }

        // Log warning if email wasn't actually sent
        if (!emailSent) {
          console.warn(
            "⚠️ Email service not configured. Check server console for form data.",
          );
          console.warn(
            "To enable email sending, set up EmailJS (see EMAIL_SETUP.md)",
          );
        }
      }

      toast({
        title: "Consultation Request Submitted!",
        description: "Our team will contact you shortly at " + demoForm.email,
      });

      setDemoForm({
        name: "",
        email: "",
        company: "",
        designation: "",
        country: "",
      });
      setShowDemoModal(false);
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or email us at contact@cadetlabs.io",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              initial={
                prefersReducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: -20 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={
                prefersReducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.6,
                delay: prefersReducedMotion ? 0 : 0.2,
              }}
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
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setShowDemoModal(true)}
                        >
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
              <Button
                variant="secondary"
                size="lg"
                className="group"
                onClick={() => setShowDemoModal(true)}
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="secondary" size="lg" className="group" asChild>
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Request Modal */}
      <AnimatePresence>
        {showDemoModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            onClick={() => setShowDemoModal(false)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
              initial={
                prefersReducedMotion
                  ? { scale: 1, opacity: 1 }
                  : { scale: 0.9, opacity: 0 }
              }
              animate={{ scale: 1, opacity: 1 }}
              exit={
                prefersReducedMotion
                  ? { scale: 1, opacity: 1 }
                  : { scale: 0.9, opacity: 0 }
              }
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-5 relative">
                <button
                  onClick={() => setShowDemoModal(false)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
                <h3 className="text-xl font-bold text-white">
                  Schedule Consultation
                </h3>
                <p className="text-white/80 text-sm mt-1">
                  Fill in your details and our team will reach out to schedule a
                  consultation
                </p>
              </div>

              {/* Modal Form */}
              <form onSubmit={handleDemoSubmit} className="p-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={demoForm.name}
                    onChange={handleDemoFormChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email ID <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@company.com"
                    value={demoForm.email}
                    onChange={handleDemoFormChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-medium">
                    Company <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company name"
                    value={demoForm.company}
                    onChange={handleDemoFormChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="designation" className="text-sm font-medium">
                    Designation
                  </Label>
                  <Input
                    id="designation"
                    name="designation"
                    type="text"
                    placeholder="Your job title"
                    value={demoForm.designation}
                    onChange={handleDemoFormChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country" className="text-sm font-medium">
                    Country
                  </Label>
                  <Input
                    id="country"
                    name="country"
                    type="text"
                    placeholder="Your country"
                    value={demoForm.country}
                    onChange={handleDemoFormChange}
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1"
                    onClick={() => setShowDemoModal(false)}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </Button>
                </div>

                <p className="text-xs text-center text-muted-foreground pt-2">
                  Or email us directly at{" "}
                  <a
                    href="mailto:contact@cadetlabs.io"
                    className="text-cyan-600 hover:underline"
                  >
                    contact@cadetlabs.io
                  </a>
                </p>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
