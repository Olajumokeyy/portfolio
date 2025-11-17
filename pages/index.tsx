import React from 'react';
import { profile } from '../src/data/profile';

type Skill = { name: string; level: number };

const skills: Skill[] = [
  { name: 'Product Strategy', level: 90 },
  { name: 'Payments Architecture', level: 88 },
  { name: 'Stablecoin Systems', level: 92 },
  { name: 'Data Analytics', level: 85 },
  { name: 'API Product & Integrations', level: 86 },
  { name: 'Regulatory & Compliance', level: 80 },
  { name: 'Stakeholder Management', level: 90 },
  { name: 'B2B Partnerships', level: 80 },
];

const timeline = [
  {
    year: '2020',
    role: 'Product Manager — Cross-border Payments',
    company: 'Patricia Technologies',
    bullets: [
      'Managed API product for payouts and collections across emerging markets.',
      'Integrated stablecoin settlement resulting in 25% lower costs',
    ],
  },
  {
    year: '2023',
    role: 'Founding PM — Crypto Wallet & On/Off ramps',
    company: 'Furex Technologies Limited',
    bullets: [
      'Launched fiat on/off ramps and gamification features increasing volume by 4x.',
      'Designed KYC flow with 40% improvement in completion rates.',
    ],
  },
  {
    year: '2024',
    role: 'Product Owner/Lead — Infrastructure & B2B',
    company: 'Airvend Payment Service Limited',
    bullets: [
      'Built B2B payments MVP and API sandbox used by pilot partners.',
      'Owned merchant SDK and drove new merchant integrations.',
    ],
  },
  {
    year: '2025',
    role: 'Senior Product Manager — Infrastructure & B2B',
    company: 'Ruby Technologies Limited',
    bullets: [
      'Built B2B payments MVP and API sandbox used by 10 pilot partners.',
      'Led cross-functional team of designers, engineers, and compliance.',
    ],
  },
  {
    year: '2025',
    role: 'PM — Scaling Global Corridors',
    company: 'My Other Projects',
    bullets: [
      'Defining roadmap for Africa ↔ UK/EU/US/China corridors.',
      'Running go-to-market experiments and pricing for B2B customers.',
      'Expanding my data science journey: building predictive models for transaction analytics and fraud detection to inform product decisions.',
    ],
  },
];

const projects = [
  {
    id: 'payouts',
    title: 'Multi-Rail Payouts API',
    subtitle: 'B2B payments infrastructure — Company B',
    role: 'Product Owner',
    period: '12 months',
    problem:
      'Businesses faced slow and expensive cross-border payouts across African corridors.',
    approach:
      'Launched an API-first payouts product combining local banking, mobile money, and stablecoin settlement. Designed an API sandbox, developer docs, and sample client libraries.',
    responsibilities: [
      'Owned product roadmap and prioritization.',
      'Led sprint planning and 1:1s with engineering leads.',
      'Co-designed API contracts and developer experience with engineers.',
    ],
    impact: [
      'Reduced average payout TAT from 48 hours to <6 hours.',
      'Onboarded 30 pilot merchants in 6 months.',
      'Increased monthly processed volume to $2.1M by month 12.',
    ],
    takeaways:
      'APIs must be developer-friendly: docs, sandbox, and fast feedback loops are mission-critical.',
  },
  {
    id: 'wallet',
    title: 'Consumer Wallet & On/Off Ramps',
    subtitle: 'CEX App — Company C',
    role: 'Lead PM',
    period: '9 months',
    problem:
      'Consumers in several African markets had limited access to fiat on/off-ramps and poor UX for buying crypto.',
    approach:
      'Designed a mobile-first wallet, simple KYC flow, and instant buy/sell rails via local payment partners and stablecoins.',
    responsibilities: [
      'Drove UX from wireframes to pixel-perfect mockups.',
      'Coordinated compliance and product to simplify KYC without losing security.',
    ],
    impact: [
      'Improved KYC completion from 27% to 67%.',
      'Achieved 18% week-on-week growth in active users during launch quarter.',
    ],
    takeaways:
      'User trust is built through clear UX and visible safeguards (transaction limits, verification states).',
  },
  {
    id: 'merchant_sdk',
    title: 'Merchant SDK & Dashboard',
    subtitle: 'Merchant integrations for checkout and settlements',
    role: 'Product Lead',
    period: '8 months',
    problem: 'Merchants needed a plug-and-play solution for accepting crypto + fiat payments.',
    approach:
      'Built a JavaScript SDK + dashboard for payouts, reconciliation, and reporting. Focused on reducing integration time to under 2 hours.',
    responsibilities: [
      'Wrote product spec including API endpoints and sample flows.',
      'Hosted developer onboarding sessions and tracked developer experience metrics.',
    ],
    impact: [
      'Integration time reduced from 5 days to 90 minutes on average.',
      'Merchant activation rates improved by 65%.',
    ],
    takeaways: 'Developer experience equals product adoption in B2B payments.'
  },
];

const process = [
  { step: 'Discovery', desc: 'Problem interviews, market research, data analysis, stakeholder alignment.' },
  { step: 'Define', desc: 'User stories, JTBD, success metrics, and product requirements.' },
  { step: 'Design', desc: 'Wireframes, high-fidelity mocks, usability testing, design handoff.' },
  { step: 'Build', desc: 'Sprint planning, dev collaboration, QA, and CI/CD releases.' },
  { step: 'Measure', desc: 'Analytics, A/B tests, funnel analysis, and iteration.' },
  { step: 'Scale', desc: 'Automation, operations, and partner integrations for growth.' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-sky-50 text-sky-900">
      <header className="bg-sky-100 shadow">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-sky-400 rounded flex items-center justify-center text-white font-bold">{profile.name[0]}</div>
            <div>
              <h1 className="text-xl font-semibold">{profile.name}</h1>
              <p className="text-sm text-sky-700">{profile.title} • {profile.location}</p>
            </div>
          </div>
          <nav className="flex gap-4 text-sm text-sky-700">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <section className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-extrabold">{profile.tagline}</h2>
            <p className="mt-4 text-sky-700">{profile.summary}</p>

            <div className="mt-6 flex gap-4">
              <a className="px-4 py-2 bg-sky-400 text-white rounded shadow" href="#projects">View case studies</a>
              <a className="px-4 py-2 border rounded" href="#contact">Contact me</a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded shadow">
                <p className="text-sm text-sky-500">Years experience</p>
                <p className="text-xl font-semibold">5 yrs</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <p className="text-sm text-sky-500">Specialization</p>
                <p className="text-xl font-semibold">Payments & Wallets</p>
              </div>
            </div>
          </div>

          <aside className="bg-white p-6 rounded shadow">
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 bg-gray-200 rounded-full flex items-center justify-center">
                <img src={profile.photo} alt="profile" className="w-28 h-28 object-cover rounded-full" />
              </div>
              <h3 className="mt-4 font-semibold">{profile.name}</h3>
              <p className="text-sm text-sky-700">{profile.title}</p>
              <a className="mt-4 text-sky-700" href="#contact">Get in touch</a>
            </div>

            <div className="mt-6">
              <h4 className="text-sm text-sky-700">Top skills</h4>
              <ul className="mt-2 space-y-2">
                {skills.slice(0,4).map((s) => (
                  <li key={s.name} className="text-sm">{s.name}</li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        <section id="about" className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold">About</h3>
            <p className="mt-3 text-sky-700">I blend a product manager’s strategic rigor with a strong focus on API-driven development and data-informed decision making. Over the last 5 years, I’ve shipped payments infrastructure, consumer wallets, merchant SDKs, and integrations that move money across borders. I focus on outcomes, not tasks, partnering closely with engineers to deliver reliable, delightful products. I leverage data and analytics to optimize experiences, build dashboards that turn insights into action, and create products that are not only functional but smarter, scalable, and impactful.</p>

            <div className="mt-6">
              <h4 className="font-medium">Core Contributions</h4>
              <ul className="list-disc ml-5 mt-2 text-sky-700 space-y-1">
                <li>Product ownership for API-first payments platforms.</li>
                <li>End-to-end launch of wallet & KYC experiences.</li>
                <li>Design-led collaboration to improve UX and conversion.</li>
                <li>Built developer tooling (sandbox & docs) to increase integrations.</li>
              </ul>
            </div>
          </div>

          <aside className="bg-white p-6 rounded shadow">
            <h4 className="text-sm font-medium">Skills</h4>
            <div className="mt-3 space-y-3">
              {skills.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm text-sky-700"><span>{s.name}</span><span>{s.level}%</span></div>
                  <div className="w-full bg-sky-100 h-2 rounded mt-2 overflow-hidden">
                    <div style={{ width: `${s.level}%` }} className="h-2 bg-cyan-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="mt-12">
          <h3 className="text-lg font-semibold">Career Timeline</h3>
          <div className="mt-6 space-y-6">
            {timeline.map((t) => (
              <div key={t.year} className="bg-white p-4 rounded shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{t.role}</h4>
                    <p className="text-sm text-sky-700">{t.company} • {t.year}</p>
                    <ul className="mt-2 list-disc ml-5 text-sky-700">
                      {t.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-12">
          <h3 className="text-lg font-semibold">Selected Case Studies</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article key={p.id} className="bg-white rounded shadow p-4">
                <h4 className="font-semibold">{p.title}</h4>
                <p className="text-sm text-sky-700">{p.subtitle}</p>
                <p className="mt-3 text-sky-700"><strong>Role:</strong> {p.role} • <strong>Duration:</strong> {p.period}</p>
                <div className="mt-3 text-sm">
                  <p><strong>Problem</strong>: {p.problem}</p>
                  <p className="mt-2"><strong>Approach</strong>: {p.approach}</p>
                  <p className="mt-2"><strong>Responsibilities</strong>:</p>
                  <ul className="list-disc ml-5 mt-2 text-sky-700">
                    {p.responsibilities.map((r,i) => <li key={i}>{r}</li>)}
                  </ul>
                  <p className="mt-2"><strong>Impact</strong>:</p>
                  <ul className="list-disc ml-5 mt-2 text-sky-700">
                    {p.impact.map((i,idx) => <li key={idx}>{i}</li>)}
                  </ul>
                  <p className="mt-2 text-sm text-sky-500"><strong>Takeaway</strong>: {p.takeaways}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="mt-12 bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold">My Product Process</h3>
          <p className="mt-2 text-sky-700">A lightweight, outcomes-driven structure that balances discovery, speed, and compliance in payments products.</p>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            {process.map((step) => (
              <div key={step.step} className="p-4 border rounded">
                <h5 className="font-semibold">{step.step}</h5>
                <p className="mt-2 text-sm text-sky-700">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h4 className="font-medium">Tools I Use</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {['Figma','Jira','Notion','Postman','MySQL Workbench','Mixpanel','GitHub','Jupyter Labs', 'Metabase'].map(t => (
                <span key={t} className="px-3 py-1 text-sm border rounded">{t}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mt-12 grid md:grid-cols-2 gap-6 items-start">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold">Resume</h3>
            <p className="mt-3 text-sky-700">Download a concise resume that summarizes my 5-year product career in payments, including metrics and project highlights.</p>
            <div className="mt-4 flex gap-3">
              <a className="px-4 py-2 bg-sky-400 text-white rounded" href={profile.resume} download>Download PDF</a>
              <a className="px-4 py-2 border rounded" href="/resume-short.pdf" download>One-page</a>
            </div>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="mt-3 text-sky-700">Let’s talk about product, payments, or data. I’m open for roles, consulting, and partnerships.</p>
            <div className="mt-4">
              <a className="block text-sky-700" href={`mailto:${profile.email}`}>{profile.email}</a>
              <p className="text-sm text-sky-500 mt-2">Or connect on LinkedIn</p>
              <a className="text-sky-700 block" href={profile.linkedin} target="_blank" rel="noreferrer">{profile.linkedin}</a>
            </div>
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-sky-500">© {new Date().getFullYear()} {profile.name}. Built with product-first design.</footer>
      </main>
    </div>
  );
}
