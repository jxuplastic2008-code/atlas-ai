import Shell from '../../components/Shell';
import Signal from '../../components/Signal';

const names = [
  ['AVGO', 'Broadcom', 'ASIC、网络与基础设施软件 / ASIC, networking & infrastructure software', '核心研究 / Core research', 'green'],
  ['NVDA', '英伟达 / NVIDIA', '加速计算 / Accelerated computing', '核心研究 / Core research', 'green'],
  ['AMD', 'AMD', '计算与 AI 加速器 / Compute and AI accelerators', '执行观察 / Monitor execution', 'yellow'],
  ['AMKR', '安靠科技 / Amkor Technology', '先进封装与测试 / Advanced packaging & test', '周期观察 / Cyclical watch', 'yellow'],
  ['ETN', '伊顿 / Eaton', '电力分配与能源管理 / Electrical distribution & power management', '电力观察 / Power watch', 'green'],
  ['VRT', '维谛技术 / Vertiv', '冷却与关键数字基础设施 / Cooling and critical digital infrastructure', '电力观察 / Power watch', 'green'],
  ['PWR', 'Quanta Services', '输电与电网建设 / Transmission & grid construction', '电网观察 / Grid watch', 'yellow'],
  ['GEV', 'GE Vernova', '发电与电网系统 / Generation and grid systems', '电网观察 / Grid watch', 'yellow'],
  ['SMR', 'NuScale Power', '小型模块化反应堆发展 / Small modular reactor development', '长期观察 / Long horizon', 'yellow'],
];

export default function Broadcom() {
  return (
    <Shell active="Broadcom">
      <p className="eyebrow">
        研究领域 / Research universe
      </p>

      <h1 className="mt-1 text-3xl font-bold">
        博通产业链研究 / Broadcom Industrial Research
      </h1>

      <p className="mt-4">
        跟踪 AI 基础设施、网络、ASIC、电力与数据中心产业链。
        <br />
        Tracking AI infrastructure, networking, ASIC, power and data center supply chains.
      </p>

      <section className="mt-7 grid gap-4">
        {names.map((item) => (
          <div key={item[0]} className="panel">

            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">
                {item[0]} · {item[1]}
              </h2>

              <Signal tone={item[4]}>
                {item[3]}
              </Signal>
            </div>

            <p className="mt-3">
              {item[2]}
            </p>

          </div>
        ))}
      </section>

    </Shell>
  );
}
