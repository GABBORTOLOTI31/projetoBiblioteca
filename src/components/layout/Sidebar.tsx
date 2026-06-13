import Link from 'next/link';

export default function Sidebar() {
  return (
    <nav className="w-[280px] h-screen fixed left-0 top-0 bg-surface-container-lowest dark:bg-inverse-surface border-r border-outline-variant dark:border-outline shadow-sm flex flex-col p-4 z-20">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8 px-2">
        <div className="w-10 h-10 rounded bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>local_library</span>
        </div>
        <div>
          <h1 className="font-title-lg text-title-lg font-bold text-primary dark:text-inverse-primary truncate">Controle de Biblioteca</h1>
          <p className="font-body-md text-body-md text-secondary">Administração</p>
        </div>
      </div>
      {/* Main Tabs */}
      <div className="flex-1 space-y-1">
        <Link className="flex items-center gap-3 px-3 py-2 bg-secondary-container dark:bg-on-secondary-container text-on-secondary-container dark:text-on-secondary font-bold rounded-lg transition-colors duration-200 ease-in-out" href="/dashboard">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-body-md text-body-md">Dashboard</span>
        </Link>
        <Link className="flex items-center gap-3 px-3 py-2 text-secondary dark:text-on-secondary-fixed-variant hover:bg-surface-container-low dark:hover:bg-surface-variant transition-colors duration-200 ease-in-out rounded-lg" href="/cadastro-de-livros">
          <span className="material-symbols-outlined">menu_book</span>
          <span className="font-body-md text-body-md">Acervo</span>
        </Link>
        <Link className="flex items-center gap-3 px-3 py-2 text-secondary dark:text-on-secondary-fixed-variant hover:bg-surface-container-low dark:hover:bg-surface-variant transition-colors duration-200 ease-in-out rounded-lg" href="/cadastro-de-usuarios">
          <span className="material-symbols-outlined">group</span>
          <span className="font-body-md text-body-md">Usuários</span>
        </Link>
        <Link className="flex items-center gap-3 px-3 py-2 text-secondary dark:text-on-secondary-fixed-variant hover:bg-surface-container-low dark:hover:bg-surface-variant transition-colors duration-200 ease-in-out rounded-lg" href="/emprestimos-e-devolucoes">
          <span className="material-symbols-outlined">history_edu</span>
          <span className="font-body-md text-body-md">Empréstimos</span>
        </Link>
      </div>
      {/* Footer Tabs */}
      <div className="mt-auto pt-4 border-t border-outline-variant space-y-1">
        <Link className="flex items-center gap-3 px-3 py-2 text-secondary dark:text-on-secondary-fixed-variant hover:bg-surface-container-low dark:hover:bg-surface-variant transition-colors duration-200 ease-in-out rounded-lg" href="/configuracoes">
          <span className="material-symbols-outlined">settings</span>
          <span className="font-body-md text-body-md">Configurações</span>
        </Link>
        <Link className="flex items-center gap-3 px-3 py-2 text-secondary dark:text-on-secondary-fixed-variant hover:bg-surface-container-low dark:hover:bg-surface-variant transition-colors duration-200 ease-in-out rounded-lg" href="/login">
          <span className="material-symbols-outlined">logout</span>
          <span className="font-body-md text-body-md">Sair</span>
        </Link>
      </div>
    </nav>
  );
}
