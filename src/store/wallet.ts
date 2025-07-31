import { create } from 'zustand'
import { getAddresses } from '../lib/wallet'

interface WalletState {
	connected: boolean
	address: string
	setConnected: (connected: boolean) => void
	setAddress: (address: string) => void
	connectWallet: () => Promise<void>
}

export const useWalletStore = create<WalletState>((set) => ({
	connected: false,
	address: '',
	setConnected: (connected) => set({ connected }),
	setAddress: (address) => set({ address }),
	connectWallet: async () => {
		try {
			const addresses = await getAddresses()
			console.log(addresses)
			if (addresses.length > 0) {
				set({ address: addresses[0], connected: true })
			} else {
				set({ address: '', connected: false })
			}
		} catch (error) {
			console.error('Failed to get addresses:', error)
			set({ address: '', connected: false })
		}
	}
}))
