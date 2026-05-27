import Image from "next/image";
import Link from "next/link";

import Container from "@/components/container/Main";
import T from "@/components/texts/Main";

import Version from "./Version";
import Contact from "./Contact";
import SocialMedia from "./SocialMedia";

const Main = () => {
  return (
    <footer className="py-10 bg-neutral-100 relative">
      <Container>
        <div className="grid grid-cols-12 gap-y-12">
          <div className="col-span-12 lg:col-span-5 lg:border-r-2 border-neutral-300 order-3 lg:order-1">
            <div className="w-full h-full flex flex-col items-center lg:justify-between gap-7">
              <Image alt="" src="/images/logo_saltamontes_color.svg" width={236} height={60} className="w-64" />

              <div>
                <p className="font-calibri-regular">
                  © 2026 <T value="label_all_rights" />
                </p>
                <div className="flex gap-10 mt-1 justify-center">
                  <Link href="/politicas-de-privacidad" className="font-calibri-bold">
                    <T value="label_privacy_policy" />
                  </Link>
                  <Link href="/terminos-y-condiciones" className="font-calibri-bold">
                    <T value="label_terms_service" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:border-r-2 px-10 border-neutral-300 flex flex-col items-center order-1 lg:order-2">
            <Contact />
          </div>

          <div className="col-span-12 lg:col-span-2 order-2 lg:order-3">
            <SocialMedia />
          </div>
        </div>
      </Container>
      <Version />
    </footer>
  );
};

export default Main;
