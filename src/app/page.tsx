import './styles/globals.css';
import CardProduct  from "../app/components/atoms/cardProduct";
import linkIcon from '../../assets/icons/tas.png';

export default function Page() {
  const data = {
    "linkIcon": linkIcon,
    "iconName": "Tas"
  }
  return (
    <h1 className="text-blue-600 text-3xl font-bold">
      Test
    </h1>
  )
}
