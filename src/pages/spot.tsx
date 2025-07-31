import { fetchSpotMarkets } from '../lib/spot'
import { useState } from 'react'

export default function SpotPage() {
	const [spotMarkets, setSpotMarkets] = useState<any>(null)
	const handleClick = async () => {
		const spotMarkets = await fetchSpotMarkets()
		setSpotMarkets(spotMarkets)
	}
	return (
		<div className="shadow-sm card bg-base-100 card-xs">
			<div className="card-body">
				<h2 className="card-title">Spot Markets</h2>
				<div className="max-h-[500px] overflow-y-auto">
					<pre className="p-2 overflow-x-auto text-sm bg-gray-100 rounded">
						{spotMarkets ? JSON.stringify(spotMarkets, null, 2) : '暂无数据'}
					</pre>
				</div>

				<div className="justify-end card-actions">
					<button className="btn" onClick={handleClick}>
						查询
					</button>
				</div>
			</div>
		</div>
	)
}
