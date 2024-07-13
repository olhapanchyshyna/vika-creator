import Image from "next/image";
import Link from "next/link";

export function MediaLinks() {
  return (
    <div className='flex w-[280px] justify-between'>
      <Link
        href="https://www.instagram.com/vika_creator7/"
        target="_blank"
        className="[transition:transform_0.3s_ease] hover:scale-125"
      >
        <Image
          src="/instagram.png"
          alt="instagram"
          className="h-[60px] w-[60px] "
          width={50}
          height={50}
        />
      </Link>
      <Link
        href="https://www.youtube.com/@vika_creator"
        target="_blank"
        className="[transition:transform_0.3s_ease] hover:scale-125"
      >
        <Image
          src="/youtube.png"
          alt="youtube"
          className="h-[60px] w-[60px] "
          width={50}
          height={50}
        />
      </Link>
      <Link
        href="https://t.me/vika_creator"
        target="_blank"
        className="[transition:transform_0.3s_ease] hover:scale-125"
      >
        <Image
          src="/telegram.png"
          alt="Telegram"
          className="h-[60px] w-[60px] "
          width={50}
          height={50}
        />
      </Link>
    </div>
  );
}