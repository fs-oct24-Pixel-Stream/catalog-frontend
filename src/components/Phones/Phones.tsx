export const Phones = () => {
  return (
    <section className="phones container is-fluid">
      <h1>Mobile phones</h1>

      <p className="phones__quantity">95 models</p>
      <form className="phone__filters phoneFilters">
        <div className="control">
          <label htmlFor="sort">Sort by</label>
          <div
            className="select"
            id="sort"
          >
            <select>
              <option>Newest</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        <div className="control">
          <label htmlFor="itemsOnPage">Items on page</label>
          <div
            className="select"
            id="itemsOnPage"
          >
            <select>
              <option>16</option>
              <option>32</option>
            </select>
          </div>
        </div>
      </form>
      <div className="phones__list">
        <div className="product"></div>
        <div className="product"></div>
        <div className="product"></div>
        <div className="product"></div>
        <div className="product"></div>
        <div className="product"></div>
        <div className="product"></div>
        <div className="product"></div>
        <div className="product"></div>
        <div className="product"></div>
        <div className="product"></div>
        <div className="product"></div>
        <div className="product"></div>
        <div className="product"></div>
        <div className="product"></div>
        <div className="product"></div>
      </div>
      <div className="phonesPagination">1 2 3 4 5 6 7 8</div>
    </section>
  );
};
