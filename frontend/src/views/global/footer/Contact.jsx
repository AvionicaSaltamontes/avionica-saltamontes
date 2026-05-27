import Image from "next/image";
import Link from "next/link";
import T from "@/components/texts/Main";

const Contact = () => {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@example.com";
  const contactPhoneLabel = process.env.NEXT_PUBLIC_CONTACT_PHONE_LABEL || "+00 (000) 000 0000";
  const contactPhoneTel = process.env.NEXT_PUBLIC_CONTACT_PHONE_TEL || "+000000000000";

  return (
    <div>
      <p className="text-xl font-calibri-bold">
        <T value="label_contact" />
      </p>

      <p className="text-3xl font-calibri-bold text-c_golden mt-3 md:mt-5">
        <T value="label_aldo_leyva" />
      </p>
      <p className="text-xl font-calibri-bold">
        <T value="label_operations_manager" />
      </p>

      <div className="mt-5 flex gap-3 items-center">
        <Image alt="" src="/images/ic_email.svg" width={40} height={40} className="w-9" />
        <a href={`mailto:${contactEmail}`} className="font-calibri-regular">
          {contactEmail}
        </a>
      </div>

      <a href={`tel:${contactPhoneTel}`} className="mt-5 flex gap-3 items-center max-w-max">
        <Image alt="" src="/images/ic_phone.svg" width={40} height={40} className="w-9" />
        <p className="font-calibri-regular">{contactPhoneLabel}</p>
      </a>
    </div>
  );
};

export default Contact;
