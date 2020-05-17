// 左侧近期资讯链接
import React from 'react'
import axios from 'axios'
import './index.less'
import { Link } from 'react-router-dom'

class HostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  };

  componentDidMount () {
    const _this = this
			axios.get('mock/3074/news/newsCenter')
			.then(function (response) {
				// console.log(response.data)
				_this.setState({
					list: response.data
				});
			})
			.catch(function (error) {
				console.log(error);
			})
  };

  render() {
    return (
      <div className="host-page">

        <Link to={{pathname: '/'}}>
          <img src="https://website.didiglobal.com/dist/media/left-ico.351c6aea.svg" alt="" />
          <span  className="back-homepage">资讯媒体库</span>
        </Link>

        <h5>近期资讯</h5>

        <ul>
          {this.state.list.map(function (item) {
            return (
            <Link to={{ pathname: '/detailNews', search: '?id=' + item.id}}  key={item.id}>
              <li>
                <p>{item.date}</p>
                <p>{item.title}</p>
              </li>
            </Link>
            )
          })}
        </ul>
        
      </div>
    )
  };

}

export default HostPage