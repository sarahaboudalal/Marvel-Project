import React, { useEffect, useState } from 'react';
import MD5 from 'crypto-js/md5';
import Cards from './Cards';
import Loading from './Loading';

export default function Series() {
  const [series, setSeries] = useState([]);
  let ts = Date.now().toString();
  const privateKey = process.env.REACT_APP_API_PRIV;
  const publicKey = process.env.REACT_APP_API_KEY;
  const hash = MD5(ts + privateKey + publicKey).toString();
  const base = process.env.REACT_APP_BASE_URL;
  const url = `${base}/v1/public/series?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  const handleFetch = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setSeries(data.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, [series.length]);
  return (
    <div className="flex items-center justify-around">
      {series.length > 0 ? (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center gap-6 py-10">
          {series.map((serie) => {
            return (
              <Cards
                key={serie.id}
                thumbnail={
                  serie.thumbnail.path + '.' + serie.thumbnail.extension
                }
                name={serie.title}
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
