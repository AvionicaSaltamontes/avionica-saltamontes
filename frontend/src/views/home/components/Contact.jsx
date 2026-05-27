"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";

import Link from "next/link";

import Container from "@/components/container/Main";
import Checkbox from "@/components/checkbox/Main";
import TextArea from "@/components/text-area/Main";
import Spinner from "@/components/spinner/Main";
import Input from "@/components/input/Main";
import T from "@/components/texts/Main";

import { SuccessToast, ErrorToast } from "@/lib/toast";

import { postContact } from "@/api/contact";

const Contact = () => {
  const lang = localStorage.getItem("lang-avionica") || "en";

  const t = useTranslations("");

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState(lang === "es" ? "+52" : "+1");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (document.cookie.includes("avionica_email_sent=true")) {
      ErrorToast(t("message_email_sent_limit"));
      return;
    }

    if (loading) return;
    setLoading(true);

    const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;
    if (!recaptchaKey || typeof grecaptcha === "undefined") {
      ErrorToast(t("message_sent_error"));
      setLoading(false);
      return;
    }

    const token = await grecaptcha.execute(recaptchaKey, {
      action: "contact_form",
    });

    const obj = {
      captcha: token,
      name: `${name.trim()} ${lastName.trim()}`,
      subject: "",
      phone: `${company} ${phone.trim()}`,
      email: email.trim(),
      message: message.trim(),
      lang,
    };

    const response = await postContact(obj);

    if (response.status === 202 || response.status === 200) {
      SuccessToast(t("message_sent_success"));

      document.cookie = "avionica_email_sent=true; max-age=3600; path=/";

      setName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setCompany(lang === "es" ? "+52" : "+1");
      setMessage("");
    } else {
      ErrorToast(t("message_sent_error"));
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="pb-20 pt-5">
      <Container>
        <h2 className="text-2xl font-calibri-bold">
          <T value="label_click_away" />
        </h2>
        <p className="mt-5 font-calibri-regular">
          <T value="label_team_available" />
        </p>
        <form onSubmit={handleSubmit} className="mt-5 border-neutral-300 border-2 rounded-lg p-5">
          <div className="flex gap-4 lg:gap-10 mt-4 flex-wrap md:flex-nowrap">
            <Input
              id="name"
              label="label_first_name"
              placeholder="label_write_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              id="lastName"
              label="label_last_name"
              placeholder="label_write_last_name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="flex gap-4 lg:gap-10 mt-4 flex-wrap md:flex-nowrap">
            <Input
              id="email"
              label="label_email"
              type="email"
              placeholder="label_email_sample"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              id="phone"
              label="label_phone_number"
              type="tel"
              placeholder="label_10_digits"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              valueSelect={company}
              onChangeSelect={(e) => setCompany(e)}
            />
          </div>

          <TextArea label="label_message" placeholder="label_write_message" value={message} onChange={(e) => setMessage(e.target.value)} required />

          <div className="flex justify-between mt-4">
            <div className="flex items-center gap-2">
              <Checkbox required />
              <p className="font-calibri-regular">
                <T value="label_accept_privacy_policy" />{" "}
                <Link href="/politicas-de-privacidad" className="font-calibri-bold">
                  <T value="label_privacy_policy" />
                </Link>
              </p>
            </div>

            <button type="submit" className="h-9 px-8 min-w-32 bg-c_golden text-white rounded-full cursor-pointer font-calibri-bold">
              {!loading && <T value="label_submit" />}
              {loading && <Spinner />}
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default Contact;
