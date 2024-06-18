export default function About() {
  return (
    <div>
      <h1 className="text-2xl mb-8">About</h1>
      <p>
        This demo site showcases how the VMS Delivery API is consumed by a
        website. Although the website appears simple, it effectively
        demonstrates the functionality of the VMS Delivery API. All the data
        displayed here is fetched from the VMS Delivery API
      </p>
      <h2 className="text-xl mt-6 mb-2">How it works</h2>
      <p>
        <span className="font-medium italic">1. Upload and Edit:</span> Editors upload
        videos to Iconik, then modify the title, description, and upload
        subtitles (*.vtt files).
      </p>
      <p>
        <span className="font-medium italic">2. Data Processing:</span> Iconik sends
        webhooks to the VMS Delivery API, which processes and synchronizes data
        from Iconik to the API database.
      </p>
      <p>
        <span className="font-medium italic">3. Frontend Interaction:</span> The
        consumer frontend calls the VMS Delivery API to retrieve a list of
        videos, video details, metadata, subtitles, and CDN links, which are
        then displayed to users.
      </p>
      <h2 className="text-xl mt-6 mb-2">Detail of APIs</h2>
      <p>
        <span className="font-medium italic">1. List Asset API:</span> Returns a list
        of assets uploaded to Iconik, including the total count and basic
        information such as titles.
      </p>
      <p>
        <span className="font-medium italic">2. Detail Asset API:</span> Returns
        detailed information about a specific asset, including video CDN links,
        subtitle CDN links (if available), and metadata fields like title and
        description.
      </p>
    </div>
  );
}
