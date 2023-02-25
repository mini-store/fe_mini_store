import moduleName from "module";
import CardProduct from "../../atoms/cardProduct";

export default function CategoryProduct({ categories }: any[]) {
  return (
    <div className="flex flex-row justify-between">
      {categories.map((item, index) => {
        return <CardProduct {...item} key={index} />;
      })}
    </div>
  );
}
