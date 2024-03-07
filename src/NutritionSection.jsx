const NutritionSection = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-3xl text-DarkRaspberry">Nutrition</h2>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table className="table-fixed  w-full border-collapse">
        <tbody>
          <tr className="border-b-[1px] border-WhiteCoffee">
            <td className="pl-7 text-WengeBrown py-2">Calories</td>
            <td className="pl-2 text-BrandyRed font-semibold py-2">277kcal</td>
          </tr>
          <tr className="border-b-[1px] border-WhiteCoffee">
            <td className="pl-7 text-WengeBrown py-2">Carbs</td>
            <td className="pl-2 text-BrandyRed font-semibold py-2">0g</td>
          </tr>
          <tr className="border-b-[1px] border-WhiteCoffee">
            <td className="pl-7 text-WengeBrown py-2">Protein</td>
            <td className="pl-2 text-BrandyRed font-semibold py-2">20g</td>
          </tr>
          <tr className=" border-WhiteCoffee">
            <td className="pl-7 text-WengeBrown py-2">Fat</td>
            <td className="pl-2 text-BrandyRed font-semibold py-2">22g</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
export default NutritionSection
