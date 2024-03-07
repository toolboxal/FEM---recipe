const InstructionsSection = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-3xl text-BrandyRed">Instructions</h2>
      <ol className="text-BrandyRed list-decimal ml-5 space-y-4">
        <li className="pl-2">
          <p>
            <span className="inline-block font-bold text-WengeBrown">
              Beat the eggs:&nbsp;
            </span>
            In a bowl, beat the eggs with a pinch of salt and pepper until they
            are well mixed. You can add a tablespoon of water or milk for a
            fluffier texture.
          </p>
        </li>
        <li className="pl-2">
          <p>
            <span className="inline-block font-bold text-WengeBrown">
              Heat the pan:&nbsp;
            </span>
            Place a non-stick frying pan over medium heat and add butter or oil.
          </p>
        </li>
        <li className="pl-2">
          <p>
            <span className="inline-block font-bold text-WengeBrown">
              Cook the omelette:&nbsp;
            </span>
            Once the butter is melted and bubbling, pour in the eggs. Tilt the
            pan to ensure the eggs evenly coat the surface.
          </p>
        </li>
        <li className="pl-2">
          <p>
            <span className="inline-block font-bold text-WengeBrown">
              Add fillings (optional):&nbsp;
            </span>
            When the eggs begin to set at the edges but are still slightly runny
            in the middle, sprinkle your chosen fillings over one half of the
            omelette.
          </p>
        </li>
        <li className="pl-2">
          <p>
            <span className="inline-block font-bold text-WengeBrown">
              Fold and serve:&nbsp;
            </span>
            As the omelette continues to cook, carefully lift one edge and fold
            it over the fillings. Let it cook for another minute, then slide it
            onto a plate.
          </p>
        </li>
        <li className="pl-2">
          <p>
            <span className="inline-block font-bold text-WengeBrown">
              Enjoy:&nbsp;
            </span>
            Serve hot, with additional salt and pepper if needed.
          </p>
        </li>
      </ol>
    </section>
  )
}
export default InstructionsSection
