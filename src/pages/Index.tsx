import Header from "@/components/Header";
import CampaignCard from "@/components/CampaignCard";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1a1f3d]">
      <Header />
      
      {/* Main Content */}
      <main className="bg-gradient-to-br from-[#E8D5E8] via-[#F0E6F0] to-[#DCC9DC] py-12 px-6">
        <div className="container mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              ONGOING <span className="bg-gray-800 text-white px-2 py-1 rounded">CAMPAIGNS</span>
            </h1>
          </div>

          {/* Campaign Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <CampaignCard />
            <CampaignCard />
            <CampaignCard />
            <CampaignCard />
            <CampaignCard />
            <CampaignCard />
            <CampaignCard />
            <CampaignCard />
          </div>
        </div>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
