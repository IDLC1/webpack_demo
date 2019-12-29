'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './search.less';
import picture1 from "../images/1.png"
import picture2 from "../images/2.png"
import picture3 from "../images/3.png"

class Search extends React.Component {

    render() {
        debugger
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