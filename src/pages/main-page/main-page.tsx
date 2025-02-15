import LastReview from '../../components/last-review/last-review';
import MainCardList from '../../components/main-card-list/main-card-list';
import { useAppSelector } from '../../hooks';
import { getIsLastReview, getLastReview } from '../../store/site-data/selectors';
import MapAddressesSection from '../../components/map-addresses-section/map-addresses-section';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function MainPage(): JSX.Element {
  const isLastReview = useAppSelector(getIsLastReview);
  const lastReview = useAppSelector(getLastReview);

  return (
    <>
      <Header />
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
              <Link className="btn" to={AppRoute.Catalog}>
                Скорее смотреть
              </Link>
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
      {(!isLastReview && lastReview !== null) ? <LastReview {...lastReview} /> : ''}
      <MapAddressesSection />
      <Footer />
    </>
  );
}

export default MainPage;
