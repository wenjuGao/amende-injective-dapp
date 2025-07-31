import { ChainGrpcBankApi } from '@injectivelabs/sdk-ts'
import { getNetworkEndpoints, Network } from '@injectivelabs/networks'

// Using testnet
export const NETWORK = Network.Testnet
export const ENDPOINTS = getNetworkEndpoints(NETWORK)

// Initialize API clients
export const chainBankApi = new ChainGrpcBankApi(ENDPOINTS.grpc)

// Fetch wallet balances
export const fetchBalances = async (injectiveAddress: string) => {
	try {
		const result = await chainBankApi.fetchBalances(injectiveAddress)
		console.log(result)
		return result
	} catch (error) {
		console.error('Error fetching balances:', error)
		throw error
	}
}
