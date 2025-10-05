"use client";
import { useLocale } from "../i18n/LocaleProvider";

export default function AlgorithmsPage() {
  const { t } = useLocale();
  return (
    <section>
      <h1>{t("nav.algorithms")}</h1>
      <p>{t("nav.algorithms")} page.</p>
    </section>
  );
}
