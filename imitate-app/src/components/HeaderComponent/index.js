import React from 'react';
// import './Header.less';

// 暂未使用
function ProjectHeader (props) {
    return (
        <div className="header">
            <h3 className="newsTitle">资讯中心</h3>
            <div className="searchBox">
                <img className="searchIcon" src="https://website.didiglobal.com/dist/media/search1.4c137bee.svg" alt="" />
                <input type="text" className="newsSearchInput"></input>
            </div>
        </div>
    )
}

export default ProjectHeader;