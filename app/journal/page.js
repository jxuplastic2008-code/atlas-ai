import Shell from '../../components/Shell';
import Signal from '../../components/Signal';

const template = [
  ['1. What changed?', 'Write only a verified event: company filing, earnings call, official announcement, or trusted reporting.'],
  ['2. Which link in the chain?', 'Compute, memory, networking, cooling, power, grid, or generation.'],
  ['3. What is the impact?', 'Identify the directly affected companies and distinguish facts from your inference.'],
  ['4. What would falsify the thesis?', 'Record the condition that would make this interpretation wrong.']
];

export default function Journal() { return <Shell active="AI Journal"><p className="eyebrow">Private decision journal</p><h1 className="mt-1 text-3xl font-bold">AI Journal</h1><p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">A deliberately manual first version. Use it to record durable research conclusions; a future data layer can populate this page from approved sources.</p><section className="mt-7 panel"><div className="flex flex-wrap items-center justify-between gap-3"><div><p className="eyebrow">Latest entry placeholder</p><h2 className="mt-1 text-xl font-bold">Start with a verified industry event</h2></div><Signal status="yellow">Awaiting source</Signal></div><p className="mt-4 rounded-xl border border-dashed border-slate-700 bg-slate-950/20 p-5 text-sm leading-7 text-slate-400">Example: “A hyperscaler increases data-center capital expenditure.” Then separate the stated fact from your hypothesis about ASIC demand, power equipment backlog, or grid impact.</p></section><section className="mt-5 grid gap-4 md:grid-cols-2">{template.map(([title, body], index) => <article className="panel" key={title}><span className="text-sm font-black text-emerald-300">0{index + 1}</span><h2 className="mt-4 text-lg font-bold">{title}</h2><p className="mt-2 text-sm leading-6 text-slate-400">{body}</p></article>)}</section><section className="mt-5 panel"><p className="eyebrow">Journal rule</p><p className="mt-2 text-lg font-semibold">Do not write “the stock will rise.” Write what must happen operationally for the thesis to strengthen.</p></section></Shell>; }
