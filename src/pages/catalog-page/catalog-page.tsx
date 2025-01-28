import CatalogList from '../../components/catalog-list/catalog-list';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function CatalogPage(): JSX.Element {
  return (
    <>
      <Header />
      <h1 className="visually-hidden">Каталог товаров</h1>
      <div className="back-link">
        <div className="container">
          <Link className="back-link__link" to={AppRoute.Root}>
            Назад
            <svg
              className="back-link__icon"
              width={30}
              height={16}
              aria-hidden="true"
            >
              <use xlinkHref="#icon-arrow-left" />
            </svg>
          </Link>
        </div>
      </div>
      <CatalogFilter />
      <section className="catalog">
        <div className="container">
          <h2 className="visually-hidden">Каталог</h2>
          <div className="catalog__wrapper">
            <CatalogList />
            <div className="catalog__button-wrapper">
              <ShowMoreButton />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default CatalogPage;
