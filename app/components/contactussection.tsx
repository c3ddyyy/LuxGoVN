export default function ContactUs() {
  return (
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
                Để phục vụ khách hàng nhanh nhất, chúng tôi không sử dụng hệ
                thống đặt xe tự động phức tạp trên trang web. Quý khách vui lòng
                chọn kênh liên hệ yêu thích bên dưới để nhận ngay báo giá thực
                tế, tư vấn mẫu xe cưới và phương án cắm hoa phù hợp nhất.
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
                  Báo giá chi tiết theo lộ trình di chuyển thực tế, không chi
                  phí phát sinh.
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
                  <div className="flex h-12 w-12 items-center justify-center rounded border border-zinc-300 bg-[#00A1FF] text-xs font-bold tracking-wider text-white">
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
                  <div className="flex h-12 w-12 items-center justify-center rounded border border-zinc-300 bg-[#1877F2] text-xs font-bold tracking-wider text-white">
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
                  <div className="flex h-12 w-12 items-center justify-center rounded border border-zinc-300 bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-xs font-bold tracking-wider text-white">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
