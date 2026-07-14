import Shell from '../components/Shell';

const watchlist = [
  ['AVGO', 'Broadcom', '核心'],
  ['NVDA', 'NVIDIA', '计算'],
  ['ETN', 'Eaton', '电力'],
  ['VRT', 'Vertiv', '冷却'],
  ['PWR', 'Quanta', '电网']
];

const stages = [
  '计算',
  '存储',
  '网络',
  '冷却',
  '电力',
  '电网',
  '能源'
];

export default function Dashboard() {
  return (
    <Shell>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">研究仪表盘</p>
          <h1 className="mt-1 text-3xl font-bold">
            AI 工业版图
          </h1>
          <p className="mt-3">
            用结构性信号研究人工智能产业链，而不是短期价格波动。
          </p>
        </div>

        <div className="badge">
          私人研究终端
        </div>
      </div>


      <section className="mt-7 grid gap-4 lg:grid-cols-3">

        <div className="panel lg:col-span-2">
          <p className="eyebrow">
            Atlas 健康评分
          </p>

          <div className="text-6xl font-bold mt-3">
            88
            <span className="text-lg"> /100</span>
          </div>

          <div className="mt-5 h-2 rounded-full bg-slate-700">
            <div className="h-2 w-[88%] rounded-full bg-green-400"></div>
          </div>

          <p className="mt-5">
            当前为研究模型，不代表实时市场数据。
          </p>
        </div>


        <div className="panel">
          <p className="eyebrow">
            当前瓶颈
          </p>

          <h2 className="mt-4 text-2xl font-bold">
            电力密度
          </h2>

          <p className="mt-3">
            AI 数据中心需要可靠电力和散热能力。
          </p>
        </div>


      </section>


      <section className="mt-5 grid gap-4 lg:grid-cols-2">

        <div className="panel">
          <p className="eyebrow">
            今日信号
          </p>

          <h2 className="mt-3 text-xl font-bold">
            尚未连接实时数据
          </h2>

          <p className="mt-3">
            当前版本使用研究占位信息。
          </p>
        </div>


        <div className="panel">
          <p className="eyebrow">
            核心观察
          </p>

          {watchlist.map((item)=>(
            <div
              key={item[0]}
              className="mt-3 flex justify-between"
            >
              <span>
                {item[0]} {item[1]}
              </span>

              <span>
                {item[2]}
              </span>
            </div>
          ))}

        </div>

      </section>


      <section className="mt-5 panel">

        <p className="eyebrow">
          产业链
        </p>

        <div className="mt-5 flex flex-wrap gap-3">

        {stages.map(stage=>(
          <span
            key={stage}
            className="rounded border border-slate-600 px-4 py-2"
          >
            {stage}
          </span>
        ))}

        </div>

      </section>


    </Shell>
  );
}
