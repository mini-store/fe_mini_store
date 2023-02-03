import './styles/globals.css';
import CardProduct  from "../app/components/atoms/cardProduct";
import linkIcon from '../../assets/icons/tas.png';

export default function Page() {
  const data = {
    "linkIcon": linkIcon,
    "iconName": "Tas"
  }
  return (
    <div>
      <h1>
        Section Banner
        Section All Product
      </h1>
      {/* @ts-expect-error Server Component */}
    </div>
  )
}
