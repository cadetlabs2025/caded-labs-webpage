import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  FileText,
  Database,
  Download,
  Layers,
  Brain,
  Eye,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Clock,
  Zap,
  Ship,
  Users,
  Mail,
  Anchor,
  X,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useToast } from "@/hooks/use-toast";

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

const features = [
  {
    icon: Brain,
    title: "AI-Powered Manual Parsing",
    description:
      "Extracts components, spares, and jobs from technical PDFs using advanced document intelligence.",
  },
  {
    icon: Database,
    title: "Structured Equipment Metadata",
    description:
      "Generates reusable vessel-equipment libraries with standardized data structures.",
  },
  {
    icon: Download,
    title: "Export-Ready Format",
    description:
      "Direct transformation to your PMS system's data templates for seamless integration.",
  },
  {
    icon: Layers,
    title: "Multi-File Projects",
    description:
      "Manage multiple manuals, retry extraction, and merge results easily in one workspace.",
  },
  {
    icon: Ship,
    title: "Domain-Aware Intelligence",
    description:
      "Built with inputs from maritime professionals who understand vessel operations.",
  },
  {
    icon: Eye,
    title: "Audit & Oversight",
    description:
      "See what's extracted, what's missed, and where intervention is needed.",
  },
];

const stats = [
  { value: "5x", label: "Faster Data Creation", icon: Zap },
  { value: "7", label: "Days Average Delivery", icon: Clock },
  { value: "1 mo", label: "Traditional Timeline", icon: Clock },
];

export default function PMSAssetBuilder() {
  const prefersReducedMotion = useReducedMotion();
  const { toast } = useToast();
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [demoForm, setDemoForm] = useState({
    name: "",
    email: "",
    company: "",
    designation: "",
    country: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      const response = await fetch("/api/send-consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...demoForm,
          product: "PMS Asset Builder",
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to send consultation request");
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
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.2),transparent_50%)]" />
        </div>

        {/* Floating Elements */}
        {prefersReducedMotion ? (
          <>
            <div className="absolute top-20 right-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl" />
            <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-500/10 rounded-full blur-lg" />
          </>
        ) : (
          <>
            <motion.div
              className="absolute top-20 right-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"
              animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-20 left-20 w-24 h-24 bg-blue-500/10 rounded-full blur-lg"
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </>
        )}

        <div className="container mx-auto px-4 relative z-10">
          {/* Back Button */}
          <motion.div
            className="mb-8"
            initial={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -20 }
            }
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
          >
            <Link to="/products">
              <Button
                variant="ghost"
                className="text-white/80 hover:text-white hover:bg-white/10"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Button>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-8"
              initial={prefersReducedMotion ? "visible" : "hidden"}
              animate="visible"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 px-4 py-2 text-sm font-medium">
                  AI-Powered Solution
                </Badge>
              </motion.div>

              <motion.h1
                className="text-4xl lg:text-6xl font-bold text-white leading-tight"
                variants={itemVariants}
              >
                PMS Asset Builder
              </motion.h1>

              <motion.p
                className="text-2xl lg:text-3xl text-cyan-400 font-semibold"
                variants={itemVariants}
              >
                No Guesswork. No Rework.
              </motion.p>

              <motion.p
                className="text-xl text-white/80"
                variants={itemVariants}
              >
                Build PMS Data{" "}
                <span className="text-cyan-400 font-bold">5x Faster</span>.
              </motion.p>

              <motion.p
                className="text-lg text-white/70 leading-relaxed"
                variants={itemVariants}
              >
                From unstructured manuals to clean, PMS-ready datasets in a
                fraction of the time.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                variants={itemVariants}
              >
                <Button
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white group shadow-md hover:shadow-lg active:scale-[0.98] transition-all"
                  onClick={() => setShowDemoModal(true)}
                >
                  Request Demo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <a href="/PMS Asset Builder Brochure.pdf" download>
                  <Button
                    size="lg"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white shadow-md hover:shadow-lg active:scale-[0.98] transition-all"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Brochure
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Content - Visual */}
            <motion.div
              className="relative"
              initial={
                prefersReducedMotion
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.9 }
              }
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.8,
                delay: 0.3,
              }}
            >
              <div className="relative bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 ${prefersReducedMotion ? "" : "hover:scale-105"} transition-transform`}
                      initial={
                        prefersReducedMotion
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 20 }
                      }
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: prefersReducedMotion ? 0 : 0.5 + index * 0.1,
                      }}
                    >
                      <stat.icon className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
                      <div className="text-3xl font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-xs text-white/60">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Visual Diagram */}
                <div className="mt-8 relative">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 text-center">
                      <div className="w-16 h-16 mx-auto bg-white/10 rounded-xl flex items-center justify-center mb-2">
                        <FileText className="h-8 w-8 text-white/60" />
                      </div>
                      <p className="text-xs text-white/60">Technical Manuals</p>
                    </div>
                    <ArrowRight className="h-6 w-6 text-cyan-400 mx-4" />
                    <div className="flex-1 text-center">
                      <div className="w-16 h-16 mx-auto bg-cyan-500/20 rounded-xl flex items-center justify-center mb-2 border-2 border-cyan-500/50">
                        <Brain className="h-8 w-8 text-cyan-400" />
                      </div>
                      <p className="text-xs text-cyan-400 font-medium">
                        AI Processing
                      </p>
                    </div>
                    <ArrowRight className="h-6 w-6 text-cyan-400 mx-4" />
                    <div className="flex-1 text-center">
                      <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-xl flex items-center justify-center mb-2">
                        <Database className="h-8 w-8 text-green-400" />
                      </div>
                      <p className="text-xs text-white/60">PMS-Ready Data</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is PMS Asset Builder Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Why PMS Asset Builder?
              </h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  PMS Asset Builder is an{" "}
                  <strong className="text-cyan-600">
                    AI-augmented platform
                  </strong>{" "}
                  designed for maritime teams to accelerate the creation and
                  structuring of Planned Maintenance System (PMS) data.
                </p>
                <p>
                  Whether you're setting up a PMS from scratch or migrating
                  between systems, PMS Asset Builder simplifies the process of
                  converting vessel technical manuals into high-quality,
                  export-ready datasets tailored to your target PMS platform.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={
                prefersReducedMotion
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 30 }
              }
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
            >
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Anchor className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">
                      Maritime-First Design
                    </h3>
                    <p className="text-slate-600">
                      Built by ex-seafarers who understand vessel operations
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">
                      5x Faster Delivery
                    </h3>
                    <p className="text-slate-600">
                      Complete vessel PMS data in just 7 days
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={prefersReducedMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everything you need to transform technical manuals into structured
              PMS data
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className={`h-full border-0 bg-white group ${prefersReducedMotion ? "" : "hover:shadow-xl hover:-translate-y-1"} transition-all duration-300`}
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 ${prefersReducedMotion ? "" : "group-hover:scale-110"} transition-transform duration-300`}
                    >
                      <feature.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3
                      className={`text-xl font-bold text-slate-900 mb-2 ${prefersReducedMotion ? "" : "group-hover:text-cyan-600"} transition-colors`}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={
                prefersReducedMotion
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -30 }
              }
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl" />
                <div className="relative bg-gradient-to-br from-slate-900 to-cyan-900 rounded-2xl p-8 text-white">
                  <Users className="h-12 w-12 text-cyan-400 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">
                    Built by Maritime Professionals
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-6">
                    We are ex-seafarers, marine engineers, and product builders
                    who understand the pain of PMS data setup. This product is
                    not just tech. It's a practical response to a long-standing
                    operational headache.
                  </p>
                  <p className="text-cyan-400 italic">
                    "We built it the way we wished it existed when we were on
                    the other side."
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
                Industry Innovation
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Why Choose Us?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      Complete vessel PMS data in 7 days
                    </h4>
                    <p className="text-slate-600">
                      That's right: just 7 days! (Average ETA: 1 month)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      AI + Document Intelligence
                    </h4>
                    <p className="text-slate-600">
                      Mature technologies that eliminate slow, costly, manual
                      PMS creation
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      Maritime Domain Expertise
                    </h4>
                    <p className="text-slate-600">
                      Built with deep understanding of vessel operations and
                      regulations
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-cyan-600 to-blue-700"
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-white mb-4"
              initial={
                prefersReducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: prefersReducedMotion ? 0 : 0.2 }}
            >
              Ready to transform your PMS data building process?
            </motion.h2>
            <motion.p
              className="text-xl text-white/80 mb-8"
              initial={
                prefersReducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: prefersReducedMotion ? 0 : 0.3 }}
            >
              Let's talk about a pilot run for your next vessel.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              initial={
                prefersReducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: prefersReducedMotion ? 0 : 0.4 }}
            >
              <Button
                size="lg"
                className="bg-white text-cyan-600 hover:bg-white/90 group shadow-md hover:shadow-lg active:scale-[0.98] transition-all"
                onClick={() => setShowDemoModal(true)}
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div
              className="flex items-center justify-center gap-2 text-white/80"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: prefersReducedMotion ? 0 : 0.5 }}
            >
              <Mail className="h-5 w-5" />
              <a
                href="mailto:contact@cadetlabs.io"
                className="hover:text-white transition-colors underline"
              >
                contact@cadetlabs.io
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Demo Request Modal */}
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
                <h3 className="text-xl font-bold text-white">Request a Demo</h3>
                <p className="text-white/80 text-sm mt-1">
                  Fill in your details and our team will reach out to schedule a
                  demo
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
                    placeholder="Your role"
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

                <Button
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white shadow-md hover:shadow-lg active:scale-[0.98] transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>

                <p className="text-xs text-center text-slate-500">
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
    </div>
  );
}
