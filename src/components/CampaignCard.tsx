import { Button } from "@/components/ui/button";

interface CampaignCardProps {
  isApplied?: boolean;
}

const CampaignCard = ({ isApplied = false }: CampaignCardProps) => {
  return (
    <div className="bg-gradient-to-br from-[#8B5A8C] to-[#6B4C93] rounded-lg p-6 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-xl group">
      <div className="bg-white text-black px-4 py-2 rounded text-sm font-medium mb-4 inline-block">
        SWISS BEAUTY
      </div>
      
      <p className="text-sm mb-6 opacity-90 group-hover:opacity-100 transition-opacity">
        Native integrations provide seamless segmentation...
      </p>
      
      <Button 
        className="w-fit px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-white text-black hover:bg-gray-100 hover:shadow-lg"
      >
        Apply
      </Button>
    </div>
  );
};

export default CampaignCard;