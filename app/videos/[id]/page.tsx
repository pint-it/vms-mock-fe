import Video from "@/app/_component/video";

export default async function VideoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const video = await fetch(`${process.env.VMS_API}/assets/${id}`, {
    cache: "no-store",
  }).then((response) => response.json());
  const foundedVideo = video ? true : false;

  return (
    <main className="flex min-h-screen flex-col">
      <h1 className="mb-8 text-2xl text-center">VMS DEMO - VIDEO</h1>
      {!foundedVideo && <p>Not found the video.</p>}
      {foundedVideo && <Video video={video} />}
    </main>
  );
}
