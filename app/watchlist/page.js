import Shell from '../../components/Shell';
import Signal from '../../components/Signal';

const names = [
  ['AVGO', 'Broadcom', 'ASIC, networking & infrastructure software', 'Core research', 'green'],
  ['NVDA', 'NVIDIA', 'Accelerated computing', 'Core research', 'green'],
  ['AMD', 'AMD', 'Compute and AI accelerators', 'Monitor execution', 'yellow'],
  ['AMKR', 'Amkor Technology', 'Advanced packaging & test', 'Cyclical watch', 'yellow'],
  ['ETN', 'Eaton', 'Electrical distribution & power management', 'Power watch', 'green'],
  ['VRT', 'Vertiv', 'Cooling and critical digital infrastructure', 'Power watch', 'green'],
  ['PWR', 'Quanta Services', 'Transmission & grid construction', 'Grid watch', 'yellow'],
  ['GEV', 'GE Vernova', 'Generation and grid systems', 'Grid watch', 'yellow'],
  ['SMR', 'NuScale Power', 'Small modular reactor development', 'Long horizon', 'yellow'],
];

export default function Watchlist() { return <Shell active="Watchlist"><p className="eyebrow">Research universe</p><h1 className="mt-1 text-3xl font-bold">Watchlist</h1><p className="mt-2 text-sm text-slate-400">Statuses describe research priority, not a recommendation to buy or sell.</p><div className="mt-7 overflow-hidden rounded-2xl border border-slate-800 bg-[#0d1723]"><div className="grid grid-cols-[.7fr_1.4fr_2fr_1.2fr] gap-3 border-b border-slate-800 px-5 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500"><span>Ticker</span><span>Company</span><span className="hidden sm:block">Industrial role</span><span>Research status</span></div>{names.map(([ticker, company, role, note, signal]) => <div className="grid grid-cols-[.7fr_1.4fr_2fr_1.2fr] gap-3 border-b border-slate-800 px-5 py-4 last:border-0" key={ticker}><b className="text-emerald-200">{ticker}</b><span className="text-sm text-slate-200">{company}</span><span className="hidden text-sm text-slate-500 sm:block">{role}</span><div><Signal status={signal}>{note}</Signal></div></div>)}</div><p className="mt-4 text-xs leading-5 text-slate-500">Keep this intentionally short. Add a company only when you can name the bottleneck it serves and the evidence you expect to monitor.</p></Shell>; }
