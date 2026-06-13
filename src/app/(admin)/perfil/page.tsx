import TopNavBar from "@/components/layout/TopNavBar";

export default function Perfil() {
  return (
    <>
      <TopNavBar title="Meu Perfil" />
      <main className="flex-1 overflow-y-auto p-gutter bg-background">
        <div className="max-w-container-max-width mx-auto">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 shadow-sm max-w-2xl mx-auto flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center mb-4 text-3xl font-bold">
              AD
            </div>
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface">Administrador</h2>
            <p className="text-secondary mb-8">admin@biblioteca.com</p>
            
            <button className="px-6 py-2.5 rounded-lg border border-error text-error font-body-md text-body-md font-medium hover:bg-error-container transition-colors">
              Encerrar Sessão
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
