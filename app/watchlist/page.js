import Shell from '../../components/Shell';
import Signal from '../../components/Signal';

const names = [
  ['AVGO', '博通', 'ASIC、网络与基础设施软件', '核心研究', 'green'],
  ['NVDA', '英伟达', '加速计算', '核心研究', 'green'],
  ['AMD', 'AMD', '计算与 AI 加速器', '执行观察', 'yellow'],
  ['AMKR', '安靠科技', '先进封装与测试', '周期观察', 'yellow'],
  ['ETN', '伊顿', '电力分配与能源管理', '电力观察', 'green'],
  ['VRT', '维谛技术', '冷却与关键数字基础设施', '电力观察', 'green'],
  ['PWR', 'Quanta Services', '输电与电网建设', '电网观察', 'yellow'],
  ['GEV', 'GE Vernova', '发电与电网系统', '电网观察', 'yellow'],
  ['SMR', 'NuScale Power', '小型模块化反应堆发展', '长期观察', 'yellow'],
];

export default function Watchlist() {
  return (
    <Shell active="Watchlist">
      <p className="eyebrow">研究股票池</p>

      <h1 className="mt-1 text-3xl font-bold">
        观察列表
      </h1>

      <p className="mt-4">
        用于跟踪 AI 基础设施产业链中的关键公司，
        关注计算、电力、冷却、电网与能源环节。
      </p>

      <section className="mt-7 grid gap-4">
        {names.map((item) => (
          <div
            key={item[0]}
            className="panel"
          >
            <div className="flex items-center justify-between">
              
              <div>
                <h2 className="text-xl font-bold">
                  {item[0]} · {item[1]}
                </h2>

                <p className="mt-2">
                  {item[2]}
                </p>

                <p className="mt-2 text-sm">
                  分类：{item[3]}
                </p>
              </div>

              <Signal tone={item[4]}>
                关注
              </Signal>

            </div>
          </div>
        ))}
      </section>

    </Shell>
  );
}
