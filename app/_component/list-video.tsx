import ListVideoItem from "./list-video-item";

export default function ListVideo () {

    // get list videos from VMS API


    return (
        <div className="flex flex-col items-center">
        <h1 className="mb-8 text-2xl">VMS DEMO - LISTED VIDEOS</h1>
        <div className="grid grid-cols-3 gap-4">
            <ListVideoItem id="1" />
            <ListVideoItem id="1" />
            <ListVideoItem id="1" />
            <ListVideoItem id="1" />
            <ListVideoItem id="1" />
            <ListVideoItem id="1" />
            <ListVideoItem id="1" />
            <ListVideoItem id="1" />
            <ListVideoItem id="1" />
            <ListVideoItem id="1" />
            <ListVideoItem id="1" />
        </div>
        </div>
    );
}
