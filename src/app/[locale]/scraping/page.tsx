import { getTranslations } from 'next-intl/server';
import SolutionBanner from '@/components/solution/solution-banner';
import SolutionSense from '@/components/solution/solution-sense';
import FooterContact from '@/components/footer-contact';
import StartNow from '@/components/start-now';

import SolutionScrapingIntroduce from '@/components/solution/solution-scraping-introduce';
import SolutionScrapingUseful from '@/components/solution/solution-scraping-useful';

export async function generateMetadata() {
  const t = await getTranslations();

  return {
    title: t(`Metadata.solution.scraping.title`),
    description: t(`Metadata.solution.scraping.description`),
    keywords: t(`Metadata.solution.scraping.keywords`),
  };
}

export default async function Page() {
  return (
    <section>
      <SolutionBanner />

      <div className="h-[160px] liner-bg"></div>

      <SolutionScrapingIntroduce />

      <SolutionSense />

      <SolutionScrapingUseful />

      <FooterContact />
    </section>
  );
}
