
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowRight,
  Heart,
  MapPin,
  Search,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
} from "lucide-react";

const featuredListings = [
  {
    id: 1,
    title: "2 Bedroom Apartment",
    location: "Kilimani, Nairobi",
    price: "45,000",
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    title: "Spacious 3BR Villa",
    location: "Karen, Nairobi",
    price: "120,000",
    type: "House",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    title: "Modern 1BR Studio",
    location: "Westlands, Nairobi",
    price: "35,000",
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 4,
    title: "Cozy Bedsitter",
    location: "South B, Nairobi",
    price: "15,000",
    type: "Bedsitter",
    image: "https://images.unsplash.com/photo-1499955085172-a104c9463ece?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 5,
    title: "Executive 4BR Mansion",
    location: "Runda, Nairobi",
    price: "250,000",
    type: "House",
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];

const Index = () => {
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [houseType, setHouseType] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", { location, priceRange, houseType });
    // Would navigate to listings page with these search parameters
  };

  const handleViewDetails = (id) => {
    console.log("View details for listing:", id);
    // Would navigate to the listing detail page
  };

  const handleSaveProperty = (id) => {
    console.log("Save property:", id);
    // Would save the property to favorites
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-[#2E7D32] rounded-md flex items-center justify-center">
              <span className="text-white font-bold">R</span>
            </div>
            <span className="text-xl font-bold text-[#212121]">RentEasy KE</span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/listings" className="text-[#212121] hover:text-[#2E7D32] font-medium">
              Browse Listings
            </a>
            <a href="/list-property" className="text-[#212121] hover:text-[#2E7D32] font-medium">
              List Your Property
            </a>
            <Button variant="outline" className="border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white">
              Login
            </Button>
            <Button className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white">
              Sign Up
            </Button>
          </nav>
          
          <Button variant="ghost" className="md:hidden">
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[600px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        }}
      >
        <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Find Your Next Home Easily
          </h1>
          <p className="text-xl text-white mb-10 max-w-2xl">
            Browse quality rental properties across Kenya and connect directly with verified landlords.
          </p>
          
          <div className="w-full max-w-4xl bg-white p-4 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <Input
                  placeholder="Where do you want to live?"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select price range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Price Range</SelectLabel>
                      <SelectItem value="0-20000">Ksh 0 - 20,000</SelectItem>
                      <SelectItem value="20000-50000">Ksh 20,000 - 50,000</SelectItem>
                      <SelectItem value="50000-100000">Ksh 50,000 - 100,000</SelectItem>
                      <SelectItem value="100000+">Ksh 100,000+</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                <Select value={houseType} onValueChange={setHouseType}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Property Type</SelectLabel>
                      <SelectItem value="bedsitter">Bedsitter</SelectItem>
                      <SelectItem value="single">Single Room</SelectItem>
                      <SelectItem value="1br">1 Bedroom</SelectItem>
                      <SelectItem value="2br">2 Bedroom</SelectItem>
                      <SelectItem value="3br">3+ Bedroom</SelectItem>
                      <SelectItem value="mansion">Mansion</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Button
              onClick={handleSearch}
              className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold py-3"
            >
              Search Properties <Search className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-[#212121]">Featured Properties</h2>
            <a
              href="/listings"
              className="text-[#2E7D32] hover:underline flex items-center"
            >
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>

          <div className="hidden md:block">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredListings.slice(0, 3).map((listing) => (
                <Card key={listing.id} className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => handleSaveProperty(listing.id)}
                      className="absolute top-2 right-2 h-8 w-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100"
                    >
                      <Heart className="h-5 w-5 text-[#2E7D32]" />
                    </button>
                    <div className="absolute bottom-2 right-2 bg-[#FFB300] px-2 py-1 rounded text-xs font-bold">
                      {listing.type}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{listing.title}</h3>
                      <p className="text-[#2E7D32] font-bold">
                        KSh {listing.price}/mo
                      </p>
                    </div>
                    <p className="text-gray-600 flex items-center text-sm mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      {listing.location}
                    </p>
                    <Button
                      onClick={() => handleViewDetails(listing.id)}
                      variant="outline"
                      className="w-full border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white"
                    >
                      View Details
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <Carousel className="w-full">
              <CarouselContent>
                {featuredListings.map((listing) => (
                  <CarouselItem key={listing.id}>
                    <Card className="overflow-hidden border border-gray-200">
                      <div className="relative h-48">
                        <img
                          src={listing.image}
                          alt={listing.title}
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={() => handleSaveProperty(listing.id)}
                          className="absolute top-2 right-2 h-8 w-8 bg-white rounded-full flex items-center justify-center shadow-md"
                        >
                          <Heart className="h-5 w-5 text-[#2E7D32]" />
                        </button>
                        <div className="absolute bottom-2 right-2 bg-[#FFB300] px-2 py-1 rounded text-xs font-bold">
                          {listing.type}
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-lg">{listing.title}</h3>
                          <p className="text-[#2E7D32] font-bold">
                            KSh {listing.price}/mo
                          </p>
                        </div>
                        <p className="text-gray-600 flex items-center text-sm mb-4">
                          <MapPin className="h-4 w-4 mr-1" />
                          {listing.location}
                        </p>
                        <Button
                          onClick={() => handleViewDetails(listing.id)}
                          variant="outline"
                          className="w-full border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white"
                        >
                          View Details
                        </Button>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4 gap-2">
                <CarouselPrevious className="static translate-y-0 mx-2" />
                <CarouselNext className="static translate-y-0 mx-2" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#212121] mb-12">
            How RentEasy KE Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto h-16 w-16 bg-[#2E7D32] rounded-full flex items-center justify-center mb-6">
                <Search className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Step 1: Find</h3>
              <p className="text-gray-600">
                Browse our extensive collection of verified rental properties across Kenya. Use filters to narrow down your search.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto h-16 w-16 bg-[#2E7D32] rounded-full flex items-center justify-center mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Step 2: Connect</h3>
              <p className="text-gray-600">
                Pay a small fee to unlock landlord contact details for properties you're interested in.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto h-16 w-16 bg-[#2E7D32] rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M18 6V4c0-1.1-.9-2-2-2H8C6.9 2 6 2.9 6 4v2"></path><path d="M18 12H6a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2z"></path><path d="M8 12V8c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Step 3: Move In</h3>
              <p className="text-gray-600">
                Schedule viewings with landlords and find your perfect home without the stress and hassle.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-8">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1517511620798-cec17d428bc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="About RentEasy KE"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-[#212121] mb-6">
                About RentEasy KE
              </h2>
              <p className="text-gray-700 mb-4">
                RentEasy KE was born out of the frustration that many Kenyans face when trying to find a home. We saw how the process was often time-consuming, stressful, and filled with uncertainty.
              </p>
              <p className="text-gray-700 mb-4">
                Our mission is to connect property seekers with verified landlords through a transparent, efficient platform that makes house-hunting a breeze.
              </p>
              <p className="text-gray-700 mb-6">
                We're committed to providing an excellent user experience, ensuring all listed properties are verified, and making the rental process as smooth as possible for both tenants and landlords.
              </p>
              <Button variant="outline" className="border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="h-8 w-8 bg-white rounded-md flex items-center justify-center">
                  <span className="text-[#2E7D32] font-bold">R</span>
                </div>
                <span className="text-xl font-bold">RentEasy KE</span>
              </div>
              <p className="text-gray-300 mb-4">
                Finding your perfect home in Kenya has never been easier.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/listings" className="text-gray-300 hover:text-white">
                    Browse Listings
                  </a>
                </li>
                <li>
                  <a href="/list-property" className="text-gray-300 hover:text-white">
                    List Your Property
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-300 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/faqs" className="text-gray-300 hover:text-white">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Property Types</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/listings?type=apartment" className="text-gray-300 hover:text-white">
                    Apartments
                  </a>
                </li>
                <li>
                  <a href="/listings?type=house" className="text-gray-300 hover:text-white">
                    Houses
                  </a>
                </li>
                <li>
                  <a href="/listings?type=bedsitter" className="text-gray-300 hover:text-white">
                    Bedsitters
                  </a>
                </li>
                <li>
                  <a href="/listings?type=commercial" className="text-gray-300 hover:text-white">
                    Commercial Spaces
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <a href="mailto:info@renteasye.co.ke" className="text-gray-300 hover:text-white">
                    info@renteasyke.co.ke
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <a href="tel:+254700000000" className="text-gray-300 hover:text-white">
                    +254 700 000 000
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} RentEasy KE. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
