import Image from "next/image";

export default function CardProduct(param: any) {
  return (
    <button className="w-24 h-24 rounded-lg bg-neutral-100 justify-center items-center flex flex-col place-content-between hover:bg-slate-300">
          <Image src={param.linkIcon} alt={param.iconName} />
          <h1>{param.iconName}</h1>
    </button>
  );
}
