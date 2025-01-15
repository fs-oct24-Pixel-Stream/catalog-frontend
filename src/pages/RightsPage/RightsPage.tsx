import './RightsPage.scss';

export const RightsPage = () => {
  return (
    <div className="rights _container">
      <div className="rights__block">
        <section className="rights__section">
          <h1 className="title">Terms of Use</h1>
          <p>
            Welcome! By accessing or using our service, you agree to comply with the following terms
            and conditions. Please read them carefully before using the platform.
          </p>
        </section>
        <section className="rights__section">
          <h2 className="title">General Provisions</h2>
          <p>
            This service is owned and operated by NICE GADGETS. The platform is designed to provide
            high-quality digital solutions to users. By using the service, you agree that:
          </p>
          <ul>
            <li>
              You will not use the platform for unlawful purposes or to violate any local, state,
              national, or international law.
            </li>
            <li>
              We reserve the right to update, modify, or discontinue any part of the service at any
              time without prior notice.
            </li>
            <li>
              The content provided on this platform is for informational purposes only and may be
              subject to change.
            </li>
          </ul>
        </section>

        <section className="rights__section">
          <h2 className="title">User Rights and Responsibilities</h2>
          <p>
            As a user, you are entitled to access and use the platform within the scope of these
            terms. To ensure the safety and integrity of our service, you are required to:
          </p>
          <ul>
            <li>
              Provide accurate and up-to-date information during registration or account creation.
            </li>
            <li>
              Keep your login credentials secure and confidential. You are responsible for all
              activities performed under your account.
            </li>
            <li>
              Refrain from uploading or sharing content that is harmful, abusive, or infringes on
              the rights of others.
            </li>
          </ul>
          <p>
            Failure to adhere to these responsibilities may result in the suspension or termination
            of your account.
          </p>
        </section>

        <section className="rights__section">
          <h2 className="title">Privacy Policy</h2>
          <p>
            Your privacy is important to us. We are committed to protecting your personal
            information and ensuring transparency in how we use it. Key points include:
          </p>
          <ul>
            <li>
              Your data will be collected, stored, and processed in accordance with our Privacy
              Policy.
            </li>
            <li>
              We use cookies and similar technologies to enhance your experience. By using the
              platform, you consent to their use.
            </li>
            <li>
              You have the right to access, update, or delete your personal data at any time by
              contacting our support team.
            </li>
          </ul>
        </section>

        <section className="rights__section">
          <h2 className="title">Intellectual Property</h2>
          <p>
            All content, including text, images, and software, available on this platform is the
            property of NICE GADGETS or its licensors. Unauthorized use of any materials may result
            in legal action.
          </p>
          <ul>
            <li>
              Users are not permitted to copy, distribute, or create derivative works from the
              platform's content without explicit permission.
            </li>
            <li>
              Any feedback or suggestions submitted to us may be used for improvement without
              obligation or compensation.
            </li>
          </ul>
        </section>

        <section className="rights__section">
          <h2 className="title">Limitation of Liability</h2>
          <p>
            While we strive to provide a reliable and secure service, NICE GADGETS is not liable
            for:
          </p>
          <ul>
            <li>
              Direct or indirect damages resulting from the use or inability to use the platform.
            </li>
            <li>Loss of data or unauthorized access due to user negligence.</li>
            <li>Errors, delays, or interruptions in service caused by external factors.</li>
          </ul>
        </section>

        <section className="rights__section">
          <p>
            For questions or additional support, contact us at{' '}
            <a
              className="rights__section__link"
              href="mailto:ACME-Corporation@gmail.com"
            >
              ACME-Corporation@gmail.com
            </a>
            .
          </p>
          <p>Last updated: January 15, 2025</p>
        </section>
      </div>
    </div>
  );
};
