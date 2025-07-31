import { WalletStrategy } from '@injectivelabs/wallet-strategy'
import { ChainId } from '@injectivelabs/ts-types'

const CHAIN_ID = ChainId.Testnet

export const walletStrategy = new WalletStrategy({
	chainId: CHAIN_ID,
	strategies: {}
})

export const getAddresses = async (): Promise<string[]> => {
	const addresses = await walletStrategy.getAddresses()

	if (addresses.length === 0) {
		throw new Error('There are no addresses linked in this wallet.')
	}

	return addresses
}
