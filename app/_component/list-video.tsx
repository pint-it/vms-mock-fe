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
    cache: "no-store",
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
      <h1 className="mb-10 text-2xl">VMS DEMO - LISTED VIDEOS</h1>
      {!foundedVideo && <p>There are no video found.</p>}
      {foundedVideo && (
        <div className="grid grid-cols-3 gap-8 width-full">
          {listVideos.map((video: VideoI) => (
            <ListVideoItem key={video.AssetID} video={video} />
          ))}
        </div>
      )}
    </div>
  );
}
