import { create } from 'zustand'
import { fetchBalances } from '../lib/balance'

type balanceType = any

interface BalanceStore {
	balance: balanceType
	getBalance: () => balanceType
	queryBalance: (address: string) => void
}

export const useBalanceStore = create<BalanceStore>((set, get) => ({
	balance: {},
	getBalance: () => get().balance,
	queryBalance: async (address) => {
		const balance = await fetchBalances(address)
		console.log(balance)
		set({ balance })
	}
}))
