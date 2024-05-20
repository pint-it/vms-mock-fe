import Video from "@/app/_component/video";

export default function VideoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1 className="mb-8 text-2xl text-center">VMS DEMO - VIDEO</h1>
      <Video />
    </main>
  );
}
