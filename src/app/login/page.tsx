import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen bg-surface flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md bg-surface-container-lowest border border-outline-variant rounded-xl p-8 shadow-sm">
        <div className="flex flex-col items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary-container text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_library</span>
          </div>
          <div className="text-center">
            <h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-inverse-primary">Libris</h1>
            <p className="font-body-md text-body-md text-secondary">Gestão de Acervos</p>
          </div>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block font-label-md text-label-md text-on-surface mb-2 uppercase" htmlFor="email">Email</label>
            <input 
              id="email" 
              type="email" 
              placeholder="seu.email@biblioteca.com" 
              className="w-full bg-surface-container-lowest border border-outline rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
            />
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <label className="block font-label-md text-label-md text-on-surface uppercase" htmlFor="password">Senha</label>
              <a href="#" className="font-label-md text-label-md text-primary hover:underline">Esqueceu a senha?</a>
            </div>
            <input 
              id="password" 
              type="password" 
              placeholder="••••••••" 
              className="w-full bg-surface-container-lowest border border-outline rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
            />
          </div>

          <Link 
            href="/dashboard"
            className="w-full block text-center px-6 py-3 rounded-lg bg-primary text-on-primary font-body-lg text-body-lg font-medium hover:bg-primary-container transition-colors shadow-sm"
          >
            Entrar
          </Link>
        </form>
      </div>
    </div>
  );
}
