import { Link } from 'react-router-dom';
import { Github, Heart, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="mb-4 flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">DisinfoApp</span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t('footer.about.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t('footer.quickLinks.title')}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/modules"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {t('footer.quickLinks.modules')}
                </Link>
              </li>
              <li>
                <Link
                  to="/progress"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {t('footer.quickLinks.progress')}
                </Link>
              </li>
              <li>
                <Link
                  to="/techniques"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {t('nav.techniques')}
                </Link>
              </li>
              <li>
                <Link
                  to="/discover"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {t('nav.discover')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Legal
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#privacy"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {t('footer.quickLinks.privacy')}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {t('footer.quickLinks.imprint')}
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t('footer.community.title')}
            </h3>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-all hover:bg-primary hover:text-white"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-4 flex items-center text-sm text-muted-foreground">
              {t('footer.community.madeWith')} <Heart className="mx-1.5 h-4 w-4 text-primary" /> {t('footer.community.for')}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} DisinfoApp. {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="rounded bg-primary/10 px-2 py-1 font-medium text-primary">
              Powered by Telekom
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
