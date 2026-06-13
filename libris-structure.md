# Estruturação da Aplicação - Libris

## Overview
Estruturar a aplicação "Libris: Gestão de Acervos Modernos" com base no design exportado pelo Stitch. A estrutura envolverá o mapeamento do roteamento, componentes reutilizáveis, gerenciamento de estado para formulários e preparação arquitetural para integração futura com Firebase.

## Project Type
WEB

## Success Criteria
- Roteamento completo entre telas de Dashboard, Acervo e Empréstimos.
- Componentes de UI modulares (botões, inputs, tabelas).
- Formulários com estado preparado (React Hook Form ou estados locais).
- Módulos organizados para fácil conexão com Firebase.

## Tech Stack
- **Next.js (App Router)**: Escolhido para roteamento eficiente e renderização otimizada.
- **Tailwind CSS v4**: Para estilização utility-first conforme o Design System "Lumina Lex".
- **React Hook Form**: (Recomendação) para estados de formulários complexos.
- **Firebase**: (Planejado) para persistência de dados e autenticação.

## File Structure
```text
src/
├── app/
│   ├── layout.tsx         # Layout Global com Sidebar
│   ├── dashboard/         # Dashboard Analytics
│   ├── acervo/            # Listagem/Cadastro de Livros
│   └── emprestimos/       # Empréstimos e Devoluções
├── components/
│   ├── layout/            # Sidebar, TopNavBar
│   ├── ui/                # Button, Input, Select, Table, Badge
│   └── forms/             # Lógica e wrappers de formulário
├── lib/
│   └── firebase/          # Arquivos de configuração futura
```

## Task Breakdown

### Roteamento e Estrutura
- **Task ID**: routing-setup
- **Agent**: `frontend-specialist`
- **Skills**: `nextjs-react-expert`
- **Priority**: P1
- **INPUT**: Telas requeridas (Dashboard, Acervo, Empréstimos).
- **OUTPUT**: Diretórios e `page.tsx` correspondentes no App Router.
- **VERIFY**: Navegação funcional e sem quebras visuais usando `<Link>` do Next.

### Componentes de UI Base
- **Task ID**: ui-components
- **Agent**: `frontend-specialist`
- **Skills**: `frontend-design`, `tailwind-patterns`
- **Priority**: P1
- **INPUT**: HTML estático exportado do Stitch.
- **OUTPUT**: Componentes extraídos (`Button.tsx`, `Input.tsx`, `Table.tsx`) isolados em `src/components/ui/`.
- **VERIFY**: Componentes aceitam props e renderizam as variantes de design (ex: Button primary vs secondary).

### Estados e Formulários
- **Task ID**: form-state
- **Agent**: `frontend-specialist`
- **Skills**: `nextjs-react-expert`
- **Priority**: P2
- **INPUT**: Componentes de formulários de "Cadastro de Livro" e "Novo Empréstimo".
- **OUTPUT**: Formulários implementados com tipagem e estados locais (useState/React Hook Form) capturando inputs.
- **VERIFY**: Evento `onSubmit` captura e loga o objeto serializado corretamente.

### Preparação para Firebase
- **Task ID**: firebase-prep
- **Agent**: `backend-specialist`
- **Skills**: `api-patterns`
- **Priority**: P3
- **INPUT**: Dados de formulários mapeados.
- **OUTPUT**: Criação da infraestrutura `src/lib/firebase/` com stubs (funções falsas simulando chamadas API como `addBook()`).
- **VERIFY**: Chamadas simuladas nos formulários executam corretamente sem erros de importação.

## Phase X: Verification
- [ ] Checagem de tipagem TypeScript (`npx tsc --noEmit`)
- [ ] Linter sem erros (`npm run lint`)
- [ ] Teste de Build de Produção (`npm run build`)
- [ ] Auditoria de UX e Acessibilidade (contraste de cores do Lumina Lex mantido)
