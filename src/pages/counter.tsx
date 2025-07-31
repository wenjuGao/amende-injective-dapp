import { queryContract } from '../lib/counter'
import { useState } from 'react'

export default function CounterPage() {
	const [contractAddress, setContractAddress] = useState<string>('inj1zhgj4y6qpl7kmwjggzg786w2zmhkwp4pd0setk')
	const [contract, setContract] = useState<any>(null)
	const handleClick = async () => {
		const contract = await queryContract(contractAddress)
		setContract(contract)
	}
	return (
		<div className="shadow-sm card bg-base-100 card-xs">
			<div className="card-body">
				<h2 className="card-title">Contract</h2>
				<pre className="p-2 overflow-x-auto text-sm bg-gray-100 rounded">{contract ? JSON.stringify(contract, null, 2) : '暂无数据'}</pre>

				<p className="flex justify-center">
					<input
						type="text"
						placeholder="请输入合约地址"
						value={contractAddress}
						onChange={(e) => setContractAddress(e.target.value)}
						className="w-full m-auto input"
					/>
				</p>
				<div className="justify-end card-actions">
					<button className="btn" onClick={handleClick}>
						查询
					</button>
				</div>
			</div>
		</div>
	)
}
