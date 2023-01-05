import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchHero } from './heroSlice';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import MD5 from 'crypto-js/md5';
import Cards from '../../components/Cards';
// import Cards from '../../components/Cards';

let ts = Date.now().toString();
const privateKey = process.env.REACT_APP_API_PRIV;
const publicKey = process.env.REACT_APP_API_KEY;
const hash = MD5(ts + privateKey + publicKey).toString();
const base = process.env.REACT_APP_BASE_URL;

export default function HeroPage() {
  //   const dispatch = useDispatch()
  //   const {hero} = useSelector((state) => state.hero)
  const [details, setDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchHeroDetails = (id) => {
      const url = `${base}/v1/public/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
      fetch(url)
        .then((data) => data.json())
        .then((result) => {
          const zift = result.data.results;
          setDetails(zift);
        });
    };
    fetchHeroDetails(id);
    console.log(details);
  }, [id, details.length]);

  // useEffect(() => {
  //     const ziftLiYzaftko = async () => {
  //         await dispatch(fetchHero(id));
  //     }
  //     ziftLiYzaftko()
  //       console.log(hero)
  //   },[])

  return details.length > 0 ? (
    <div>
      {details.map((hero) => {
        return (
          <div>
            <img
              alt={hero.name}
              src={hero.thumbnail.path + '.' + hero.thumbnail.extension}
            />
            <p>Name: {hero.name}</p>
            {hero.description !== '' && <p>Description: {hero.description}</p>}
            <ul>
              <p className="font-semibold">Stories</p>
              {hero.stories.items.map((story, i) => {
                if (i < 3) {
                  return (
                    <li>
                      <p>{story.name}</p>
                    </li>
                  );
                }
              })}
            </ul>
            <ul>
              <p>Series</p>
              {hero.series.items.map((serie, i) => {
                if (i < 3) {
                  return (
                    <li>
                      <p>{serie.name}</p>
                    </li>
                  );
                }
              })}
            </ul>
            <ul>
              <p>Comics</p>
              {hero.comics.items.map((comic, i) => {
                if (i < 3) {
                  return (
                    <li>
                      <p>{comic.name}</p>
                    </li>
                  );
                }
              })}
            </ul>
            <ul>
              <p>Events</p>
              {hero.events.items.map((event, i) => {
                if (i < 3) {
                  return (
                    <li>
                      <p>{event.name}</p>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        );
      })}
    </div>
  ) : (
    <Loading />
  );

  //   return (
  //     <div>
  //       <p>okayyy</p>
  //     </div>
  //   );
}
