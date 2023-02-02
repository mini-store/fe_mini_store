import "./styles/globals.css";
import CardProduct from "../app/components/atoms/cardProduct";
import linkIcon from "../../assets/icons/tas.png";
import CategoryProduct from "../app/components/molecules/categoryProduct";

export default function Page() {
  const data = [
    {
      linkIcon: linkIcon,
      iconName: "Tas",
    },
    {
      linkIcon: linkIcon,
      iconName: "Sepatu",
    },
    {
      linkIcon: linkIcon,
      iconName: "Sepatu",
    },
    {
      linkIcon: linkIcon,
      iconName: "Sepatu",
    },
    {
      linkIcon: linkIcon,
      iconName: "Sepatu",
    },
  ];
  return (
    <div>
      <CategoryProduct categories={data} />
    </div>
  )
}
