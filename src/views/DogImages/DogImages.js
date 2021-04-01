import React from "react";
import { useParams } from "react-router-dom";
/* service */
import { getImages } from "../../services/infoDog.service";
/* components */
import Suspense from "../../components/Suspense/Suspense";
import ImageList from "../../components/ImageList/ImageList";
import Button from "../../components/Button/Button";

function DogImages() {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [images, setImages] = React.useState([]);

  const { breed } = useParams();

  const getDogsImages = React.useCallback(async () => {
    try {
      const {
        data: { message: dogImages }
      } = await getImages(breed);

      setImages(dogImages);
      setLoading(false);
    } catch (e) {
      setError(true);
    }
  }, [breed, setImages]);

  React.useEffect(() => getDogsImages(), [getDogsImages]);

  return (
    <Suspense
      error={error}
      loading={loading}
      errorFallback={<p>An error ocurred, refresh the page</p>}
      loadingFallback={<p>Loading images...</p>}
    >
      <>
        <Button path="/" />
        <ImageList images={images} breed={breed} />
      </>
    </Suspense>
  );
}

export default DogImages;
