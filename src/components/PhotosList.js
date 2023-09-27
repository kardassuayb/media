import PhotosListItem from "./PhotosListItem";
import { useFetchPhotosQuery } from "../store";

const PhotosList = ({ album }) => {
  useFetchPhotosQuery(album);

  return (
    <div>
      <PhotosListItem />
    </div>
  );
};

export default PhotosList;
