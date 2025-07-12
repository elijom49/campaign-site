import { useLanguage } from "@/hooks/use-language";
import candidatePhoto from "@assets/IMG_2361_1751061882818.jpg";
import heroPhoto from "@assets/Jump Shepherd America_1751141710805.jpg";
import {
  DollarSign,
  Heart,
  Home,
  TreePine,
  Users,
  Briefcase,
  BookOpen,
  Gavel,
  Building2,
} from "lucide-react";
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
          backgroundSize: "cover",
          backgroundPosition: "center 10%",
          filter: "sepia(100%) saturate(200%) hue-rotate(200deg) brightness(0.9)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
          <div className="text-left max-w-2xl">
            <h1 className="text-display text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-4">
              Policies
            </h1>
            <p className="text-xl lg:text-2xl text-white font-medium">
              {t("policies.championing")}
            </p>
          </div>
        </div>
      </div>

      {/* Policy Dropdowns Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Accordion type="single" collapsible className="w-full space-y-6">
            <AccordionItem
              value="billionaires-bill"
              className="bg-white rounded-lg shadow-none border-0"
            >
              <AccordionTrigger className="text-2xl font-bold text-black hover:no-underline py-6 px-6 [&[data-state=open]>svg]:text-blue-600">
                <div className="flex items-center gap-4">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                  The Billionaire’s Bill
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg px-6 pb-6">
                Modeled after the 1950s tax structure, this bill taxes income over
                $10 million at 92% to close tax loopholes and ensure the ultra-wealthy
                pay their fair share. Revenues will be reinvested directly into public
                schools, public infrastructure, and wage increases for essential
                workers. It will also reward companies that raise wages and treat
                workers with dignity.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="end-pink-tax"
              className="bg-white rounded-lg shadow-none border-0"
            >
              <AccordionTrigger className="text-2xl font-bold text-black hover:no-underline py-6 px-6 [&[data-state=open]>svg]:text-blue-600">
                <div className="flex items-center gap-4">
                  <Heart className="w-8 h-8 text-blue-600" />
                  End the Pink Tax
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg px-6 pb-6">
                It's time to eliminate the Pink Tax, the inflated costs women pay for
                everyday items and healthcare. This policy bans gender-based pricing
                on everyday products and services, ensures insurance coverage for
                maternal care and menstrual products, and enforces price transparency.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="teachers-farmers-act"
              className="bg-white rounded-lg shadow-none border-0"
            >
              <AccordionTrigger className="text-2xl font-bold text-black hover:no-underline py-6 px-6 [&[data-state=open]>svg]:text-blue-600">
                <div className="flex items-center gap-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                  Teachers and Farmers Act
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg px-6 pb-6">
                Illinois’s future depends on those who feed and educate us. This bill
                sets a living wage floor for farm workers, protects small farms
                through targeted subsidies, and increases teacher salaries while
                raising statewide certification standards. It treats teaching and
                farming as essential professions worthy of serious investment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="captain-planet-climate-policy"
              className="bg-white rounded-lg shadow-none border-0"
            >
              <AccordionTrigger className="text-2xl font-bold text-black hover:no-underline py-6 px-6 [&[data-state=open]>svg]:text-blue-600">
                <div className="flex items-center gap-4">
                  <TreePine className="w-8 h-8 text-blue-600" />
                  Captain Planet’s Climate Policy
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg px-6 pb-6">
                Clean Future Illinois will reduce the risk of climate-caused disasters
                by prioritizing rapid decarbonization and transitioning to clean
                energy. This plan will phase out fossil fuels, invest in green
                infrastructure, and invest in public transportation. Stronger emissions
                regulations, support for carbon capture, and restoration of natural
                ecosystems like forests and wetlands will be essential. It will
                prioritize communities hit hardest by pollution and climate disaster by
                strengthening climate-resilient infrastructure and improving food
                resilience. International cooperation and climate finance are also
                critical to support global mitigation and adaptation efforts, ensuring
                climate solutions don’t leave anyone behind.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="private-prison-purchase-plan"
              className="bg-white rounded-lg shadow-none border-0"
            >
              <AccordionTrigger className="text-2xl font-bold text-black hover:no-underline py-6 px-6 [&[data-state=open]>svg]:text-blue-600">
                <div className="flex items-center gap-4">
                  <Gavel className="w-8 h-8 text-blue-600" />
                  Private Prison Purchase Plan (P4)
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg px-6 pb-6">
                Illinois will lead the charge in ending for-profit incarceration by
                purchasing and phasing out private prisons. Under P4, prison
                facilities would be brought under public control with greater
                transparency and focus on rehabilitation over profit. Funds will be
                directed toward mental health care, addiction, and job training,
                addressing the root causes of crime and helping people reenter society.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="build-better-homes-act"
              className="bg-white rounded-lg shadow-none border-0"
            >
              <AccordionTrigger className="text-2xl font-bold text-black hover:no-underline py-6 px-6 [&[data-state=open]>svg]:text-blue-600">
                <div className="flex items-center gap-4">
                  <Building2 className="w-8 h-8 text-blue-600" />
                  Build Better Homes Act
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg px-6 pb-6">
                Every family deserves a safe, affordable home. As someone who works in
                construction, Jump understands what it takes to make this plan a
                reality. This policy introduces pre-designed, modular homes. Jump’s
                vision is for a home called “The Americana,” a modern, durable, 2,000
                sq ft house built in 24 hours and customized for local climates. Build
                Better Homes Act will deliver scalable housing solutions across the
                state of Illinois.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="union-power-act"
              className="bg-white rounded-lg shadow-none border-0"
            >
              <AccordionTrigger className="text-2xl font-bold text-black hover:no-underline py-6 px-6 [&[data-state=open]>svg]:text-blue-600">
                <div className="flex items-center gap-4">
                  <Users className="w-8 h-8 text-blue-600" />
                  Union Power Act
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg px-6 pb-6">
                Workers deserve power in the workplace. Having personally canvassed for
                Illinois’s Worker’s Rights Amendment, Jump knows the importance of
                protecting collective bargaining rights. This policy expands those
                rights nationwide by repealing “Right to Work” laws. It also safeguards
                striking workers and holds union-busting employers accountable.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="working-families-first"
              className="bg-white rounded-lg shadow-none border-0"
            >
              <AccordionTrigger className="text-2xl font-bold text-black hover:no-underline py-6 px-6 [&[data-state=open]>svg]:text-blue-600">
                <div className="flex items-center gap-4">
                  <Briefcase className="w-8 h-8 text-blue-600" />
                  Working Families First
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg px-6 pb-6">
                This policy restores access to Medicaid, SNAP, and other critical
                programs stripped from millions of Americans. We are currently running
                a speaker series to combat the effects of the “One Big Beautiful Bill,”
                which has cut benefits from 17 to 19 million working-class people
                including seniors, disabled individuals, and children, leading to
                thousands of preventable deaths each year. By streamlining applications
                and removing red tape, this plan ensures working families, seniors, and
                people with disabilities can access support without shame or delay. As
                a member of the working class himself, Jump stands in the gap as a true
                representative for those whose voices are often unheard.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="reclaiming-opportunity-zones"
              className="bg-white rounded-lg shadow-none border-0"
            >
              <AccordionTrigger className="text-2xl font-bold text-black hover:no-underline py-6 px-6 [&[data-state=open]>svg]:text-blue-600">
                <div className="flex items-center gap-4">
                  <Home className="w-8 h-8 text-blue-600" />
                  Reclaiming Opportunity Zones
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg px-6 pb-6">
                Opportunity Zones will benefit people, not just developers. Support
                will go to disenfranchised communities to expand public investment in
                underserved communities through fully funded public schools, higher
                teacher pay, and expanded after-school programs that provide children
                safe alternatives to getting in trouble. In addition, it will fund
                large-scale community beautification projects including parks, murals,
                and clean up efforts to foster local pride and safety. More community
                centers offering job training, mental health services, and recreational
                activities will be introduced to create safe spaces that strengthen
                community ties and provide vital resources.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Chicagoland-Specific Policies Section */}
      <div className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Chicagoland-Specific Policies
              </h2>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-1 bg-blue-600"></div>
                <div className="space-y-8">
                  <div className="relative flex items-start">
                    <div className="absolute left-2 w-5 h-5 bg-blue-600 rounded-full border-4 border-black"></div>
                    <div className="ml-12">
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <p className="text-white text-lg">
                          Education Starts at Birth. We’ll make major investments in
                          early childhood education, upgrade public schools, and support
                          Chicago’s most underserved communities.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex items-start">
                    <div className="absolute left-2 w-5 h-5 bg-blue-600 rounded-full border-4 border-black"></div>
                    <div className="ml-12">
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <p className="text-white text-lg">
                          Beautification Projects. Safer streets start with pride in our
                          neighborhoods. This includes clean sidewalks, functioning trash
                          bins, restored green spaces, and well-staffed community centers
                          offering programs for youth, families, and seniors.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex items-start">
                    <div className="absolute left-2 w-5 h-5 bg-blue-600 rounded-full border-4 border-black"></div>
                    <div className="ml-12">
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <p className="text-white text-lg">
                          Lead in Drinking Water. In Chicago, about 400,000 homes still get
                          their tap water through lead service lines. These lines could
                          take up to 50 years to replace! And nearly 70% of young children
                          are getting exposed to lead from their home tap water.
                          Chicagoans and cities across the country are depending on our
                          government to reduce lead in drinking water, and this is an
                          issue that when solved will increase home values and benefit the
                          health of our nation’s youth.
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

