import { MEDIA_STATUS } from "../constant/common"

export interface ListMediaI {
    Count: number,
    Items: ListMediaItemI[]
} 

export interface ListMediaItemI {
    Status: MEDIA_STATUS,
    Title: string,
    Type: string,
    AssetID: string,
    MetaData: VideoMetaDataI,
    CloudFrontUrl: string,
}

export type MediaI = {
    Status: MEDIA_STATUS,
    Title: string,
    Type: string,
    AssetID: string,
    MetaData: VideoMetaDataI,
    CloudFrontUrl: string
}

export type VideoI = MediaI;

export interface VideoMetaDataI {
    metadata_view: { 
        title: string, 
        description?: string, 
    },
    main_file: {
      format_id: string,
      size: number,
      file_original_name: string,
      directory_path: string,
      file_name: string,
      file_id: string
    },
    version_id: string,
}

