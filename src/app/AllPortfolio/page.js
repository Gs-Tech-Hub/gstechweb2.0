import { PortfolioCard } from "../../AllFiles"
import { portfolioApi } from '@/lib/utils/api'

async function getAllPortfolioItems() {
  try {
    return await portfolioApi.getAll();
  } catch (error) {
    console.error('Failed to fetch portfolio items:', error);
    return [];
  }
}

export default async function AllPortfolios() {
  const portfolioItems = await getAllPortfolioItems();

  return (
    <div>
      <h1 className='font-bold text-[1.8rem] mt-[1rem] text-center mb-[3rem]'> Our Portfolio </h1>
      <PortfolioCard allcampaigns={portfolioItems} />
    </div>
  )
}