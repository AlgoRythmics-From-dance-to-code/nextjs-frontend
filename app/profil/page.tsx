"use client";
import { useLocale } from "../i18n/LocaleProvider";

export default function ProfilPage() {
  const { t } = useLocale();
  return (
    <section>
      <h1>{t("nav.profil")}</h1>
      <p>This is your profile page.</p>
    </section>
  );
}
