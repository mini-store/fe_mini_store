import "./styles/globals.css";
import CardProduct from "../app/components/atoms/cardProduct";
import linkIcon from "../../assets/icons/tas.png";
import CategoryProduct from "../app/components/molecules/categoryProduct";
import Link from "next/link";

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
      <h1>
        Section Banner
        Section All Product
      </h1>
      {/* @ts-expect-error Server Component */}
      <CategoryProduct categories={data} />
      <Link href="/listProducts">See More</Link>
    </div>
  )
}
