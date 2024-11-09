import Item from '../Item/Index'
import FILE1 from '../../files2/middle-aged_females_humanitarian.json'
import FILE2 from '../../files2/middle-aged_females_scientific.json'
import FILE3 from '../../files2/middle-aged_females_technical.json'
import FILE4 from '../../files2/middle-aged_males_humanitarian.json'
import FILE5 from '../../files2/middle-aged_males_scientific.json'
import FILE6 from '../../files2/middle-aged_males_technical.json'
import FILE7 from '../../files2/old_females_humanitarian.json'
import FILE8 from '../../files2/old_females_scientific.json'
import FILE9 from '../../files2/old_females_technical.json'
import FILE10 from '../../files2/old_males_humanitarian.json'
import FILE11 from '../../files2/old_males_scientific.json'
import FILE12 from '../../files2/old_males_technical.json'
import FILE13 from '../../files2/teenager_females_humanitarian.json'
import FILE14 from '../../files2/teenager_females_scientific.json'
import FILE15 from '../../files2/teenager_females_technical.json'
import FILE16 from '../../files2/teenager_males_humanitarian.json'
import FILE17 from '../../files2/teenager_males_scientific.json'
import FILE18 from '../../files2/teenager_males_technical.json'

import { useState } from 'react'
import { ContentArray, data } from '../App'
const Milana = () => {
	const [file, setFile] = useState(FILE1)
	const filesArray = [
		{ array: FILE1, name: 'middle-aged_females_humanitarian' },
		{ array: FILE2, name: 'middle-aged_females_scientific' },
		{ array: FILE3, name: 'middle-aged_females_technical' },
		{ array: FILE4, name: 'middle-aged_males_humanitarian' },
		{ array: FILE5, name: 'middle-aged_males_scientific' },
		{ array: FILE6, name: 'middle-aged_males_technical' },
		{ array: FILE7, name: 'old_females_humanitarian' },
		{ array: FILE8, name: 'old_females_scientific' },
		{ array: FILE9, name: 'old_females_technical' },
		{ array: FILE10, name: 'old_males_humanitarian' },
		{ array: FILE11, name: 'old_males_scientific' },
		{ array: FILE12, name: 'old_males_technical' },
		{ array: FILE13, name: 'teenager_females_humanitarian' },
		{ array: FILE14, name: 'teenager_females_scientific' },
		{ array: FILE15, name: 'teenager_females_technical' },
		{ array: FILE16, name: 'teenager_males_humanitarian' },
		{ array: FILE17, name: 'teenager_males_scientific' },
		{ array: FILE18, name: 'teenager_males_technical' },
	]
	const content = ContentArray.map(e => {
		return { data: data(file, Object.keys(e)[0], e.values).array }
	})
	return (
		<main>
			<div className='btns'>
				{filesArray.map(element => {
                    console.log(element)
					return (
						<button
							onClick={() => {
								setFile(element.array)
							}}
						>
							{element.name}
						</button>
					)
				})}
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
export default Milana
