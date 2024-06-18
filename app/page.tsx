import Image from "next/image";
import ListVideo from "./_component/list-video";

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      <ListVideo />
    </main>
  );
}
