import { motion } from 'framer-motion'

export function LandingPage() {
  const features = [
    {
      title: 'Meeting Intelligence',
      desc: 'Summarize meetings, track action items, and automate follow‑ups.',
    },
    {
      title: 'Strategic Planning',
      desc: 'Turn ideas into execution plans with AI-powered organization.',
    },
    {
      title: 'Executive Automation',
      desc: 'Manage schedules, tasks, and communication automatically.',
    },
    {
      title: 'Knowledge Memory',
      desc: 'Instantly recall conversations, files, and company decisions.',
    },
    {
      title: 'Team Coordination',
      desc: 'Keep your team aligned with smart updates and workflows.',
    },
    {
      title: '24/7 Operations',
      desc: 'Always-on AI support helping your business move faster.',
    },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white font-sans">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-cyan-500/10 blur-3xl rounded-full animate-pulse" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Hero */}
      <section className="relative z-10 px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="inline-flex items-center px-5 py-2 rounded-full border border-zinc-700 bg-zinc-900/70 text-sm text-zinc-300 backdrop-blur mb-8">
            Synqora • AI Executive Operations
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none">
            Meet
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Synqora
            </span>
          </h1>

          <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 leading-relaxed">
            Your AI-powered Chief of Staff built to automate planning,
            meetings, priorities, communication, and execution.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 rounded-2xl bg-blue-500 hover:bg-blue-400 transition-all duration-300 text-lg font-semibold shadow-2xl shadow-blue-500/30 hover:scale-105">
              Get Early Access
            </button>

            <button className="px-8 py-4 rounded-2xl border border-zinc-700 bg-zinc-900/40 hover:border-zinc-500 transition-all duration-300 text-lg font-semibold backdrop-blur hover:scale-105">
              Watch Demo
            </button>
          </div>

          {/* Dashboard Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-20 rounded-3xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center gap-2 px-6 py-4 border-b border-zinc-800">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 p-8 text-left">
              <div className="space-y-5">
                <div className="p-6 rounded-2xl bg-zinc-800/60 border border-zinc-700">
                  <p className="text-sm text-zinc-400">Today's Priorities</p>
                  <h3 className="text-2xl font-bold mt-2">
                    Investor Update Ready
                  </h3>
                  <p className="mt-3 text-zinc-400">
                    Synqora drafted, reviewed, and scheduled your update automatically.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-zinc-800/60 border border-zinc-700">
                  <p className="text-sm text-zinc-400">Meeting Summary</p>
                  <p className="mt-3 text-zinc-300">
                    AI-generated action items for sales, hiring, and product execution.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 p-8 flex flex-col justify-between">
                <div>
                  <p className="text-blue-300 text-sm">AI Chief of Staff</p>
                  <h3 className="mt-4 text-4xl font-black leading-tight">
                    Think Faster.
                    <br />
                    Execute Smarter.
                  </h3>
                </div>

                <div className="mt-10 space-y-4 text-zinc-300">
                  <div>• Automated scheduling</div>
                  <div>• Strategic planning</div>
                  <div>• AI meeting intelligence</div>
                  <div>• Executive automation</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black">Built For Modern Leaders</h2>
          <p className="mt-5 text-zinc-400 text-lg">
            Replace busywork with intelligent execution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={feature.title}
              className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur shadow-xl hover:border-blue-500/40 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold">{feature.title}</h3>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 py-28 text-center">
        <div className="max-w-4xl mx-auto rounded-[2rem] border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-14 shadow-2xl">
          <h2 className="text-5xl md:text-6xl font-black leading-tight">
            Start Running Your Company
            <span className="block text-blue-400">With Synqora</span>
          </h2>

          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
            The next generation of AI-powered executive operations.
          </p>

          <button className="mt-10 px-10 py-5 rounded-2xl bg-blue-500 hover:bg-blue-400 transition-all duration-300 text-lg font-bold shadow-2xl shadow-blue-500/30 hover:scale-105">
            Get Early Access To Synqora
          </button>
        </div>
      </section>
    </div>
  )
}
