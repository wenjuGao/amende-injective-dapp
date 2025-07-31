import { getNetworkEndpoints, Network } from '@injectivelabs/networks'
import { ChainGrpcWasmApi, toBase64 } from '@injectivelabs/sdk-ts'

export const NETWORK: Network = Network.Testnet
export const ENDPOINTS = getNetworkEndpoints(NETWORK)
export const chainGrpcWasmApi = new ChainGrpcWasmApi(ENDPOINTS.grpc)

export async function queryContract(contractAddress: string) {
	const query = { get_count: {} }

	const result = await chainGrpcWasmApi.fetchSmartContractState(contractAddress, toBase64(query))

	const decodedResult = JSON.parse(new TextDecoder().decode(result.data))

	console.log('Query result:', decodedResult)
	return decodedResult
}
