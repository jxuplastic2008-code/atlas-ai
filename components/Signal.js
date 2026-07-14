export default function Signal({ status = 'green', children }) {
  const styles = { green: 'border-emerald-400/25 bg-emerald-400/10 text-emerald-300', yellow: 'border-amber-400/25 bg-amber-400/10 text-amber-200', red: 'border-rose-400/25 bg-rose-400/10 text-rose-200' };
  return <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-bold ${styles[status]}`}><i className="h-1.5 w-1.5 rounded-full bg-current" />{children}</span>;
}
