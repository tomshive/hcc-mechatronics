export default function GallerySection() {
  return (
    <section id="works" className="bg-white">
      <div className="max-w-[1440px] mx-auto px-5 md:px-[140px] pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-[660fr_480fr] gap-5">
        <div className="rounded-[10px] overflow-hidden h-[280px] lg:h-[470px]">
          <img src="/images/workshop-image.png" alt="HCC Mechatronics workshop" className="w-full h-full object-cover" />
        </div>
        <div className="grid grid-rows-2 gap-5">
          <div className="rounded-[10px] overflow-hidden h-[135px] lg:h-full">
            <img src="/images/ev-charger-port.png" alt="HCC Mechatronics diagnostics" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-[10px] overflow-hidden h-[135px] lg:h-full">
            <img src="/images/3d-electric-car-hd.png" alt="HCC Mechatronics service bay" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
