import './styles/globals.css';
import CardProduct  from "../app/components/atoms/cardProduct";
import linkIcon from '../../assets/icons/tas.png';
import Banner from './components/homepage_section/Banner-1';

export default function Page() {
  const data = {
    "linkIcon": linkIcon,
    "iconName": "Tas"
  }
  return (
    <section>
      <div className='max-w-[1210px] m-auto grid'>
        <CardProduct/>
      </div>
      {/* @ts-expect-error Server Component */}
    </section>
  )
}
