import { IndexerGrpcDerivativesApi } from '@injectivelabs/sdk-ts'
import { getNetworkEndpoints, Network } from '@injectivelabs/networks'

// Using testnet
export const NETWORK = Network.Testnet
export const ENDPOINTS = getNetworkEndpoints(NETWORK)

// Initialize API clients
export const indexerDerivativesApi = new IndexerGrpcDerivativesApi(ENDPOINTS.indexer)

// Fetch derivative markets
export const fetchDerivativeMarkets = async () => {
	return await indexerDerivativesApi.fetchMarkets()
}
