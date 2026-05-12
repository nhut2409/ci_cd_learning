const pipelineSteps = [
  {
    title: 'Code',
    text: 'Viet React component, Tailwind class, va commit len Git.',
  },
  {
    title: 'CI',
    text: 'GitHub Actions cai package, lint, build de bat loi som.',
  },
  {
    title: 'Test',
    text: 'Chay Vitest de kiem tra UI render dung truoc khi build Docker.',
  },
  {
    title: 'Docker',
    text: 'Dong goi static app bang nginx image nhe, de chay giong production.',
  },
  {
    title: 'CD',
    text: 'Sau nay co the push image len registry va deploy len server/cloud.',
  },
]

function App() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <section className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            React + Tailwind + Docker
          </p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
                Source mau gon de hoc CI/CD
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                App nay co du thu can thiet: React, TypeScript, TailwindCSS,
                lenh lint/test/build, Dockerfile, va workflow GitHub Actions
                mau.
              </p>
            </div>
            <div className="rounded-md bg-slate-950 p-4 font-mono text-sm text-emerald-300">
              <p>npm install</p>
              <p>npm run build</p>
              <p>docker build -t react-ci-cd .</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-5">
          {pipelineSteps.map((step, index) => (
            <article
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
              key={step.title}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-800">
                {index + 1}
              </div>
              <h2 className="mt-4 text-lg font-semibold text-slate-950">
                {step.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {step.text}
              </p>
            </article>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-950">
              Lenh hay dung
            </h2>
            <div className="mt-4 space-y-3 font-mono text-sm">
              <div className="rounded-md bg-slate-100 p-3">npm run dev</div>
              <div className="rounded-md bg-slate-100 p-3">npm run lint</div>
              <div className="rounded-md bg-slate-100 p-3">npm test</div>
              <div className="rounded-md bg-slate-100 p-3">npm run build</div>
              <div className="rounded-md bg-slate-100 p-3">
                docker run -p 8080:80 react-ci-cd
              </div>
            </div>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-950">
              Muc tieu hoc
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              <li>Hieu pipeline co cac buoc install, lint, test, build.</li>
              <li>Hieu Docker multi-stage build cho frontend static.</li>
              <li>Biet cach them CD sau khi CI da on dinh.</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  )
}

export default App
