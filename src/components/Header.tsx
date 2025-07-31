import { Wallet, Hash, LineChart, DollarSign } from 'lucide-react'
import WalletButton from './WalletButton'

const mainMenus = [
	{ label: 'Query: Balance', path: '/balance', icon: <Wallet className="w-4 h-4 mr-2" /> },
	{ label: 'Counter', path: '/counter', icon: <Hash className="w-4 h-4 mr-2" /> },
	{ label: 'Derivatives', path: '/derivatives', icon: <LineChart className="w-4 h-4 mr-2" /> },
	{ label: 'Spot', path: '/spot', icon: <DollarSign className="w-4 h-4 mr-2" /> }
]

const Header = () => {
	return (
		<header className="shadow-sm navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							{' '}
							<path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{' '}
						</svg>
					</div>
					<ul tabIndex={0} className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52">
						<li>
							<details>
								<summary>查询</summary>
								<ul className="z-10 p-2">
									{mainMenus.map((menu) => (
										<li key={menu.path}>
											<a href={menu.path}>
												{menu.icon}
												{menu.label}
											</a>
										</li>
									))}
								</ul>
							</details>
						</li>
						<li>
							<a href="/transactions">交易</a>
						</li>
					</ul>
				</div>
				<a className="text-xl btn btn-ghost">Injective Test</a>
			</div>
			<div className="hidden navbar-center lg:flex">
				<ul className="px-1 menu menu-horizontal">
					<li>
						<details>
							<summary>查询</summary>
							<ul className="z-10 p-2">
								{mainMenus.map((menu) => (
									<li key={menu.path}>
										<a href={menu.path}>{menu.label}</a>
									</li>
								))}
							</ul>
						</details>
					</li>
					<li>
						<a href="/transactions">交易</a>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				<WalletButton />
			</div>
		</header>
	)
}

export default Header
