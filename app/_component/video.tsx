export default function Video() {
  return (
    <>
      <h2 className="text-2xl">This is the title</h2>
      <div>
        <video width="100%" height="500" controls preload="none">
          <source src="/path/to/video.mp4" type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
        <p>2024 May 16</p>
        <p>Description of that video</p>
      </div>
    </>
  );
}
