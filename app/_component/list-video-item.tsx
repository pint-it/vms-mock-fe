'use client';

import Image from "next/image";
import Link from "next/link";
import { ListMediaItemI } from "../_lib/interface/video";

export default function ListVideoItem({ video }: { video: ListMediaItemI }) {
  return (
    <Link
      className="flex flex-col hover:opacity-80 max-w-[250px]"
      href={`/videos/${video.AssetID}`}
    >
      <Image
        src="/video-default-thumbnail-539x303.jpg"
        alt={video.Title}
        width={250}
        height={175}
      ></Image>
      <p className="text-ellipsis overflow-hidden ">{video.Title}</p>
    </Link>
  );
}
