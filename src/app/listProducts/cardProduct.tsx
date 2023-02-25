export default function CardProduct(data: any) {

  return (
    <div>
      <button>
        <img
          src="https://akcdn.detik.net.id/visual/2021/03/09/tampil-stylish-dengan-5-inspirasi-outfit-hijab-basic-color-ala-selebgram_11.jpeg?w=480&q=90"
          alt={`${"image" + data.productName}`}
        />
        <div>
          <h3>{data.productName}</h3>
          <h3>{data.price}</h3>
        </div>
      </button>
    </div>
  );
}
