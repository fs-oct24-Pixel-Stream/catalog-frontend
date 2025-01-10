import styles from './ProductCard.module.scss';

export const ProductCard = () => {
  return (
    <div className={`${styles.card}`}>
      <img
        src="https://s3-alpha-sig.figma.com/img/4036/d779/98ea87fdcb4fe9b1d62dd9629b0b820f?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dW0Qq4841iTFau5uqnnAA8anxDFnDtFNxKGq92Uq9fGG5jTIO5TEVGYRN0rnS7B-qgUQVa44SikVlxvAs7d3wEGY7kaJqdbmC3fxWDww~nj4IDEis1AMBLdxh49jt~TncmMVVfioxN6IgQdC3E0j7L8mo4V8UBCyhjsmuG60QNIYRTtErWml4CVhLLNfOIQEluMfilexyX9BmS3QT48rso6j-EkWHgzY5z7Za6YYXPo0KPrNT7AcQ8wW6FTsIXq3TR6BHl-Xjy0WjGWeUPNaPFVZSDyh5Bti5ZNnAIKMIo5pBRyop78~e40vaGawtIY~aJ4ZJWwYiidxAos1038RNQ__"
        alt="Placeholder image"
        className={styles.card_image}
      />

      <div className={`${styles.card_title} is-flex is-justify-content-space-between`}>
        <h2 className={`${styles.card_title_text}`}>Apple iPhone 14 Pro 128GB Silver (MQ023)</h2>
      </div>

      <div className={`${styles.card_price} is-flex`}>
        <h2 className={styles.card_price_value}>$999</h2>
        <h2 className={styles.card_price_value_discount}>$999</h2>
      </div>

      <div className={styles.card_line}></div>

      <div className={`${styles.card_descriptions}`}>
        <div className={`is-flex is-justify-content-space-between`}>
          <h3 className={`${styles.card_descriptions_text} ${styles.card_descriptions_mb}`}>
            Screen
          </h3>
          <h3 className={styles.card_descriptions_value}>6.1” OLED</h3>
        </div>

        <div className={`${styles._descriptions__mb} is-flex is-justify-content-space-between`}>
          <h3 className={`${styles.card_descriptions_text} ${styles.card_descriptions_mb}`}>
            Capacity
          </h3>
          <h3 className={styles.card_descriptions_value}>128 GB</h3>
        </div>

        <div className={`is-flex is-justify-content-space-between `}>
          <h3 className={styles.card_descriptions_text}>RAM</h3>
          <h3 className={styles.card_descriptions_value}>6 GB</h3>
        </div>
      </div>

      <div className={`${styles.card_buttons} is-flex is-justify-content-space-between `}>
        <button className={`${styles.card_button_buy} button`}>Add to cart</button>
        <button className={`${styles.card_button_wishlist} button`}></button>
      </div>
    </div>
  );
};
