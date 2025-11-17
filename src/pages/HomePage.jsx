import Permen from '../assets/Permen.jpg'

export default function HomePage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-[#F8F2EB] flex flex-col items-center justify-center px-6">
      
      {/* Hero */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-extrabold text-[#8B5E3C] drop-shadow-sm">
          Penjualan Permen GumBee
        </h1>

        <p className="mt-3 text-[#6E442A] text-lg">
          Gummy sehat dengan rasa lembut dan natural, cocok untuk semua usia 🍯
        </p>
      </div>

      {/* Image / Mascot */}
      <img
        src={Permen}
        alt="Candy illustration"
        className="w-56 mt-10 animate-bounce-slow"
      />

      {/* CTA Buttons */}
      <div className="mt-10 flex gap-4">
        <button
          onClick={() => onNavigate('produk')}
          className="bg-[#8B5E3C] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-[#6E442A] transition"
        >
          Lihat Produk
        </button>

        <button
          onClick={() => onNavigate('profile')}
          className="border border-[#8B5E3C] text-[#8B5E3C] px-6 py-3 rounded-xl font-semibold hover:bg-[#F2E6DA] transition"
        >
          Tentang Saya
        </button>
      </div>
    </div>
  );
}
