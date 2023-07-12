import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { fetchImages } from 'services/API';
import { useEffect, useState } from 'react';
import Button from './Button/Button';
import Loader from './Loader/Loader';


export const App = () => {
  const [search, setSearch] = useState('');
  const [list, setList] = useState(1);
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState("idel");
  const [totalHits, setTotalHits] = useState(0)

  const handleFormSubmit = search => {
    setSearch(search);
    setList(1);
  };
  

  const onLoadMore = () => {
    setList(prevState => prevState + 1);
  };

  useEffect(() => {
    if (search === '') {
      return;
    }

    setStatus('loading')

    fetchImages(search, list).then(response => {
      if(response.hits.length !== 0){
        if (list > 1) {
        setImages(prevState => [...prevState, ...response.hits]);
      } else {
        setImages(response.hits);
      }
      setStatus('resolve')
      setTotalHits(response.totalHits)
      }else{
        setStatus('rejected')
      }
      
      
    }).catch(err => setStatus('rejected'));
  }, [search,list]);

  return (
    <div>
      <Searchbar submitForm={handleFormSubmit} />
      {status === 'idel' && <div>What would you like to find?</div>}
      {status === 'loading' && <Loader />}
      {status === 'resolve' && (
        <>
          <ImageGallery images={images} />
          {images.length < totalHits && <Button onClick={onLoadMore} />}
        </>
      )}
      {status === 'rejected' && <div>Nothing has been found</div>}
    </div>
  );
};
