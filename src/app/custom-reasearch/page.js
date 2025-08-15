// pages/custom-research.js

export default function CustomResearchPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Moved head content directly here for preview compatibility */}
      {/* In a real Next.js app, <Head> from 'next/head' would be used,
          or these would be in _document.js or _app.js */}
      <title>Custom Research Services - DataM Intelligence</title>
      <meta name="description" content="Tailored Intelligence to Power Smarter Decisions" />
      <link rel="icon" href="/favicon.ico" />
      {/* Load Inter font from Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      {/* Tailwind CSS CDN (for quick preview, in a real Next.js app you'd configure it) */}
      <script src="https://cdn.tailwindcss.com"></script>
      <style dangerouslySetInnerHTML={{ __html: `
        body {
          font-family: 'Inter', sans-serif;
        }
      `}} />

      {/* Hero Section */}
      <section className="bg-[#083E5E] text-white py-20 md:py-28 lg:py-36 rounded-b-3xl shadow-xl">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            CUSTOM RESEARCH SERVICES
          </h1>
          <p className="mt-4 md:mt-6 text-lg md:text-xl lg:text-2xl opacity-90">
            Tailored Intelligence to Power Smarter Decisions
          </p>
        </div>
      </section>

      {/* Statistics Bar */}
      <section className="bg-[#3182CE] text-white py-8 shadow-md">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl md:text-5xl font-bold">6000+</p>
            <p className="text-lg md:text-xl mt-1">CLIENTS</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold">10000+</p>
            <p className="text-lg md:text-xl mt-1">PROJECTS</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold">100+</p>
            <p className="text-lg md:text-xl mt-1">COUNTRIES</p>
          </div>
        </div>
      </section>

      {/* Introduction Text Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Nearly 80% of the clients we have worked with so far have asked for customized intelligence - tailored uniquely to their requirements. Recognizing what our clients want, we have extended 20% customization at no additional cost to all of our clients for any of our syndicated reports.
          </p>
          <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            In addition to customization of our reports, we also offer fully tailored research solutions to our clients in all industries we track.
          </p>
        </div>
      </section>


      {/* Why Choose DataM Intelligence Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#083E5E] mb-12">
            ✅ Why Choose DataM Intelligence?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
            {/* Item 1: Client-Centric Approach */}
            <div className="text-center p-4">
              <div className="text-[#3182CE] text-6xl mb-4">🎯</div> {/* Icon */}
              <h3 className="font-bold text-xl md:text-2xl text-[#083E5E] mb-2">Client-Centric Approach</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Every engagement is customized to your unique business objectives.
              </p>
            </div>
            {/* Item 2: Global Market Expertise */}
            <div className="text-center p-4">
              <div className="text-[#3182CE] text-6xl mb-4">🌍</div> {/* Icon */}
              <h3 className="font-bold text-xl md:text-2xl text-[#083E5E] mb-2">Global Market Expertise</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Industry-specific research across 17+ verticals and 120+ countries.
              </p>
            </div>
            {/* Item 3: Trusted Advisory Team */}
            <div className="text-center p-4">
              <div className="text-[#3182CE] text-6xl mb-4">🧠</div> {/* Icon */}
              <h3 className="font-bold text-xl md:text-2xl text-[#083E5E] mb-2">Trusted Advisory Team</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Backed by domain experts and senior consultants across industry and academia.
              </p>
            </div>
            {/* Item 4: Confidential, Compliant & Secure */}
            <div className="text-center p-4">
              <div className="text-[#3182CE] text-6xl mb-4">🔐</div> {/* Icon */}
              <h3 className="font-bold text-xl md:text-2xl text-[#083E5E] mb-2">Confidential, Compliant & Secure</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Strict protocols for sensitive engagements under NDAs.
              </p>
            </div>
            {/* Item 5: Impact-Focused Insights */}
            <div className="text-center p-4">
              <div className="text-[#3182CE] text-6xl mb-4">📈</div> {/* Icon */}
              <h3 className="font-bold text-xl md:text-2xl text-[#083E5E] mb-2">Impact-Focused Insights</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Deliverables tailored for boardroom decisions, including strategic recommendations and executive summaries.
              </p>
            </div>
            {/* Item 6: Results-Oriented Delivery */}
            <div className="text-center p-4">
              <div className="text-[#3182CE] text-6xl mb-4">💡</div> {/* Icon */}
              <h3 className="font-bold text-xl md:text-2xl text-[#083E5E] mb-2">Results-Oriented Delivery</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Insights built for impact: executive-ready formats, strategic recommendations, and ongoing analyst support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Offerings & Contact Form Section (Side-by-Side) */}
      <section className="py-16 md:py-24 bg-white" id="contact-form">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl">

          {/* Our Offerings Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#083E5E] mb-10 text-center lg:text-left">
              📌 Our Offerings
            </h2>
            <p className="text-center lg:text-left text-lg text-gray-700 mb-10">
              We deliver bespoke solutions aligned to your operational and strategic goals:
            </p>

            <div className="space-y-12">
              {/* Market & Opportunity Analysis */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#083E5E] mb-4 flex items-center">
                  <span className="text-[#3182CE] text-4xl mr-3">📊</span> Market & Opportunity Analysis
                </h3>
                <ul className="space-y-3 text-lg text-gray-700 list-none pl-0">
                  <li className="flex items-start">
                    <span className="text-[#3182CE] text-2xl mr-3 leading-none">•</span> Market Entry Strategy / International Expansion
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3182CE] text-2xl mr-3 leading-none">•</span> Opportunity Assessment
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3182CE] text-2xl mr-3 leading-none">•</span> Competitor Assessment
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3182CE] text-2xl mr-3 leading-none">•</span> Market Segmentation and Growth Strategy
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3182CE] text-2xl mr-3 leading-none">•</span> Product-to-Market Assessment
                  </li>
                </ul>
              </div>

              {/* Technology, Product & Operations */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#083E5E] mb-4 flex items-center">
                  <span className="text-[#3182CE] text-4xl mr-3">🧠</span> Technology, Product & Operations
                </h3>
                <ul className="space-y-3 text-lg text-gray-700 list-none pl-0">
                  <li className="flex items-start">
                    <span className="text-[#3182CE] text-2xl mr-3 leading-none">•</span> Technology Scouting & Innovation Tracking
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3182CE] text-2xl mr-3 leading-none">•</span> Product Valuation & Lifecycle Modelling
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3182CE] text-2xl mr-3 leading-none">•</span> Production Analysis & Benchmarking
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3182CE] text-2xl mr-3 leading-none">•</span> Supply Chain Assessment
                  </li>
                </ul>
              </div>

              {/* Sustainability & ESG Advisory */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#083E5E] mb-4 flex items-center">
                  <span className="text-[#3182CE] text-4xl mr-3">♻️</span> Sustainability & ESG Advisory
                </h3>
                <ul className="space-y-3 text-lg text-gray-700 list-none pl-0">
                  <li className="flex items-start">
                    <span className="text-[#3182CE] text-2xl mr-3 leading-none">•</span> ESG Opportunity Mapping – <span className="text-sm md:text-base text-gray-600 ml-1">Identify business opportunities in carbon-conscious markets.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3182CE] text-2xl mr-3 leading-none">•</span> Sustainability Benchmarking – <span className="text-sm md:text-base text-gray-600 ml-1">Evaluate peer performance and regulatory risks.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3182CE] text-2xl mr-3 leading-none">•</span> Green Technology Analysis – <span className="text-sm md:text-base text-gray-600 ml-1">Assess clean tech trends, cost-benefit modeling, and impact forecasts.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3182CE] text-2xl mr-3 leading-none">•</span> Scope 1, 2 & 3 Emissions Mapping – <span className="text-sm md:text-base text-gray-600 ml-1">Data-backed frameworks to support compliance and transparency.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3182CE] text-2xl mr-3 leading-none">•</span> Circular Economy Impact Studies – <span className="text-sm md:text-base text-gray-600 ml-1">Understand materials, systems, and revenue pathways.</span>
                  </li>
                </ul>
              </div>

              {/* Strategy & Investment Decision Support */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#083E5E] mb-4 flex items-center">
                  <span className="text-[#3182CE] text-4xl mr-3">💼</span> Strategy & Investment Decision Support
                </h3>
                <ul className="space-y-3 text-lg text-gray-700 list-none pl-0">
                  <li className="flex items-start">
                    <span className="text-[#3182CE] text-2xl mr-3 leading-none">•</span> Feasibility Analysis
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3182CE] text-2xl mr-3 leading-none">•</span> Portfolio and Acquisition Assessment
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3182CE] text-2xl mr-3 leading-none">•</span> Mega Trends Impact Forecasting
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3182CE] text-2xl mr-3 leading-none">•</span> Deep Dive Market Studies
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100 h-fit sticky top-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#083E5E] mb-10">
              DROP US A LINE
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="fullName" className="sr-only">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-[#3182CE] focus:border-[#3182CE] sm:text-lg transition-colors duration-200"
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Business Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-[#3182CE] focus:border-[#3182CE] sm:text-lg transition-colors duration-200"
                  placeholder="Business Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-[#3182CE] focus:border-[#3182CE] sm:text-lg transition-colors duration-200"
                  placeholder="Phone (Optional)"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-[#3182CE] focus:border-[#3182CE] sm:text-lg transition-colors duration-200"
                  placeholder="Please tell us your business objectives and our experts will find solutions that work."
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-lg font-bold text-white bg-[#3182CE] hover:bg-[#2a73b7] focus:outline-none focus:ring-4 focus:ring-[#3182CE] focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Call-to-Action Footer - Retained for general page CTA */}
      <footer className="bg-[#083E5E] text-white text-center py-16 md:py-24 rounded-t-3xl shadow-xl">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            💬 Ready to Build Intelligence That Drives Impact?
          </h2>
          <p className="mt-4 text-lg md:text-xl opacity-90 mb-10">
            Let’s partner to create custom insights that give you a strategic edge.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            <a
              href="#contact-form"
              className="inline-block bg-[#3182CE] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#2a73b7] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#3182CE] focus:ring-opacity-50"
            >
              📩 Request a Free Consultation
            </a>
            <a
              href="#contact-form"
              className="inline-block bg-gray-200 text-[#083E5E] font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-300 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50"
            >
              Share Your Requirements
            </a>
          </div>
          <p className="mt-12 text-sm opacity-70">
            Together, we’ll turn complex questions into clear, data-backed answers.
          </p>
        </div>
      </footer>
    </div>
  );
}