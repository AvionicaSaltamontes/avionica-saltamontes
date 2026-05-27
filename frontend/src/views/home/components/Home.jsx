"use client";
import { Fragment, useState } from "react";
import Image from "next/image";

import Container from "@/components/container/Main";
import Modal from "@/components/modal/Main";
import T from "@/components/texts/Main";

import FormQuote from "./FormQuote";
import { Form } from "./FormQuote";

import { cn } from "@/lib/cn";
import { useMainContext } from "@/context/Main";

import useElementOnScreen from "@/hooks/useElementOnScreen";

const Background = () => {
  const { backgroundLoaded, setBackgroundLoaded } = useMainContext();

  return (
    <div className="overflow-hidden h-[145lvh] [@media(min-width:376px)]:h-[110lvh] [@media(min-width:768px)]:h-screen">
      <div className="relative h-full ">
        <div className={cn("bg-transparent w-full h-full relative z-10 transition-all duration-2000 delay-100", backgroundLoaded && "bg-black/20")} />
        <Image
          alt=""
          src="/images/img_background.webp"
          width={1670}
          height={900}
          onLoad={() => setBackgroundLoaded(true)}
          className={cn(
            "w-full h-full absolute left-0 top-0 object-cover scale-110 z-0 transition-all duration-2000 delay-100 object-[82%_50%] xl:object-[50%_50%] hidden md:block",
            backgroundLoaded && "scale-100",
          )}
          priority
        />

        <Image
          alt=""
          src="/images/background_mobile.webp"
          width={1809}
          height={3933}
          onLoad={() => setBackgroundLoaded(true)}
          className={cn(
            "w-full h-full absolute left-0 top-0 scale-110 z-0 transition-all duration-2000 delay-100 object-cover object-[50%_0%] md:hidden",
            backgroundLoaded && "scale-100",
          )}
          priority
        />
      </div>
    </div>
  );
};

const Home = () => {
  const { backgroundLoaded } = useMainContext();
  const [open, setOpen] = useState(false);

  const [ref, isIntersecting] = useElementOnScreen({
    threshold: 0.1,
  });

  return (
    <Fragment>
      <Modal open={open} setOpen={setOpen}>
        <Form />
      </Modal>

      <div className="relative">
        <Background />

        <div className="absolute lg:hidden top-[13%] left-0 z-30">
          <h1 className="text-4xl font-calibri-bold text-center text-white">
            <T value="label_fly" />
          </h1>
          <h3 className="text-center text-xl font-calibri-bold text-white mt-4">
            <T value="label_experience_wonder" />
          </h3>
        </div>

        <div ref={ref} className="absolute lg:hidden top-[55%] md:top-8/12 left-1/2 -translate-x-1/2 -translate-y-1/12 w-full z-30">
          <Container>
            <div className="w-full bg-white rounded ring-2 ring-slate-100 flex-col justify-center p-3">
              <Form />
            </div>
          </Container>
        </div>
      </div>

      {!isIntersecting && backgroundLoaded && (
        <div
          onClick={() => setOpen(true)}
          className="w-full h-10 bg-c_golden fixed z-30 top-[68px] py-4 text-white justify-center items-center cursor-pointer flex lg:hidden"
        >
          <p className="font-calibri-bold">
            <T value="label_get_quote" />
          </p>
        </div>
      )}

      <FormQuote />
    </Fragment>
  );
};

export default Home;
