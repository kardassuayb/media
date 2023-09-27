import PhotosListItem from "./PhotosListItem";
import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";

const PhotosList = ({ album }) => {
  const { data, isFetching, error } = useFetchPhotosQuery(album);
  const [addPhoto, addPhotoResult] = useAddPhotoMutation();

  const handleAddPhoto = (album) => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = <Skeleton className="h-8 w-8" times={4} />;
  } else if (error) {
    content = <div>Error fetching photos..</div>;
  } else {
    content = data.map((photo) => {
      return <PhotosListItem key={photo.id} photo={photo} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Photos In {album.title}</h3>
        <Button
          primary
          rounded
          onClick={handleAddPhoto}
          loading={addPhotoResult.isLoading}
        >
          + Add Photo
        </Button>
      </div>
      <div className="flex flex-row flex-wrap justify-center mx-8">
        {content}
      </div>
    </div>
  );
};

export default PhotosList;
