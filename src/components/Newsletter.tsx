import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 py-20 px-6">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-5xl font-bold mb-6">
          Subscribe to<br />
          Our Plans
        </h2>
        
        <p className="text-lg mb-8 opacity-90 max-w-md mx-auto">
          Get weekly update about our product on your email, no spam guaranteed we promise 😊
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 transition-all"
          />
          <Button 
            onClick={handleSubscribe}
            className="bg-white text-purple-700 hover:bg-gray-100 transition-all duration-300 hover:shadow-lg"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
