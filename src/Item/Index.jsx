import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Dashboards from '@highcharts/dashboards'
import DataGrid from '@highcharts/dashboards/datagrid'
import LayoutModule from '@highcharts/dashboards/modules/layout'
LayoutModule(Dashboards)
Dashboards.HighchartsPlugin.custom.connectHighcharts(Highcharts)
Dashboards.DataGridPlugin.custom.connectDataGrid(DataGrid)
Dashboards.PluginHandler.addPlugin(Dashboards.HighchartsPlugin)
Dashboards.PluginHandler.addPlugin(Dashboards.DataGridPlugin)
const Item = data => {
	const percentData = data.data.data.map(e => {
		return [e[0], (e[1] / data.length) * 100]
	})
	const options = {
		title: {
			text: Object.values(data.title)[0],
		},
		chart: {
			type: 'column',
		},
		yAxis: {
			title: {
				text: '',
			},
			labels: {
				format: '{value}%',
			},
			accessibility: {
				rangeDescription: 'Range: 0% to 100%',
			},
		},
		xAxis: {
			categories: data.data.data.map(e => {
				return e[0]
			}),
		},
		series: [
			{
				name: Object.values(data.title)[0],
				data: percentData,
			},
		],
	}
	return (
		<li>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</li>
	)
}
export default Item
