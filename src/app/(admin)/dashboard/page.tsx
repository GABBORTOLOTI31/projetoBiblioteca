import TopNavBar from "@/components/layout/TopNavBar";

export default function Dashboard() {
  return (
    <>
      <TopNavBar title="Dashboard" />
      <main className="flex-1 overflow-y-auto p-gutter bg-background">
        <div className="max-w-container-max-width mx-auto space-y-gutter">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Card 1 */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 shadow-administrative flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl">library_books</span>
              </div>
              <div>
                <p className="font-body-md text-body-md text-secondary mb-1">Total de Livros</p>
                <p className="font-headline-lg text-headline-lg text-on-surface">12.450</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 shadow-administrative flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl">autorenew</span>
              </div>
              <div>
                <p className="font-body-md text-body-md text-secondary mb-1">Livros Emprestados Atualmente</p>
                <p className="font-headline-lg text-headline-lg text-on-surface">842</p>
              </div>
            </div>
            {/* Card 3 (Alert) */}
            <div className="bg-surface-container-lowest border border-error-container rounded-lg p-6 shadow-administrative flex items-start gap-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-error opacity-5 rounded-bl-full"></div>
              <div className="w-12 h-12 rounded-full bg-error-container text-on-error-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl">warning</span>
              </div>
              <div>
                <p className="font-body-md text-body-md text-secondary mb-1">Empréstimos Atrasados</p>
                <p className="font-headline-lg text-headline-lg text-error">37</p>
              </div>
            </div>
          </div>

          {/* Filters & Search Bar */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 shadow-administrative flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input className="w-full pl-10 pr-4 py-2 border border-outline-variant rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body-md text-body-md placeholder:text-outline text-on-surface transition-all" placeholder="Buscar por título, autor ou ISBN..." type="text" />
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative w-full md:w-48">
                <select className="w-full appearance-none px-4 py-2 border border-outline-variant rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body-md text-body-md text-on-surface cursor-pointer">
                  <option value="">Todas Categorias</option>
                  <option value="ficcao">Ficção Científica</option>
                  <option value="tecnologia">Tecnologia</option>
                  <option value="historia">História</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
              </div>
              <div className="relative w-full md:w-48">
                <select className="w-full appearance-none px-4 py-2 border border-outline-variant rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body-md text-body-md text-on-surface cursor-pointer">
                  <option value="">Todos Status</option>
                  <option value="disponivel">Disponível</option>
                  <option value="emprestado">Emprestado</option>
                  <option value="atrasado">Atrasado</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
              </div>
            </div>
          </div>

          {/* Data Table */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg shadow-administrative overflow-hidden flex flex-col">
            <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center bg-surface-bright">
              <h3 className="font-title-lg text-title-lg text-on-surface">Consulta Rápida de Acervo</h3>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded font-label-md text-label-md uppercase tracking-wider hover:bg-on-primary-fixed-variant transition-colors shadow-sm">
                <span className="material-symbols-outlined text-sm">add</span>
                Novo Empréstimo
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant">
                    <th className="px-6 py-3 font-label-md text-label-md uppercase text-secondary font-medium">Título</th>
                    <th className="px-6 py-3 font-label-md text-label-md uppercase text-secondary font-medium">Autor</th>
                    <th className="px-6 py-3 font-label-md text-label-md uppercase text-secondary font-medium">Categoria</th>
                    <th className="px-6 py-3 font-label-md text-label-md uppercase text-secondary font-medium">Status</th>
                    <th className="px-6 py-3 font-label-md text-label-md uppercase text-secondary font-medium">Previsão Retorno</th>
                    <th className="px-6 py-3 font-label-md text-label-md uppercase text-secondary font-medium text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  <tr className="hover:bg-surface-container-low transition-colors duration-150">
                    <td className="px-6 py-4 font-body-md text-body-md text-on-surface font-medium">O Senhor dos Anéis: A Sociedade do Anel</td>
                    <td className="px-6 py-4 font-body-md text-body-md text-secondary">J.R.R. Tolkien</td>
                    <td className="px-6 py-4 font-body-md text-body-md text-secondary">Fantasia</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-1 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md uppercase tracking-wider">
                        Disponível
                      </span>
                    </td>
                    <td className="px-6 py-4 font-body-md text-body-md text-secondary">-</td>
                    <td className="px-6 py-4 text-right">
                      <button className="w-8 h-8 rounded text-secondary hover:bg-surface-variant hover:text-on-surface transition-colors inline-flex items-center justify-center">
                        <span className="material-symbols-outlined text-lg">more_vert</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors duration-150">
                    <td className="px-6 py-4 font-body-md text-body-md text-on-surface font-medium">Fundação</td>
                    <td className="px-6 py-4 font-body-md text-body-md text-secondary">Isaac Asimov</td>
                    <td className="px-6 py-4 font-body-md text-body-md text-secondary">Ficção Científica</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-1 rounded bg-secondary-container text-on-secondary-container font-label-md text-label-md uppercase tracking-wider">
                        Emprestado
                      </span>
                    </td>
                    <td className="px-6 py-4 font-body-md text-body-md text-secondary">15/11/2023</td>
                    <td className="px-6 py-4 text-right">
                      <button className="w-8 h-8 rounded text-secondary hover:bg-surface-variant hover:text-on-surface transition-colors inline-flex items-center justify-center">
                        <span className="material-symbols-outlined text-lg">more_vert</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors duration-150">
                    <td className="px-6 py-4 font-body-md text-body-md text-on-surface font-medium">Design System em Prática</td>
                    <td className="px-6 py-4 font-body-md text-body-md text-secondary">Diana Mounter</td>
                    <td className="px-6 py-4 font-body-md text-body-md text-secondary">Tecnologia</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-1 rounded bg-error-container text-on-error-container font-label-md text-label-md uppercase tracking-wider">
                        Atrasado
                      </span>
                    </td>
                    <td className="px-6 py-4 font-body-md text-body-md text-error font-medium">02/11/2023</td>
                    <td className="px-6 py-4 text-right">
                      <button className="w-8 h-8 rounded text-secondary hover:bg-surface-variant hover:text-on-surface transition-colors inline-flex items-center justify-center">
                        <span className="material-symbols-outlined text-lg">more_vert</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className="px-6 py-4 border-t border-outline-variant bg-surface-bright flex items-center justify-between">
              <span className="font-body-md text-body-md text-secondary">Mostrando 1-3 de 12.450 livros</span>
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 rounded border border-outline-variant flex items-center justify-center text-secondary hover:bg-surface-container-low disabled:opacity-50" disabled>
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <button className="w-8 h-8 rounded border border-outline-variant flex items-center justify-center text-secondary hover:bg-surface-container-low">
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
