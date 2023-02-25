import Link from 'next/link';

export default function Footer() {
  return (
    <section>
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-black'>
        <div>
          <h2 className='font-bold text-xl'>BANTUAN</h2>
          <ul>
            <li>
              <Link href='/'>Pengiriman</Link>
            </li>
            <li>
              <Link href='/'>Pembayaran</Link>
            </li>
            <li>
              <Link href='/'>Syarat dan Ketentuan</Link>
            </li>
            <li>
              <Link href='/'>Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='font-bold text-xl'>UPH STORE</h2>
          <ul>
            <li>
              <Link href='/'>Tentang Kami</Link>
            </li>
            <li>
              <Link href='/'>Karir</Link>
            </li>
            <li>
              <Link href='/'>Lokasi UPH Store</Link>
            </li>
            <li>
              <Link href='/'>Whatsapp Shopping</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='font-bold text-xl'>LAYANAN PELANGAN</h2>
          <ul>
            <li>09.00 - 17.00</li>
            <li>
              <Link href='/'>customerservice@uphstore.com</Link>
            </li>
            <li>
              <Link href='/'>Lacak Pesanan</Link>
            </li>
          </ul>
        </div>
        {/* <div>
          <h2>DAPATKAN PROMO TERBARU DAN INFO LAINNYA DENGAN MENDAFTARKAN EMAILMU!</h2>
        </div> */}
      </div>
      <div className='flex flex-col items-center justify-center m-auto'>
              <div className='mt-5'>
                  <p className='text-xs sm:text-[14px] text-main-text'>
                      copyright &copy; {new Date().getFullYear()} UPH STORE. All Rights Reserved.
                  </p>
              </div>
          </div>
    </section>
  )
}
