// 详情页
import React from 'react'
import axios from 'axios'
import './Detail.less'
import HostPage from '../../components/HostPageComponent'

class DetailNews extends React.Component {
	constructor (props) {
			super(props)
			this.state = {
					// param:props.location.state
					// 路由参数
					// param:props.match.params.id,
					param: props.match.params.id,
					// 是否需要更新
					loading: false,
					data: {
						title: '',
						date: "",
						location: "",
						imgUrl: "",
						content: ""						
					},
					//用于展示左侧的链接们
					list:[]
			}
	};

	componentDidMount () {
		this.getDetailNews()		
	};

	// 进行axios请求
	getDetailNews () {
		const param = this.getSearchParams('id')
		let _this = this
		axios.get('https://mock.xiaojukeji.com/mock/3074/news/newsCenter')
		.then(function (response) {
			response.data.forEach((element) => {
				if (element.id.toString() === param) {
					// console.log(element)
					_this.setState({
						data: element
					});			
				}
			});
			_this.setState({list: response.data, param, loading: false})
		})
		.catch(function (error) {
			console.log(error);
		});
		// this.setState = {
		// 	data: {
		// 		title: '滴滴正式进入哥斯达黎加，国际化运营持续深入',
		// 		date: "2019-11-19T05:41:29.000Z",
		// 		location: "北京",
		// 		imgUrl: "//img-ys011.didistatic.com/static/didiglobal/f2394241-ed2b-4f15-9be4-7c5c0564ae5e.jpeg",
		// 		content: "<p>11月19日，滴滴出行宣布正式进入哥斯达黎加，服务覆盖首都圣何塞、卡塔戈、彭塔雷纳斯、埃雷迪亚和阿拉胡埃等5城，触达全国人口的65%。哥斯达黎加是滴滴服务的首个中美洲国家，也是继巴西、墨西哥、智利和哥伦比亚后，滴滴进入的第五个拉美国家。</p><p><br></p><p>2019年下半年，滴滴对拉美市场进行组织架构升级，鼓励滴滴在巴西、墨西哥等市场培育出的本地人才，作为公司的内生力量支持哥斯达黎加的运营工作。他们几个月前就来到当地进行市场调研，了解用户的切实需求。在4周的司机招募中，已有五千多名司机完成注册。</p><p><br></p><p>作为中美洲第二大经济体和拉美创新的领先国家，哥斯达黎加一直积极支持共建“一带一路”倡议。目前，滴滴是唯一在拉美地区数百个城市运营O2O服的中国企业。随着哥斯达黎加业务上线，滴滴的服务在拉美触达上亿人，为当地司机提供灵活收入。</p><p><br></p><div class='ql-align-center'><img style='width:36%' src='//img-ys011.didistatic.com/static/didiglobal/c00dc24f-aa6d-4588-9884-8465903f01c4.jpeg'><img src='http://img-ys011.didistatic.com/static/didiglobal/1d4de9cf-a6ba-4c17-b570-98a63e209702.jpg' style='text-align: left; width: 50%;'></div><p class='ql-align-center'><em>滴滴于2019年11月正式启动哥斯达黎加业务</em></p><p><br></p><p>滴滴墨西哥和中美洲负责人毛宸宇表示：“过去两个月的推广中，我们得到了哥斯达黎加很多用户和各方面的认可，很受鼓舞。滴滴团队会深入学习本地市场，运用我们积累的技术和经验，为当地用户提供高性价比、高效、安全的交通出行服务。最近我们与巴西本地政府合作又落地了一项智慧交通项目，用滴滴智能交通信号灯系统帮助改善路况。未来，我们希望与哥斯达黎加政府和各相关方合作，把滴滴的智慧交通项目带到这个美丽的中美洲国家。”</p><p><br></p><p>2018年1月，滴滴收购巴西最大的网约车平台99；同年4月首次以自有品牌服务落地墨西哥市场，随即进入了澳大利亚和日本；2019年6月，滴滴进入智利和哥伦比亚，并于同年10月在哥伦比亚推出出租车叫车服务。</p>"						
		// 	}
		// }
	}

	// 取出参数
	getSearchParams (param) {
		const { search } = this.props.location
		const paramsString = search.substring(1)
		const searchParams = new URLSearchParams(paramsString)
		return searchParams.get(param)
	};

	// 解决参数改变页面不刷新的问题
	static getDerivedStateFromProps(nextProps, state) {
		const { search } = nextProps.location
		const paramsString = search.substring(1)
		const searchParams = new URLSearchParams(paramsString)
		const param =  searchParams.get('id')
		if (param !== state.param) {
			return {
				param,
				loading: true
			}
		}
		return null;	
	};

	// 判断是否因为参数改变而更新
	componentDidUpdate () {
		if (this.state.loading) {
			this.getDetailNews()
		}
	};

	render () {
			let { ...data } = this.state.data
			return (
					<div className="detail-cont">
						{/* 左侧的其他链接 */}
						<HostPage ></HostPage>
						<div className="detail-right">

							<h2 className="detail-tit">{data.title}</h2>

							<div className="date-box">
								<span>{data.date}</span>
								<span className="city">{data.location}</span>
							</div>

							<div className="share-box">
								<a href="/#"><img src="https://website.didiglobal.com/dist/media/blog-ico.57238b65.svg" alt=""></img></a>
								<a href="/#"><img src="https://website.didiglobal.com/dist/media/blog-ico2.4e147b7d.svg" alt=""></img></a>
								<a href="/#"><img src="https://website.didiglobal.com/dist/media/blog-ico3.60843a1e.svg" alt=""></img></a>
								<a href="/#"><img src="https://website.didiglobal.com/dist/media/blog-ico4.92dbf930.svg" alt=""></img></a>
								<a href="/#"><img src="https://website.didiglobal.com/dist/media/blog-ico5.b2be31e0.svg" alt=""></img></a>
							</div>

							<div className="img-box">
								<img src={data.imgUrl} alt="" width="100%"></img>
							</div>

							<div className="content-box">
								{/* 转义为html */}
								<p dangerouslySetInnerHTML={{ __html: data.content }}  />
							</div>
							
						</div>
					</div>
			);
	};
	
}

export default DetailNews;