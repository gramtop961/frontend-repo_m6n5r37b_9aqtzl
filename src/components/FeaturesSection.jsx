import { BarChart, Users, Layers, Settings, Lock, CheckCircle } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section id="fitur" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 5 pillars */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Ringkasan Fitur</h2>
        <p className="mt-2 text-gray-600">Lima pilar utama untuk mengelola dan meningkatkan kinerja dengan mudah.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { icon: BarChart, title: 'Smart KPI', desc: 'Tetapkan KPI yang adaptif dan relevan untuk tiap peran.' },
            { icon: Users, title: 'Master Data', desc: 'Kelola struktur organisasi dan data karyawan terpusat.' },
            { icon: Layers, title: 'Hierarki', desc: 'Pantau kinerja lintas level dan unit kerja.' },
            { icon: Settings, title: 'Siklus Dinamis', desc: 'Atur periode penilaian yang fleksibel dan otomatis.' },
            { icon: Lock, title: 'Keamanan', desc: 'Privasi dan keamanan data berlapis tingkat enterprise.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <Icon className="h-5 w-5 text-blue-600" />
              <h3 className="mt-3 font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>

        {/* Detailed feature blocks */}
        <div className="mt-14 space-y-10" id="keunggulan">
          {[
            {
              title: 'Smart KPI Setup',
              desc: 'Bangun KPI yang terhubung ke tujuan bisnis. Mulai dari template, lalu sesuaikan dengan kebutuhan organisasi.',
              bullets: ['Template per divisi', 'Bobot & target dinamis', 'Approval berlapis'],
            },
            {
              title: 'Master Data Management',
              desc: 'Kelola data karyawan, jabatan, dan struktur organisasi secara terpusat untuk konsistensi lintas proses.',
              bullets: ['Sinkronisasi HRIS', 'Role & permission', 'Audit log lengkap'],
            },
            {
              title: 'Dynamic Cycle Report',
              desc: 'Jalankan siklus penilaian fleksibel dengan laporan real-time yang mudah dipahami oleh manajemen.',
              bullets: ['Progress realtime', 'Insight otomatis', 'Ekspor PDF & Excel'],
            },
          ].map(({ title, desc, bullets }, idx) => (
            <div key={title} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                <p className="mt-2 text-gray-600">{desc}</p>
                <ul className="mt-4 space-y-2">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-56 sm:h-64 lg:h-72 rounded-2xl border border-dashed border-gray-300 bg-white/60" aria-label="Mockup">
                <div className="absolute inset-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50" />
              </div>
            </div>
          ))}
        </div>

        {/* Why choose */}
        <div className="mt-16" id="keunggulan-cards">
          <h3 className="text-xl font-bold text-gray-900">Mengapa memilih KIPIAI.ID</h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[{ title: 'Fleksibel', desc: 'Cocok untuk UKM hingga Enterprise.' }, { title: 'Terintegrasi', desc: 'Menyatu dengan sistem HR & komunikasi.' }, { title: 'Data-driven', desc: 'Keputusan berbasis data terpercaya.' }, { title: 'Privasi & Aman', desc: 'Standar enkripsi dan kontrol akses.' }].map(
              (c) => (
                <div key={c.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h4 className="font-semibold text-gray-900">{c.title}</h4>
                  <p className="mt-1 text-sm text-gray-600">{c.desc}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
