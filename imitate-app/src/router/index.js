import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ListBar from '../page/ListBarPage/ListBar'
import DetailNews from '../page/DetailPage/Detail'

function RouterIndex () {
	return (
			<Router>
				{/* 列表页 */}
				<Route exact path="/" component={ListBar}/>
				{/* 详情页 */}
				<Route path="/detailNews" component={DetailNews}/>
			</Router>
	)
}

export default RouterIndex;
