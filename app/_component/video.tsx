'use client';

import { VideoI } from '../_lib/interface/video';

export default function Video({video}: {video: VideoI}) {
  return (
    <>
      <h2 className="text-2xl">{video.Title}</h2>
      <div>
        <video controls preload="none" className='py-2 w-full'>
          <source src={video.CloudFrontUrl} type={video.Type} />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
        <p>{video.MetaData.metadata_view.description}</p>
      </div>
    </>
  );
}
