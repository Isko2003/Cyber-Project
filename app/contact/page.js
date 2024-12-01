"use client";
import React, { useEffect } from "react";
import styles from "./Contact.module.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    i18n.changeLanguage(savedLanguage);
  }, []);
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{t("contactUs")}</h1>
      <p className={styles.paragraph}>
        {t("questions")}
      </p>

      <h2 className={styles.subheading}>{t("contactInfo")}</h2>
      <ul className={styles.list}>
        <li>
          <strong>{t("email")}:</strong> support@phonestore.com
        </li>
        <li>
          <strong>{t("phone")}:</strong> +1 (234) 567-890
        </li>
        <li>
          <strong>{t("address")}:</strong> 1234 Tech Street, Silicon Valley, CA
        </li>
      </ul>

      <h2 className={styles.subheading}>{t("sendMessage")}</h2>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">{t("name")}:</label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">{t("email")}:</label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">{t("message")}:</label>
          <textarea
            id="message"
            name="message"
            className={styles.textarea}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.button}>
          {t("submit")}
        </button>
      </form>
    </div>
  );
};

export default Contact;
