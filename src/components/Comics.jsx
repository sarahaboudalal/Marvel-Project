import React, { useEffect, useState } from 'react';
import MD5 from 'crypto-js/md5';
import Cards from './Cards';
import Loading from './Loading';

export default function Comics() {
  const [comics, setComics] = useState([]);
  let ts = Date.now().toString();
  const privateKey = process.env.REACT_APP_API_PRIV;
  const publicKey = process.env.REACT_APP_API_KEY;
  const hash = MD5(ts + privateKey + publicKey).toString();
  const base = process.env.REACT_APP_BASE_URL;
  const url = `${base}/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  const handleFetch = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setComics(data.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, [comics.length]);
  return (
    <div className="flex items-center justify-around">
      {comics.length > 0 ? (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center gap-6 py-10">
          {comics.map((comic) => {
            return (
              <Cards
                key={comic.id}
                thumbnail={
                  comic.thumbnail.path + '.' + comic.thumbnail.extension
                }
                name={comic.title}
              />
            );
          })}
        </div>
      ) : (
        <Loading/>
      )}
    </div>
  );
}
