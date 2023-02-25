import './styles/globals.css';
import CardProduct  from "../app/components/atoms/cardProduct";
import linkIcon from '../../assets/icons/tas.png';

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
    <section>
      <div className='max-w-[1210px] m-auto grid'>
        <CardProduct/>
      </div>
    </section>
  )
}
