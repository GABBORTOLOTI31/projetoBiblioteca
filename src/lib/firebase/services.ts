// Stubs de serviço para integração futura com Firebase.
// Troque os corpos das funções pelo SDK do Firestore quando configurado.

type ServiceResult<T = void> = Promise<{ success: boolean; data?: T; error?: string }>;

export async function addBook(bookData: Record<string, string>): ServiceResult<{ id: string }> {
  console.log("[Libris] addBook →", bookData);
  await delay(800);
  return { success: true, data: { id: `book_${Date.now()}` } };
}

export async function createLoan(loanData: Record<string, string>): ServiceResult<{ id: string }> {
  console.log("[Libris] createLoan →", loanData);
  await delay(600);
  return { success: true, data: { id: `loan_${Date.now()}` } };
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
