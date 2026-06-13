"use client";

import { useState } from "react";
import TopNavBar from "@/components/layout/TopNavBar";
import { Input, Button } from "@/components/ui";

export default function CadastroDeLivros() {
  const [formData, setFormData] = useState({
    titulo: "",
    autor: "",
    editora: "",
    ano: "",
    isbn: "",
    categoria: "",
    quantidade: "1",
    localizacao: ""
  });

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [target.id]: target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("[Libris] Novo livro:", formData);
    // TODO: substituir por addBook(formData) do Firebase
    alert("Livro cadastrado! Veja o console.");
  };

  return (
    <>
      <TopNavBar title="Cadastrar Livro" />
      <main className="flex-1 overflow-y-auto p-gutter bg-background">
        <div className="max-w-container-max-width mx-auto space-y-gutter">
          {/* Breadcrumb / Header Row */}
          <div className="flex justify-between items-end mb-2">
            <div>
              <p className="font-label-md text-label-md text-secondary uppercase tracking-wider mb-1">Acervo / Manutenção</p>
              <h2 className="font-headline-md text-headline-md text-on-surface">Novo Registro Bibliográfico</h2>
            </div>
            <button className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              <span className="font-body-md text-body-md font-medium">Voltar para Acervo</span>
            </button>
          </div>

          {/* Bento Grid Layout for Forms and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            
            {/* Primary Form Container */}
            <div className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
              <h3 className="font-title-lg text-title-lg text-on-surface mb-6 border-b border-surface-container-high pb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">edit_document</span>
                Dados do Título
              </h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-6">
                  
                  {/* Column 1 */}
                  <div className="space-y-6">
                    <Input 
                      id="titulo" 
                      label="Título da Obra" 
                      placeholder="Ex: Dom Casmurro" 
                      required 
                      value={formData.titulo}
                      onChange={handleChange}
                    />
                    <Input 
                      id="autor" 
                      label="Autor Principal" 
                      placeholder="Ex: Machado de Assis" 
                      required 
                      value={formData.autor}
                      onChange={handleChange}
                    />
                    <Input 
                      id="editora" 
                      label="Editora" 
                      placeholder="Ex: Companhia das Letras" 
                      value={formData.editora}
                      onChange={handleChange}
                    />
                    <Input 
                      id="ano" 
                      label="Ano de Publicação" 
                      placeholder="YYYY" 
                      type="number" 
                      value={formData.ano}
                      onChange={handleChange}
                    />
                  </div>
                  
                  {/* Column 2 */}
                  <div className="space-y-6">
                    <Input 
                      id="isbn" 
                      label="ISBN" 
                      placeholder="Ex: 978-85-359-1066-3" 
                      required 
                      value={formData.isbn}
                      onChange={handleChange}
                    />
                    
                    <div className="flex flex-col gap-2 w-full">
                      <label className="font-label-md text-label-md text-on-surface uppercase tracking-wider" htmlFor="categoria">
                        Categoria / Gênero
                      </label>
                      <div className="relative">
                        <select 
                          className="w-full bg-surface-container-lowest border border-outline rounded-lg px-3 py-2.5 font-body-md text-body-md text-on-surface appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
                          id="categoria"
                          value={formData.categoria}
                          onChange={handleChange}
                        >
                          <option disabled value="">Selecione uma categoria...</option>
                          <option value="literatura_brasileira">Literatura Brasileira</option>
                          <option value="ciencias_exatas">Ciências Exatas</option>
                          <option value="historia">História</option>
                          <option value="ficcao">Ficção Científica</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">arrow_drop_down</span>
                      </div>
                    </div>
                    
                    <Input 
                      id="quantidade" 
                      label="Quantidade de Exemplares" 
                      type="number" 
                      min="1" 
                      required 
                      value={formData.quantidade}
                      onChange={handleChange}
                    />
                    
                    <Input 
                      id="localizacao" 
                      label="Código de Localização" 
                      placeholder="Ex: EST-04-PRT-02" 
                      className="uppercase"
                      helperText="Formato: Estante - Prateleira"
                      value={formData.localizacao}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                {/* Actions */}
                <div className="pt-6 mt-6 border-t border-surface-container-high flex items-center justify-end gap-4">
                  <Button variant="outline" type="button" onClick={() => setFormData({ titulo: "", autor: "", editora: "", ano: "", isbn: "", categoria: "", quantidade: "1", localizacao: "" })}>
                    Limpar
                  </Button>
                  <Button variant="primary" icon="save" type="submit">
                    Salvar Livro
                  </Button>
                </div>
              </form>
            </div>
            
            {/* Secondary Area */}
            <div className="lg:col-span-4 flex flex-col gap-gutter">
              <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/50">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-0.5">info</span>
                  <div>
                    <h4 className="font-title-lg text-body-lg font-semibold text-on-surface mb-1">Dica de Catalogação</h4>
                    <p className="font-body-md text-body-md text-secondary">
                      Certifique-se de validar o ISBN antes de salvar. Livros com ISBN duplicado gerarão um alerta no sistema para atualização de quantidade em vez de novo registro.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
