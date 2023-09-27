import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import AlbumsListItem from "./AlbumsListItem";

const AlbumsList = ({ user }) => {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();
  // console.log(results);

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isFetching) {
    content = <Skeleton times={3} className="h-12 w-full" />;
  } else if (error) {
    content = <div> Error Loading Albums..</div>;
  } else {
    content = data.map((album) => {
      return <AlbumsListItem key={album.id} album={album} />;
    });
  }

  return (
    <div>
      <div className="flex flex-row items-center justify-between m-2">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
        <Button
          loading={results.isLoading}
          primary
          rounded
          onClick={handleAddAlbum}
        >
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default AlbumsList;
