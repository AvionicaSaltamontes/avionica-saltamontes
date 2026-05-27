"use client";
import { useState, Fragment } from "react";
import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";

import Link from "next/link";

import InputDate from "@/components/input-date/Main";
import Container from "@/components/container/Main";
import TextArea from "@/components/text-area/Main";
import Checkbox from "@/components/checkbox/Main";
import Spinner from "@/components/spinner/Main";
import Select from "@/components/select/Main";
import Input from "@/components/input/Main";
import T from "@/components/texts/Main";

import { SuccessToast, ErrorToast } from "@/lib/toast";

import { listLocations } from "@/utils/data";

import { useMainContext } from "@/context/Main";

import { postQuote } from "@/api/quote";

const Form = () => {
  const router = useRouter();

  const lang = localStorage.getItem("lang-avionica") || "en";

  const t = useTranslations("");
  const searchParams = useSearchParams();
  const step = Number(searchParams.get("step")) || 1;

  const { date, setDate, from, setFrom, to, setTo, passengers, otherFrom, setOtherFrom, toFrom, setToFrom } = useMainContext();

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState(lang === "es" ? "+52" : "+1");
  const [message, setMessage] = useState("");

  const handleChangeStep = (step) => {
    router.push(`?step=${step}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;
    if (!recaptchaKey || typeof grecaptcha === "undefined") {
      ErrorToast(t("message_quote_sent_error"));
      setLoading(false);
      return;
    }

    const token = await grecaptcha.execute(recaptchaKey, {
      action: "contact_form",
    });

    const obj = {
      captcha: token,
      lang,
      name: `${name.trim()} ${lastName.trim()}`,
      phone: `${company} ${phone.trim()}`,
      email: email.trim(),
      passengers: passengers,
      from: from === "OTHER" ? otherFrom : from,
      to: to === "OTHER" ? toFrom : to,
      date: date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      message: message.trim(),
    };

    const response = await postQuote(obj);

    if (response.status === 202 || response.status === 200) {
      SuccessToast(t("message_quote_sent_success"));

      setName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setCompany(lang === "es" ? "+52" : "+1");
      setMessage("");

      handleChangeStep(3);
    } else {
      ErrorToast(t("message_quote_sent_error"));
    }

    setLoading(false);
  };

  const handleChangeFirstStep = (e) => {
    e.preventDefault();
    handleChangeStep(2);
  };

  return (
    <Fragment>
      <section className="py-10">
        <Container>
          {step === 1 && (
            <form onSubmit={handleChangeFirstStep} className="ring-neutral-300 ring-2 rounded-lg px-5 py-5">
              <div className="flex gap-4 lg:gap-10 mt-4 flex-wrap md:flex-nowrap">
                <div className="w-full flex gap-2">
                  <Select label="label_from" value={from} onChange={(e) => setFrom(e.target.value)}>
                    {listLocations.map((item, index) => (
                      <option key={`from-${index}`}>{item}</option>
                    ))}
                    <option value="OTHER">
                      <T value="label_other" />
                    </option>
                  </Select>
                  {from === "OTHER" && (
                    <Input value={otherFrom} onChange={(e) => setOtherFrom(e.target.value)} placeholder="label_white_your_origin_here" required />
                  )}
                </div>
                <div className="w-full flex gap-2">
                  <Select label="label_to" value={to} onChange={(e) => setTo(e.target.value)}>
                    {listLocations.map((item, index) => (
                      <option key={`from-${index}`}>{item}</option>
                    ))}
                    <option value="OTHER">
                      <T value="label_other" />
                    </option>
                  </Select>
                  {to === "OTHER" && (
                    <Input value={toFrom} onChange={(e) => setToFrom(e.target.value)} placeholder="label_write_your_destiny_here" required />
                  )}
                </div>
              </div>

              <div className="flex gap-4 lg:gap-10 mt-4 flex-wrap md:flex-nowrap">
                <InputDate label="label_date" date={date} setDate={setDate} />
              </div>

              <div className="flex justify-end mt-4">
                <button type="submit" className="h-9 px-8 min-w-32 bg-c_golden text-white rounded-full cursor-pointer font-calibri-bold">
                  <T value="label_continue" />
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="ring-neutral-300 ring-2 rounded-lg p-5">
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

              <TextArea
                label="label_message"
                placeholder="label_write_message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />

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
                  {!loading && <T value="label_continue" />}
                  {loading && <Spinner />}
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="ring-neutral-300 ring-2 rounded-lg px-5 py-16">
              <p className="text-center text-3xl font-calibri-bold mt-5">
                <T value="label_quote_submitted" />
              </p>
              <div className="flex justify-center mt-4">
                <p className="max-w-md text-center font-calibri-regular text-lg">
                  <T value="label_message_quote_submitted" />
                </p>
              </div>

              <div className="flex justify-center mt-8">
                <Link href="/" className="h-9 px-8 min-w-32 bg-c_golden text-white rounded-full cursor-pointer uppercase flex items-center">
                  <p className="font-calibri-bold">
                    <T value="label_back_home" />
                  </p>
                </Link>
              </div>
            </div>
          )}
        </Container>
      </section>
      <div className="h-20 md:h-[650px] xl:h-72" />
    </Fragment>
  );
};

export default Form;
