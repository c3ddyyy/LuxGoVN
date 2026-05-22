import Link from "next/link";
import { useState } from "react";

interface FleetItem {
  id: number;
  title: string;
  submodels: string;
  image: string;
  years: string;
  seats: string;
  engine: string;
  transmission: string;
  Serve: string;
  description: string;
  typeText: string;
  price: string;
}

const FLEET_DATA: FleetItem[] = [
    {
    id: 1,
    title: "Honda & Toyota",
    submodels: "CR-V / Civic / Camry",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=600",
    years: "2022 - 2025",
    seats: "5 - 7 Chỗ",
    engine: "Xăng VTEC / Hybrid",
    transmission: "Vô cấp CVT / Tự động",
    Serve:"Tự lái, Có tài, Xe Cưới",
    description:
      "Bền bỉ, an tâm, không gian rộng rãi tối ưu chi phí cho gia đình hoặc đưa đón nhóm công tác.",
    typeText: "Tối ưu chi phí",
    price: "800k/ngày",
  },
  {
    id: 2,
    title: "Mercedes-Benz",
    submodels: "C-Class / E-Class",
    image:
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=600",
    years: "2022 - 2024",
    seats: "5 Chỗ",
    engine: "Xăng Tăng Áp",
    transmission: "Tự Động 9 Cấp",
    Serve:"Tự lái, Có tài,",
    description:
      "Lịch lãm, cao cấp, khẳng định vị thế. Dành cho các buổi gặp gỡ đối tác, đi ngoại tỉnh sang trọng.",
    typeText: "Tự lái & Có tài",
    price: "1.6Tr/ngày",
  },
  {
    id: 3,
    title: "BMW 3-Series",
    submodels: "320i / 330i Sport",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=600",
    years: "2023 - 2025",
    seats: "5 Chỗ",
    engine: "TwinPower Turbo",
    transmission: "Tự Động Thể Thao",
    Serve:"Tự lái, Có tài, Xe Cưới",
    description:
      "Đậm chất thể thao, năng động và thời thượng. Cảm giác lái chính xác và đầm chắc.",
    typeText: "Hỗ trợ tự lái",
    price: "1.8Tr/ngày",
  },
  {
    id: 4,
    title: "Honda & Toyota",
    submodels: "CR-V / Civic / Camry",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=600",
    years: "2022 - 2025",
    seats: "5 - 7 Chỗ",
    engine: "Xăng VTEC / Hybrid",
    transmission: "Vô cấp CVT / Tự động",
    Serve:"Tự lái, Có tài, Xe Cưới",
    description:
      "Bền bỉ, an tâm, không gian rộng rãi tối ưu chi phí cho gia đình hoặc đưa đón nhóm công tác.",
    typeText: "Tối ưu chi phí",
    price: "800k/ngày",
  },
    {
    id: 5,
    title: "Honda & Toyota",
    submodels: "CR-V / Civic / Camry",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=600",
    years: "2022 - 2025",
    seats: "5 - 7 Chỗ",
    engine: "Xăng VTEC / Hybrid",
    transmission: "Vô cấp CVT / Tự động",
    Serve:"Tự lái",
    description:
      "Bền bỉ, an tâm, không gian rộng rãi tối ưu chi phí cho gia đình hoặc đưa đón nhóm công tác.",
    typeText: "Tối ưu chi phí",
    price: "800k/ngày",
  },
    {
    id: 6,
    title: "Honda & Toyota",
    submodels: "CR-V / Civic / Camry",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=600",
    years: "2022 - 2025",
    seats: "5 - 7 Chỗ",
    engine: "Xăng VTEC / Hybrid",
    transmission: "Vô cấp CVT / Tự động",
    Serve:"Tự lái, Có tài, Xe Cưới",
    description:
      "Bền bỉ, an tâm, không gian rộng rãi tối ưu chi phí cho gia đình hoặc đưa đón nhóm công tác.",
    typeText: "Tối ưu chi phí",
    price: "800k/ngày",
  },
    {
    id: 7,
    title: "Honda & Toyota",
    submodels: "CR-V / Civic / Camry",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=600",
    years: "2022 - 2025",
    seats: "5 - 7 Chỗ",
    engine: "Xăng VTEC / Hybrid",
    transmission: "Vô cấp CVT / Tự động",
    Serve:"Tự lái, Có tài",
    description:
      "Bền bỉ, an tâm, không gian rộng rãi tối ưu chi phí cho gia đình hoặc đưa đón nhóm công tác.",
    typeText: "Tối ưu chi phí",
    price: "800k/ngày",
  },
    {
    id: 8,
    title: "Honda & Toyota",
    submodels: "CR-V / Civic / Camry",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=600",
    years: "2022 - 2025",
    seats: "5 - 7 Chỗ",
    engine: "Xăng VTEC / Hybrid",
    transmission: "Vô cấp CVT / Tự động",
    Serve:"Tự lái, Có tài, Xe Cưới",
    description:
      "Bền bỉ, an tâm, không gian rộng rãi tối ưu chi phí cho gia đình hoặc đưa đón nhóm công tác.",
    typeText: "Tối ưu chi phí",
    price: "800k/ngày",
  },
      {
    id: 9,
    title: "Honda & Toyota",
    submodels: "CR-V / Civic / Camry",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=600",
    years: "2022 - 2025",
    seats: "5 - 7 Chỗ",
    engine: "Xăng VTEC / Hybrid",
    transmission: "Vô cấp CVT / Tự động",
    Serve:"Tự lái, Có tài, Xe Cưới",
    description:
      "Bền bỉ, an tâm, không gian rộng rãi tối ưu chi phí cho gia đình hoặc đưa đón nhóm công tác.",
    typeText: "Tối ưu chi phí",
    price: "800k/ngày",
  },
];

export default function CarForRental() {
  const [selectedFleetItem, setSelectedFleetItem] = useState<FleetItem | null>(
    null,
  );

  return (
    <section
      id="fleet"
      className="py-24 bg-white border-t border-zinc-200 relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-4">
            <span className="text-zinc-500 text-xs tracking-[0.3em] uppercase block font-bold">
              Lựa chọn thực tế
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-zinc-900">
              Dòng Xe Cho Thuê
            </h2>
          </div>
          <p className="text-zinc-600 text-base max-w-md font-medium leading-relaxed">
            Vận hành êm ái, được vệ sinh sạch
            sẽ tuyệt đối trước khi bàn giao. Phục vụ tự lái hoặc có tài xế chu
            đáo.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FLEET_DATA.slice(0, 8).map((car) => (
            <div
              key={car.id}
              className="bg-zinc-50 border border-zinc-200 hover:border-zinc-400 hover:shadow-md transition-all duration-300 p-6 flex flex-col justify-between rounded"
            >
              <div className="space-y-4">
                <div className="aspect-[16/10] bg-zinc-200 overflow-hidden mb-4 rounded shadow-inner">
                  <img
                    src={car.image}
                    alt={car.title}
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                  />
                </div>
                <h3 className="font-serif text-2xl font-bold text-zinc-900">
                  {car.title}
                </h3>
                <p className="text-[11px] text-zinc-500 tracking-wider uppercase font-bold">
                  {car.submodels}
                </p>

                {/* Specifications */}
                <div className="border-t border-b border-zinc-200/60 py-2.5 my-2 space-y-1 text-xs text-zinc-600 font-medium">
                  <div className="flex justify-between">
                    <span>Đời xe:</span>
                    <strong className="text-zinc-900">{car.years}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Số ghế:</span>
                    <strong className="text-zinc-900">{car.seats}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Động cơ:</span>
                    <strong className="text-zinc-900">{car.engine}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Hộp số:</span>
                    <strong className="text-zinc-900">
                      {car.transmission}
                    </strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Phục vụ</span>
                    <strong className="text-zinc-900">
                      {car.Serve}
                    </strong>
                  </div>
                </div>

              </div>
              <div className="pt-6 border-t border-zinc-200 flex flex-col gap-3">
                <div className="flex justify-between items-center text-xs font-bold text-zinc-800">
                  <span>{car.typeText}</span>
                  <span className="text-zinc-500">
                    Khoảng giá từ:{" "}
                    <strong className="text-black">{car.price}</strong>
                  </span>
                </div>
                <button
                  onClick={() => setSelectedFleetItem(car)}
                  className="w-full text-center bg-black hover:bg-zinc-800 text-white text-xs uppercase tracking-widest py-3 font-bold transition rounded"
                >
                  Xem Chi Tiết & Báo Giá
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link
            href="/xethue"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white uppercase tracking-[0.2em] text-xs font-bold hover:bg-zinc-800 transition-all duration-300 rounded"
          >
            Xem Thêm Xe
          </Link>
        </div>
        {/* ================= POPUP MODAL: DETAILED FLEET ================= */}
        {selectedFleetItem && (
          <div
            onClick={() => setSelectedFleetItem(null)}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
          >
            <div className="bg-white border border-zinc-300 w-full max-w-lg p-8 relative rounded shadow-2xl">
              <button
                onClick={() => setSelectedFleetItem(null)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-black font-bold text-lg"
              >
                ✕
              </button>
              <span className="text-[10px] tracking-widest uppercase font-bold text-zinc-400 block mb-1">
                Chi tiết dòng xe
              </span>
              <h3 className="font-serif text-3xl font-bold text-zinc-900 mb-2">
                {selectedFleetItem.title}
              </h3>
              <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider mb-6">
                {selectedFleetItem.submodels}
              </p>

              <div className="aspect-[16/10] w-full overflow-hidden bg-zinc-100 border border-zinc-200 mb-6 rounded">
                <img
                  src={selectedFleetItem.image}
                  alt={selectedFleetItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2 text-sm text-zinc-700 border-b border-zinc-200 pb-4 font-medium">
                <div className="flex justify-between">
                  <span>Năm sản xuất:</span>
                  <strong>{selectedFleetItem.years}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Số chỗ ngồi:</span>
                  <strong>{selectedFleetItem.seats}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Hệ thống truyền động:</span>
                  <strong>{selectedFleetItem.engine}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Hộp số cơ cấu:</span>
                  <strong>{selectedFleetItem.transmission}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Phục vụ</span>
                  <strong className="text-black text-base">{selectedFleetItem.Serve}</strong>
                  </div>
                <div className="flex justify-between pt-2 border-t border-zinc-100">
                  <span>Khoảng giá tham khảo:</span>
                  <strong className="text-black text-base">
                    {selectedFleetItem.price}
                  </strong>
                </div>
              </div>

              <p className="text-xs text-zinc-500 mt-4 leading-relaxed italic">
                *Báo giá chính xác phụ thuộc vào việc tự lái hay có tài xế, thời
                gian thuê và quãng đường di chuyển thực tế. Vui lòng liên hệ bộ
                phận CSKH để nhận thông tin chuẩn nhất.
              </p>

              <div className="mt-6">
                <a
                  href="https://zalo.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-black hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-widest py-3.5 transition rounded"
                >
                  Nhận Báo Giá Chi Tiết Qua Zalo
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
