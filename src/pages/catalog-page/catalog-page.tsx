import CatalogList from '../../components/catalog-list/catalog-list';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import ShowMoreButton from '../../components/show-more-button/show-more-button';

function CatalogPage(): JSX.Element {
  return (
    <>
      <Header />
      <h1 className="visually-hidden">Каталог товаров</h1>
      <div className="back-link">
        <div className="container">
          <a className="back-link__link" href="#">
            Назад
            <svg
              className="back-link__icon"
              width={30}
              height={16}
              aria-hidden="true"
            >
              <use xlinkHref="#icon-arrow-left" />
            </svg>
          </a>
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
