import { Link } from "wouter";
import { useLanguage } from "@/hooks/use-language";
import candidatePhoto from "@assets/IMG_2354_1751141579485.jpg";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-black text-white">
      {/* Hero Section with Black Background */}
      <section className="relative min-h-screen bg-black">
        <div className="relative content-grid-advanced min-h-screen">
          <div className="col-span-12 lg:col-span-8 flex flex-col justify-center py-20">
            <div className="space-y-6">
              <h1 className="text-display text-5xl lg:text-6xl xl:text-7xl text-white leading-tight">
                {t("about.meetJump")}
              </h1>

              {/* Bio Space */}
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 max-w-3xl">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Formerly known as Wesley — Red-educator, astronomer, and electrician — but certainly not a politician. An active speaker and community organizer, Chicago Federation of Labor delegate, and Electrical Workers Minority Caucus member who frequently donates his Saturdays giving back to the community through volunteer electrical work, engagement through the church, and volunteering at food pantries. He's no stranger to the neighborhood!
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/policies">
                  <span className="inline-block bg-yellow-500 text-black px-6 py-3 text-lg font-bold hover:bg-yellow-400 transition-colors">
                    {t("about.viewPlatform")}
                  </span>
                </Link>
                <Link href="/volunteer">
                  <span className="inline-block border-2 border-white text-white px-6 py-3 text-lg font-bold hover:bg-white hover:text-black transition-colors">
                    {t("about.getInvolved")}
                  </span>
                </Link>
              </div>

              {/* Jump Quote Section */}
              <div className="mt-8 bg-gray-800/50 p-6 rounded-lg border border-gray-700 max-w-3xl">
                <p className="text-lg text-gray-200 leading-relaxed whitespace-pre-line">
                  From Jump: "It feels to most of us that we don't have any power over what happens in Congress. It's time to change that. We are out of time. Our country is $35 trillion in debt, and Trump's stacked Congress is cutting Medicaid and still running a deficit to give his billionaire friends even greater tax breaks—making his obscene 2017 tax breaks permanent. The risk is not in running to save our country; the risk is in doing nothing. 
                  
                  No more. No more lies. From this day forward, we call out those who wrong us and then we vote them out of Congress. I'm going to break down everything they do in Washington and say it plain for regular people like me to understand.

                  I don't think what I'm doing is courageous or brave. I think it's necessary. It's time to stand up to the donor class, it's time to stand up to the lobbyists, and it's time to remove the representatives who do not represent us. 

                  We're not going to lose. You will see it every day in my actions. There will be no question, and in fact, others will be inspired by my passion to answer the call to serve."
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 flex items-center justify-center py-20">
            <div className="max-w-md">
              <img
                src={candidatePhoto}
                alt="Jump - Candidate for U.S. Senate"
                className="w-full rounded-lg"
                style={{
                  filter: "sepia(100%) saturate(200%) hue-rotate(200deg) brightness(0.9)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Keep the rest of the sections as-is */}
    </div>
  );
}
