import Image from "next/image";
import Link from "next/link";

export default function ListVideoItem({id} : {id: string}) {
  return (
    <Link className="flex flex-col hover:opacity-80" href={`/videos/${id}`}>
      <Image
        src="https://random.imagecdn.app/500/350"
        alt="Video thumbnail"
        width={250}
        height={175}
      ></Image>
      <p>A video from VMS</p>
    </Link>
  );
}
