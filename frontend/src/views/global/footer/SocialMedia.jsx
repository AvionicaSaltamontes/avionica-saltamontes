import Image from "next/image";
import Link from "next/link";
import T from "@/components/texts/Main";

const SocialMedia = () => {
  const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL || "#";
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#";
  const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL || "#";
  const messengerUrl = process.env.NEXT_PUBLIC_MESSENGER_URL || "#";


  return (
    <div className="flex flex-row md:flex-col justify-evenly">
      <div>
        <p className="text-xl font-calibri-bold text-center">
          <T value="label_contact_us" />
        </p>

        <div className="flex justify-center gap-3 mt-3">

          <Link href={messengerUrl} target="_blank">
            <Image alt="" src="/images/ic_messenger.svg" width={35} height={35} />
          </Link>

          <Link href={whatsappUrl} target="_blank">
            <Image alt="" src="/images/ic_wahstapp.svg" width={35} height={35} />
          </Link>
        </div>
      </div>

      <div>
        <p className="text-xl font-calibri-bold text-center md:mt-5">
          <T value="label_follow_us" />
        </p>

        <div className="flex justify-center gap-3 mt-3">

          <Link href={facebookUrl} target="_blank">
            <Image alt="" src="/images/ic_facebook.svg" width={35} height={35} />
          </Link>

          <Link href={instagramUrl} target="_blank">
            <Image alt="" src="/images/ic_instagram.svg" width={35} height={35} />
          </Link>

        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
