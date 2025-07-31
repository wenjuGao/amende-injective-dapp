import { useWalletStore } from '../store/wallet'

export default function WalletButton() {
	const connected = useWalletStore((state) => state.connected)
	const address = useWalletStore((state) => state.address)
	const connectWallet = useWalletStore((state) => state.connectWallet)

	const handleConnect = async () => {
		connectWallet()
	}

	const shortAddress = address ? `${address.slice(0, 5)}...` : ''

	return (
		<div className="flex items-center">
			{connected ? (
				<>
					<span className="mr-2 font-semibold text-green-600 dark:text-green-400">已连接</span>
					<a
						href="/wallet"
						className="text-xs text-gray-500 underline dark:text-gray-400 underline-offset-2 hover:text-primary dark:hover:text-primary"
					>
						{shortAddress}
					</a>
				</>
			) : (
				<button
					className="text-base font-medium transition-colors bg-gray-100 border border-gray-200 btn text-primary dark:bg-gray-800 dark:text-primary dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700"
					onClick={handleConnect}
				>
					连接钱包
				</button>
			)}
		</div>
	)
}
