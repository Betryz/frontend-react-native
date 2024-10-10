import { create} from "zustand"

// lista do que eu quero guardar
export const useAccountStore = create((set) => ({
    accounts: [],
    addAccount: (newAccount) => set((state) => ({accounts: [...state.accounts, newAccount]})),
    setAccounts: (newAccounts) => set({ accounts: newAccounts}),
    deleteAccount: (id) => set((state) => ({ accounts: state.accounts.filter((account) => account.id !== id)}))
}))

