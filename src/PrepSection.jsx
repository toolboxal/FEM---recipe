const PrepSection = () => {
  return (
    <section className="p-6 bg-Snow rounded-xl space-y-4">
      <h3 className="text-DarkRaspberry font-sans text-xl font-semibold">
        Preparation time
      </h3>
      <ul className="list-disc ml-5 space-y-4 text-BrandyRed">
        <li>
          <p className="inline-block pl-3">
            <span className="font-bold text-WengeBrown ">Total:&nbsp;</span>
            Approximately 10 minutes
          </p>
        </li>
        <li>
          <p className="inline-block pl-3">
            {' '}
            <span className="font-bold text-WengeBrown">
              Preparation:&nbsp;
            </span>
            5 minutes
          </p>
        </li>
        <li>
          <p className="inline-block pl-3">
            <span className="font-bold text-WengeBrown">Cooking:&nbsp;</span>5
            minutes
          </p>
        </li>
      </ul>
    </section>
  )
}
export default PrepSection
