"use client";

import { useState } from "react";
import TopNavBar from "@/components/layout/TopNavBar";
import { Input, Button } from "@/components/ui";

export default function EmprestimosEDevolucoes() {
  const [loanData, setLoanData] = useState({
    userSearch: "",
    bookSearch: "",
    returnDate: "2023-11-15"
  });

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setLoanData(prev => ({ ...prev, [target.id]: target.value }));
  };

  const handleLoanSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Tentativa de empréstimo:", loanData);
    alert("Empréstimo registrado com sucesso!");
    // TODO: Integração Firebase
  };

  return (
    <>
      <TopNavBar title="Empréstimos e Devoluções" />
      <main className="flex-1 overflow-y-auto p-gutter bg-background">
        <div className="max-w-container-max-width mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Gestão de Circulação</h2>
            <p className="font-body-lg text-body-lg text-secondary mt-1">
              Registre novos empréstimos e gerencie devoluções pendentes.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-gutter items-start">
            
            {/* Novo Empréstimo */}
            <section className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-outline-variant/50">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface">Novo Empréstimo</h3>
              </div>
              
              <form className="flex flex-col gap-6" onSubmit={handleLoanSubmit}>
                <Input 
                  id="userSearch"
                  label="Identificação do Usuário"
                  icon="person_search"
                  placeholder="Digite nome, matrícula ou CPF..."
                  value={loanData.userSearch}
                  onChange={handleChange}
                  required
                />
                
                <Input 
                  id="bookSearch"
                  label="Acervo (Apenas Disponíveis)"
                  icon="barcode_scanner"
                  placeholder="Busque por título, autor ou código de barras..."
                  value={loanData.bookSearch}
                  onChange={handleChange}
                  required
                />
                
                <Input 
                  id="returnDate"
                  label="Data Prevista de Devolução"
                  type="date"
                  icon="calendar_month"
                  helperText="Padrão estabelecido: +14 dias corridos."
                  value={loanData.returnDate}
                  onChange={handleChange}
                  required
                />
                
                <div className="pt-4 mt-2 flex justify-end gap-3">
                  <Button variant="outline" type="button" onClick={() => setLoanData({ userSearch: "", bookSearch: "", returnDate: "2023-11-15" })}>
                    Limpar
                  </Button>
                  <Button variant="primary" icon="check" type="submit">
                    Confirmar Empréstimo
                  </Button>
                </div>
              </form>
            </section>

            {/* Registrar Devolução */}
            <section className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm p-6 flex flex-col h-full min-h-[500px]">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-outline-variant/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface-variant">
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>assignment_returned</span>
                  </div>
                  <h3 className="font-title-lg text-title-lg text-on-surface">Registrar Devolução</h3>
                </div>
              </div>

              {/* Active Loans List */}
              <div className="flex-1 overflow-y-auto pr-2 flex flex-col gap-3">
                <div className="p-4 rounded-lg border border-outline-variant bg-surface hover:bg-surface-container-lowest transition-colors flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-title-lg text-[16px] leading-[24px] font-semibold text-on-surface">O Design do Dia a Dia</h4>
                      <p className="font-body-md text-body-md text-secondary mt-0.5">Carlos E. Silva • Mat: 2021045</p>
                    </div>
                    <span className="inline-flex items-center px-2 py-1 rounded-md bg-error/10 text-error font-label-md text-label-md">
                      Atrasado 2 dias
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="font-code-sm text-code-sm text-secondary">Vencimento: 24 Out 2023</span>
                    <Button variant="outline" className="py-1.5 px-3" icon="keyboard_return">
                      Devolver
                    </Button>
                  </div>
                </div>
              </div>
            </section>
            
          </div>
        </div>
      </main>
    </>
  );
}
