import { MultipleRouteEnum } from '@/enums/multipleRouteEnum';

export interface IMultipleListItem {
  routeKey: MultipleRouteEnum;
  iconURL: any;
  customIconClass?: string;
  title: string;
  subTitle: string;
  platforms?: {
    imgSrc: string;
    alt: string;
    textLocale?: string;
    linkHref?: string;
  }[];
  features?: {
    title: string;
    paragraphTitle1: string;
    paragraphIntroduce1: string;
    paragraphTitle2: string;
    paragraphTitle3: string;
    paragraphIntroduce3: string;
    paragraph4: {
      title: string;
      list: {
        title: string;
        subTitle: string;
      }[];
    };
  };
}

const accountList: IMultipleListItem[] = [
  {
    title: 'multiAccount.list.am',
    subTitle: 'multiAccount.list.amSubtitle',
    routeKey: MultipleRouteEnum.AFFILIATE_MARKETING,
    iconURL: '/menus/affiliate-marketing.svg',
    platforms: [
      {
        imgSrc: '/assets/icons/platforms/GoogleADS.svg',
        alt: 'Google Ads',
        linkHref: 'https://ads.google.com/',
        textLocale: 'Google Ads',
      },
      {
        imgSrc: '/assets/icons/platforms/Instagram.svg',
        alt: 'Instagram',
        linkHref: 'https://www.instagram.com/',
        textLocale: 'Instagram',
      },
      {
        imgSrc: '/assets/icons/platforms/TikTokADS.svg',
        alt: 'TikTok Ads',
        linkHref: 'https://www.tiktok.com/',
        textLocale: 'TikTok Ads',
      },
      {
        imgSrc: '/assets/icons/platforms/YoutubeADS.svg',
        alt: 'YouTube Ads',
        linkHref: 'https://www.youtube.com/ads/',
        textLocale: 'YouTube Ads',
      },
      {
        imgSrc: '/assets/icons/platforms/MetaBusinessSuite.svg',
        alt: 'Meta Business Suite',
        linkHref: 'https://business.facebook.com/',
        textLocale: 'Meta Business Suite',
      },
    ],
    features: {
      title: 'multiAccount.features.am.title',
      paragraphTitle1: 'multiAccount.features.am.paragraphTitle1',
      paragraphIntroduce1: 'multiAccount.features.am.paragraphIntroduce1',
      paragraphTitle2: 'multiAccount.features.am.paragraphTitle2',
      paragraphTitle3: 'multiAccount.features.am.paragraphTitle3',
      paragraphIntroduce3: 'multiAccount.features.am.paragraphIntroduce3',
      paragraph4: {
        title: 'multiAccount.features.am.paragraph4.title',
        list: [
          {
            title: 'multiAccount.features.am.paragraph4.listTitle1',
            subTitle: 'multiAccount.features.am.paragraph4.listSubTitle1',
          },
          {
            title: 'multiAccount.features.am.paragraph4.listTitle2',
            subTitle: 'multiAccount.features.am.paragraph4.listSubTitle2',
          },
          {
            title: 'multiAccount.features.am.paragraph4.listTitle3',
            subTitle: 'multiAccount.features.am.paragraph4.listSubTitle3',
          },
          {
            title: 'multiAccount.features.am.paragraph4.listTitle4',
            subTitle: 'multiAccount.features.am.paragraph4.listSubTitle4',
          },
          {
            title: 'multiAccount.features.am.paragraph4.listTitle5',
            subTitle: 'multiAccount.features.am.paragraph4.listSubTitle5',
          },
        ],
      },
    },
  },
  {
    title: 'multiAccount.list.ec',
    subTitle: 'multiAccount.list.ecSubtitle',
    routeKey: MultipleRouteEnum.E_COMMERCE,
    iconURL: '/menus/e-commerce.svg',
    platforms: [
      {
        imgSrc: '/assets/icons/platforms/Amazon.svg',
        alt: 'Amazon',
        linkHref: 'https://www.amazon.com/',
        textLocale: 'Amazon',
      },
      {
        imgSrc: '/assets/icons/platforms/Shopify.svg',
        alt: 'Shopify',
        linkHref: 'https://www.shopify.com/',
        textLocale: 'Shopify',
      },
      {
        imgSrc: '/assets/icons/platforms/eBay.svg',
        alt: 'eBay',
        linkHref: 'https://www.ebay.com/',
        textLocale: 'eBay',
      },
      {
        imgSrc: '/assets/icons/platforms/AliExpress.svg',
        alt: 'AliExpress',
        linkHref: 'https://www.aliexpress.com/',
        textLocale: 'AliExpress',
      },
      {
        imgSrc: '/assets/icons/platforms/TEMU.svg',
        alt: 'TEMU',
        linkHref: 'https://www.temu.com/',
        textLocale: 'TEMU',
      },
    ],
    features: {
      title: 'multiAccount.features.ec.title',
      paragraphTitle1: 'multiAccount.features.ec.paragraphTitle1',
      paragraphIntroduce1: 'multiAccount.features.ec.paragraphIntroduce1',
      paragraphTitle2: 'multiAccount.features.ec.paragraphTitle2',
      paragraphTitle3: 'multiAccount.features.ec.paragraphTitle3',
      paragraphIntroduce3: 'multiAccount.features.ec.paragraphIntroduce3',
      paragraph4: {
        title: 'multiAccount.features.ec.paragraph4.title',
        list: [
          {
            title: 'multiAccount.features.ec.paragraph4.listTitle1',
            subTitle: 'multiAccount.features.ec.paragraph4.listSubTitle1',
          },
          {
            title: 'multiAccount.features.ec.paragraph4.listTitle2',
            subTitle: 'multiAccount.features.ec.paragraph4.listSubTitle2',
          },
          {
            title: 'multiAccount.features.ec.paragraph4.listTitle3',
            subTitle: 'multiAccount.features.ec.paragraph4.listSubTitle3',
          },
          {
            title: 'multiAccount.features.ec.paragraph4.listTitle4',
            subTitle: 'multiAccount.features.ec.paragraph4.listSubTitle4',
          },
          {
            title: 'multiAccount.features.ec.paragraph4.listTitle5',
            subTitle: 'multiAccount.features.ec.paragraph4.listSubTitle5',
          },
        ],
      },
    },
  },
  {
    title: 'multiAccount.list.ba',
    subTitle: 'multiAccount.list.baSubtitle',
    routeKey: MultipleRouteEnum.BOUNTY_AIRDROP,
    iconURL: '/menus/bounty-airdrop.svg',
    platforms: [
      {
        imgSrc: '/assets/icons/platforms/Bounty0x.svg',
        alt: 'Bounty0x',
        linkHref: 'https://bounty0x.io/',
        textLocale: 'Bounty0x',
      },
      {
        imgSrc: '/assets/icons/platforms/AirdropAlert.svg',
        alt: 'Airdrop Alert',
        linkHref: 'https://airdropalert.com/',
        textLocale: 'Airdrop Alert',
      },
      {
        imgSrc: '/assets/icons/platforms/AirdropKing.svg',
        alt: 'Airdrop King',
        linkHref: 'https://airdropking.io/',
        textLocale: 'Airdrop King',
      },
      {
        imgSrc: '/assets/icons/platforms/Binance.svg',
        alt: 'Binance',
        linkHref: ' https://www.binance.com',
        textLocale: 'Binance',
      },
      {
        imgSrc: '/assets/icons/platforms/MetaMask.svg',
        alt: 'MetaMask',
        linkHref: 'https://metamask.io/',
        textLocale: 'MetaMask',
      },
    ],
    features: {
      title: 'multiAccount.features.ba.title',
      paragraphTitle1: 'multiAccount.features.ba.paragraphTitle1',
      paragraphIntroduce1: 'multiAccount.features.ba.paragraphIntroduce1',
      paragraphTitle2: 'multiAccount.features.ba.paragraphTitle2',
      paragraphTitle3: 'multiAccount.features.ba.paragraphTitle3',
      paragraphIntroduce3: 'multiAccount.features.ba.paragraphIntroduce3',
      paragraph4: {
        title: 'multiAccount.features.ba.paragraph4.title',
        list: [
          {
            title: 'multiAccount.features.ba.paragraph4.listTitle1',
            subTitle: 'multiAccount.features.ba.paragraph4.listSubTitle1',
          },
          {
            title: 'multiAccount.features.ba.paragraph4.listTitle2',
            subTitle: 'multiAccount.features.ba.paragraph4.listSubTitle2',
          },
          {
            title: 'multiAccount.features.ba.paragraph4.listTitle3',
            subTitle: 'multiAccount.features.ba.paragraph4.listSubTitle3',
          },
          {
            title: 'multiAccount.features.ba.paragraph4.listTitle4',
            subTitle: 'multiAccount.features.ba.paragraph4.listSubTitle4',
          },
          {
            title: 'multiAccount.features.ba.paragraph4.listTitle5',
            subTitle: 'multiAccount.features.ba.paragraph4.listSubTitle5',
          },
        ],
      },
    },
  },
  {
    title: 'multiAccount.list.ticketing',
    subTitle: 'multiAccount.list.ticketingSubtitle',
    routeKey: MultipleRouteEnum.WEB_SCRAPING,
    iconURL: '/menus/web-scraping.svg',
    platforms: [
      {
        imgSrc: '/assets/icons/platforms/web-scraping.png',
        alt: 'webScraper',
        linkHref: 'https://webscraper.io',
        textLocale: 'webScraper',
      },
    ],
    features: {
      title: 'multiAccount.features.tk.title',
      paragraphTitle1: 'multiAccount.features.tk.paragraphTitle1',
      paragraphIntroduce1: 'multiAccount.features.tk.paragraphIntroduce1',
      paragraphTitle2: 'multiAccount.features.tk.paragraphTitle2',
      paragraphTitle3: 'multiAccount.features.tk.paragraphTitle3',
      paragraphIntroduce3: 'multiAccount.features.tk.paragraphIntroduce3',
      paragraph4: {
        title: 'multiAccount.features.tk.paragraph4.title',
        list: [
          {
            title: 'multiAccount.features.tk.paragraph4.listTitle1',
            subTitle: 'multiAccount.features.tk.paragraph4.listSubTitle1',
          },
          {
            title: 'multiAccount.features.tk.paragraph4.listTitle2',
            subTitle: 'multiAccount.features.tk.paragraph4.listSubTitle2',
          },
          {
            title: 'multiAccount.features.tk.paragraph4.listTitle3',
            subTitle: 'multiAccount.features.tk.paragraph4.listSubTitle3',
          },
          {
            title: 'multiAccount.features.tk.paragraph4.listTitle4',
            subTitle: 'multiAccount.features.tk.paragraph4.listSubTitle4',
          },
          {
            title: 'multiAccount.features.tk.paragraph4.listTitle5',
            subTitle: 'multiAccount.features.tk.paragraph4.listSubTitle5',
          },
          {
            title: 'multiAccount.features.tk.paragraph4.listTitle6',
            subTitle: 'multiAccount.features.tk.paragraph4.listSubTitle6',
          },
        ],
      },
    },
  },
  {
    title: 'multiAccount.list.bab',
    subTitle: 'multiAccount.list.babSubtitle',
    routeKey: MultipleRouteEnum.MARKET_RESEARCH,
    iconURL: '/menus/market-research.svg',
    customIconClass: '!h-5',
    platforms: [
      {
        imgSrc: '/assets/icons/platforms/similar-web.png',
        alt: 'SimilarWeb',
        linkHref: 'https://www.similarweb.com/zh/',
        textLocale: 'SimilarWeb',
      },
    ],
    features: {
      title: 'multiAccount.features.bab.title',
      paragraphTitle1: 'multiAccount.features.bab.paragraphTitle1',
      paragraphIntroduce1: 'multiAccount.features.bab.paragraphIntroduce1',
      paragraphTitle2: 'multiAccount.features.bab.paragraphTitle2',
      paragraphTitle3: 'multiAccount.features.bab.paragraphTitle3',
      paragraphIntroduce3: 'multiAccount.features.bab.paragraphIntroduce3',
      paragraph4: {
        title: 'multiAccount.features.bab.paragraph4.title',
        list: [
          {
            title: 'multiAccount.features.bab.paragraph4.listTitle1',
            subTitle: 'multiAccount.features.bab.paragraph4.listSubTitle1',
          },
          {
            title: 'multiAccount.features.bab.paragraph4.listTitle2',
            subTitle: 'multiAccount.features.bab.paragraph4.listSubTitle2',
          },
          {
            title: 'multiAccount.features.bab.paragraph4.listTitle3',
            subTitle: 'multiAccount.features.bab.paragraph4.listSubTitle3',
          },
          {
            title: 'multiAccount.features.bab.paragraph4.listTitle4',
            subTitle: 'multiAccount.features.bab.paragraph4.listSubTitle4',
          },
        ],
      },
    },
  },
  {
    title: 'multiAccount.list.paa',
    subTitle: 'multiAccount.list.paaSubtitle',
    routeKey: MultipleRouteEnum.PRIVACY_ANONYMITY,
    iconURL: '/menus/privacy-anonymity.svg',
    platforms: [
      {
        imgSrc: '/assets/icons/platforms/Shield.svg',
        alt: 'Shield',
        textLocale: 'Shield',
      },
    ],
    features: {
      title: 'multiAccount.features.paa.title',
      paragraphTitle1: 'multiAccount.features.paa.paragraphTitle1',
      paragraphIntroduce1: 'multiAccount.features.paa.paragraphIntroduce1',
      paragraphTitle2: 'multiAccount.features.paa.paragraphTitle2',
      paragraphTitle3: 'multiAccount.features.paa.paragraphTitle3',
      paragraphIntroduce3: 'multiAccount.features.paa.paragraphIntroduce3',
      paragraph4: {
        title: 'multiAccount.features.paa.paragraph4.title',
        list: [
          {
            title: 'multiAccount.features.paa.paragraph4.listTitle1',
            subTitle: 'multiAccount.features.paa.paragraph4.listSubTitle1',
          },
          {
            title: 'multiAccount.features.paa.paragraph4.listTitle2',
            subTitle: 'multiAccount.features.paa.paragraph4.listSubTitle2',
          },
          {
            title: 'multiAccount.features.paa.paragraph4.listTitle3',
            subTitle: 'multiAccount.features.paa.paragraph4.listSubTitle3',
          },
        ],
      },
    },
  },
  {
    title: 'multiAccount.list.da',
    subTitle: 'multiAccount.list.daSubtitle',
    routeKey: MultipleRouteEnum.DIGITAL_AGENCIES,
    iconURL: '/menus/digital-agencies.svg',
    platforms: [
      {
        imgSrc: '/assets/icons/platforms/Chip.svg',
        alt: 'Chip',
        textLocale: 'Chip',
      },
    ],
    features: {
      title: 'multiAccount.features.da.title',
      paragraphTitle1: 'multiAccount.features.da.paragraphTitle1',
      paragraphIntroduce1: 'multiAccount.features.da.paragraphIntroduce1',
      paragraphTitle2: 'multiAccount.features.da.paragraphTitle2',
      paragraphTitle3: 'multiAccount.features.da.paragraphTitle3',
      paragraphIntroduce3: 'multiAccount.features.da.paragraphIntroduce3',
      paragraph4: {
        title: 'multiAccount.features.da.paragraph4.title',
        list: [
          {
            title: 'multiAccount.features.da.paragraph4.listTitle1',
            subTitle: 'multiAccount.features.da.paragraph4.listSubTitle1',
          },
          {
            title: 'multiAccount.features.da.paragraph4.listTitle2',
            subTitle: 'multiAccount.features.da.paragraph4.listSubTitle2',
          },
          {
            title: 'multiAccount.features.da.paragraph4.listTitle3',
            subTitle: 'multiAccount.features.da.paragraph4.listSubTitle3',
          },
          {
            title: 'multiAccount.features.da.paragraph4.listTitle4',
            subTitle: 'multiAccount.features.da.paragraph4.listSubTitle4',
          },
          {
            title: 'multiAccount.features.da.paragraph4.listTitle5',
            subTitle: 'multiAccount.features.da.paragraph4.listSubTitle5',
          },
        ],
      },
    },
  },
];

export { accountList };
