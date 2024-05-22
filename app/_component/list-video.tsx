import { VIDEO_MIME_TYPES } from "../_lib/constant/common";
import {
  ListMediaI,
  ListMediaItemI,
  MediaI,
  VideoI,
} from "../_lib/interface/video";
import ListVideoItem from "./list-video-item";

export default async function ListVideo() {
  const listMedias = (await fetch(`${process.env.VMS_API}/assets`, {
    next: { revalidate: 180 },
  }).then((response) => response.json())) as ListMediaI;

  console.log(`${process.env.VMS_API}/assets`);

  const listVideos: VideoI[] = [];
  if (listMedias?.Count > 0) {
    listMedias.Items.forEach((media: MediaI) => {
      if (VIDEO_MIME_TYPES.includes(media.Type)) listVideos.push(media);
    });
  }
  const foundedVideo = listVideos.length > 0;

  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-8 text-2xl">VMS DEMO - LISTED VIDEOS</h1>
      {!foundedVideo && <p>There are no video found.</p>}
      {foundedVideo && (
        <div className="grid grid-cols-3 gap-4">
          {listVideos.map((video: VideoI) => (
            <ListVideoItem video={video} />
          ))}
        </div>
      )}
    </div>
  );
}
