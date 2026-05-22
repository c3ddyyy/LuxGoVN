"use client";

import React, { useState } from "react";

// --- Kiểu dữ liệu (TypeScript Interfaces) ---
interface FleetItem {
  id: number;
  title: string;
  submodels: string;
  image: string;
  years: string;
  seats: string;
  engine: string;
  transmission: string;
  description: string;
  typeText: string;
  price: string;
}

interface GalleryItem {
  id: number;
  category: "car" | "wedding" | "moments";
  image: string;
  alt: string;
}

// --- Dữ liệu Mock Data ---
const FLEET_DATA: FleetItem[] = [
  {
    id: 1,
    title: "Xe Điện VinFast",
    submodels: "VF8 / VF9 / VF5",
    image: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&q=80&w=600",
    years: "2023 - 2025",
    seats: "5 - 7 Chỗ",
    engine: "Thuần Điện",
    transmission: "Tự Động",
    description: "Êm ái, hiện đại, không mùi xăng xe. Thích hợp đi phố hoặc công tác đô thị lịch sự.",
    typeText: "Tự lái & Có tài",
    price: "700k/ngày",
  },
  {
    id: 2,
    title: "Mercedes-Benz",
    submodels: "C-Class / E-Class",
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=600",
    years: "2022 - 2024",
    seats: "5 Chỗ",
    engine: "Xăng Tăng Áp",
    transmission: "Tự Động 9 Cấp",
    description: "Lịch lãm, cao cấp, khẳng định vị thế. Dành cho các buổi gặp gỡ đối tác, đi ngoại tỉnh sang trọng.",
    typeText: "Tự lái & Có tài",
    price: "1.6Tr/ngày",
  },
  {
    id: 3,
    title: "BMW 3-Series",
    submodels: "320i / 330i Sport",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=600",
    years: "2023 - 2025",
    seats: "5 Chỗ",
    engine: "TwinPower Turbo",
    transmission: "Tự Động Thể Thao",
    description: "Đậm chất thể thao, năng động và thời thượng. Cảm giác lái chính xác và đầm chắc.",
    typeText: "Hỗ trợ tự lái",
    price: "1.8Tr/ngày",
  },
  {
    id: 4,
    title: "Honda & Toyota",
    submodels: "CR-V / Civic / Camry",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=600",
    years: "2022 - 2025",
    seats: "5 - 7 Chỗ",
    engine: "Xăng VTEC / Hybrid",
    transmission: "Vô cấp CVT / Tự động",
    description: "Bền bỉ, an tâm, không gian rộng rãi tối ưu chi phí cho gia đình hoặc đưa đón nhóm công tác.",
    typeText: "Tối ưu chi phí",
    price: "800k/ngày",
  },
];

const GALLERY_DATA: GalleryItem[] = [
  {
    id: 1,
    category: "car",
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=600",
    alt: "Dòng xe sedan cao cấp thực tế",
  },
  {
    id: 2,
    category: "wedding",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600",
    alt: "Trang trí xe hoa cưới nghệ thuật",
  },
  {
    id: 3,
    category: "moments",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600",
    alt: "Bàn giao xe thực tế sạch sẽ tinh tươm",
  },
  {
    id: 4,
    category: "car",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=600",
    alt: "Bàn giao dòng xe thể thao BMW",
  },
  {
    id: 5,
    category: "wedding",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=600",
    alt: "Mẫu hoa cưới tone màu ngọt ngào tinh tế",
  },
  {
    id: 6,
    category: "moments",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=600",
    alt: "Đội ngũ LuxGo chuẩn bị chu đáo trước giờ xuất phát",
  },
];

export default function LuxuryRentalPage() {
  // --- States quản lý trạng thái giao diện ---
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [galleryFilter, setGalleryFilter] = useState<string>("all");
  const [selectedFleetItem, setSelectedFleetItem] = useState<FleetItem | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Lọc danh sách hình ảnh theo danh mục đã chọn
  const filteredGallery = GALLERY_DATA.filter(
    (item) => galleryFilter === "all" || item.category === galleryFilter
  );

  return (
    <div className="antialiased selection:bg-black selection:text-white overflow-x-hidden bg-white text-zinc-900 min-h-screen">
      
      {/* ================= HEADER SECTION ================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-zinc-200/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex flex-col tracking-widest text-left">
            <span className="font-serif text-2xl font-bold text-zinc-900 tracking-[0.25em] uppercase">LuxGo</span>
            <span className="text-[9px] text-zinc-500 tracking-[0.6em] uppercase -mt-1 pl-0.5">Vietnam</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-10 text-xs tracking-widest uppercase font-semibold text-zinc-700">
            <a href="#about" className="hover:text-black transition-colors duration-300">Chúng Tôi</a>
            <a href="#fleet" className="hover:text-black transition-colors duration-300">Dòng Xe Cho Thuê</a>
            <a href="#wedding-cars" className="hover:text-black transition-colors duration-300">Xe Hoa & Hoa Tươi</a>
            <a href="#gallery" className="hover:text-black transition-colors duration-300">Thư Viện Ảnh</a>
            <a href="#contact" className="hover:text-black transition-colors duration-300">Liên Hệ</a>
          </nav>

          {/* Quick Access CTAs */}
          <div className="hidden lg:flex items-center space-x-6 text-sm">
            <a href="https://zalo.me" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-black transition-colors duration-300 font-medium">
              <span className="text-xs uppercase tracking-wider border-b border-zinc-400 pb-0.5">Chat Zalo</span>
            </a>
            <a href="#contact" className="bg-black text-white text-xs uppercase tracking-widest px-5 py-2.5 font-bold hover:bg-zinc-800 transition-all duration-300">
              Liên Hệ Ngay
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-zinc-800 hover:text-black focus:outline-none" 
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1.8" 
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-zinc-200 px-6 py-6 transition-all duration-300 shadow-lg">
            <nav className="flex flex-col space-y-4 text-sm tracking-widest uppercase font-bold text-zinc-800">
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-black py-2">Chúng Tôi</a>
              <a href="#fleet" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-black py-2">Dòng Xe Cho Thuê</a>
              <a href="#wedding-cars" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-black py-2">Xe Hoa & Hoa Tươi</a>
              <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-black py-2">Thư Viện Ảnh</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-black py-2">Liên Hệ</a>
              <div className="pt-4 border-t border-zinc-100 flex flex-col gap-3">
                <a href="https://zalo.me" target="_blank" rel="noopener noreferrer" className="text-center bg-zinc-100 border border-zinc-300 text-zinc-900 text-xs uppercase tracking-widest py-3 hover:bg-zinc-200 transition font-bold">
                  Chat Zalo
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* ================= HERO SECTION ================= */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-white pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-100"></div>
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 py-12">
          {/* Left Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-8">
            <div className="inline-flex items-center space-x-2 text-zinc-500 text-xs tracking-[0.2em] uppercase font-semibold">
              <span className="w-8 h-[1px] bg-zinc-400"></span>
              <span>Car Rental & Dedicated Wedding Styling</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-zinc-900 leading-[1.1] tracking-tight">
              Đơn Giản.<br />
              <span className="italic text-zinc-500 font-normal">Thực Tế.</span>
            </h1>
            
            <p className="text-zinc-700 text-base leading-relaxed max-w-lg font-medium">
              LuxGo Vn cung cấp dịch vụ cho thuê các dòng xe đời mới hiện đại và trang trí hoa xe cưới thiết kế riêng. Không phô trương, chúng tôi tập trung vào sự chỉn chu, đúng giờ và chất lượng thực tế.
            </p>

            {/* Navigation CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="#gallery" className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 font-bold hover:bg-zinc-800 transition-all duration-300 shadow-md">
                Xem Thư Viện Thực Tế
              </a>
              <a href="#contact" className="border border-zinc-300 text-zinc-900 hover:border-black text-xs uppercase tracking-widest px-8 py-4 font-bold transition-all duration-300">
                Liên Hệ Trao Đổi
              </a>
            </div>

            {/* Stats summary */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-zinc-200 max-w-md">
              <div>
                <div className="font-serif text-3xl font-bold text-zinc-900">30+</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1 font-bold">Dòng xe Đời Mới</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold text-zinc-900">150+</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1 font-bold">Dự án Xe Hoa</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold text-zinc-900">100%</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1 font-bold">Hài lòng thực tế</div>
              </div>
            </div>
          </div>

          {/* Right Visual Panel */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            <div className="relative w-full aspect-[4/5] bg-zinc-100 border border-zinc-200 overflow-hidden group shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=1200" 
                alt="LuxGo Premium Sedan Fleet" 
                className="w-full h-full object-cover opacity-95 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Caption overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white">
                <div>
                  <p className="text-[10px] tracking-[0.2em] text-zinc-300 uppercase font-semibold">Dòng Xe Phổ Biến</p>
                  <h3 className="font-serif text-xl font-bold text-white mt-1">Mercedes-Benz C-Class & VinFast VF8</h3>
                </div>
                <span className="text-xs font-serif italic text-zinc-200">Đời Mới Sạch Sẽ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="py-24 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-zinc-500 text-xs tracking-[0.3em] uppercase block font-bold">Giới thiệu về chúng tôi</span>
              <h2 className="font-serif text-4xl md:text-5xl text-zinc-900 leading-tight">Dịch Vụ Cho Thuê Xe <br /><span className="italic text-zinc-500 font-normal">Thực Tế & Chỉn Chu</span></h2>
              <p className="text-zinc-700 text-base leading-relaxed font-medium">
                Tại LuxGo Vn, chúng tôi hiểu rằng nhu cầu di chuyển và ngày cưới cần sự chính xác, an toàn và mức giá hợp lý. Chúng tôi không cung cấp những dòng siêu xe xa xỉ không thực tế, thay vào đó là đội xe đời mới, sạch sẽ tuyệt đối từ các thương hiệu quen thuộc: <strong>VinFast, Honda, BMW và Mercedes</strong>.
              </p>
              <p className="text-zinc-700 text-base leading-relaxed font-medium">
                Quy trình đơn giản, không thủ tục rườm rà. Chúng tôi tập trung mang lại những trải nghiệm thực tế xuất sắc nhất, đúng giờ hẹn và cam kết chất lượng xe chuẩn chỉ tối đa.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-white border border-zinc-200 overflow-hidden shadow-sm">
                <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600" alt="Sạch sẽ tinh tươm" className="w-full h-full object-cover hover:scale-105 transition-all duration-500" />
              </div>
              <div className="aspect-square bg-white border border-zinc-200 overflow-hidden shadow-sm">
                <img src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=600" alt="Bảo dưỡng kỹ càng" className="w-full h-full object-cover hover:scale-105 transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FLEET SECTION ================= */}
      <section id="fleet" className="py-24 bg-white border-t border-zinc-200 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="space-y-4">
              <span className="text-zinc-500 text-xs tracking-[0.3em] uppercase block font-bold">Lựa chọn thực tế</span>
              <h2 className="font-serif text-4xl md:text-5xl text-zinc-900">Dòng Xe Cho Thuê</h2>
            </div>
            <p className="text-zinc-600 text-base max-w-md font-medium leading-relaxed">
              Đội xe hiện đại đa dạng phân khúc, vận hành êm ái, được vệ sinh sạch sẽ tuyệt đối trước khi bàn giao. Phục vụ tự lái hoặc có tài xế chu đáo.
            </p>
          </div>

          {/* Fleet Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FLEET_DATA.map((car) => (
              <div key={car.id} className="bg-zinc-50 border border-zinc-200 hover:border-zinc-400 hover:shadow-md transition-all duration-300 p-6 flex flex-col justify-between rounded">
                <div className="space-y-4">
                  <div className="aspect-[16/10] bg-zinc-200 overflow-hidden mb-4 rounded shadow-inner">
                    <img src={car.image} alt={car.title} className="w-full h-full object-cover hover:scale-105 transition-all duration-500" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-zinc-900">{car.title}</h3>
                  <p className="text-[11px] text-zinc-500 tracking-wider uppercase font-bold">{car.submodels}</p>
                  
                  {/* Specifications */}
                  <div className="border-t border-b border-zinc-200/60 py-2.5 my-2 space-y-1 text-xs text-zinc-600 font-medium">
                    <div className="flex justify-between"><span>Đời xe:</span><strong className="text-zinc-900">{car.years}</strong></div>
                    <div className="flex justify-between"><span>Số ghế:</span><strong className="text-zinc-900">{car.seats}</strong></div>
                    <div className="flex justify-between"><span>Động cơ:</span><strong className="text-zinc-900">{car.engine}</strong></div>
                    <div className="flex justify-between"><span>Hộp số:</span><strong className="text-zinc-900">{car.transmission}</strong></div>
                  </div>

                  <p className="text-zinc-700 text-sm font-medium leading-relaxed">
                    {car.description}
                  </p>
                </div>
                <div className="pt-6 border-t border-zinc-200 mt-6 flex flex-col gap-3">
                  <div className="flex justify-between items-center text-xs font-bold text-zinc-800">
                    <span>{car.typeText}</span>
                    <span className="text-zinc-500">Khoảng giá từ: <strong className="text-black">{car.price}</strong></span>
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
        </div>
      </section>

      {/* ================= WEDDING CARS SECTION ================= */}
      <section id="wedding-cars" className="py-24 bg-zinc-50 border-t border-zinc-200 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Details */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <span className="text-zinc-500 text-xs tracking-[0.3em] uppercase block font-bold">Dịch vụ ngày cưới trọng đại</span>
                <h2 className="font-serif text-4xl md:text-5xl text-zinc-900 leading-tight font-bold">Xe Hoa Cưới & <br /><span className="italic text-zinc-500 font-normal">Trang Trí Hoa Thiết Kế</span></h2>
                <div className="h-[2px] w-12 bg-black my-4"></div>
                <p className="text-zinc-700 text-base leading-relaxed font-medium">
                  Chúng tôi hiểu rằng ngày cưới cần sự tập trung tuyệt đối. Vì vậy, <strong>chúng tôi không nhận tổ chức sự kiện tiệc cưới toàn phần</strong>. Chúng tôi chỉ tập trung làm tốt nhất một việc duy nhất: <strong>Cung cấp xe hoa cưới đời mới và trực tiếp thiết kế, cắm hoa trang trí lên xe</strong> theo phong cách yêu cầu của bạn.
                </p>
                <p className="text-zinc-700 text-base leading-relaxed font-medium">
                  Bạn có thể chọn gói hoa tươi nghệ thuật rực rỡ nhập khẩu hoặc hoa lụa cao cấp tối giản nhưng vô cùng tinh tế và bền bỉ khi di chuyển đường dài.
                </p>
              </div>

              {/* Pricing Block */}
              <div className="p-6 bg-white border border-zinc-200 rounded shadow-sm space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-xs uppercase tracking-wider text-zinc-500 font-bold">Chi Phí Thuê Xe Hoa & Trang Trí:</span>
                  <span className="inline-block bg-black text-white text-xs uppercase tracking-widest font-bold px-4 py-1 rounded">Liên hệ báo giá</span>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed font-semibold">
                  *Do nhu cầu trang trí hoa khác biệt giữa hoa tươi theo mùa, hoa lụa và lộ trình di chuyển (nội thành / đi tỉnh) của mỗi gia đình, vui lòng liên hệ trực tiếp với chúng tôi để nhận báo giá cá nhân hóa nhanh gọn nhất.
                </p>
              </div>

              {/* Unique Selling Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-zinc-200">
                <div className="space-y-2">
                  <h4 className="font-serif text-zinc-900 text-lg font-bold">Gắn kết cực kỳ an toàn</h4>
                  <p className="text-zinc-600 text-sm leading-relaxed font-medium">
                    Sử dụng đế hít chân không và băng keo chuyên dụng, đảm bảo hoa cố định chắc chắn khi chạy tốc độ cao và tuyệt đối không trầy xước sơn xe của bạn.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-serif text-zinc-900 text-lg font-bold">Thiết kế theo tone màu</h4>
                  <p className="text-zinc-600 text-sm leading-relaxed font-medium">
                    Tư vấn và cắm hoa theo đúng tone màu chủ đạo của tiệc cưới (Trắng tinh khôi, Đỏ truyền thống, Hồng pastel, Cam hiện đại).
                  </p>
                </div>
              </div>
            </div>

            {/* Right Visual Panel */}
            <div className="lg:col-span-6">
              <div className="relative w-full aspect-[4/3] bg-white border border-zinc-200 overflow-hidden group shadow-lg rounded">
                <img 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200" 
                  alt="Trang trí xe hoa cưới thực tế" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-[9px] tracking-[0.2em] text-zinc-300 uppercase font-semibold">Mẫu Thực Tế Đã Giao</p>
                  <h3 className="font-serif text-lg font-bold mt-1">Xe Cưới Trắng & Dải Hoa Hồng Tươi Pastel</h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= GALLERY SECTION ================= */}
      <section id="gallery" className="py-24 bg-white border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-zinc-500 text-xs tracking-[0.3em] uppercase block font-bold">Hình ảnh chụp thực tế</span>
            <h2 className="font-serif text-4xl md:text-5xl text-zinc-900">Thư Viện Sản Phầm</h2>
            <div className="h-[2px] w-24 bg-black mx-auto mt-6"></div>
            <p className="text-zinc-600 text-base font-medium leading-relaxed">
              Tổng hợp các hình ảnh chân thực từ đội xe thực tế và mẫu trang trí hoa lên xe đã bàn giao cho khách hàng. Không có chữ hay mô tả phức tạp, chỉ có những góc máy chân thực.
            </p>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: "all", label: "Tất Cả" },
              { id: "car", label: "Dòng Xe Tự Lái/Có Tài" },
              { id: "wedding", label: "Xe Hoa & Trang Trí Hoa" },
              { id: "moments", label: "Bàn Giao Thực Tế" },
            ].map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setGalleryFilter(tab.id)}
                className={`px-6 py-2.5 text-xs uppercase tracking-widest font-bold border transition-all duration-300 rounded ${
                  galleryFilter === tab.id 
                    ? "border-black bg-black text-white shadow-sm" 
                    : "border-zinc-200 text-zinc-600 hover:text-black hover:border-black"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
            {filteredGallery.map((item) => (
              <div 
                key={item.id} 
                onClick={() => setLightboxImage(item.image)}
                className="group relative aspect-[4/3] bg-zinc-100 border border-zinc-200 overflow-hidden rounded shadow-sm cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={item.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xs tracking-widest uppercase font-bold border border-white px-4 py-2">Phóng To</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-zinc-500 text-xs italic font-semibold">
              *Tất cả hình ảnh hiển thị đều là sản phẩm thực tế của LuxGo Vn. Bạn có thể bấm vào ảnh để phóng to xem chi tiết hơn.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
    <section
  id="contact"
  className="relative border-y border-zinc-200 bg-zinc-50 py-24"
>
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
      
      {/* Left Content */}
      <div className="space-y-8 lg:col-span-6">
        <div className="space-y-4">
          <span className="block text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">
            Hỗ trợ tư vấn nhanh
          </span>

          <h2 className="font-serif text-4xl text-zinc-900 md:text-5xl">
            Trao Đổi Qua Mạng Xã Hội
          </h2>

          <p className="text-base font-medium leading-relaxed text-zinc-700">
            Để phục vụ khách hàng nhanh nhất, chúng tôi không sử dụng hệ thống
            đặt xe tự động phức tạp trên trang web. Quý khách vui lòng chọn
            kênh liên hệ yêu thích bên dưới để nhận ngay báo giá thực tế, tư
            vấn mẫu xe cưới và phương án cắm hoa phù hợp nhất.
          </p>
        </div>

        {/* Bullet Points */}
        <div className="space-y-4 border-t border-zinc-200 pt-4">
          <div className="flex items-start gap-3">
            <span className="mt-1 font-bold text-black">✓</span>

            <p className="text-sm font-semibold text-zinc-800">
              Gửi hình ảnh mẫu hoa xe cưới thực tế nhanh chóng qua
              Zalo/Messenger.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-1 font-bold text-black">✓</span>

            <p className="text-sm font-semibold text-zinc-800">
              Báo giá chi tiết theo lộ trình di chuyển thực tế, không chi phí
              phát sinh.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-1 font-bold text-black">✓</span>

            <p className="text-sm font-semibold text-zinc-800">
              Phản hồi nhanh chóng, hỗ trợ giữ lịch xe và chuẩn bị chu đáo
              nhất.
            </p>
          </div>
        </div>
      </div>

      {/* Right Contact Panel */}
      <div className="rounded border border-zinc-200 bg-white p-8 shadow-lg md:p-10 lg:col-span-6">
        <h3 className="mb-6 font-serif text-2xl font-bold tracking-wide text-zinc-900">
          Chọn Kênh Liên Hệ Phù Hợp
        </h3>

        <div className="space-y-4">
          
          {/* Zalo */}
          <a
            href="https://zalo.me"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded border border-zinc-200 bg-zinc-50 p-5 transition duration-300 hover:border-black hover:bg-zinc-100"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded border border-zinc-300 bg-black text-xs font-bold tracking-wider text-white">
                Zalo
              </div>

              <div>
                <h4 className="text-base font-bold text-zinc-900">
                  Zalo Trực Tiếp
                </h4>

                <p className="mt-0.5 text-xs font-semibold text-zinc-600">
                  Phản hồi tức thì, hỗ trợ gửi ảnh xe thực tế
                </p>
              </div>
            </div>

            <span className="font-bold text-zinc-400 transition-colors group-hover:text-black">
              →
            </span>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded border border-zinc-200 bg-zinc-50 p-5 transition duration-300 hover:border-black hover:bg-zinc-100"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded border border-zinc-300 bg-black text-xs font-bold tracking-wider text-white">
                FB
              </div>

              <div>
                <h4 className="text-base font-bold text-zinc-900">
                  Facebook Messenger
                </h4>

                <p className="mt-0.5 text-xs font-semibold text-zinc-600">
                  Nhắn tin qua fanpage chính thức LuxGo Vn
                </p>
              </div>
            </div>

            <span className="font-bold text-zinc-400 transition-colors group-hover:text-black">
              →
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded border border-zinc-200 bg-zinc-50 p-5 transition duration-300 hover:border-black hover:bg-zinc-100"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded border border-zinc-300 bg-black text-xs font-bold tracking-wider text-white">
                IG
              </div>

              <div>
                <h4 className="text-base font-bold text-zinc-900">
                  Instagram Direct
                </h4>

                <p className="mt-0.5 text-xs font-semibold text-zinc-600">
                  Xem thêm các câu chuyện hành trình thực tế
                </p>
              </div>
            </div>

            <span className="font-bold text-zinc-400 transition-colors group-hover:text-black">
              →
            </span>
          </a>
        </div>

        {/* Hotline */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-6 sm:flex-row">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
              Hotline Gọi Trực Tiếp
            </p>

            <a
              href="tel:0901234567"
              className="text-lg font-bold text-black hover:underline"
            >
              +84 (0) 90 123 4567
            </a>
          </div>

          <button
            onClick={() =>
              navigator.clipboard.writeText("+84 (0) 90 123 4567")
            }
            className="w-full rounded border border-black px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-black shadow-sm transition-all duration-300 hover:bg-black hover:text-white sm:w-auto"
          >
            Sao Chép SĐT
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ================= POPUP MODAL: DETAILED FLEET ================= */}
      {selectedFleetItem && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
          <div className="bg-white border border-zinc-300 w-full max-w-lg p-8 relative rounded shadow-2xl">
            <button 
              onClick={() => setSelectedFleetItem(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-black font-bold text-lg"
            >
              ✕
            </button>
            <span className="text-[10px] tracking-widest uppercase font-bold text-zinc-400 block mb-1">Chi tiết dòng xe</span>
            <h3 className="font-serif text-3xl font-bold text-zinc-900 mb-2">{selectedFleetItem.title}</h3>
            <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider mb-6">{selectedFleetItem.submodels}</p>
            
            <div className="aspect-[16/10] w-full overflow-hidden bg-zinc-100 border border-zinc-200 mb-6 rounded">
              <img src={selectedFleetItem.image} alt={selectedFleetItem.title} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-2 text-sm text-zinc-700 border-b border-zinc-200 pb-4 font-medium">
              <div className="flex justify-between"><span>Năm sản xuất:</span><strong>{selectedFleetItem.years}</strong></div>
              <div className="flex justify-between"><span>Số chỗ ngồi:</span><strong>{selectedFleetItem.seats}</strong></div>
              <div className="flex justify-between"><span>Hệ thống truyền động:</span><strong>{selectedFleetItem.engine}</strong></div>
              <div className="flex justify-between"><span>Hộp số cơ cấu:</span><strong>{selectedFleetItem.transmission}</strong></div>
              <div className="flex justify-between pt-2 border-t border-zinc-100">
                <span>Khoảng giá tham khảo:</span><strong className="text-black text-base">{selectedFleetItem.price}</strong>
              </div>
            </div>

            <p className="text-xs text-zinc-500 mt-4 leading-relaxed italic">
              *Báo giá chính xác phụ thuộc vào việc tự lái hay có tài xế, thời gian thuê và quãng đường di chuyển thực tế. Vui lòng liên hệ bộ phận CSKH để nhận thông tin chuẩn nhất.
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

      {/* ================= POPUP LIGHTBOX: IMAGE ZOOM ================= */}
      {lightboxImage && (
        <div 
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img src={lightboxImage} alt="Phóng to thư viện" className="max-w-full max-h-full object-contain" />
            <button 
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 text-white text-xl bg-black/40 w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/80"
            >
              ✕
            </button>
          </div>
        </div>
      )}

    </div>
  );
}