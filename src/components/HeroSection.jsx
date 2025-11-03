import Spline from '@splinetool/react-spline';
import { Shield, Rocket } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="tentang" className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
          <Shield className="h-3.5 w-3.5" /> Aplikasi untuk tim HR & bisnis skala UKM → Enterprise
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Headline */}
          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              All-in-One Performance Monitoring Platform
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl">
              Solusi pengelolaan kinerja karyawan yang efisien, akurat, dan terintegrasi — dari strategi hingga laporan hasil.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#mulai" className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-blue-700">
                Mulai Sekarang <Rocket className="ml-2 h-4 w-4" />
              </a>
              <a href="#kontak" className="inline-flex items-center rounded-lg border border-gray-300 px-5 py-3 text-gray-700 font-semibold hover:bg-gray-50">
                Jadwalkan Demo
              </a>
            </div>
          </div>

          {/* Right: 3D Spline scene in a card */}
          <div className="relative h-[320px] sm:h-[420px] lg:h-[500px]">
            <div className="absolute inset-0 rounded-2xl bg-white/70 shadow-xl ring-1 ring-gray-200 overflow-hidden">
              <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>

        {/* Metrics Bar */}
        <div className="mt-10 sm:mt-14">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {[
              { label: 'Total Holdings', value: '128+', icon: '📊' },
              { label: 'Perusahaan Mandiri', value: '54', icon: '🏢' },
              { label: 'Total Karyawan', value: '12.4K', icon: '👥' },
              { label: 'Performa Tertinggi', value: '98/100', icon: '⬆️' },
              { label: 'Performa Terendah', value: '62/100', icon: '⬇️' },
            ].map((item) => (
              <div key={item.label} className="min-w-[190px] flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
                <div className="text-xs text-gray-500">{item.label}</div>
                <div className="mt-1 flex items-end gap-2">
                  <div className="text-2xl font-bold text-gray-900">{item.value}</div>
                  <div className="text-lg">{item.icon}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
