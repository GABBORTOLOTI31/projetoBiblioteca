import TopNavBar from "@/components/layout/TopNavBar";

export default async function LivroDetalhes({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  return (
    <>
      <TopNavBar title={`Detalhes do Livro #${id}`} />
      <main className="flex-1 overflow-y-auto p-gutter bg-background">
        <div className="max-w-container-max-width mx-auto space-y-6">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
            <h2 className="font-headline-md text-headline-md font-bold mb-2">Informações do Livro</h2>
            <p className="text-secondary mb-6">Visualizando dados para o ID: {id}</p>
            
            <button className="px-6 py-2.5 rounded-lg bg-primary text-on-primary font-body-md text-body-md font-medium hover:bg-primary-container transition-colors shadow-sm">
              Registrar Empréstimo Deste Exemplar
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
