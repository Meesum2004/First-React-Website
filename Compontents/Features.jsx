function Feature ({features}) {   
    return (
<section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-white mb-20">
      Finance Guru Features
    </h1>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      {features.map((data) => (
        <div key={data.id} className="p-4 md:w-1/3 flex">
          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-green-400 mb-4 flex-shrink-0">
            {data.icon}
          </div>
          <div className="flex-grow pl-6 text-start">
            <h2 className="text-white text-lg title-font font-medium mb-2">
              {data.title}
            </h2>
            <p className="leading-relaxed text-base">
              {data.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    )
}

export default Feature;