import { useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Menu, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTheme } from "@/hooks/use-theme";

const navigationItems = [
  { name: "Home", value: "home", route: "/" },
  { name: "Products", value: "products", route: "/products" },
  { name: "Services", value: "services", route: "/services" },
  { name: "About Us", value: "about", route: "/about" },
  { name: "Careers", value: "careers", route: "/careers" },
  { name: "Contact Us", value: "contact", route: "/contact" },
];

function useSafeRouter() {
  try {
    const navigate = useNavigate();
    const location = useLocation();
    return { navigate, location, isRouterAvailable: true };
  } catch {
    return { 
      navigate: () => {}, 
      location: { pathname: "/" }, 
      isRouterAvailable: false 
    };
  }
}

interface NavigationProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export default function Navigation({
  activeTab: propActiveTab,
  onTabChange: propOnTabChange,
}: NavigationProps = {}) {
  const { navigate, location, isRouterAvailable } = useSafeRouter();
  
  const getActiveTabFromRoute = () => {
    if (!isRouterAvailable) return "home";
    const path = location.pathname;
    if (path === "/") return "home";
    if (path === "/products" || path.startsWith("/products/")) return "products";
    if (path === "/services") return "services";
    if (path === "/about") return "about";
    if (path === "/careers") return "careers";
    if (path === "/contact") return "contact";
    return "home";
  };

  const activeTab = propActiveTab ?? getActiveTabFromRoute();
  
  const handleTabChange = (tab: string) => {
    if (propOnTabChange) {
      propOnTabChange(tab);
    } else if (isRouterAvailable) {
      const navItem = navigationItems.find(item => item.value === tab);
      if (navItem) {
        navigate(navItem.route);
      }
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<
    Array<{ text: string; element: Element; tab: string }>
  >([]);

  const searchInPage = useCallback(
    (query: string) => {
      if (!query.trim()) {
        setSearchResults([]);
        return;
      }

      const results: Array<{ text: string; element: Element; tab: string }> =
        [];

      // Define searchable content for each tab
      const tabContent = {
        home: [
          "AI-Augmented Solutions",
          "Cybersecurity Excellence",
          "Maritime Domain Expertise",
          "Long-term Partnerships",
          "Fleet Above",
          "Data Below",
          "We Hold the Line",
          "mission",
          "maritime operations",
          "artificial intelligence",
        ],
        products: [
          "PMS Asset Builder",
          "Data Anchorage",
          "AI-driven extraction",
          "Enterprise data restructured",
          "maritime-grade data integration",
          "agentic AI",
          "vessel manuals",
          "equipment intelligence",
        ],
        services: [
          "Cybersecurity Consultancy",
          "Digital Transformation",
          "Advanced Data Analytics",
          "Security framework",
          "MSC circulars compliance",
        ],
        about: [
          "Cadet Labs",
          "ex-seafarers",
          "data whisperers",
          "product alchemists",
          "marine data",
          "domain met technology",
          "confessional booth",
          "broken ETLs",
        ],
        careers: [
          "Careers",
          "Job opportunities",
          "Join our team",
          "Work with us",
          "Career opportunities",
          "Employment",
        ],
        contact: [
          "contact@cadetlabs.io",
          "+919940211712",
          "Chennai, India",
          "Contact Us",
          "Email",
          "Phone",
          "Location",
        ],
      };

      // Search through predefined content
      Object.entries(tabContent).forEach(([tabName, contents]) => {
        contents.forEach((content) => {
          if (content.toLowerCase().includes(query.toLowerCase())) {
            results.push({
              text: content,
              element: document.body, // Placeholder, will be handled in scrollToElement
              tab: tabName,
            });
          }
        });
      });

      // Also search current page content
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
      );

      let textNode;
      while ((textNode = walker.nextNode())) {
        const text = textNode.textContent?.toLowerCase() || "";
        if (text.includes(query.toLowerCase()) && textNode.parentElement) {
          // Avoid searching in script tags, style tags, etc.
          const parentTag = textNode.parentElement.tagName.toLowerCase();
          if (!["script", "style", "meta", "title"].includes(parentTag)) {
            results.push({
              text: textNode.textContent?.substring(0, 100) + "..." || "",
              element: textNode.parentElement,
              tab: activeTab,
            });
          }
        }
      }

      // Remove duplicates and limit results
      const uniqueResults = results.filter(
        (result, index, self) =>
          index ===
          self.findIndex((r) => r.text === result.text && r.tab === result.tab),
      );

      setSearchResults(uniqueResults.slice(0, 8)); // Limit to 8 results
    },
    [activeTab],
  );

  const scrollToElement = (element: Element, targetTab: string) => {
    // If we need to switch tabs, do it first
    if (targetTab !== activeTab) {
      handleTabChange(targetTab);

      // Wait for tab change to complete, then search and scroll
      setTimeout(() => {
        // Search for the element in the new tab content
        const walker = document.createTreeWalker(
          document.body,
          NodeFilter.SHOW_TEXT,
          null,
        );

        let textNode;
        while ((textNode = walker.nextNode())) {
          const text = textNode.textContent?.toLowerCase() || "";
          if (
            text.includes(searchQuery.toLowerCase()) &&
            textNode.parentElement
          ) {
            const parentTag = textNode.parentElement.tagName.toLowerCase();
            if (!["script", "style", "meta", "title"].includes(parentTag)) {
              textNode.parentElement.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
              });

              // Highlight the element temporarily
              textNode.parentElement.classList.add("bg-yellow-200");
              setTimeout(() => {
                textNode.parentElement.classList.remove("bg-yellow-200");
              }, 2000);

              break; // Found and scrolled to first match
            }
          }
        }
      }, 300); // Wait for tab transition
    } else {
      // Same tab, scroll directly
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });

      // Highlight the element temporarily
      element.classList.add("bg-yellow-200");
      setTimeout(() => {
        element.classList.remove("bg-yellow-200");
      }, 2000);
    }

    setIsSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 m-0 p-0">
      <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 mr-8">
          <img
            src="/cadet-labs-logo.png"
            alt="Cadet Labs"
            className={cn(
              "h-16 w-auto object-contain select-none pointer-events-none",
              theme === "dark" && "brightness-110 contrast-110"
            )}
            draggable={false}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {/* Theme Toggle */}
          <ThemeToggle />
          
          {/* Search */}
          <Popover open={isSearchOpen} onOpenChange={setIsSearchOpen}>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0 bg-popover" align="end">
              <div className="p-4">
                <div className="flex items-center space-x-2">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search content..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      searchInPage(e.target.value);
                    }}
                    className="flex-1 border-0 focus:ring-0 focus:border-0"
                    autoFocus
                  />
                  {searchQuery && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => {
                        setSearchQuery("");
                        setSearchResults([]);
                      }}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  )}
                </div>

                {searchResults.length > 0 && (
                  <div className="mt-4 max-h-60 overflow-y-auto">
                    <div className="text-xs text-muted-foreground mb-2">
                      Found {searchResults.length} results
                    </div>
                    {searchResults.map((result, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          scrollToElement(result.element, result.tab)
                        }
                        className="w-full text-left p-2 hover:bg-muted rounded text-sm border-b border-border last:border-b-0"
                      >
                        <div className="truncate">
                          {result.text}
                          {result.tab !== activeTab && (
                            <span className="text-xs text-blue-600 ml-2">
                              (in {result.tab})
                            </span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {searchQuery && searchResults.length === 0 && (
                  <div className="mt-4 text-sm text-muted-foreground text-center py-4">
                    No results found for "{searchQuery}"
                  </div>
                )}
              </div>
            </PopoverContent>
          </Popover>

          {navigationItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleTabChange(item.value)}
              className={cn(
                "text-sm font-medium transition-colors px-2 py-1 hover:text-primary",
                activeTab === item.value
                  ? "text-primary border-b-2 border-primary"
                  : "text-foreground/80",
              )}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetHeader>
              <SheetTitle>Navigation Menu</SheetTitle>
            </SheetHeader>

            {/* Theme Toggle for Mobile */}
            <div className="flex items-center justify-between mt-4 px-3 py-2 bg-muted/50 rounded-lg">
              <span className="text-sm font-medium">Theme</span>
              <ThemeToggle showLabel />
            </div>

            {/* Mobile Search */}
            <div className="mt-6 p-3 border rounded-lg bg-muted/50">
              <div className="flex items-center space-x-2 mb-3">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search content..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    searchInPage(e.target.value);
                  }}
                  className="flex-1"
                />
                {searchQuery && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={() => {
                      setSearchQuery("");
                      setSearchResults([]);
                    }}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                )}
              </div>

              {searchResults.length > 0 && (
                <div className="max-h-40 overflow-y-auto">
                  <div className="text-xs text-muted-foreground mb-2">
                    Found {searchResults.length} results
                  </div>
                  {searchResults.map((result, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        scrollToElement(result.element, result.tab);
                        setIsOpen(false);
                      }}
                      className="w-full text-left p-2 hover:bg-background rounded text-sm border-b border-border last:border-b-0"
                    >
                      <div className="truncate text-xs">
                        {result.text}
                        {result.tab !== activeTab && (
                          <span className="text-xs text-blue-600 ml-1">
                            (in {result.tab})
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {searchQuery && searchResults.length === 0 && (
                <div className="text-sm text-muted-foreground text-center py-2">
                  No results found
                </div>
              )}
            </div>

            <div className="flex flex-col space-y-4 mt-6">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    handleTabChange(item.value);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "text-lg font-medium transition-all duration-300 hover:text-primary hover:translate-x-2 hover:bg-primary/5 px-3 py-2 rounded-md text-left",
                    activeTab === item.value
                      ? "text-primary bg-primary/10"
                      : "text-foreground/80",
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
