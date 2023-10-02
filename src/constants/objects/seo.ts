export default {
  titleTemplate: '%s | 기억하고 싶은 모든 콘텐츠를 내 손안에',
  description: '기억하고 싶은 모든 콘텐츠를 내 손안에, HAVIT',
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://www.havit.app',
    title: 'HAVIT | 기억하고 싶은 모든 콘텐츠를 내 손안에',
    site_name: 'HAVIT',
    images: [
      {
        url: '/static/images/og-kakao.png',
        width: 800,
        height: 400,
        alt: 'og image for HAVIT',
      },
    ],
  },
  twitter: {
    handle: '@handle',
    site: 'havit.app',
    cardType: 'summary_large_image',
  },
};
