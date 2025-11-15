import { Link } from 'react-router-dom';
import { Github, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="mb-3 text-lg font-semibold">Über DisinfoApp</h3>
            <p className="text-sm text-muted-foreground">
              Eine progressive Web-App zur Erkennung und Bekämpfung von Desinformation. Lerne,
              Fake News zu erkennen und kritisches Denken zu entwickeln.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/modules" className="text-muted-foreground hover:text-foreground">
                  Lernmodule
                </Link>
              </li>
              <li>
                <Link to="/progress" className="text-muted-foreground hover:text-foreground">
                  Fortschritt
                </Link>
              </li>
              <li>
                <a href="#privacy" className="text-muted-foreground hover:text-foreground">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground">
                  Impressum
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Credits */}
          <div>
            <h3 className="mb-3 text-lg font-semibold">Community</h3>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-4 flex items-center text-sm text-muted-foreground">
              Made with <Heart className="mx-1 h-4 w-4 text-red-500" /> for digital literacy
            </p>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} DisinfoApp. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
