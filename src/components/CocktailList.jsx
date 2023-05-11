import Loading from "./Loading";
import Cocktails from "./Cocktails";
import { useGlobalContext } from "../Context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  console.log(cocktails);

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <Cocktails key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};
export default CocktailList;
