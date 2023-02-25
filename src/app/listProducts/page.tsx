import CardProduct from "./cardProduct";
import { InputRadio, InputRange } from "../components/atoms/inputType";

export default function ListProducts() {
  const handleInputType = (inputType, params) => {
    switch (inputType) {
      case "radio":
        return InputRadio(inputType, params);
      case "range":
        return InputRange(inputType, params);
    }
  };

  return (
    <div className="flex flex-row">
      <div className="w-52">
        {filterMethods.map((item, key) => {
          return (
            <div key={key.toString()} className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>{item.methodName}</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                {item.points.map((point, index) => {
                  return (
                    <div key={index.toString()}>
                      <input
                        id={point}
                        type={item.inputType}
                        value={point}
                        name="default-radio"
                        className="w-25 checked:bg-blue-500"
                      />
                      <label
                        htmlFor={point}
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {point}
                      </label>
                    </div>
                  );
                })}
              </details>
            </div>
          );
        })}
      </div>
      <div>
        <h5>Home | List Producst</h5>
        <h1>Products</h1>
        <h4>121 Product</h4>
        <div className="flex flex-row">
          {dummyProducts.map((value, index) => {
            return <CardProduct key={index} {...value} />;
          })}
        </div>
      </div>
    </div>
  );
}

let filterMethods: {
  methodName: string;
  points: string[];
  inputType: string;
}[] = [
  {
    methodName: "FILTER BY CATEGORY",
    points: ["Pria", "Wanita"],
    inputType: "radio",
  },
  {
    methodName: "PRICE",
    points: [],
    inputType: "range",
  },
  {
    methodName: "SIZE",
    points: ["S", "M", "L", "X", "XXL", "Oversize", "No Size"],
    inputType: "radio",
  },
];

let dummyProducts: {
  productName: string;
  price: number;
  description: string;
}[] = [
  {
    productName: "EIGER BLA BLA BLA",
    price: 349.0,
    description: "Eiger terbaik di dunia, aku cinta eiger ahahahahaha",
  },
  {
    productName: "EIGER BLA BLA BLA",
    price: 349.0,
    description: "Eiger terbaik di dunia, aku cinta eiger ahahahahaha",
  },
  {
    productName: "EIGER BLA BLA BLA",
    price: 349.0,
    description: "Eiger terbaik di dunia, aku cinta eiger ahahahahaha",
  },
  {
    productName: "EIGER BLA BLA BLA",
    price: 349.0,
    description: "Eiger terbaik di dunia, aku cinta eiger ahahahahaha",
  },
];
