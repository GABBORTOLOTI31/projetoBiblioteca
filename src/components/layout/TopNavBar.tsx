import Link from "next/link";

export default function TopNavBar({ title }: { title: string }) {
  return (
    <header className="bg-surface dark:bg-surface-dim shadow-sm flex justify-between items-center h-16 px-gutter transition-all duration-200 z-10 sticky top-0">
      <div className="flex items-center">
        <h2 className="font-title-lg text-title-lg font-bold text-primary dark:text-inverse-primary">{title}</h2>
      </div>
      <div className="flex items-center gap-4">
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-inverse-surface transition-all duration-200">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-inverse-surface transition-all duration-200">
          <span className="material-symbols-outlined">help</span>
        </button>
        <Link href="/perfil" className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm ml-2 shrink-0 hover:ring-2 hover:ring-primary/50 transition-all">
          AD
        </Link>
      </div>
    </header>
  );
}
