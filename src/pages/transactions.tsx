import { getAddresses } from '../lib/wallet'
import { broadcast } from '../lib/evmWallet'
import { useState } from 'react'

export default function TransactionsPage() {
	const [contractAddress, setContractAddress] = useState<string>('inj1zhgj4y6qpl7kmwjggzg786w2zmhkwp4pd0setk')
	const [addresses, setAddresses] = useState<any[]>([])
	const [evmAddresses, setEvmAddresses] = useState<any>(null)
	const handleConnectKeplr = async () => {
		const result: string[] = await getAddresses()
		setAddresses(result)
	}
	const handleConnectEvm = async () => {
		const result: any = await broadcast(contractAddress)
		setEvmAddresses(result)
	}
	return (
		<div className="grid gap-1">
			<div className="shadow-sm card bg-base-100 card-xs">
				<div className="card-body">
					<h2 className="card-title">Keplr Wallet</h2>
					<div className="max-h-[500px] overflow-y-auto">
						<pre className="p-2 overflow-x-auto text-sm bg-gray-100 rounded">
							{addresses ? JSON.stringify(addresses, null, 2) : '暂无数据'}
						</pre>
					</div>

					<div className="justify-end card-actions">
						<button className="btn" onClick={handleConnectKeplr}>
							Connect Keplr
						</button>
					</div>
				</div>
			</div>
			<div className="shadow-sm card bg-base-100 card-xs">
				<div className="card-body">
					<h2 className="card-title">Evm Wallet</h2>
					<p className="flex justify-center">
						<input
							type="text"
							placeholder="请输入合约地址"
							value={contractAddress}
							onChange={(e) => setContractAddress(e.target.value)}
							className="w-full m-auto input"
						/>
					</p>
					<div className="max-h-[500px] overflow-y-auto">
						<pre className="p-2 overflow-x-auto text-sm bg-gray-100 rounded">
							{evmAddresses ? JSON.stringify(evmAddresses, null, 2) : '暂无数据'}
						</pre>
					</div>

					<div className="justify-end card-actions">
						<button className="btn" onClick={handleConnectEvm}>
							Connect Evm
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
