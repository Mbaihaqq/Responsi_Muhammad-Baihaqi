export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#F8F2EB] flex flex-col items-center px-6 py-12">
      <h1 className="text-3xl font-bold text-[#8B5E3C] mb-8">
        Profil
      </h1>

      <div className="bg-[#FDF9F4] rounded-2xl p-8 shadow-md w-full max-w-xl border border-[#E8DCCD]">
        <p className="text-lg mb-2">
          <span className="font-semibold text-[#8B5E3C]">Nama:</span> Muhammad Baihaqi
        </p>

        <p className="text-lg mb-2">
          <span className="font-semibold text-[#8B5E3C]">NIM:</span> 21120123140120
        </p>

        <p className="text-lg mb-4">
          <span className="font-semibold text-[#8B5E3C]">Kelompok:</span> 15
        </p>
      </div>
    </div>
  );
}
