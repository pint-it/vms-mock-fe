"use client";

import Image from "next/image";
import Link from "next/link";
import { ListMediaItemI } from "../_lib/interface/video";

export default function ListVideoItem({ video }: { video: ListMediaItemI }) {
  return (
    <Link
      className="flex flex-col md:max-w-[250px]"
      href={`/videos/${video.AssetID}`}
    >
      <img
        src="/video-default-thumbnail-539x303.jpg"
        alt={video.Title}
        width="100%"
        // height={175}
        className="hover:scale-105 transition duration-[400ms] border border-teal-700 rounded-lg"
      ></img>
      <p className="text-ellipsis overflow-hidden pt-3 font-medium hover:text-yellow-200">
        {video.Title}
      </p>
    </Link>
  );
}
