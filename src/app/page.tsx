import { getDataAction } from "@/actions/data";
import CardDasboard from "@/components/CardDasboard";
import CardRestItem from "@/components/CardRestItem";

export default async function Home() {
  const restaurant = await getDataAction();
  const plusRest = restaurant.filter((rest) => rest.rating >= 3);
  return (
    <div className="grid grid-rows-[auto-fill,1fr] ">
      <section className="flex flex-row justify-center gap-10">
        <CardDasboard title="Restaurantes" value={restaurant.length} />
        <CardDasboard title="Recomendados" value={plusRest.length} />
      </section>

      <section>
        <CardRestItem data={restaurant} />
      </section>
    </div>
  );
}
