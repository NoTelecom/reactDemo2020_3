// 列表组件
import React from 'react';
import Item from './ItemComponent/Item'
import './ListBar.less'
import axios from 'axios'
// import Header from '../HeaderComponent/Header'


class ListBar extends React.Component {
    constructor (props) {
			super(props)
			this.state = {
				listData: [
					// 数据
					// {
					// 	id: 1,
					// 	imgUrl: "//img-ys011.didistatic.com/static/didiglobal/f2394241-ed2b-4f15-9be4-7c5c0564ae5e.jpeg",
					// 	date: '2019/11/9',
					// 	title: '滴滴正式进入哥斯达黎加，国际化运营持续深入'
					// },
					// {
					// 	id: 2,
					// 	imgUrl: "//img-ys011.didistatic.com/static/didiglobal/09cb9656-ba8a-421d-8ab7-0cabaa27c0da.jpg",
					// 	date: '2019/11/9',
					// 	title: '滴滴顺风车宣布将在11月下旬起陆续在哈尔滨、北京等7城上线试运营'
					// },{
					// 	id: 3,
					// 	imgUrl: "//img-ys011.didistatic.com/static/didiglobal/073dea42-9b5f-472f-ac58-fce7c5207bf9.jpg",
					// 	date: '2019/11/6',
					// 	title: '滴滴启动国际青年创新赋能计划 教科研联合项目落地巴西、智利'
					// },{
					// 	id: 4,
					// 	imgUrl: "//img-ys011.didistatic.com/static/didiglobal/a6de39eb-3be7-49b1-91b0-a5974854d299.jpeg",
					// 	date: '2019/9/3',
					// 	title: '滴滴自动驾驶升级为独立公司 滴滴CTO张博兼任新公司CEO'
					// },{
					// 	id: 5,
					// 	imgUrl: "//img-ys011.didistatic.com/static/didiglobal/a7294b04-1d78-437c-9eda-d2090e5dce4f.jpg",
					// 	date: '2019/9/9',
					// 	title: '滴滴与全球领先能源企业BP成立合资公司 布局新能源车充电网络'
					// },{
					// 	id: 6,
					// 	imgUrl: "//img-ys011.didistatic.com/static/didiglobal/5ee5c35b-429a-4364-9cd4-6892c3df179b.jpg",
					// 	date: '2019/8/5',
					// 	title: '滴滴正式进入哥斯达黎加，国际化运营持续深入'
					// }
				]
			}
		};

		componentDidMount () {
			const _this = this
			axios.get('mock/3074/news/newsCenter')
			.then(function (response) {
				// console.log(response.data)
				_this.setState({
					listData: response.data
				});
			})
			.catch(function (error) {
				console.log(error);
			})
		};

		render() {
			// console.log(this.props.history)
			// let myhistory = this.props.history
			return (
				<>
					<h3 className="title">资讯中心</h3>
					<div className="news-list-box">			
						{this.state.listData.map(function (item) {	
							// console.log(item)			
							return (
								// <Item {...item} key={item.id} history = {myhistory}></Item>
								// 放置列表的每个内容
								<Item {...item} key={item.id}/>
							);})
						}
					</div>
				</>
			)
		};

}


export default ListBar;