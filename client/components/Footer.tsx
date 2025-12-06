import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="border-t border-primary-foreground/20 pt-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Feacf4d198f7d471b831a310bf0945bc6%2Fa48a907ee5aa467a8baf67f3e82847ad?format=webp&width=800"
                alt="Cadet Labs"
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-primary-foreground/80 mb-4 max-w-md">
                AI-powered maritime and cybersecurity solutions that make complex
                technology accessible and actionable.
              </p>

              <div className="mt-8 pt-6 border-t border-primary-foreground/20">
                <img
                  src="/microsoft-for-startups.png"
                  alt="Microsoft for Startups"
                  className="h-16 w-auto opacity-95 hover:opacity-100 transition-all duration-300 hover:scale-105 filter brightness-110"
                />
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-primary-foreground">
                Company
              </h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-primary-foreground">Legal</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>CIN - U62099TN2025PTC181900</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 pb-8 text-center text-sm text-primary-foreground/80">
            <p>&copy; 2025 Cadet Labs. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
