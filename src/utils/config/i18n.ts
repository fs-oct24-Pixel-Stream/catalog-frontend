import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      Search: 'Search...',
      thankYouForPurchase: 'Thank you for purchase!',
      completePurchase: 'Complete your purchase',
      None: 'None',
      Newest: 'Newest',
      Oldest: 'Oldest',
      PriceHigh: 'Price high',
      PriceLow: 'Price low',
      Select: 'Select...',
      welcome: 'Welcome to Nice Gadgets store!',
      goBackHome: 'Go back home',
      notFound: 'Page not found',
      home: 'home',
      phones: 'Phones',
      Phones: 'Phones',
      tablets: 'Tablets',
      Tablets: 'Tablets',
      accessories: 'Accessories',
      Accessories: 'Accessories',
      newModels: 'Brand new models',
      shopByCategory: 'Shop by category',
      hotPrices: 'Hot prices',
      mobile: 'Mobile Phones',
      models: 'models',
      model: 'model',
      aboutUs: 'About us',
      rights: 'Rights',
      toTop: 'Back to top',
      screen: 'Screen',
      Screen: 'Screen',
      Resolution: 'Resolution',
      Processor: 'Processor',
      RAM: 'RAM',
      capacity: 'capacity',
      size: 'size',
      Size: 'Size',
      ram: 'RAM',
      added: 'Added',
      addToCart: 'Add to cart',
      Alphabetically: 'Alphabetically',
      Cheapest: 'Cheapest',
      Sortby: 'Sort by',
      itemsOnPage: 'Items on page',
      All: 'All',
      favorites: 'Favorites',
      back: 'Back',
      cart: 'Cart',
      total: 'Total',
      totalFor: 'Total for',
      items: 'items',
      item: 'item',
      checkout: 'Checkout',
      empty: 'Your cart is empty',
      recommended: 'You may also like',
      colors: 'Available colors',
      select: 'Select',
      resolution: 'Resolution',
      processor: 'Processor',
      about: 'About',
      techSpecs: 'Tech specs',
      memory: 'Built in memory',
      camera: 'Camera',
      dual: 'Dual',
      triple: 'Triple',
      zoom: 'Zoom',
      cell: 'Cell',
      checkoutConfirm: 'Do you confirm the checkout?',
      product: 'Product',
      quantity: 'Quantity',
      price: 'Price',
      totalPrice: 'Total Price',
      confirm: 'Confirm',
      cancel: 'Cancel',
      noFavorites: 'Your list of favorite items is empty',
      emptyCart: 'Your cart is empty',
      notApplicable: 'Not applicable',
      creators: 'Creators',
      Creators: 'Creators',
      description: `Sorry, we can’t find the page you’re looking for. It may have been
      moved, renamed, or it’s possible the link was incorrect. Please check
      the URL or return to the homepage.`,
      rightsAndConditions: 'Rights and conditions',
      termsOfUse: 'Terms of use',
      searchEmpty: 'No products found matching your search.',
      Contacts: 'Contacts',
      Rights: 'Rights',
      SELECT: 'Select...',
      CHEAPEST: 'Cheapest',
      Expensive: 'Expensive',
      termsOfUseText:
        'Welcome! By accessing or using our service, you agree to comply with the following terms and conditions. Please read them carefully before using the platform.',
      GeneralProvisions: 'General Provisions',
      GeneralProvisionsText:
        'This service is owned and operated by NICE GADGETS. The platform is designed to provide high-quality digital solutions to users. By using the service, you agree that You will not use the platform for unlawful purposes or to violate any local, state, national, or international law.We reserve the right to update, modify, or discontinue any part of the service at any time without prior notice.The content provided on this platform is for informational purposes only and may be subject to change.',
      UserRightsAndResponsibilities: 'User Rights and Responsibilities',
      UserRightsAndResponsibilitiesText: `
        As a user, you are entitled to access and use the platform within the scope of these terms. To ensure the safety and integrity of our service, you are required to:
        - Provide accurate and up-to-date information during registration or account creation.
        - Keep your login credentials secure and confidential. You are responsible for all activities performed under your account.
        - Refrain from uploading or sharing content that is harmful, abusive, or infringes on the rights of others.
        Failure to adhere to these responsibilities may result in the suspension or termination of your account.
      `,
      PrivacyPolicy: 'Privacy Policy',
      PrivacyPolicyText: `
        Your privacy is important to us. We are committed to protecting your personal information and ensuring transparency in how we use it. Key points include:
        - Your data will be collected, stored, and processed in accordance with our Privacy Policy.
        - We use cookies and similar technologies to enhance your experience. By using the platform, you consent to their use.
        - You have the right to access, update, or delete your personal data at any time by contacting our support team.
      `,
      IntellectualProperty: 'Intellectual Property',
      IntellectualPropertyText: `
        All content, including text, images, and software, available on this platform is the property of NICE GADGETS or its licensors. Unauthorized use of any materials may result in legal action.
        - Users are not permitted to copy, distribute, or create derivative works from the platform's content without explicit permission.
        - Any feedback or suggestions submitted to us may be used for improvement without obligation or compensation.
      `,
      LimitationOfLiability: 'Limitation of Liability',
      LimitationOfLiabilityText: `
        While we strive to provide a reliable and secure service, NICE GADGETS is not liable for:
        - Direct or indirect damages resulting from the use or inability to use the platform.
        - Loss of data or unauthorized access due to user negligence.
        - Errors, delays, or interruptions in service caused by external factors.
      `,
      contactEmail: 'For questions or additional support, contact us at',
      lastUpdatedRights: 'Last updated:',
      SelectSize: 'Select size',
      SelectCapacity: 'Select capacity',
      BuiltInMemory: 'Built in memory',
      Camera: 'Camera',
      Zoom: 'Zoom',
      Cell: 'Cell',
    },
  },
  ua: {
    translation: {
      BuiltInMemory: 'Вбудована пам’ять',
      Camera: 'Камера',
      Zoom: 'Зум',
      Cell: 'Технології',
      Screen: 'Екран',
      Resolution: 'Роздільна здатність',
      Processor: 'Процесор',
      RAM: 'Оперативна пам’ять',
      SelectSize: 'Оберіть розмір',
      SelectCapacity: "Оберіть пам'ять",
      Rights: 'Права',
      Contacts: 'Контакти',
      searchEmpty: 'Немає товарів, що відповідають вашому запиту',
      Search: 'Пошук...',
      thankYouForPurchase: 'Дякуємо за купівлю!',
      completePurchase: 'Підтвердіть купівлю',
      None: 'Нічим',
      Oldest: 'Найстарішими',
      PriceHigh: 'Найвищою ціною',
      PriceLow: 'Найнижчою ціною',
      Select: 'Оберіть...',
      welcome: 'Ласкаво просимо до Nice Gadgets store!',
      goBackHome: 'На головну сторінку',
      notFound: 'Сторінку не знайдено',
      home: 'Головна',
      Home: 'Головна',
      phones: 'Телефони',
      Phones: 'Телефони',
      tablets: 'Планшети',
      Tablets: 'Планшети',
      accessories: 'Аксесуари',
      Accessories: 'Аксесуари',
      newModels: 'Нові моделі',
      shopByCategory: 'Вибрати за категорією',
      hotPrices: 'Гарячі ціни',
      mobile: 'Мобільні телефони',
      models: 'моделей',
      model: 'модель',
      aboutUs: 'Про нас',
      rights: 'Права',
      toTop: 'Наверх сторінки',
      screen: 'Екран',
      capacity: "пам'ять",
      Capacity: "Пам'ять",
      size: 'розмір',
      Size: 'Розмір',
      ram: "Оперативна пам'ять",
      added: 'Товар додано ',
      addToCart: 'Додати товар',
      Alphabetically: 'Алфавітом',
      Sortby: 'Сортувати за',
      itemsOnPage: 'Товарів на сторінці',
      All: 'Всі',
      favorites: 'Улюблені',
      back: 'Назад',
      cart: 'Кошик',
      total: 'Всього',
      totalFor: 'Всього за',
      items: 'товарів',
      item: 'товар',
      checkout: 'Розрахуватись',
      empty: 'Ваш кошик пустий',
      recommended: 'Рекомендуємо',
      colors: 'Наявні кольори',
      SELECT: 'Обрати...',
      Newest: 'Новіші',
      Cheapest: 'Найдешевші',
      Expensive: 'Найдорожчі',
      resolution: 'Роздільна здатність',
      processor: 'Процессор',
      about: 'Про модель',
      techSpecs: 'Технічні характеристики',
      memory: "Вбудована пам'ять",
      camera: 'Камера',
      dual: 'Подвійна',
      triple: 'Потрійна',
      zoom: 'Зум камери',
      cell: 'Технології',
      checkoutConfirm: 'Ви підтверджуєте покупку?',
      product: 'Товар',
      quantity: 'Кількість',
      price: 'Ціна',
      totalPrice: 'Загальна вартість',
      confirm: 'Підтвердити',
      cancel: 'Відмінити',
      noFavorites: 'Немає улюблених товарів',
      emptyCart: 'Ваш кошик порожній',
      notApplicable: 'Не передбачено',
      creators: 'Автори',
      Creators: 'Автори',
      description: `На жаль, ми не можемо знайти сторінку, яку ви шукаєте. 
      Можливо, її було переміщено, перейменовано або посилання було неправильним. 
      Будь ласка, перевірте URL-адресу або поверніться на головну сторінку.`,
      termsOfUse: 'Умови використання',
      termsOfUseText:
        'Ласкаво просимо! Отримавши доступ або використовуючи наш сервіс, ви погоджуєтеся дотримуватися наведених нижче умов. Будь ласка, уважно прочитайте їх перед використанням платформи.',
      GeneralProvisions: 'Загальні умови',
      GeneralProvisionsText:
        'Ця служба належить і управляється NICE GADGETS. Платформа створена для надання високоякісних цифрових рішень користувачам. Користуючись послугою, ви погоджуєтеся з тим, що: Ви не використовуватимете платформу в незаконних цілях або для порушення будь-яких місцевих, державних, національних або міжнародних законів. Ми залишаємо за собою право оновлювати, змінювати або припиняти будь-яку частину служби в будь-який час без попереднього повідомлення. Контент, наданий на цій платформі, призначений лише для інформаційних цілей і може бути змінений.',
      UserRightsAndResponsibilities: 'Права та обов’язки користувача',
      UserRightsAndResponsibilitiesText: `
        Як користувач, ви маєте право отримувати доступ до платформи та використовувати її в межах цих умов. Для забезпечення безпеки та цілісності нашого сервісу ви зобов’язані:
        - Надавати точну та актуальну інформацію під час реєстрації або створення облікового запису.
        - Зберігати свої облікові дані в безпеці та конфіденційності. Ви несете відповідальність за всі дії, виконані через ваш обліковий запис.
        - Утримуватися від завантаження або поширення контенту, який є шкідливим, образливим або порушує права інших осіб.
        Невиконання цих зобов’язань може призвести до призупинення або припинення дії вашого облікового запису.
      `,
      PrivacyPolicy: 'Політика конфіденційності',
      PrivacyPolicyText: `
        Ваша конфіденційність важлива для нас. Ми прагнемо захищати вашу особисту інформацію та забезпечувати прозорість у її використанні. Основні положення:
        - Ваші дані будуть зібрані, збережені та оброблені відповідно до нашої Політики конфіденційності.
        - Ми використовуємо файли cookie та подібні технології для покращення вашого досвіду. Використовуючи платформу, ви погоджуєтеся на їх використання.
        - Ви маєте право отримати доступ, оновити або видалити свої персональні дані в будь-який час, звернувшись до нашої служби підтримки.
      `,
      IntellectualProperty: 'Інтелектуальна власність',
      IntellectualPropertyText: `
        Весь контент, включаючи текст, зображення та програмне забезпечення, доступний на цій платформі, є власністю NICE GADGETS або її ліцензіарів. Несанкціоноване використання будь-яких матеріалів може призвести до судового переслідування.
        - Користувачам заборонено копіювати, поширювати або створювати похідні роботи на основі контенту платформи без явного дозволу.
        - Будь-які відгуки чи пропозиції, надані нам, можуть бути використані для покращення без зобов’язань або компенсації.
      `,
      LimitationOfLiability: 'Обмеження відповідальності',
      LimitationOfLiabilityText: `
        Хоча ми прагнемо забезпечити надійний і безпечний сервіс, NICE GADGETS не несе відповідальності за:
        - Прямі або непрямі збитки, що виникають у результаті використання або неможливості використання платформи.
        - Втрату даних або несанкціонований доступ через недбалість користувача.
        - Помилки, затримки або переривання в роботі сервісу, викликані зовнішніми факторами.
      `,
      contactEmail:
        'Якщо у вас виникли запитання чи додаткова підтримка, зв’яжіться з нами за адресою',
      lastUpdatedRights: 'Востаннє оновлено:',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
