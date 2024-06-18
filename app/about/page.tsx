export default function About() {
  return (
    <div>
      <h1 className='text-2xl'>About the mock FE</h1>
      <h2 className='text-xl mt-4 mb-1'>Why we are here?</h2>
      <p>
        We are here to see a mock consumer FE works with VMS delivery API. <br/>This
        website looks simple but it demonstrates VMS delivery API works fine.
        <br/>The data is being showed here is fetched from VMS delivery API.
      </p>
      <h2 className='text-xl mt-4 mb-1'>Data flow</h2>
      <ol>
        <li>
          1. Editors upload videos to Iconik, then change the title, description,
          upload subtitle (*.vtt file).
        </li>
        <li>
          2. Iconik send the webhooks to VMS delivery API, VMS process and sync
          data from Iconik to API database.
        </li>
        <li>
          3. Consumer FE calls to VMS delivery API to get list videos, get videos
          detail with metadata, subtitle, cdn links and shows for users
        </li>
      </ol>
      <h2 className='text-xl mt-4 mb-1'>Detail of APIs</h2>
      <p>
        There are 2 APIs of VMS are called from FE. The data is showed as 2 pages in the mock FE:
      </p>
      <p>List asset API: return the list of assets was uploaded to Iconik, total count, some basic information like: title</p>
      <p>Detail asset API: return detail of an asset, contains video cdn link, subtitle cdn links (if has), metadata fields contain: title + description</p>
    </div>
  );
}
