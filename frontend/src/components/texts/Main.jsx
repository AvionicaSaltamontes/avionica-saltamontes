"use client";
import { Fragment } from "react";
import { useTranslations } from "next-intl";

export default function T({ value = "" }) {
  const t = useTranslations("");

  return <Fragment>{t(value)}</Fragment>;
}
