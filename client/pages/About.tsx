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
import {
  MapPin,
  Users,
  Award,
  Building,
  Linkedin,
  Mail,
  Calendar,
} from "lucide-react";

const values = [
  {
    title: "Innovation First",
    description:
      "We push the boundaries of what's possible with AI and maritime technology.",
  },
  {
    title: "Transparency",
    description:
      "Our AI solutions are explainable and understandable to all stakeholders.",
  },
  {
    title: "Partnership",
    description:
      "We build long-term relationships based on trust and mutual success.",
  },
  {
    title: "Excellence",
    description:
      "We deliver only the highest quality solutions that exceed expectations.",
  },
];

const team = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Founder & CEO",
    bio: "Maritime technology expert with 15+ years in AI and cybersecurity",
    linkedin: "#",
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    bio: "Former Google AI researcher specializing in computer vision and ML",
    linkedin: "#",
  },
  {
    name: "Captain James Rodriguez",
    role: "Maritime Advisor",
    bio: "30+ years maritime experience, former port authority director",
    linkedin: "#",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Head of Cybersecurity",
    bio: "NIST framework expert, former government cybersecurity consultant",
    linkedin: "#",
  },
];

const certifications = [
  "ISO 27001 Certified",
  "NIST Cybersecurity Framework",
  "Microsoft Partner",
  "AWS Select Tier",
  "Chennai Chamber of Commerce",
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-wave-light to-ocean-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About Cadet Labs
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Pioneering the future of maritime technology through explainable
              AI and innovative cybersecurity solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Founded in 2023 in Chennai, India, Cadet Labs emerged from a
                  simple yet powerful vision: to make artificial intelligence an
                  explainable superpower for maritime professionals.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our founders recognized the gap between advanced AI
                  capabilities and practical maritime applications. Too often,
                  AI solutions were black boxes that professionals couldn't
                  trust or understand. We set out to change that.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Today, we serve clients worldwide, helping maritime and
                  industrial organizations harness the power of AI while
                  maintaining the transparency and control they need.
                </p>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-medium">
                    Headquarters: Chennai, India
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-ocean-light to-primary rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <Building className="h-24 w-24 mx-auto mb-4 opacity-80" />
                    <p className="text-lg font-semibold">Chennai Office</p>
                    <p className="text-sm opacity-90">
                      Innovation Hub for Maritime AI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-wave-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Mission & Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                <strong className="text-primary">
                  "AI is an explainable superpower to humans."
                </strong>{" "}
                This core belief drives everything we do.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="border-0 bg-background/60 backdrop-blur"
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Meet the experts driving innovation in maritime AI and
                cybersecurity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-24 h-24 bg-gradient-to-br from-ocean-light to-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-white" />
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="font-medium text-primary">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {member.bio}
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Linkedin className="h-4 w-4 mr-2" />
                      Connect
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Registration */}
      <section className="py-20 bg-wave-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Certifications & Affiliations
              </h2>
              <p className="text-xl text-muted-foreground">
                Trusted credentials and industry partnerships.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center border-0 bg-background/60 backdrop-blur">
                <CardHeader>
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Certifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {certifications.map((cert, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center border-0 bg-background/60 backdrop-blur">
                <CardHeader>
                  <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Registration</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium">Company Registration</p>
                      <p className="text-muted-foreground">
                        #U72900TN2023PTC123456
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">GST Number</p>
                      <p className="text-muted-foreground">33XXXXX1234A1Z5</p>
                    </div>
                    <div>
                      <p className="font-medium">Established</p>
                      <p className="text-muted-foreground">2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center border-0 bg-background/60 backdrop-blur">
                <CardHeader>
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Office Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm space-y-2">
                    <p className="font-medium">Chennai Office</p>
                    <p className="text-muted-foreground">
                      IT Corridor, OMR
                      <br />
                      Chennai, Tamil Nadu 600096
                      <br />
                      India
                    </p>
                    <Button variant="outline" size="sm" className="mt-4 w-full">
                      <MapPin className="h-4 w-4 mr-2" />
                      View on Map
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals who share our
              vision of making AI an explainable superpower for maritime
              professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Calendar className="mr-2 h-5 w-5" />
                View Open Positions
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="mr-2 h-5 w-5" />
                Contact HR
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
