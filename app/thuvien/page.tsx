"use client";

import { useState } from "react";
import Navbar from "../components/navbar";

interface GalleryItem {
  id: number;
  category: "car" | "wedding" | "moments";
  image: string;
  alt: string;
}

const GALLERY_DATA: GalleryItem[] = [
  {
    id: 1,
    category: "car",
    image:
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=600",
    alt: "Dòng xe sedan cao cấp thực tế",
  },
  {
    id: 2,
    category: "wedding",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600",
    alt: "Trang trí xe hoa cưới nghệ thuật",
  },
  {
    id: 3,
    category: "moments",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600",
    alt: "Bàn giao xe thực tế sạch sẽ tinh tươm",
  },
  {
    id: 4,
    category: "car",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=600",
    alt: "Bàn giao dòng xe thể thao BMW",
  },
  {
    id: 5,
    category: "wedding",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=600",
    alt: "Mẫu hoa cưới tone màu ngọt ngào tinh tế",
  },
  {
    id: 6,
    category: "moments",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=600",
    alt: "Đội ngũ LuxGo chuẩn bị chu đáo trước giờ xuất phát",
  },
    {
    id: 7,
    category: "wedding",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=600",
    alt: "Đội ngũ LuxGo chuẩn bị chu đáo trước giờ xuất phát",
  },
];


export default function ThuVienSanPham() {
      const [galleryFilter, setGalleryFilter] = useState<string>("all");
      const [lightboxImage, setLightboxImage] = useState<string | null>(null);
    
      const filteredGallery = GALLERY_DATA.filter(
        (item) => galleryFilter === "all" || item.category === galleryFilter,
      );


    return (

        <div>
            <Navbar/>

              <section id="gallery" className="py-24 bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-zinc-500 text-xs tracking-[0.3em] uppercase block font-bold">
            Hình ảnh chụp thực tế
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-zinc-900">
            Thư Viện Sản Phầm
          </h2>
          <div className="h-[2px] w-24 bg-black mx-auto mt-6"></div>
          <p className="text-zinc-600 text-base font-medium leading-relaxed">
            Tổng hợp các hình ảnh chân thực từ đội xe thực tế và mẫu trang trí
            hoa lên xe đã bàn giao cho khách hàng. Không có chữ hay mô tả phức
            tạp, chỉ có những góc máy chân thực.
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
                <span className="text-white text-xs tracking-widest uppercase font-bold border border-white px-4 py-2">
                  Phóng To
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-zinc-500 text-xs italic font-semibold">
            *Tất cả hình ảnh hiển thị đều là sản phẩm thực tế của LuxGo Vn. Bạn
            có thể bấm vào ảnh để phóng to xem chi tiết hơn.
          </p>
        </div>
      </div>
    

      {/* ================= POPUP LIGHTBOX: IMAGE ZOOM ================= */}

      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={lightboxImage}
              alt="Phóng to thư viện"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 text-white text-xl bg-black/40 w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/80"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
        </div>

    );
}