export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-white pt-20 overflow-hidden"
    >
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
            Đơn Giản.
            <br />
            <span className="italic text-zinc-500 font-normal">Thực Tế.</span>
          </h1>

          <p className="text-zinc-700 text-base leading-relaxed max-w-lg font-medium">
            LuxGo Vn cung cấp dịch vụ cho thuê các dòng xe đời mới hiện đại và
            trang trí hoa xe cưới thiết kế riêng. Chúng tôi
            tập trung vào sự chỉn chu, đúng giờ và chất lượng thực tế.
          </p>

          {/* Navigation CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#gallery"
              className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 font-bold hover:bg-zinc-800 transition-all duration-300 shadow-md"
            >
              Xem Thư Viện Thực Tế
            </a>
            <a
              href="#contact"
              className="border border-zinc-300 text-zinc-900 hover:border-black text-xs uppercase tracking-widest px-8 py-4 font-bold transition-all duration-300"
            >
              Liên Hệ Trao Đổi
            </a>
          </div>

          {/* Stats summary */}
          {/* <div className="grid grid-cols-3 gap-6 pt-10 border-t border-zinc-200 max-w-md">
            <div>
              <div className="font-serif text-3xl font-bold text-zinc-900">
                30+
              </div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1 font-bold">
                Dòng xe Đời Mới
              </div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-zinc-900">
                150+
              </div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1 font-bold">
                Dự án Xe Hoa
              </div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-zinc-900">
                100%
              </div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1 font-bold">
                Hài lòng thực tế
              </div>
            </div>
          </div> */}
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
                <p className="text-[10px] tracking-[0.2em] text-zinc-300 uppercase font-semibold">
                  Dòng Xe Phổ Biến
                </p>
                <h3 className="font-serif text-xl font-bold text-white mt-1">
                  Mercedes-Benz C-Class & VinFast VF8
                </h3>
              </div>
              <span className="text-xs font-serif italic text-zinc-200">
                Đời Mới Sạch Sẽ
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
