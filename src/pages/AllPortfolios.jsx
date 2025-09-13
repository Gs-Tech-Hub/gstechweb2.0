import { PortfolioCard } from "../AllFiles"
import { allcampaigns } from '../data/blogdB'

const AllPortfolios = () => {
    return (
        <div>
            <h1 className='font-bold text-[1.8rem] mt-[1rem] text-center mb-[3rem]'> Our Portfolio </h1>
            <PortfolioCard allcampaigns={allcampaigns} />
        </div>
    )
}

export default AllPortfolios