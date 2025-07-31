import { IndexerGrpcSpotApi } from '@injectivelabs/sdk-ts'
import { getNetworkEndpoints, Network } from '@injectivelabs/networks'

// Using testnet
export const NETWORK = Network.Testnet
export const ENDPOINTS = getNetworkEndpoints(NETWORK)

// Initialize API clients
export const indexerSpotApi = new IndexerGrpcSpotApi(ENDPOINTS.indexer)

// Fetch spot markets
export const fetchSpotMarkets = async () => {
	return await indexerSpotApi.fetchMarkets()
}
