import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  Calendar,
  Clock,
  Users,
  TrendingUp,
  Bookmark,
} from "lucide-react";
import Navigation from "@/components/Navigation";

export default function IndexOption4() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Magazine-Style Hero */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Top Header */}
          <div className="flex items-center justify-between mb-12 pb-8 border-b border-border">
            <div className="flex items-center gap-4">
              <Badge
                variant="outline"
                className="bg-primary/10 text-primary border-primary/20"
              >
                MARITIME TECH
              </Badge>
              <span className="text-sm text-muted-foreground">
                Issue #2024.03
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>March 2024</span>
            </div>
          </div>

          {/* Main Story Layout */}
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            {/* Feature Article */}
            <div className="lg:col-span-8">
              <div className="space-y-8">
                <div>
                  <Badge className="mb-4 bg-primary text-primary-foreground">
                    FEATURE STORY
                  </Badge>
                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                    The Future of Maritime Operations
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                    How advanced AI systems are revolutionizing maritime
                    industry operations, from port management to vessel
                    navigation, creating unprecedented efficiency and safety
                    standards.
                  </p>
                </div>

                {/* Article Meta */}
                <div className="flex items-center gap-6 text-sm text-muted-foreground border-l-4 border-primary pl-6">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>Maritime Specialists</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>5 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    <span>Industry Trends</span>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-ocean-medium/10 rounded-lg border flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-10 w-10 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Interactive Demo Available
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button size="lg" className="px-8">
                    Explore Solutions
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg" className="px-8">
                    Read Full Story
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {/* Quick Stats */}
              <Card className="border-0 bg-muted/30">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4 text-sm uppercase tracking-wide">
                    By the Numbers
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">
                        Projects Delivered
                      </span>
                      <span className="text-2xl font-bold text-primary">
                        50+
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">
                        Countries Served
                      </span>
                      <span className="text-2xl font-bold text-ocean-medium">
                        15+
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">
                        System Uptime
                      </span>
                      <span className="text-2xl font-bold text-ocean-dark">
                        99.9%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <div>
                <h3 className="font-bold mb-6 text-sm uppercase tracking-wide">
                  Related Articles
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "AI in Port Management",
                      category: "Technology",
                      readTime: "3 min read",
                    },
                    {
                      title: "Maritime Cybersecurity Trends",
                      category: "Security",
                      readTime: "4 min read",
                    },
                    {
                      title: "Digital Transformation at Sea",
                      category: "Innovation",
                      readTime: "6 min read",
                    },
                  ].map((article, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="flex gap-3 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                        <Bookmark className="h-4 w-4 text-muted-foreground mt-1 group-hover:text-primary transition-colors" />
                        <div className="flex-1">
                          <h4 className="font-medium mb-1 group-hover:text-primary transition-colors">
                            {article.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>{article.category}</span>
                            <span>•</span>
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Sections */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technology Sections</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dive deeper into specific areas of maritime technology innovation
            </p>
          </div>

          {/* Magazine Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                section: "AI & AUTOMATION",
                title: "Smart Systems for Smarter Seas",
                description:
                  "Advanced algorithms driving autonomous operations",
                color: "bg-primary",
                articles: "12 Articles",
              },
              {
                section: "CYBERSECURITY",
                title: "Protecting Maritime Assets",
                description:
                  "Comprehensive security frameworks for modern fleets",
                color: "bg-ocean-medium",
                articles: "8 Articles",
              },
              {
                section: "DATA ANALYTICS",
                title: "Insights from the Deep",
                description:
                  "Turning maritime data into actionable intelligence",
                color: "bg-ocean-dark",
                articles: "15 Articles",
              },
            ].map((section, index) => (
              <Card
                key={index}
                className="border-0 hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <CardContent className="p-0">
                  <div className={`${section.color} p-6 text-white`}>
                    <div className="text-xs font-bold tracking-wider mb-2 opacity-80">
                      {section.section}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                    <p className="text-sm opacity-90">{section.description}</p>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        {section.articles}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Stay Informed</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our maritime technology insights and industry
              updates. Get the latest trends delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button className="px-8">Subscribe</Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Join 5,000+ maritime professionals already subscribed
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
