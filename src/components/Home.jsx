import React, { useEffect, useState } from 'react';
import MD5 from 'crypto-js/md5';
import HeroCard from './HeroCard';

export default function Home() {
  const [heroes, setHeroes] = useState([]);
  let ts = Date.now().toString();
  const privateKey = process.env.REACT_APP_API_PRIV;
  const publicKey = process.env.REACT_APP_API_KEY;
  const hash = MD5(ts + privateKey + publicKey).toString();
  const base = process.env.REACT_APP_BASE_URL;
  const url = `${base}/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  const handleFetch = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setHeroes(data.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleFetch();
  }, [heroes.length]);
  return (
      <div>
          <p className='text-center font-bold text-4xl text-maroon py-3'>Welcome To Marvel's Universe!</p>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center gap-y-6 py-10">
        {heroes.length > 0
          ? heroes.map((hero) => {
              return (
                <HeroCard
                  key={hero.id}
                  thumbnail={
                    hero.thumbnail.path + '.' + hero.thumbnail.extension
                  }
                  name={hero.name}
                  description={hero.description}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}
