"use client";
import { useLocale } from "../i18n/LocaleProvider";

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();
  return (
    <footer
      className="site-footer border-t"
      style={{ borderTopColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto text-center py-8 text-[color:var(--muted)]">
        <small>{t("footer", { year })}</small>
      </div>
    </footer>
  );
}
