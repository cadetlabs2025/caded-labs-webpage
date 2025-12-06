import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Linkedin,
  MessageSquare,
  Calendar,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "contact@cadetlabs.com",
    action: "mailto:contact@cadetlabs.com",
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+91 44 1234 5678",
    action: "tel:+914412345678",
  },
  {
    icon: MapPin,
    title: "Address",
    details: "IT Corridor, OMR\nChennai, Tamil Nadu 600096\nIndia",
    action: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon - Fri: 9:00 AM - 6:00 PM IST\nSat: 10:00 AM - 2:00 PM IST",
    action: null,
  },
];

const offices = [
  {
    name: "Chennai HQ",
    address: "IT Corridor, OMR, Chennai, Tamil Nadu 600096",
    phone: "+91 44 1234 5678",
    email: "chennai@cadetlabs.com",
  },
  {
    name: "Global Operations",
    address: "Remote teams worldwide",
    phone: "+1 (555) 123-4567",
    email: "global@cadetlabs.com",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-wave-light to-ocean-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to transform your operations with AI? Let's discuss how we
              can help achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Get in Touch</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your Company Name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest">Area of Interest</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ai-solutions">
                          AI Solutions
                        </SelectItem>
                        <SelectItem value="cybersecurity">
                          Cybersecurity
                        </SelectItem>
                        <SelectItem value="digital-transformation">
                          Digital Transformation
                        </SelectItem>
                        <SelectItem value="data-analytics">
                          Data Analytics
                        </SelectItem>
                        <SelectItem value="erp-advisory">
                          ERP Advisory
                        </SelectItem>
                        <SelectItem value="general-inquiry">
                          General Inquiry
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project and how we can help..."
                      rows={5}
                    />
                  </div>

                  <Button className="w-full" size="lg">
                    Send Message
                    <MessageSquare className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <info.icon className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">{info.title}</h3>
                          <p className="text-muted-foreground whitespace-pre-line">
                            {info.details}
                          </p>
                          {info.action && (
                            <a
                              href={info.action}
                              className="text-primary hover:underline text-sm"
                            >
                              Click to {info.title.toLowerCase()}
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Mail className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Schedule a Meeting
                    </CardTitle>
                    <CardDescription>
                      Prefer to talk? Schedule a 30-minute consultation call.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Book Consultation Call</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-wave-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Offices</h2>
              <p className="text-xl text-muted-foreground">
                Global presence with local expertise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {offices.map((office, index) => (
                <Card
                  key={index}
                  className="border-0 bg-background/60 backdrop-blur"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      {office.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Address:</p>
                      <p>{office.address}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone:</p>
                      <a
                        href={`tel:${office.phone}`}
                        className="text-primary hover:underline"
                      >
                        {office.phone}
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email:</p>
                      <a
                        href={`mailto:${office.email}`}
                        className="text-primary hover:underline"
                      >
                        {office.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Find Us</h2>
              <p className="text-xl text-muted-foreground">
                Visit our Chennai headquarters.
              </p>
            </div>

            <div className="aspect-video bg-gradient-to-br from-ocean-light to-primary rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="h-16 w-16 mx-auto mb-4 opacity-80" />
                <p className="text-lg font-semibold">Interactive Map</p>
                <p className="text-sm opacity-90">
                  Google Maps integration would be here
                </p>
                <Button variant="secondary" className="mt-4">
                  Open in Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-wave-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Quick answers to common questions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  question: "What is your typical project timeline?",
                  answer:
                    "Project timelines vary based on complexity, typically ranging from 2-6 months for full implementations.",
                },
                {
                  question: "Do you offer support after implementation?",
                  answer:
                    "Yes, we provide comprehensive ongoing support and maintenance packages for all our solutions.",
                },
                {
                  question: "Can you work with our existing systems?",
                  answer:
                    "Absolutely. We specialize in integrating with existing infrastructure and legacy systems.",
                },
                {
                  question: "What industries do you serve?",
                  answer:
                    "Primarily maritime, shipping, logistics, and industrial sectors, with expanding capabilities in other domains.",
                },
              ].map((faq, index) => (
                <Card
                  key={index}
                  className="border-0 bg-background/60 backdrop-blur"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
