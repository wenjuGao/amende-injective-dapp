import { useState } from 'react'
import { useBalanceStore } from '../store/balance'
import { useWalletStore } from '../store/wallet'

export default function BalancePage() {
	const [isError, setIsError] = useState(false)
	const balance = useBalanceStore((state) => state.balance)
	const queryBalance = useBalanceStore((state) => state.queryBalance)
	const address = useWalletStore((state) => state.address)

	const handleClick = async () => {
		if (!address) {
			setIsError(true)
			setTimeout(() => {
				setIsError(false)
			}, 3000)
			return
		}
		try {
			await queryBalance(address)
			setIsError(false)
		} catch (error) {
			console.error('获取余额失败:', error)
			setIsError(true)
		}
	}
	return (
		<div className="shadow-sm card bg-base-100 card-xs">
			<div className="card-body">
				<h2 className="card-title">Balance</h2>
				<pre className="p-2 overflow-x-auto text-sm bg-gray-100 rounded">{balance ? JSON.stringify(balance, null, 2) : '暂无数据'}</pre>
				<div className="justify-end card-actions">
					<button className="btn" onClick={handleClick}>
						查询
					</button>
				</div>
			</div>
			{isError ? (
				<div role="alert" className=" alert alert-warning">
					<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-current shrink-0" fill="none" viewBox="0 0 24 24">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
						/>
					</svg>
					<span>{address ? '查询错误' : '请连接钱包'}</span>
				</div>
			) : null}
		</div>
	)
}
