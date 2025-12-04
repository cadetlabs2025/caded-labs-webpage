import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Clock, ArrowRight, Users, Rocket, Heart } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const openPositions = [
  {
    title: "Senior AI/ML Engineer",
    department: "Engineering",
    location: "Chennai, India",
    type: "Full-time",
    description: "Build and deploy AI models for maritime document processing and data extraction.",
  },
  {
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Chennai, India / Remote",
    type: "Full-time",
    description: "Develop web applications using React, TypeScript, and Node.js for maritime solutions.",
  },
  {
    title: "Maritime Domain Expert",
    department: "Product",
    location: "Chennai, India",
    type: "Full-time",
    description: "Bridge the gap between maritime operations and technology solutions.",
  },
];

const benefits = [
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with ex-seafarers, data scientists, and product experts in a supportive environment.",
  },
  {
    icon: Rocket,
    title: "Growth Opportunities",
    description: "Learn cutting-edge AI/ML technologies and maritime domain expertise.",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Flexible working hours and remote work options for the right roles.",
  },
];

export default function Careers() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-wave-light to-ocean-light">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          >
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2">
              Join Our Crew
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Careers at Cadet Labs
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Help us transform the maritime industry with AI-powered solutions. 
              We're looking for passionate people who want to make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Join Us?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Be part of a team that's revolutionizing maritime operations through technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: prefersReducedMotion ? 0 : index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Open Positions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our current openings and find your perfect role.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: prefersReducedMotion ? 0 : index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all hover:border-primary/30">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2">{position.title}</CardTitle>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            {position.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {position.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {position.type}
                          </span>
                        </div>
                      </div>
                      <Button className="group shrink-0">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {position.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        className="py-16 bg-primary"
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Don't See Your Role?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              We're always looking for talented people. Send us your resume and 
              we'll keep you in mind for future opportunities.
            </p>
            <Button variant="secondary" size="lg" className="group" asChild>
              <a href="mailto:ranjith@cadetlabs.io">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
