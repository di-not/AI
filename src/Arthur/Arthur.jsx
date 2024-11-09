import Item from '../Item/Index'
import FILE1 from '../../files/humanitarian.json'
import FILE2 from '../../files/scientific.json'
import FILE3 from '../../files/technical.json'
import FILE4 from '../../files/teenager.json'
import FILE5 from '../../files/teenager_females.json'
import FILE6 from '../../files/teenager_males.json'
import { useState } from 'react'
import { ContentArray, data } from '../App'
const Arthur = () => {
	const [file, setFile] = useState(FILE1)

	const content = ContentArray.map(e => {
		return { data: data(file, Object.keys(e)[0], e.values).array }
	})
	return (
		<main>
			<div className='btns'>
				<button
					onClick={() => {
						setFile(FILE1)
					}}
				>
					humanitarian
				</button>
				<button
					onClick={() => {
						setFile(FILE2)
					}}
				>
					scientific
				</button>
				<button
					onClick={() => {
						setFile(FILE3)
					}}
				>
					technical
				</button>
				<button
					onClick={() => {
						setFile(FILE4)
					}}
				>
					teenager
				</button>
				<button
					onClick={() => {
						setFile(FILE5)
					}}
				>
					teenager_females
				</button>
				<button
					onClick={() => {
						setFile(FILE6)
					}}
				>
					teenager_males
				</button>
			</div>
			<ul className='list'>
				{content.map((e, i) => {
					return (
						<Item
							data={e}
							key={i}
							title={ContentArray[i]}
							length={file.length}
						/>
					)
				})}
			</ul>
		</main>
	)
}
export default Arthur
