import './App.css'

import Arthur from './Arthur/Arthur'
import { Route, Routes } from 'react-router-dom'
import Milana from './Milana/Milana'

export function data(json, category, accordance) {
	const support = []

	json.map(e => {
		if (
			support.find(supElement => {
				return (
					supElement &&
					Number(Object.keys(supElement)[0]) === Number(e[category])
				)
			})
		) {
			support[e[category]][e[category]] = support[e[category]][e[category]] + 1
		} else {
			support[e[category]] = { [e[category]]: 1 }
		}
	})

	let array = support.map(e => {
		return [Number(Object.keys(e)[0]), Object.values(e)[0]]
	})
	for (let i = 0; i < array.length; i++) {
		if (!array[i]) {
			array[i] = [accordance[i], 0]
		} else {
			array[i] = [accordance[array[i][0]], array[i][1]]
		}
	}

	return {
		title: category,
		array: array,
	}
}

function App() {
	return (
		<Routes>
			<Route path='/AI' element={<>тут нет ничо</>} />
			<Route path='/AI/Arthur' element={<Arthur />} />
			<Route path='/AI/Milana' element={<Milana />} />
		</Routes>
	)
}

export default App

export const ContentArray = [
	{
		has_photo: 'Есть фотография',
		values: {
			0: 'не указана',
			1: 'указана',
		},
	},
	{
		home_town: 'Указан родной город',
		values: {
			0: 'не указан',
			1: 'указан',
		},
	},
	{
		political: 'Политические предпочтения',
		values: {
			0: 'не указано',
			1: 'коммунистические',
			2: 'социалистические',
			3: 'умеренные',
			4: 'либеральные',
			5: 'консервативные',
			6: 'монархические',
			7: 'ультраконсервативные',
			8: 'индифферентные',
			9: 'либертарианские',
		},
	},
	{
		people_main: 'главное в людях',
		values: {
			0: 'не указано',
			1: 'ум и креативность',
			2: 'доброта и честность',
			3: 'красота и здоровье',
			4: 'власть и богатство',
			5: 'смелость и упорство',
			6: 'юмор и жизнелюбие',
		},
	},
	{
		life_main: 'главное в жизни',
		values: {
			0: 'не указано',
			1: 'семья и дети',
			2: 'карьера и деньги',
			3: 'развлечения и отдых',
			4: 'наука и исследования',
			5: 'совершенствование мира',
			6: 'саморазвитие',
			7: 'красота и искусство',
			8: 'слава и влияние',
		},
	},
	{
		smoking: 'отношение к курению',
		values: {
			0: 'не указано',
			1: 'резко негативное',
			2: 'негативное',
			3: 'компромиссное',
			4: 'нейтральное',
			5: 'положительное',
		},
	},
	{
		alcohol: 'отношение к алкоголю',
		values: {
			0: 'не указано',
			1: 'резко негативное',
			2: 'негативное',
			3: 'компромиссное',
			4: 'нейтральное',
			5: 'положительное',
		},
	},
	{
		quotes: 'есть ли цитата',
		values: {
			0: 'не указана',
			1: 'указана',
		},
	},
	{
		inspired_by: 'есть источник вдохновения',
		values: {
			0: 'не указан',
			1: 'указан',
		},
	},
]
