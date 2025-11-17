import { produk } from "../data/produk";
import "./ProdukPage.css";

export default function ProdukPage() {
  return (
    <div className="produk-wrapper">
      <h1 className="produk-title">Our Products</h1>

      <div className="produk-grid">
        {produk.map((item) => (
          <div className="produk-card" key={item.id}>
            <img src={item.gambar} alt={item.nama} className="produk-img" />

            <h3>{item.nama}</h3>
            <p className="deskripsi">{item.deskripsi}</p>
            <span className="harga">Rp {item.harga.toLocaleString()}</span>

            <button className="btn-cart">Tambah ke Keranjang</button>
          </div>
        ))}
      </div>
    </div>
  );
}
