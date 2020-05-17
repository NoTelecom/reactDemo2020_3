// 列表内每个内容
import React from 'react';
import './Item.less'
import { Link } from 'react-router-dom'

class Item extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {}
	// 	// this.toNewsDetail = this.toNewsDetail.bind(this)
	// }
		// toNewsDetail () {
		// 	console.log(this.props.id)
		// 	let param = this.props.id
		// 	console.log(this.props.history)
		// 	this.props.history.push('/detailNews?id=' + param)
		// }
		render () {
			let {...props} = this.props
			return (
				<Link to={{ pathname: '/detailNews', search: '?id=' + props.id}}>

					<div className="new">

						{/* <div className="new" onClick={toNewsDetail}> */}
						<img src={props.imgUrl} alt="" width="100%"/>
						<time>{props.date}</time>
						<p>{props.title}</p>

					</div>
					
				</Link>
				)
		}	
}

export default Item;