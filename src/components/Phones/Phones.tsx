import './Phones.scss';

export const Phones = () => {
  return (
    <section className="phones _container">
      <div className="bread-crumbs">Заглушка</div>

      <h1 className="titleMain">Phones</h1>

      <p className="phones__quantity">95 models</p>
      <form className="phones__filters phoneFilters">
        {' '}
        {/*CUSTOM COMPONENT*/}
        <div className="field phones__control">
          <label
            className="phones__label"
            htmlFor="sort"
          >
            Sort by
          </label>
          <div className="control">
            <div
              className="select phones__select"
              id="sort"
            >
              <select>
                <option>Newest</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field phones__control">
          <label
            className="phones__label"
            htmlFor="sort"
          >
            Items on page
          </label>
          <div className="control">
            <div
              className="select "
              id="sort"
            >
              <select>
                <option>16</option>
                <option>32</option>
              </select>
            </div>
          </div>
        </div>
      </form>
      <div className="products">
        {' '}
        {/*CUSTOM COMPONENT*/}
        <div className="product">Заглушка</div> {/*CUSTOM COMPONENT*/}
        <div className="product">Заглушка</div>
        <div className="product">Заглушка</div>
        <div className="product">Заглушка</div>
        <div className="product">Заглушка</div>
        <div className="product">Заглушка</div>
        <div className="product">Заглушка</div>
        <div className="product">Заглушка</div>
        <div className="product">Заглушка</div>
        <div className="product">Заглушка</div>
        <div className="product">Заглушка</div>
        <div className="product">Заглушка</div>
        <div className="product">Заглушка</div>
        <div className="product">Заглушка</div>
        <div className="product">Заглушка</div>
        <div className="product">Заглушка</div>
      </div>
      <div className="phonesPagination">1 2 3 4 5 6 7 8</div>
    </section>
  );
};
