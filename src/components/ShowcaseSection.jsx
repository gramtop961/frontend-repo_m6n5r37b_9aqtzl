import { Star, Rocket, Building2 } from 'lucide-react';
import { useEffect, useState } from 'react';

function ProgressBar({ value }) {
  return (
    <div className="w-full h-3 rounded-full bg-gray-200">
      <div
        className="h-3 rounded-full bg-blue-600 transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export default function ShowcaseSection() {
  const testimonials = [
    { quote: 'Kinerja tim lebih terukur dan transparan.', author: 'Aulia, HR Manager', logo: '🏢' },
    { quote: 'Proses penilaian jadi 50% lebih cepat.', author: 'Dani, People Partner', logo: '🏢' },
    { quote: 'Laporan manajemen jauh lebih akurat.', author: 'Sari, COO', logo: '🏢' },
  ];

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 3500);
    return () => clearInterval(id);
  }, []);

  const score = 91;

  return (
    <section className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Demo Widget */}
        <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-6 shadow-lg text-center">
          <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-inner">
            <Rocket className="h-8 w-8" />
          </div>
          <h3 className="mt-4 text-xl font-bold text-gray-900">Skor KPI Anda</h3>
          <div className="mt-2 text-4xl font-extrabold tracking-tight">{score}/100</div>
          <div className="mt-4"><ProgressBar value={score} /></div>
          <a href="#demo" className="mt-6 inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-blue-700">
            Lihat Demo Langsung
          </a>

          {/* Testimonial carousel */}
          <div className="mt-8">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <div className="text-gray-800">“{testimonials[index].quote}”</div>
              <div className="mt-2 text-sm text-gray-500">{testimonials[index].author}</div>
            </div>
            <div className="mt-4 flex items-center justify-center gap-6 text-2xl opacity-70">
              <span role="img" aria-label="logo">{testimonials[(index + 0) % testimonials.length].logo}</span>
              <span role="img" aria-label="logo">{testimonials[(index + 1) % testimonials.length].logo}</span>
              <span role="img" aria-label="logo">{testimonials[(index + 2) % testimonials.length].logo}</span>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div id="harga" className="mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Paket Harga</h3>
          <p className="mt-2 text-gray-600 text-center">Pilih paket sesuai kebutuhan tim Anda.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Starter', price: 'Rp 990K', popular: false, features: ['Hingga 25 karyawan', 'Template KPI dasar', 'Laporan bulanan', 'Email support'] },
              { name: 'Professional', price: 'Rp 2.9Jt', popular: true, features: ['Hingga 100 karyawan', 'Workflow persetujuan', 'Integrasi HRIS', 'Laporan real-time', 'Prioritas support'] },
              { name: 'Enterprise', price: 'Hubungi Kami', popular: false, features: ['Pengguna tak terbatas', 'SSO & SAML', 'Kustomisasi mendalam', 'SLA & dukungan dedicated', 'Keamanan lanjutan'] },
              { name: 'Unlimited', price: 'Hubungi Kami', popular: false, features: ['Multi-entity', 'Multi-region', 'Audit & compliance', 'On-prem/Private cloud'] },
            ].map(({ name, price, features, popular }) => (
              <div key={name} className={`${
                popular ? 'ring-2 ring-blue-600 shadow-xl' : 'ring-1 ring-gray-200 shadow-sm'
              } rounded-2xl bg-white p-6 flex flex-col`}>
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-gray-900">{name}</h4>
                  {popular && (
                    <span className="rounded-full bg-blue-600 px-2 py-1 text-xs font-semibold text-white">Popular</span>
                  )}
                </div>
                <div className="mt-3 text-2xl font-extrabold">{price}</div>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Star className="mt-0.5 h-4 w-4 text-blue-600" /> {f}
                    </li>
                  ))}
                </ul>
                <a href="#mulai" className="mt-6 inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
                  Pilih Paket
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA + Footer */}
        <div id="kontak" className="mt-20 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-8 text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Siap Bangun Sistem Kinerja yang Terukur?</h3>
              <p className="mt-1 text-white/80">Mulai gratis atau minta demo untuk melihat kemampuannya.</p>
            </div>
            <div className="flex items-center gap-3">
              <a href="#mulai" className="inline-flex items-center rounded-lg bg-white px-5 py-3 font-semibold text-blue-700 shadow-sm hover:bg-white/90">Mulai Sekarang</a>
              <a href="#kontak" className="inline-flex items-center rounded-lg border border-white/30 px-5 py-3 font-semibold text-white hover:bg-white/10">Minta Demo</a>
            </div>
          </div>
        </div>

        <footer className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-gray-600">
          <div>
            <h5 className="font-semibold text-gray-900">Product</h5>
            <ul className="mt-3 space-y-2">
              <li><a href="#fitur" className="hover:text-gray-900">Fitur</a></li>
              <li><a href="#harga" className="hover:text-gray-900">Harga</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900">Company</h5>
            <ul className="mt-3 space-y-2">
              <li><a href="#tentang" className="hover:text-gray-900">Tentang</a></li>
              <li><a href="#karir" className="hover:text-gray-900">Karir</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900">Resources</h5>
            <ul className="mt-3 space-y-2">
              <li><a href="#blog" className="hover:text-gray-900">Blog</a></li>
              <li><a href="#docs" className="hover:text-gray-900">Docs</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900">Legal & Contact</h5>
            <ul className="mt-3 space-y-2">
              <li><a href="#privacy" className="hover:text-gray-900">Privacy</a></li>
              <li><a href="#terms" className="hover:text-gray-900">Terms</a></li>
            </ul>
            <form className="mt-4">
              <label className="block text-gray-700">Newsletter</label>
              <div className="mt-2 flex">
                <input type="email" required placeholder="Email Anda" className="w-full rounded-l-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button type="submit" className="rounded-r-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">Kirim</button>
              </div>
            </form>
            <div className="mt-4 flex items-center gap-3 text-gray-500">
              <a href="#" aria-label="Twitter" className="hover:text-gray-900">𝕏</a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-900">in</a>
              <a href="#" aria-label="Instagram" className="hover:text-gray-900">IG</a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
