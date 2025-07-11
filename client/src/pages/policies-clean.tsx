import { useLanguage } from "@/hooks/use-language";
import candidatePhoto from "@assets/IMG_2361_1751061882818.jpg";
import heroPhoto from "@assets/Jump Shepherd America_1751141710805.jpg";
import { DollarSign, Heart, Home, TreePine, Users, Gavel, Briefcase, GraduationCap, Building2 } from "lucide-react";
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
              <AccordionTrigger className="text-2xl font-bold text-black hover:no-underline py-6 px-6">
                Billionaire’s Bill
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg px-6 pb-6">
                In the 1950s, the richest Americans paid a 92% tax on income over a certain amount. This encouraged the wealthiest Americans to reinvest their money into their businesses through raising wages, improving working conditions, and offering better benefits. This proposal calls for taxing income over $10 million to once again encourage reinvestment into working-class employee wages, working conditions, and healthcare.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pro-union-policies" className="bg-white rounded-lg shadow-none border-0">
              <AccordionTrigger className="text-2xl font-bold text-black hover:no-underline py-6 px-6">
                Pro Union Policies
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg px-6 pb-6">
                Policies include stronger union protections nationwide, codifying Illinois’s Worker’s Rights Amendment into federal law, and permanently ending “Right To Work” legislation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pink-tax" className="bg-white rounded-lg shadow-none border-0">
              <AccordionTrigger className="text-2xl font-bold text-black hover:no-underline py-6 px-6">
                Pink Tax
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg px-6 pb-6">
                End the Pink Tax nationwide—women will no longer have to pay a tax just for being a woman. That includes increased prices on razors and deodorant, but also on the hidden costs of pregnancy, childbirth, and more.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="teachers-and-farmers-bill" className="bg-white rounded-lg shadow-none border-0">
              <AccordionTrigger className="text-2xl font-bold text-black hover:no-underline py-6 px-6">
                Teachers and Farmers Bill
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg px-6 pb-6">
                Sets minimum wage for farm workers and provides subsidies for small farmers to purchase land, tools, and materials. Also establishes minimum education requirements to become a teacher and raises the minimum teacher wage to twice the state’s median household income.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="private-prison-purchase-plan" className="bg-white rounded-lg shadow-none border-0">
              <AccordionTrigger className="text-2xl font-bold text-black hover:no-underline py-6 px-6">
                Private Prison Purchase Plan (P4)
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg px-6 pb-6">
                <ul className="list-disc ml-6">
                  <li>Nationalize all prisons</li>
                  <li>End private ownership of all prisons in America</li>
                  <li>End the preschool-to-prison pipeline</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="captain-planet-climate-policy" className="bg-white rounded-lg shadow-none border-0">
              <AccordionTrigger className="text-2xl font-bold text-black hover:no-underline py-6 px-6">
                Captain Planet’s Climate Policy
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg px-6 pb-6">
                In America and abroad, we are facing:
                <ul className="list-disc ml-6 mt-2">
                  <li>Environmental collapse</li>
                  <li>Destruction of the atmosphere/ozone</li>
                </ul>
                <p className="mt-4">We are out of time. We must act to save the only home we know.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="working-families" className="bg-white rounded-lg shadow-none border-0">
              <AccordionTrigger className="text-2xl font-bold text-black hover:no-underline py-6 px-6">
                Working Families
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg px-6 pb-6">
                Congress has stripped Medicaid and SNAP benefits from up to 19 million underserved Americans—including the disabled, seniors, and children. We estimate that 60–90 thousand people may die each year because of one law. They didn’t cut services directly—they made the paperwork harder, the hoops higher, and the process longer, knowing that the people most in need would give up in frustration.
                <br /><br />
                We need working-class people to represent working families. I’m standing in the gap to be a conduit for the unheard.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="housing-for-all" className="bg-white rounded-lg shadow-none border-0">
              <AccordionTrigger className="text-2xl font-bold text-black hover:no-underline py-6 px-6">
                Housing for All
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg px-6 pb-6">
                Build affordable housing on a national scale that doesn’t look or feel like affordable housing. I'm in construction—I have a plan and I know how to execute it. We can build a house in a factory in 24 hours for $10k, deliver and assemble it in under a day. It’s time to end the housing crisis.
                <br /><br />
                My proposal, “The Americana,” is a 3-bedroom, 2-bathroom, two-story, 2000 sq ft climate-resilient house with regional variants (heat/cold/fire/flood/earthquake resistant).
                <br /><br />
                The real estate lobby is fighting this, but when we increase affordable housing and end Citizens United, it will unleash an entire generation of new taxpayers and raise national revenue.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Policies for Chicago Section */}
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
                        <p className="text-white text-lg">Education starts at birth. Serious upgrades and updates to schools in underserved communities from Pre-K to university.</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="absolute left-2 w-5 h-5 bg-blue-600 rounded-full border-4 border-black"></div>
                    <div className="ml-12">
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <p className="text-white text-lg">Beautification projects—trash cans on every block, public park restoration, and youth-centered community centers that promote safer and friendlier neighborhoods.</p>
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
