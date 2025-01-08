import { Title } from '../Title/Title';

export const Phones = () => {
  return (
    <section className="phones container">
      <Title>Mobile phones</Title>

      <p className="phones__quantity"></p>
      <form className="phone__filters phoneFilters">
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="e.g Alex Smith"
            />
          </div>
        </div>

        <div className="control">
          <div className="select">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </form>
      <div className="phones__list"></div>
      <div className="phones__pagination"></div>
    </section>
  );
};
