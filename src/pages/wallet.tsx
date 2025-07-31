import { useWalletStore } from '../store/wallet'
import { useBalanceStore } from '../store/balance'

export default function WalletDetail() {
	const address: string = useWalletStore((state) => state.address)
	const balance: any = useBalanceStore((state) => state.balance)
	// 这里余额为示例，实际应通过API获取

	return (
		<div className="p-6 mx-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-900">
			<h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">钱包详情</h2>
			<div className="mb-2">
				<span className="font-medium text-gray-700 dark:text-gray-300">钱包地址：</span>
				<span className="text-gray-900 break-all dark:text-gray-100">{address || '--'}</span>
			</div>
			<div>
				<span className="font-medium text-gray-700 dark:text-gray-300">余额：</span>
				{balance.balances && balance.balances.length > 0
					? balance.balances.map((item: any, index: number) => (
							<span key={index} className="text-gray-900 dark:text-gray-100">
								{item.denom}: {item.amount}
								{index < balance.balances.length - 1 ? ', ' : ''}
							</span>
					  ))
					: null}
			</div>
		</div>
	)
}
