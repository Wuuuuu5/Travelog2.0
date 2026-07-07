export function Herosection() {
  return (
    <>
      {/* This is the background */}
      <section className="relative bg-slate-900">
        {/* This is the white background with rounded corner */}
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-slate-800/80 px-5 py-2 shadow-lg backdrop-blur-md">
          {/* This is the color change of the small orange dot */}
          <div className="h-2.5 w-2.5 rounded-full bg-orange-500"></div>
          <span className="text-sm font-semibold text-gray-100">
            Comparing 5 booking providers across Aotearoa
          </span>
        </div>
        <div className="relative container mx-auto px-4 py-32 text-white">
          <h1 className="text-5xl font-bold">
            Every New Zealand <br /> hotel price in <br /> one search.
          </h1>
          <p className="mt-4 text-lg">
            Travelog scans listings across New Zealand's booking sites, then <br />
            shows you the best price in NZD, real availability, and exactly <br />
            where each stay sits on the map — from the Bay of Islands <br />
            to Fiordland.
          </p>
        </div>

        <div className="relative container mx-auto px-4 py-32 text-white">
          <h1 className="text-5xl font-bold">
            Every New Zealand <br /> hotel price in <br /> one search.
          </h1>
          <p className="mt-4 text-lg">
            Travelog scans listings across New Zealand's booking sites, then <br />
            shows you the best price in NZD, real availability, and exactly <br />
            where each stay sits on the map — from the Bay of Islands <br />
            to Fiordland.
          </p>
        </div>
        

      </section>
    </>
  )
}
