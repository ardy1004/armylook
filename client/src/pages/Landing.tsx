import { motion } from "framer-motion";
import { 
  MapPin, 
  Maximize, 
  Home, 
  Building2, 
  FileCheck, 
  TrendingUp, 
  ArrowRight,
  MessageCircle,
  AlertTriangle,
  CheckCircle2,
  ShieldAlert
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GalleryCarousel } from "@/components/GalleryCarousel";
import { LeadForm } from "@/components/LeadForm";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Landing() {
  const scrollToContact = () => {
    document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToDetails = () => {
    document.getElementById("property-details")?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    const text = `Halo, saya tertarik dengan properti Army Look Hotel di Pinggir JL Utama Barat Tugu Jogja. Mohon informasi lebih lanjut.`;
    const whatsappUrl = `https://wa.me/6281391278889?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky WA Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          onClick={openWhatsApp}
          size="lg"
          className="h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_8px_30px_rgb(37,211,102,0.3)] hover:shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:-translate-y-1 transition-all duration-300 px-6 gap-2"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="font-semibold hidden md:inline">Tanya via WhatsApp</span>
        </Button>
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden">
        {/* Background Image with elegant overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dhb8b7nrd/image/upload/v1771813218/image_4_st07q0.webp" 
            alt="Army Look Hotel Facade" 
            className="w-full h-full object-cover"
          />
          {/* Gradient to make text readable but keep image visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent md:to-primary/40" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent-foreground backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-white tracking-wide uppercase">Peluang Investasi Premium</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1] mb-6 text-balance">
              Dijual Hotel & Aset Komersial Premium di Pinggir JL Utama Barat Tugu Jogja
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-white/90 mb-8 font-light max-w-2xl text-balance leading-relaxed">
              Dalam Ringroad Yogyakarta | LT 747 m² | Potensi 24+ Kamar | SHM & IMB Lengkap
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="flex items-center gap-3 text-white/80">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>Pinggir Jalan Utama</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>Dekat Pusat Kota</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>Cocok Hotel / Usaha</span>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={openWhatsApp}
                className="h-14 px-8 text-base font-semibold bg-accent hover:bg-accent/90 text-white border-none shadow-lg shadow-accent/20"
              >
                Jadwalkan Survey via WhatsApp
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                onClick={scrollToDetails}
                variant="outline"
                className="h-14 px-8 text-base font-semibold bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm"
              >
                Lihat Detail Properti
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STRICT DISCLAIMER ALERT */}
      <section className="bg-white border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-red-50 border-l-4 border-destructive p-6 rounded-r-xl shadow-sm flex gap-4 md:items-start items-center">
            <ShieldAlert className="w-8 h-8 text-destructive shrink-0 mt-1 hidden md:block" />
            <div>
              <h3 className="text-destructive font-bold text-lg mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 md:hidden" />
                DISCLAIMER TEGAS
              </h3>
              <p className="text-destructive/90 leading-relaxed font-medium text-balance text-sm md:text-base">
                Properti ini ditawarkan khusus kepada <strong className="font-extrabold underline decoration-destructive/30 underline-offset-4">CALON PEMBELI LANGSUNG (END BUYER)</strong>. 
                TIDAK menerima dan TIDAK melayani <span className="underline">broker</span>, <span className="underline">perantara</span>, <span className="underline">agen properti</span>, atau <span className="underline">pihak mana pun</span> yang bertindak sebagai mediator. 
                Jika Anda adalah broker/perantara, mohon untuk tidak menghubungi. Hanya calon pembeli serius dengan kesiapan pembiayaan yang akan ditanggapi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-20 bg-secondary/30 bg-grid-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Galeri Properti</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>
          <GalleryCarousel />
        </div>
      </section>

      {/* PROPERTY DATA GRID */}
      <section id="property-details" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Spesifikasi Aset</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Aset ini memiliki fleksibilitas tinggi dengan struktur bangunan yang solid, ideal untuk dikembangkan menjadi akomodasi modern atau ruang usaha komersial.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  { icon: Maximize, label: "Luas Tanah", value: "747 m²" },
                  { icon: Building2, label: "Luas Bangunan", value: "±950 m²" },
                  { icon: Home, label: "Kamar Aktif", value: "12 (K.Mandi Dalam)" },
                  { icon: TrendingUp, label: "Potensi Kamar", value: "Tambahan 9-12 Kamar" },
                  { icon: MapPin, label: "Area Depan", value: "Cocok Ruang Usaha" },
                  { icon: FileCheck, label: "Legalitas", value: "SHM & IMB Lengkap" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">{item.label}</p>
                      <p className="text-primary font-semibold text-lg">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Card */}
            <div className="bg-primary text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-accent/20 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent font-semibold text-sm tracking-wide mb-8">
                  PENAWARAN SPESIAL
                </div>
                
                <div className="space-y-2 mb-8 border-b border-white/10 pb-8">
                  <p className="text-white/60 font-medium">Harga Penilaian Sebelumnya</p>
                  <p className="text-2xl line-through decoration-destructive/80 decoration-2 text-white/50 font-serif">
                    Rp 13.000.000.000
                  </p>
                </div>
                
                <div className="space-y-2 mb-8">
                  <p className="text-white/80 font-medium text-lg">Harga Jual Saat Ini</p>
                  <p className="text-4xl md:text-5xl font-bold font-serif text-accent">
                    Rp 10.500.000.000
                  </p>
                  <p className="text-sm text-white/60 mt-2">* Masih dapat dinegosiasikan</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-xs text-white/70 leading-relaxed">
                    <strong>Catatan:</strong> Status properti On Bank (Outstanding ±7 Miliar). Harga di atas belum termasuk pajak pembeli dan biaya notaris (AJB & balik nama).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTMENT ANGLE */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Peluang Akuisisi & ROI</h2>
            <p className="text-lg text-muted-foreground text-balance">
              Kesempatan langka mengakuisisi aset di bawah nilai pasar di lokasi premium Yogyakarta.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg shadow-black/5 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Track Record Positif</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sebelum pandemi, properti ini dikelola bersama manajemen OYO dengan omset stabil di kisaran <strong>90–120 juta per bulan</strong>. Permintaan area ini sudah teruji.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg shadow-black/5 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                <Home className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Akuisisi Strategis</h3>
              <p className="text-muted-foreground leading-relaxed">
                Saat ini properti berstatus non-operasional dan membutuhkan perbaikan. Hal ini membuka peluang bagi investor untuk masuk di harga <strong>jauh di bawah nilai pasar</strong>.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg shadow-black/5 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Fleksibilitas Penggunaan</h3>
              <p className="text-muted-foreground leading-relaxed">
                Lokasi prime di Pinggir JL Utama Barat Tugu Jogja menjadikan aset ini sangat cocok direvitalisasi untuk hotel, co-living, kantor, klinik, atau F&B.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / FORM SECTION */}
      <section id="contact-section" className="py-24 bg-primary relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-white blur-[120px]" />
          <div className="absolute top-[60%] -right-[10%] w-[40%] h-[60%] rounded-full bg-accent blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">
                Ambil Langkah Pertama Anda
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-md">
                Tinggalkan informasi Anda untuk menjadwalkan private viewing langsung bersama perwakilan pemilik. Kesempatan ini sangat terbatas.
              </p>
              
              <div className="space-y-6 hidden lg:block mt-12 border-t border-white/10 pt-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <ShieldAlert className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Bebas Perantara</h4>
                    <p className="text-sm text-white/60">Komunikasi langsung dengan pihak pemilik.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Dokumen Siap</h4>
                    <p className="text-sm text-white/60">SHM, IMB, dan rincian outstanding tersedia saat survey.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background py-8 border-t border-border text-center">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Eksklusif Properti Komersial Yogyakarta. Penawaran Khusus Pembeli Langsung.
        </p>
      </footer>
    </div>
  );
}
