import './ProductCard.scss';

export const ProductCard = () => {
  return (
    <div className="card">
      <a href="#">
        <img
          src="https://s3-alpha-sig.figma.com/img/4036/d779/98ea87fdcb4fe9b1d62dd9629b0b820f?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dW0Qq4841iTFau5uqnnAA8anxDFnDtFNxKGq92Uq9fGG5jTIO5TEVGYRN0rnS7B-qgUQVa44SikVlxvAs7d3wEGY7kaJqdbmC3fxWDww~nj4IDEis1AMBLdxh49jt~TncmMVVfioxN6IgQdC3E0j7L8mo4V8UBCyhjsmuG60QNIYRTtErWml4CVhLLNfOIQEluMfilexyX9BmS3QT48rso6j-EkWHgzY5z7Za6YYXPo0KPrNT7AcQ8wW6FTsIXq3TR6BHl-Xjy0WjGWeUPNaPFVZSDyh5Bti5ZNnAIKMIo5pBRyop78~e40vaGawtIY~aJ4ZJWwYiidxAos1038RNQ__"
          alt="Placeholder image"
          className="card__image"
        />
      </a>

      <div className="is-flex is-justify-content-space-between card__title">
        <a
          href="#"
          className="card__title__text"
        >
          Apple iPhone 14 Pro 128GB Silver (MQ023)
        </a>
      </div>

      <div className="is-flex card__price">
        <h2 className="card__price__value">$999</h2>
        <h2 className="card__price__value__discount">$999</h2>
      </div>

      <div className="card__line"></div>

      <div className="card__descriptions">
        <div className="is-flex is-justify-content-space-between">
          <h3 className="card__descriptions__text card__descriptions__mb">Screen</h3>
          <h3 className="card__descriptions__value">6.1” OLED</h3>
        </div>

        <div className="is-flex is-justify-content-space-between">
          <h3 className="card__descriptions__text card__descriptions__mb">Capacity</h3>
          <h3 className="card__descriptions__value">128 GB</h3>
        </div>

        <div className="is-flex is-justify-content-space-between">
          <h3 className="card__descriptions__text">RAM</h3>
          <h3 className="card__descriptions__value">6 GB</h3>
        </div>
      </div>

      <div className="is-flex is-justify-content-space-between card__buttons">
        <button className="button card__button__buy">Add to cart</button>
        <button className="button card__button__wishlist"></button>
      </div>
    </div>
  );
};
