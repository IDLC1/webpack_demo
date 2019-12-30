'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import picture1 from "../images/1.png"
import picture2 from "../images/2.png"
import picture3 from "../images/3.png"
import './index.less';

class Search extends React.Component {
    render() {
        debugger
        a== 1;
        return <div className="search-text">
            搜索文字的内容
            <img src={picture1} />
            <img src={picture2} />
            <img src={picture3} />
        </div>;
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);