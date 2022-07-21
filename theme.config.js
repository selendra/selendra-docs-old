import { useRouter } from "next/router";

const Logo = ({ height }) => {
  return (
    <img
      src="/images/selendra-logo.svg"
      alt=""
      style={{ height: "40px !important" }}
    />
  );
};

// This section need to be fixed
// When translate to Chinese the footer 
const Vercel = ({ height = 20 }) => (
  <svg height={height} viewBox="0 0 283 64" fill="none">
    <path
      fill="currentColor"
      d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
    />
  </svg>
);

const TITLE_WITH_TRANSLATIONS = {
  "en-US": "Multichain Interoperable nPoS Network",
  "zh-CN": "多链互操作 nPoS 网络",
  "km-KH": "បណ្តាញ nPoS ដែលអាចធ្វើអន្តរកម្មបានច្រើនខ្សែ",
};

const FEEDBACK_LINK_WITH_TRANSLATIONS = {
  "en-US": "Question? Give us feedback →",
  "zh-CN": "有疑问？给我们反馈 →",
  "km-KH": "សំណួរ? ផ្តល់ឱ្យយើងនូវមតិកែលម្អ →"
};

export default {
  projectLink: "https://github.com/selendra/selendra",
  docsRepositoryBase: "https://github.com/selendra/selendradocs/blob/master/pages",
  titleSuffix: " – Selendra",
  search: true,
  unstable_flexsearch: true,
  floatTOC: true,
  feedbackLink: () => {
    const { locale } = useRouter();
    return (
      FEEDBACK_LINK_WITH_TRANSLATIONS[locale] ||
      FEEDBACK_LINK_WITH_TRANSLATIONS["en-US"]
    );
  },
  feedbackLabels: "feedback",
  logo: () => {
    const { locale } = useRouter();
    return (
      <>
        <Logo />
      </>
    );
  },
  head: ({ title, meta }) => {
    const { route } = useRouter();

    const ogImage =
      meta.image ||
      `https://selendradocs.vercel.app${
        /\/index\.+/.test(route) ? "" : "?title=" + encodeURIComponent(title)
      }`;

    return (
      <>
        {/* Favicons, meta */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={
            meta.description ||
            "Selendra is a multichain interoperatable nPoS for running Blockchain Applications."
          }
        />
        <meta
          name="og:description"
          content={
            meta.description ||
            "Selendra is a multichain interoperatable nPoS for running Blockchain Applications."
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:image" content={ogImage} />
        <meta
          name="og:title"
          content={
            title ? title + " – Selendra" : "Selendra: Multichain Interoperable nPoS Network"
          }
        />
        <meta name="og:image" content={ogImage} />
        <meta name="apple-mobile-web-app-title" content="SWR" />
      </>
    );
  },
  footerEditLink: ({ locale }) => {
    switch (locale) {
      case "km-KH":
        return "កែសម្រួលទំព័រនេះនៅលើ GitHub →";
      case "zh-CN":
        return "在 GitHub 上编辑本页 →";
      default:
        return "Edit this page on GitHub →";
    }
  },
  footerText: ({ locale }) => {
    switch (locale) {
      case "km-KH":
        return (
          <center>
            <a
              href="https://www.selendra.com/"
              target="_blank"
              rel="noopener"
              className="no-underline text-current"
            >
              <span className="mr-1">ផលិតជាមួយ &#x2764; @Selendra.org</span>
            </a>
          </center>
        );
      case "zh-CN":
        return (
          <center>
            <a
              href="https://www.selendra.com/"
              target="_blank"
              rel="noopener"
              className="no-underline text-current"
            >
              <span className="mr-1">用 &#x2764; @Selendra.org</span>
            </a>
          </center>
        );

      default:
        return (
          <center>
            <a
              href="https://www.selendra.com/"
              target="_blank"
              rel="noopener"
              className="no-underline text-current"
            >
              <span className="mr-1">Made with &#x2764; @Selendra.org</span>
            </a>
          </center>
        );
    }
  },
  i18n: [
    { locale: "en-US", text: "English" },
    // { locale: "km-KH", text: "ភាសាខ្មែរ" },
    // { locale: "zh-CN", text: "简体中文" }
  ],
};
