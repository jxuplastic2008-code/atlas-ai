import Shell from '../../components/Shell';
import Signal from '../../components/Signal';

const template = [
  ['1. 发生了什么变化？', '只记录经过验证的事件：公司公告、财报、官方声明或可信报告。'],
  ['2. 影响产业链哪一环？', '计算、存储、网络、冷却、电力、电网或能源。'],
  ['3. 影响是什么？', '识别直接受影响的公司，并区分事实与推测。'],
  ['4. 什么情况会推翻判断？', '记录会让当前研究观点失效的条件。']
];

export default function Journal() {
  return (
    <Shell active="AI Journal">

      <p className="eyebrow">
        私人研究日志
      </p>

      <h1 className="mt-1 text-3xl font-bold">
        AI 研究日志
      </h1>

      <p className="mt-4">
        用结构化方式记录 AI 产业变化、关键事件和研究判断。
      </p>


      <section className="mt-7 grid gap-4">

        {template.map((item)=>(
          <div 
            key={item[0]}
            className="panel"
          >
            <h2 className="text-xl font-bold">
              {item[0]}
            </h2>

            <p className="mt-3">
              {item[1]}
            </p>

          </div>
        ))}

      </section>


    </Shell>
  );
}
