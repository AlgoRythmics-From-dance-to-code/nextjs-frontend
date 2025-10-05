"use client";
import { useLocale } from "../i18n/LocaleProvider";

export default function CoursesPage() {
  const { t } = useLocale();
  return (
    <section>
      <h1>{t("nav.courses")}</h1>
      <p>Course listings will appear here.</p>
    </section>
  );
}
