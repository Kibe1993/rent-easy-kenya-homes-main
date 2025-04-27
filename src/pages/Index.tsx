
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20">
        <nav className="flex items-center justify-between mb-16">
          <h1 className="text-3xl font-bold text-white">RentEasy KE</h1>
          <div className="space-x-4">
            <Button variant="ghost" className="text-white hover:text-gray-300">
              List Property
            </Button>
            <Button variant="ghost" className="text-white hover:text-gray-300">
              Sign In
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              Get Started
            </Button>
          </div>
        </nav>

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Find Your Perfect Home in Kenya
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Browse quality rentals across Kenya. Connect with verified landlords.
          </p>
          <div className="flex max-w-2xl mx-auto gap-4">
            <Input 
              placeholder="Search by location..." 
              className="bg-white/10 text-white border-transparent"
            />
            <Button className="bg-green-600 hover:bg-green-700">
              Search <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Featured Listings */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8">Featured Properties</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="bg-gray-800 border-gray-700">
                <div className="p-4">
                  <div className="h-48 bg-gray-700 rounded-lg mb-4"></div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-semibold text-white">
                      2 Bedroom Apartment
                    </h4>
                    <p className="text-gray-400">Kilimani, Nairobi</p>
                    <p className="text-green-500 font-semibold">KSh 45,000/mo</p>
                    <Button 
                      variant="outline" 
                      className="w-full border-green-600 text-green-500 hover:bg-green-600 hover:text-white"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="text-center mb-20">
          <h3 className="text-2xl font-bold text-white mb-12">How RentEasy KE Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="h-16 w-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl text-white">1</span>
              </div>
              <h4 className="text-xl font-semibold text-white">Browse Listings</h4>
              <p className="text-gray-400">
                Search through verified properties across Kenya
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-16 w-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl text-white">2</span>
              </div>
              <h4 className="text-xl font-semibold text-white">Connect</h4>
              <p className="text-gray-400">
                Unlock contact details for properties you like
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-16 w-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl text-white">3</span>
              </div>
              <h4 className="text-xl font-semibold text-white">Move In</h4>
              <p className="text-gray-400">
                Schedule viewings and find your perfect home
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-400 py-8 border-t border-gray-700">
          <p>&copy; 2024 RentEasy KE. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
