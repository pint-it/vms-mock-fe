"use client";

import { VideoI } from "../_lib/interface/video";

export default function Video({ video }: { video: VideoI }) {
  const hasTitle = video.Subtitles && video.Subtitles.length > 0;
  return (
    <>
      <h2 className="text-2xl">{video.Title}</h2>
      <div>
        <video
          controls
          className="py-2 w-full"
          poster="/video-default-thumbnail-539x303.jpg"
        >
          <source src={video.CloudFrontUrl} type={video.Type} />
          {hasTitle && video.Subtitles && 
            video.Subtitles.map((sub) => (
              <track
                key={sub.url}
                src={sub.url}
                kind="subtitles"
                srcLang={sub.language}
              />
            ))}
          Your browser does not support the video tag.
        </video>
        <p>{video?.MetaData?.metadata_view?.description}</p>
      </div>
    </>
  );
}
