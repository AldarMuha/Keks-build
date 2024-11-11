import { useState } from 'react';
import LastReview from '../../components/last-review/last-review';
import MainCardList from '../../components/main-card-list/main-card-list';
import { addresses } from '../../const';
import { useAppSelector } from '../../hooks';
import { getIsLastReview, getLastReview } from '../../store/site-data/selectors';
import MapAddress from '../../components/map-address/map-address';
import Map from '../../components/map/map';

function MainPage(): JSX.Element {
  const isLastReview = useAppSelector(getIsLastReview);
  const lastReview = useAppSelector(getLastReview);

  //const addressChecked = input[type="radio"][name="user-agreement"]:checked;
  const [addressName, setAddressName] = useState<string>(addresses[0].name);
  const changeAddressHandler = (activeAddress: string) => {
    setAddressName(activeAddress);
  };
  const address = addresses.find((addressItem) => addressItem.name === addressName);
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero__img-wrapper">
            <img
              className="hero__img"
              src="img/svg/hero-keks.svg"
              width={727}
              height={569}
              alt="Картика кота."
            />
          </div>
          <div className="hero__wrapper">
            <p className="hero__subtitle">Твоя пушистая кондитерская</p>
            <p className="hero__title">КЕКС</p>
            <div className="hero__button-wrapper">
              <a className="btn" href="catalog-page.html">
                Скорее смотреть
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="random-main">
        <div className="container">
          <h2 className="random-main__title">кексы</h2>
          <MainCardList />
        </div>
      </section>
      {!isLastReview ? <LastReview {...lastReview} /> : ''}
      <section className="map">
        <div className="container">
          <h2 className="map__title">адреса</h2>
          {(address !== undefined) ? <Map address={address} /> : ''}
          <ul className="map__addresses">
            {
              addresses.map((addressItem) => (<MapAddress key={addressItem.id} {...addressItem} isActive={addressName === addressItem.name} onClick={changeAddressHandler} />))
            }
          </ul>
        </div>
      </section>
    </>

  );
}

export default MainPage;
