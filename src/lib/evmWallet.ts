import { BaseWalletStrategy, MsgBroadcaster } from '@injectivelabs/wallet-core'
import { EvmWalletStrategy } from '@injectivelabs/wallet-evm'
import { Wallet } from '@injectivelabs/wallet-base'
import { Network } from '@injectivelabs/networks'
import { ChainId, EthereumChainId } from '@injectivelabs/ts-types'
import { getInjectiveAddress, MsgExecuteContractCompat } from '@injectivelabs/sdk-ts'

const NETWORK = Network.Testnet
const chainId = ChainId.Testnet

const walletStrategy = new BaseWalletStrategy({
	chainId,
	wallet: Wallet.Metamask,
	strategies: {
		[Wallet.Metamask]: new EvmWalletStrategy({
			chainId,
			wallet: Wallet.Metamask,
			ethereumOptions: {
				// @ts-ignore
				ethereumChainId: EthereumChainId.Testnet || NETWORK
			}
		})
	}
})

export async function broadcast(contractAddress: string) {
	const [address] = await walletStrategy.getAddresses()
	try {
		let injectiveAddress
		if (address.startsWith('0x')) {
			injectiveAddress = getInjectiveAddress(address)
		} else {
			injectiveAddress = address
		}

		const msg = MsgExecuteContractCompat.fromJSON({
			sender: injectiveAddress,
			contractAddress,
			msg: { increment: {} }
		})

		const broadcaster = new MsgBroadcaster({
			walletStrategy,
			network: NETWORK
		})

		const result = await broadcaster.broadcast({
			msgs: msg,
			injectiveAddress
		})

		return result
	} catch (error) {
		console.error('Broadcast error:', error)
		return address
	}
}
