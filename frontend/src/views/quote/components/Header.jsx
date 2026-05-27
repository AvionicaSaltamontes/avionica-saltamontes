"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

import Container from "@/components/container/Main";
import T from "@/components/texts/Main";

import { cn } from "@/lib/cn";

const Item = ({ active = false, title = "", src1 = "", src2 = "" }) => {
  return (
    <div className="relative">
      {!active && <Image alt="" src={src1} width={60} height={60} className="w-10 md:w-16" />}
      {active && <Image alt="" src={src2} width={60} height={60} className="w-10 md:w-16" />}
      <div className="absolute -bottom-12 md:-bottom-8 left-1/2 -translate-x-1/2 min-w-36 md:min-w-44 text-xs md:text-base">
        <p className="font-calibri-regular text-nowrap text-center text-sm leading-4">
          <T value={title} />
        </p>
      </div>
    </div>
  );
};

const Divider = ({ active = false }) => {
  return <div className={cn("border-b-2 w-20 md:w-40 border-slate-200", active && "border-c_dark_blue/70")} />;
};

const Header = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const step = Number(searchParams.get("step")) || 1;

  const handleChangeStep = (step) => {
    router.push(`?step=${step}`);
  };

  return (
    <section className="pt-10 pb-12 md:pb-10 mt-14 overflow-hidden">
      <Container>
        <div className="flex gap-3 md:gap-7 items-center justify-center">
          <button type="button" onClick={() => handleChangeStep(1)} className="cursor-pointer">
            <Item active={step >= 1} src1="/images/ic_flight_details_w.svg" src2="/images/ic_flight_details.svg" title="label_flight_details" />
          </button>
          <Divider active={step >= 1} />
          <button type="button" onClick={() => handleChangeStep(2)} className="cursor-pointer">
            <Item
              active={step >= 2}
              src1="/images/ic_contact_information_w.svg"
              src2="/images/ic_contact_information.svg"
              title="label_contact_information"
            />
          </button>
          <Divider active={step >= 2} />
          <Item active={step >= 3} src1="/images/ic_submit_w.svg" src2="/images/ic_submit.svg" title="label_submit" />
        </div>
      </Container>
    </section>
  );
};

export default Header;
