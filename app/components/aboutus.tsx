


export default function AboutUs() {

    return (
     <section id="about" className="py-24 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-zinc-500 text-xs tracking-[0.3em] uppercase block font-bold">Giới thiệu về chúng tôi</span>
              <h2 className="font-serif text-4xl md:text-5xl text-zinc-900 leading-tight">Dịch Vụ Cho Thuê Xe <br /><span className="italic text-zinc-500 font-normal">Thực Tế & Chỉn Chu</span></h2>
              <p className="text-zinc-700 text-base leading-relaxed font-medium">
                Tại LuxGo Vn, chúng tôi hiểu rằng nhu cầu di chuyển và ngày cưới cần sự chính xác, an toàn, mức giá hợp lý và sạch sẽ tuyệt đối <strong></strong>.
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
    );
}