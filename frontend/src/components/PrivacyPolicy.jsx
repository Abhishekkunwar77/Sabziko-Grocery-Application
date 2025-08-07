import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container max-w-8xl mx-auto p-6">
      <h1 className="flex items-center justify-center text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>

      <nav className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Table of Contents
        </h2>
        <ul className="list-disc list-inside text-primary-dull ">
          <li>
            <a className='text-primary' href="#introduction">Introduction</a>
          </li>
          <li>
            <a className='text-primary' href="#collection">Information We Collect</a>
          </li>
          <li>
            <a className='text-primary' href="#use">How We Use Your Information</a>
          </li>
          <li>
            <a className='text-primary' href="#cookies">Cookies and Tracking Technologies</a>
          </li>
          <li>
            <a className='text-primary' href="#sharing">Sharing Your Information</a>
          </li>
          <li>
            <a className='text-primary' href="#third-party-links">Links to Third-Party Sites</a>
          </li>
          <li>
            <a className='text-primary' href="#security">Security Measures</a>
          </li>
          <li>
            <a className='text-primary' href="#opt-out">Your Choices and Opt-Out</a>
          </li>
          <li>
            <a className='text-primary' href="#children">Children’s Information</a>
          </li>
          <li>
            <a className='text-primary' href="#data-deletion">Data Deletion and Retention</a>
          </li>
          <li>
            <a className='text-primary' href="#rights">Your Rights</a>
          </li>
          <li>
            <a className='text-primary' href="#consent">Consent</a>
          </li>
          <li>
            <a className='text-primary' href="#changes">Changes to This Privacy Policy</a>
          </li>
          <li>
            <a className='text-primary' href="#grievance">Grievance Officer</a>
          </li>
          <li>
            <a className='text-primary' href="#queries">Queries</a>
          </li>
        </ul>
      </nav>

      <section id="introduction" className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Introduction
        </h2>
        <p className="text-gray-600">
          At Sabziko, we value your trust and are committed to protecting your
          privacy. This Privacy Policy explains how Sabziko Technologies Private
          Limited and its affiliates ("Sabziko," "we," "our," or "us") collect,
          use, share, and protect your personal data through our website{" "}
          <a
            href="https://www.sabziko.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.sabziko.com
          </a>{" "}
          and our mobile application (collectively, the "Platform"). Our
          services are currently available only in India, and your data is
          primarily stored and processed in India. By using our Platform or
          services, you agree to this Privacy Policy, our Terms of Use, and
          applicable laws, including India’s data protection regulations. If you
          do not agree, please do not use our Platform.
        </p>
      </section>

      <section id="collection" className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Information We Collect
        </h2>
        <p className="text-gray-600">
          We collect personal data when you interact with our Platform, use our
          grocery delivery services, or engage with us. This includes:
          <ul className="list-disc list-inside mt-2">
            <li>
              <strong>Identity and Contact Information:</strong> Name, date of
              birth, delivery address, phone number, email address, and any
              identity or address proof you provide during sign-up or usage.
            </li>
            <li>
              <strong>Sensitive Data (with Consent):</strong> Payment details
              (e.g., bank account, credit/debit card, UPI IDs) and location data
              to facilitate deliveries and enhance your experience, in
              compliance with applicable laws.
            </li>
            <li>
              <strong>Usage Data:</strong> Grocery preferences, shopping
              behavior, order history, device location, browsing history, and
              other data you provide.
            </li>
          </ul>
        </p>
        <p className="text-gray-600 mt-4">
          Our goal is to provide a seamless, personalized grocery delivery
          experience. You may browse parts of our Platform anonymously, but
          providing personal data makes you identifiable. Required fields are
          marked, and optional fields can be skipped, though this may limit
          access to certain features.
        </p>
        <p className="text-gray-600 mt-4">
          If you join our loyalty program or third-party programs via Sabziko,
          we collect data like name, contact details, delivery address, date of
          birth, gender, zip code, and shopping preferences. We also track
          transaction history on our Platform and partner platforms. Third-party
          privacy policies apply when they collect data directly, and we
          recommend reviewing them.
        </p>
      </section>

      <section id="use" className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          How We Use Your Information
        </h2>
        <p className="text-gray-600">
          We use your data to:
          <ul className="list-disc list-inside mt-2">
            <li>
              Process and deliver grocery orders, coordinate with suppliers, and
              manage payments.
            </li>
            <li>
              Personalize your experience with tailored recommendations and
              offers (with opt-out options for marketing).
            </li>
            <li>
              Improve our Platform, resolve disputes, troubleshoot issues,
              ensure secure transactions, and prevent fraud.
            </li>
            <li>
              Conduct surveys, analytics, and measure interest in our services.
            </li>
          </ul>
        </p>
        <p className="text-gray-600 mt-4">
          With your permission, we may access SMS, contacts, location, or device
          data to send order updates, offer personalized deals, or improve
          delivery. Denying permission may limit some features. We analyze
          shopping and behavioral data to enhance our Platform and tailor
          content to your preferences.
        </p>
      </section>

      <section id="cookies" className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Cookies and Tracking Technologies
        </h2>
        <p className="text-gray-600">
          We use cookies and similar technologies to analyze user behavior,
          measure promotional effectiveness, and enhance trust. Cookies are
          small files stored on your device that enable features like
          remembering login details and personalizing content. Most are
          session-based and deleted after your visit. You can decline cookies
          via browser settings, but this may affect functionality. We use
          third-party cookies, like Google Analytics, to understand usage
          patterns. Learn more about Google’s practices{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            here
          </a>{" "}
          or opt out{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            here
          </a>
          .
        </p>
      </section>

      <section id="sharing" className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Sharing Your Information
        </h2>
        <p className="text-gray-600">
          We may share your data with:
          <ul className="list-disc list-inside mt-2">
            <li>
              Sabziko’s corporate group, affiliates, and trusted partners (e.g.,
              suppliers, delivery partners, payment processors, loyalty program
              providers) to fulfill orders, process payments, or offer
              personalized services.
            </li>
            <li>
              Government agencies or law enforcement when required by law, to
              enforce agreements, or prevent fraud.
            </li>
          </ul>
          Partners may contact you unless you opt out. We share only necessary
          data and comply with legal obligations.
        </p>
      </section>

      <section id="third-party-links" className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Links to Third-Party Sites
        </h2>
        <p className="text-gray-600">
          Our Platform may link to third-party websites (e.g., supplier sites,
          payment gateways). Sabziko is not responsible for their privacy
          practices or content. We recommend reviewing their policies before
          sharing data.
        </p>
      </section>

      <section id="security" className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Security Measures
        </h2>
        <p className="text-gray-600">
          We use industry-standard security measures, aligned with ISO/IEC
          27001:2013, to protect your data from unauthorized access, loss, or
          misuse. Our secure servers and regular system updates minimize risks,
          but no internet transmission is fully secure. By using our Platform,
          you accept these risks and are responsible for protecting your login
          credentials.
        </p>
      </section>

      <section id="opt-out" className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Your Choices and Opt-Out
        </h2>
        <p className="text-gray-600">
          You can opt out of non-essential communications, like promotional
          offers, via your account settings. To unsubscribe, use the link in our
          emails or contact our support team at{" "}
          <a
            href="mailto:support@sabziko.com"
            className="text-blue-600 hover:underline"
          >
            support@sabziko.com
          </a>
          .
        </p>
      </section>

      <section id="children" className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Children’s Information
        </h2>
        <p className="text-gray-600">
          Our Platform is for users who can form legally binding contracts under
          the Indian Contract Act, 1872. We do not knowingly collect data from
          children under 18. If such data is shared, you confirm your authority
          to provide it.
        </p>
      </section>

      <section id="data-deletion" className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Data Deletion and Retention
        </h2>
        <p className="text-gray-600">
          You can delete your account via the Profile and Settings section of
          our app, removing all associated data, including order history and
          preferences. Alternatively, contact us at{" "}
          <a
            hrefmailto="mailto:support@sabziko.com"
            className="text-blue-600 hover:underline"
          >
            support@sabziko.com
          </a>{" "}
          to request deletion. We may delay deletion for pending orders or
          disputes, per applicable laws. Data is retained only as needed for
          service delivery, legal compliance, or fraud prevention, and
          anonymized for analytics thereafter.
        </p>
      </section>

      <section id="rights" className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Your Rights
        </h2>
        <p className="text-gray-600">
          You can access, rectify, or update your data via Platform settings. To
          withdraw prior consent, email{" "}
          <a
            href="mailto:support@sabziko.com"
            className="text-blue-600 hover:underline"
          >
            support@sabziko.com
          </a>{" "}
          with “Withdrawal of Consent” in the subject line. Withdrawal is not
          retroactive and may limit service access.
        </p>
      </section>

      <section id="consent" className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Consent</h2>
        <p className="text-gray-600">
          By using our Platform or providing data, you consent to its
          collection, use, storage, and processing as described. If you share
          others’ data, you confirm your authority. You permit Sabziko, its
          affiliates, and partners to contact you via SMS, calls, or email for
          specified purposes. To withdraw consent, email{" "}
          <a
            href="mailto:support@sabziko.com"
            className="text-blue-600 hover:underline"
          >
            support@sabziko.com
          </a>{" "}
          with “Withdrawal of Consent for Processing Personal Data” in the
          subject line. This may restrict services.
        </p>
      </section>

      <section id="changes" className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Changes to This Privacy Policy
        </h2>
        <p className="text-gray-600">
          We may update this Privacy Policy to reflect changes in our practices.
          Check periodically for updates. Significant changes will be notified
          via email or Platform notices, as required by law.
        </p>
      </section>

      <section id="grievance" className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Grievance Officer
        </h2>
        <p className="text-gray-600">
          <strong>Mr. Abhishek Kunwar</strong>
          <br />
          <strong>Designation:</strong> Chief Executive Officer
          <br />
          <strong>Sabziko Pvt Ltd</strong>,<br />
          Outer Ring Road, Bengaluru, Karnataka - 560103, India
          <br />
          <strong>Contact:</strong>{" "}
          <a
            href="mailto:support@sabziko.com"
            className="text-blue-600 hover:underline"
          >
            support@sabziko.com
          </a>
          <br />
          <strong>Phone:</strong> +91-4582569875
        </p>
      </section>

      <section id="queries" className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Queries</h2>
        <p className="text-gray-600">
          For concerns about data collection or usage, contact us at{" "}
          <a
            href="mailto:support@sabziko.com"
            className="text-blue-600 hover:underline"
          >
            support@sabziko.com
          </a>
          .
        </p>
      </section>

      <footer className="text-gray-500 text-sm">
        <p>
          <em>Last updated: July 11, 2025</em>
        </p>
        <p>
          <em>Version: 1.1</em>
        </p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
