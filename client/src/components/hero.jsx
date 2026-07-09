const Herosection = () => {
  return (
    <>
      {/* background */}
      <section className="relative bg-slate-900">
        {/* white background with rounded corner */}
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-slate-800/80 px-5 py-2 shadow-lg backdrop-blur-md">
          {/* color change of the small orange dot */}
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

        <p className="absolute bottom-0 left-1/2 -translate-x-1/2 text-sm text-gray-400">
          Travelog is not a booking provider. We compare prices from Booking.com, Expedia, Agoda, Hotels.com, and Trip.com.
        </p>
        

      </section>
    </>
  )
}

export default Herosection
