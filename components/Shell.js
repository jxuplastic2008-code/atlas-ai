import Link from 'next/link';

const links = [
  ['/', 'Dashboard'],
  ['/journal', 'AI Journal'],
  ['/watchlist', 'Watchlist'],
  ['/broadcom', 'Broadcom'],
  ['/power', 'Power'],
];

export default function Shell({ children, active = 'Dashboard' }) {
  return <div className="min-h-screen bg-[#081019]">
    <header className="border-b border-slate-800 bg-[#0a121c]/90 px-5 py-4 backdrop-blur md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-400 font-black text-[#071019]">A</span><span><b className="block tracking-wide">ATLAS AI</b><small className="text-xs text-slate-500">Industrial Intelligence</small></span></Link>
        <span className="hidden rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300 sm:block">PRIVATE RESEARCH TERMINAL</span>
      </div>
    </header>
    <div className="mx-auto grid max-w-7xl md:grid-cols-[190px_1fr]">
      <aside className="border-b border-slate-800 p-3 md:min-h-[calc(100vh-73px)] md:border-b-0 md:border-r md:p-4"><nav className="flex gap-1 overflow-x-auto md:flex-col">{links.map(([href, name]) => <Link key={href} href={href} className={`nav-link whitespace-nowrap ${active === name ? 'nav-link-active' : ''}`}>{name}</Link>)}</nav><div className="mt-7 hidden border-t border-slate-800 pt-5 md:block"><p className="eyebrow">Research principle</p><p className="mt-2 text-sm leading-6 text-slate-400">Study the industrial bottleneck. Let price be a secondary signal.</p></div></aside>
      <main className="min-w-0 p-5 md:p-8">{children}</main>
    </div>
  </div>;
}
