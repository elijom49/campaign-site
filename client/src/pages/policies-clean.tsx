import { useLanguage } from "@/hooks/use-language";
import candidatePhoto from "@assets/IMG_2361_1751061882818.jpg";
import heroPhoto from "@assets/Jump Shepherd America_1751141710805.jpg";
import { DollarSign, Heart, Home, TreePine, Users, Briefcase, BookOpen, Gavel, Building2 } from "lucide-react";
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
            <AccordionItem value="billionaires-bill" className="bg-white rounded-lg shadow-none border-0">
              <AccordionTrigger className="text-2xl font-bold text-black hover:no-underline py-6 px-6 [&[data-state=open]>svg]:text-blue-600">
                <div className="flex items-center gap-4">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                  Billionaire’s Bill
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg px-6 pb-6">
                In the 1950s, the richest Americans paid a 92% tax on income over a certain threshold. This encouraged them to reinvest in workers through higher wages, improved working conditions, and better benefits. This bill proposes a tax on income over $10 million to incentivize similar reinvestment in today’s workforce.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pro-union" className="bg-white rounded-lg shadow-none border-0">
              <AccordionTrigger className="text-2xl font-bold text-black hover:no-underline py-6 px-6 [&[data-state=open]>svg]:text-blue-600">
                <div className="flex items-center gap-4">
                  <Briefcase className="w-8 h-8 text-blue-600" />
                  Pro Union Policies
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg px-6 pb-6">
                Expand union protections nationwide, codify Illinois’s “Worker’s Rights Amendment” into federal law, and eliminate anti-union “Right to Work” laws once and for all.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pink-tax" className="bg-white rounded-lg shadow-none border-0">
              <AccordionTrigger className="text-2xl font-bold text-black hover:no-underline py-6 px-6 [&[data-state=open]>svg]:text-blue-600">
                <div className="flex items-center gap-4">
                  <Heart className="w-8 h-8 text-blue-600" />
                  Pink Tax
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg px-6 pb-6">
                End the Pink Tax nationwide—eliminating unfair price differences on razors, deodorant, and the hidden costs of pregnancy, childbirth, and more.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="teachers-farmers" className="bg-white rounded-lg shadow-none border-0">
              <AccordionTrigger className="text-2xl font-bold text-black hover:no-underline py-6 px-6 [&[data-state=open]>svg]:text-blue-600">
                <div className="flex items-center gap-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                  Teachers and Farmers Bill
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg px-6 pb-6">
                Establishes minimum wages for farm workers, provides subsidies for small farmers, raises teacher salaries to twice the state’s median household income, and sets stronger educational requirements to ensure quality and dignity in both professions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="private-prison" className="bg-white rounded-lg shadow-none border-0">
              <AccordionTrigger className="text-2xl font-bold text-black hover:no-underline py-6 px-6 [&[data-state=open]>svg]:text-blue-600">
                <div className="flex items-center gap-4">
                  <Gavel className="w-8 h-8 text-blue-600" />
                  Private Prison Purchase Plan (P4)
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg px-6 pb-6">
                - Nationalize all prisons<br />
                - End private prison ownership<br />
                - Dismantle the preschool-to-prison pipeline
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="climate-policy" className="bg-white rounded-lg shadow-none border-0">
              <AccordionTrigger className="text-2xl font-bold text-black hover:no-underline py-6 px-6 [&[data-state=open]>svg]:text-blue-600">
                <div className="flex items-center gap-4">
                  <TreePine className="w-8 h-8 text-blue-600" />
                  Captain Planet’s Climate Policy
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg px-6 pb-6">
                America faces environmental collapse. This policy addresses atmospheric destruction and climate urgency. Bold action is needed now to preserve our only home.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="working-families" className="bg-white rounded-lg shadow-none border-0">
              <AccordionTrigger className="text-2xl font-bold text-black hover:no-underline py-6 px-6 [&[data-state=open]>svg]:text-blue-600">
                <div className="flex items-center gap-4">
                  <Users className="w-8 h-8 text-blue-600" />
                  Working Families
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg px-6 pb-6">
                Congress has stripped Medicaid and SNAP from up to 19 million underserved Americans—including seniors, the disabled, and children. Bureaucratic hurdles now prevent access to critical aid. I will fight back against this cruelty, represent working people, and ensure government works for us—not against us.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="housing" className="bg-white rounded-lg shadow-none border-0">
              <AccordionTrigger className="text-2xl font-bold text-black hover:no-underline py-6 px-6 [&[data-state=open]>svg]:text-blue-600">
                <div className="flex items-center gap-4">
                  <Home className="w-8 h-8 text-blue-600" />
                  Housing for All
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg px-6 pb-6">
                My plan: mass-manufactured affordable homes built in 24 hours, assembled on-site, durable and regionally climate-ready. My flagship design, “The Americana,” is a 2,000 sq ft, 3 bed/2 bath modern home built for all climates. We must overcome lobbyist pressure and deliver dignified, scalable housing solutions for working families nationwide.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* New Timeline and Text Section */}
      <div className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Policies for the City of Chicago</h2>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-1 bg-blue-600"></div>
                <div className="space-y-8">
                  <div className="relative flex items-start">
                    <div className="absolute left-2 w-5 h-5 bg-blue-600 rounded-full border-4 border-black"></div>
                    <div className="ml-12">
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <p className="text-white text-lg">
                          Education starts at birth. Serious upgrades and updates to schools in underserved communities from Pre-K to university.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex items-start">
                    <div className="absolute left-2 w-5 h-5 bg-blue-600 rounded-full border-4 border-black"></div>
                    <div className="ml-12">
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <p className="text-white text-lg">
                          Beautification projects. Trash cans on every block, public park restoration, and community centers with engaging activities all contribute to safer, friendlier neighborhoods.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
