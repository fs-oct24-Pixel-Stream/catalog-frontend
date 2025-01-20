import { useTranslation } from 'react-i18next';
import './RightsPage.scss';

export const RightsPage = () => {
  const { t } = useTranslation();
  return (
    <div className="rights _container">
      <div className="rights__block">
        <section className="rights__section">
          <h1 className="title">{t('termsOfUse')}</h1>
          <p>{t('termsOfUseText')}</p>
        </section>
        <section className="rights__section">
          <h2 className="title">{t('GeneralProvisions')}</h2>
          <p>{t('GeneralProvisionsText')}</p>
        </section>

        <section className="rights__section">
          <h2 className="title">{t('UserRightsAndResponsibilities')}</h2>
          <p>{t('UserRightsAndResponsibilitiesText')}</p>
        </section>

        <section className="rights__section">
          <h2 className="title">{t('PrivacyPolicy')}</h2>
          <p>{t('PrivacyPolicyText')}</p>
        </section>

        <section className="rights__section">
          <h2 className="title">{t('IntellectualProperty')}</h2>
          <p>{t('IntellectualPropertyText')}</p>
        </section>

        <section className="rights__section">
          <h2 className="title">{t('LimitationOfLiability')}</h2>
          <p>{t('LimitationOfLiabilityText')}</p>
        </section>

        <section className="rights__section">
          <p>
            {t('contactEmail')}
            <a
              className="rights__section__link"
              href="mailto:ACME-Corporation@gmail.com"
            >
              Roga-i-copyta@gmail.com
            </a>
            .
          </p>
          <p>{t('lastUpdatedRights')} January 15, 2025</p>
        </section>
      </div>
    </div>
  );
};
