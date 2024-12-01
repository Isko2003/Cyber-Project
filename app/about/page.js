"use client";
import React, { useEffect } from "react";
import styles from "./About.module.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    i18n.changeLanguage(savedLanguage);
  }, []);
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{t("aboutUs")}</h1>
      <p className={styles.paragraph}>
        {t("aboutTitle")}
      </p>
      <p className={styles.paragraph}>
        {t("aboutP")}
      </p>
      <h2 className={styles.subheading}>{t("ourValues")}</h2>
      <ul className={styles.list}>
        <li>
          {t("quality")}
        </li>
        <li>{t("affordability")}</li>
        <li>
          {t("customer")}
        </li>
        <li>{t("innovation")}</li>
      </ul>
      <h2 className={styles.subheading}>{t("ourServices")}</h2>
      <ul className={styles.list}>
        <li>
          {t("rangeOfPhones")}
        </li>
        <li>{t("accessories")}</li>
        <li>{t("shipping")}</li>
      </ul>
      <p className={styles.paragraph}>
        {t("thankYou")}
      </p>
    </div>
  );
};

export default About;
