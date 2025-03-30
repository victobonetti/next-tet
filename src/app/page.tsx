import Header from '@/components/Header';
import AnimatedButton from '@/components/AnimatedButton';
import AnimatedBackground from '@/components/AnimatedBackground';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white/30  relative flex flex-col">
      <AnimatedBackground />
      <Header />
      <main className="flex-grow mx-auto max-w-3xl px-4 py-12 sm:py-16 lg:px-8 relative flex flex-col items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-emerald-950 sm:text-5xl">
            Conheça o FinChat
          </h1>
          <p className="text-lg text-emerald-800">
            Uma solução despreocupada para o seu dinheiro
          </p>
          <div className="mt-8">
            <AnimatedButton href="/chat">
              Comece agora
            </AnimatedButton>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
