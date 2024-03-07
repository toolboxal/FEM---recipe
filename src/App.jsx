import Divider from './Divider'
import HeaderSection from './HeaderSection'
import ImageSection from './ImageSection'
import IngredientsSection from './IngredientsSection'
import InstructionsSection from './InstructionsSection'
import NutritionSection from './NutritionSection'
import PrepSection from './PrepSection'

function App() {
  return (
    <main className="bg-EggShell md:py-32">
      <section className="max-w-[736px] mx-auto bg-white md:rounded-3xl overflow-hidden">
        <ImageSection />
        <div className="mx-8 my-10 space-y-8 md:mx-10">
          <HeaderSection />
          <PrepSection />
          <IngredientsSection />
          <Divider />
          <InstructionsSection />
          <Divider />
          <NutritionSection />
        </div>
      </section>
    </main>
  )
}

export default App
