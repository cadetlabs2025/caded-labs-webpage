import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MapPin,
  Building,
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
                  Cadet Labs wasn't born. It happened. Somewhere between caffeine-fueled rants and maritime war stories, a curious crew of ex-seafarers, data whisperers, and product alchemists stumbled into a common cause: why is marine data still such a tangled net?
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  As we sparred over schemas and swapped sea tales, something unexpected occurred. Domain met technology, and instead of turning away, they shook hands. Out of that uneasy truce came an accidental company with a very deliberate mission.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We believe in grinding through the hard problems. We take the long route when shortcuts would only leave cracks behind. We think like the users we once were, knowing that real value lies in tools that work in the mess of daily operations, not just in polished demos.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We don't worship AI, and we don't dismiss it either. Machines should shoulder the heavy lifting so that the mariner's mind can focus on judgment, skill, and the decisions only humans can make.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  So here we are. Part workshop, part think tank, part confessional for broken ETLs. Building the tools we once wished we had. And if our solutions feel oddly intuitive, it is because they are forged from lived chaos, not lab theory.
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
            <div className="flex justify-center">
              <Link to="/careers">
                <Button size="lg">
                  <Calendar className="mr-2 h-5 w-5" />
                  View Open Positions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
