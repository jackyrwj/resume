import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import qs from 'query-string';
import Header from '@/layout/header';
import Footer from '@/layout/footer';
import Content from '@/components';
import EN_US_LOCALE from '@/i18n/locales/en-US.json';
import { getLanguage, registerLocale, getLocale } from '@/i18n';
import { IntlProvider } from 'react-intl';
import './index.less';

registerLocale('en-US', EN_US_LOCALE);

const Page = () => {
  const [title, changeTitle] = useState('Resume Creator - 在线简历制作');
  useEffect(() => {
    const search = typeof window !== 'undefined' && window.location.search;
    const query = qs.parse(search);
    if (query.user) {
      changeTitle(`${query.user}'s resume - Resume Creator`);
    }
  }, []);

  const lang = getLanguage();
  return (
    <IntlProvider locale={lang} messages={getLocale(lang)}>
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content="免费在线简历制作工具，支持多种模板、自定义主题色、国际化(中/英)、实时预览和PDF下载。快速创建专业简历，无需编程基础。"
        />
        <meta
          name="keywords"
          content="简历制作,在线简历,简历生成器,简历模板,简历下载"
        />
        <meta property="og:title" content="Resume Creator - 在线简历制作" />
        <meta
          property="og:description"
          content="免费在线简历制作工具，支持多种模板、自定义主题色、国际化(中/英)、实时预览和PDF下载。"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7451090615788854"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      <Header />
      <Content />
      <Footer />
    </IntlProvider>
  );
};

export default Page;
