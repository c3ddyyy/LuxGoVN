export default function WeddingSection() {
  return (
    <section
      id="wedding-cars"
      className="py-24 bg-zinc-50 border-t border-zinc-200 relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Details */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-zinc-500 text-xs tracking-[0.3em] uppercase block font-bold">
                Dịch vụ ngày cưới trọng đại
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-zinc-900 leading-tight font-bold">
                Xe Hoa Cưới & <br />
                <span className="italic text-zinc-500 font-normal">
                  Trang Trí Hoa Thiết Kế
                </span>
              </h2>
              <div className="h-[2px] w-12 bg-black my-4"></div>
              <p className="text-zinc-700 text-base leading-relaxed font-medium">
                Chúng tôi hiểu rằng ngày cưới cần sự tập trung tuyệt đối. Vì
                vậy,{" "}
                <strong>
                  chúng tôi không nhận tổ chức sự kiện tiệc cưới toàn phần
                </strong>
                . Chúng tôi chỉ tập trung làm tốt nhất một việc duy nhất:{" "}
                <strong>
                  Cung cấp xe hoa cưới đời mới và trực tiếp thiết kế, cắm hoa
                  trang trí lên xe
                </strong>{" "}
                theo phong cách yêu cầu của bạn.
              </p>
              <p className="text-zinc-700 text-base leading-relaxed font-medium">
                Bạn có thể chọn gói hoa tươi nghệ thuật rực rỡ nhập khẩu hoặc
                hoa lụa cao cấp tối giản nhưng vô cùng tinh tế và bền bỉ khi di
                chuyển đường dài.
              </p>
            </div>

            {/* Pricing Block */}
            <div className="p-6 bg-white border border-zinc-200 rounded shadow-sm space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xs uppercase tracking-wider text-zinc-500 font-bold">
                  Chi Phí Thuê Xe Hoa & Trang Trí:
                </span>
                <span className="inline-block bg-black text-white text-xs uppercase tracking-widest font-bold px-4 py-1 rounded">
                  Liên hệ báo giá
                </span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed font-semibold">
                *Do nhu cầu trang trí hoa khác biệt giữa hoa tươi theo mùa, hoa
                lụa và lộ trình di chuyển (nội thành / đi tỉnh) của mỗi gia
                đình, vui lòng liên hệ trực tiếp với chúng tôi để nhận báo giá
                cá nhân hóa nhanh gọn nhất.
              </p>
            </div>

            {/* Unique Selling Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-zinc-200">
              <div className="space-y-2">
                <h4 className="font-serif text-zinc-900 text-lg font-bold">
                  Gắn kết cực kỳ an toàn
                </h4>
                <p className="text-zinc-600 text-sm leading-relaxed font-medium">
                  Sử dụng đế hít chân không và băng keo chuyên dụng, đảm bảo hoa
                  cố định chắc chắn khi chạy tốc độ cao và tuyệt đối không trầy
                  xước sơn xe của bạn.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-serif text-zinc-900 text-lg font-bold">
                  Thiết kế theo tone màu
                </h4>
                <p className="text-zinc-600 text-sm leading-relaxed font-medium">
                  Tư vấn và cắm hoa theo đúng tone màu chủ đạo của tiệc cưới
                  (Trắng tinh khôi, Đỏ truyền thống, Hồng pastel, Cam hiện đại).
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
                <p className="text-[9px] tracking-[0.2em] text-zinc-300 uppercase font-semibold">
                  Mẫu Thực Tế Đã Giao
                </p>
                <h3 className="font-serif text-lg font-bold mt-1">
                  Xe Cưới Trắng & Dải Hoa Hồng Tươi Pastel
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
