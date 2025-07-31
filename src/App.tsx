import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import BalancePage from './pages/balance'
import CounterPage from './pages/counter'
import DerivativesPage from './pages/derivatives'
import SpotPage from './pages/spot'
import TransactionsPage from './pages/transactions'
import WalletDetail from './pages/wallet'

function App() {
	return (
		<Router>
			<Header />
			<main className="w-full min-h-screen p-2 bg-gray-100">
				<div className="container m-auto">
					<Routes>
						<Route path="/balance" element={<BalancePage />} />
						<Route path="/counter" element={<CounterPage />} />
						<Route path="/derivatives" element={<DerivativesPage />} />
						<Route path="/spot" element={<SpotPage />} />
						<Route path="/transactions" element={<TransactionsPage />} />
						<Route path="/wallet" element={<WalletDetail />} />
					</Routes>
				</div>
			</main>
		</Router>
	)
}

export default App
