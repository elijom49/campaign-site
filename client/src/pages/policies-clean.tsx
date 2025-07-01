import { useLanguage } from "@/hooks/use-language";
import candidatePhoto from "@assets/IMG_2361_1751061882818.jpg";
import heroPhoto from "@assets/Jump Shepherd America_1751141710805.jpg";
import { DollarSign, Heart, Home, TreePine, Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PoliciesPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-80 flex items-center"
        style={{
          backgroundImage: `url(${heroPhoto})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 10%',
          filter: 'sepia(100%) saturate(200%) hue-rotate(200deg) brightness(0.9)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
          <div className="text-left max-w-2xl">
            <h1 className="text-display text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-4">
              Policies
            </h1>
            <p className="text-xl lg:text-2xl text-white font-medium">
              {t('policies.championing')}
            </p>
          </div>
        </div>
      </div>

      {/* Policy Dropdowns Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Accordion type="single" collapsible className="w-full space-y-6">
            {/* The Billionaire Tax */}
            <AccordionItem value="billionaire-tax" className="bg-white rounded-lg shadow-none border-0">
              <AccordionTrigger className="text-2xl font-bold text-black hover:no-underline py-6 px-6 [&[data-state=open]>svg]:text-blue-600">
                <div className="flex items-center gap-4">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                  The Billionaire Tax
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg px-6 pb-6">
                Billionaires pay their fair share.
              </AccordionContent>
            </AccordionItem>

            {/* Elimination of The Pink Tax */}
            <AccordionItem value="pink-tax" className="bg-white rounded-lg shadow-none border-0">
              <AccordionTrigger className="text-2xl font-bold text-black hover:no-underline py-6 px-6 [&[data-state=open]>svg]:text-blue-600">
                <div className="flex items-center gap-4">
                  <Heart className="w-8 h-8 text-blue-600" />
                  Elimination of The Pink Tax
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg px-6 pb-6">
                <p className="mb-6">
                  The Pink Tax includes women's products--when women have to pay for things men don't have to pay for, it's unfair. So we're talking about tampons, pads, period products, pregnancy, and childbirth products. Those are gonna be tax-deductible. Women will not have to pay to be women.
                </p>
                <div className="relative w-full max-w-2xl">
                  <iframe
                    className="w-full h-80 rounded-2xl"
                    src="https://www.youtube.com/embed/lcbYrTEnyOM"
                    title="Pink Tax Campaign Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Affordable Housing */}
            <AccordionItem value="affordable-housing" className="bg-white rounded-lg shadow-none border-0">
              <AccordionTrigger className="text-2xl font-bold text-black hover:no-underline py-6 px-6 [&[data-state=open]>svg]:text-blue-600">
                <div className="flex items-center gap-4">
                  <Home className="w-8 h-8 text-blue-600" />
                  Affordable Housing
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg px-6 pb-6">
                Families are going to own their homes again, not corporate ownership. Prices are going down.
              </AccordionContent>
            </AccordionItem>

            {/* Environmental Policy */}
            <AccordionItem value="environmental-policy" className="bg-white rounded-lg shadow-none border-0">
              <AccordionTrigger className="text-2xl font-bold text-black hover:no-underline py-6 px-6 [&[data-state=open]>svg]:text-blue-600">
                <div className="flex items-center gap-4">
                  <TreePine className="w-8 h-8 text-blue-600" />
                  Environmental Policy
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg px-6 pb-6">
                Legislation will be introduced in the area of environmental policy, global warming, agriculture, and supporting our farmers and educators.
              </AccordionContent>
            </AccordionItem>

            {/* Working Families */}
            <AccordionItem value="working-families" className="bg-white rounded-lg shadow-none border-0">
              <AccordionTrigger className="text-2xl font-bold text-black hover:no-underline py-6 px-6 [&[data-state=open]>svg]:text-blue-600">
                <div className="flex items-center gap-4">
                  <Users className="w-8 h-8 text-blue-600" />
                  Working Families
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg px-6 pb-6">
                Fighting for fair wages, worker rights, and economic opportunities that build strong communities.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* New Timeline and Text Section */}
      <div className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Timeline Section - Left */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Policies for the City of Chicago</h2>
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-4 top-0 bottom-0 w-1 bg-blue-600"></div>
                
                {/* Timeline items */}
                <div className="space-y-8">
                  <div className="relative flex items-start">
                    <div className="absolute left-2 w-5 h-5 bg-blue-600 rounded-full border-4 border-black"></div>
                    <div className="ml-12">
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <p className="text-white text-lg">Timeline item 1 - Content to be added</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start">
                    <div className="absolute left-2 w-5 h-5 bg-blue-600 rounded-full border-4 border-black"></div>
                    <div className="ml-12">
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <p className="text-white text-lg">Timeline item 2 - Content to be added</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start">
                    <div className="absolute left-2 w-5 h-5 bg-blue-600 rounded-full border-4 border-black"></div>
                    <div className="ml-12">
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <p className="text-white text-lg">Timeline item 3 - Content to be added</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Box Section - Right */}
            <div className="flex items-center">
              <div className="border-4 border-yellow-500 bg-black p-8 rounded-lg w-full">
                <h2 className="text-4xl font-bold text-white text-center">
                  A Chicago Native, for the people of Illinois
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}