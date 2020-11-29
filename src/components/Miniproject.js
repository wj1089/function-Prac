import React, { useState } from 'react';
import Popup from "./Popup.js"
import "./project.css"

const Miniproject = () => {
    const [shown, setShown] = useState(false);

    return (
        <>
            <div className="modalContent">
                <h1>hello world</h1>
                <div className="contentBody">
                    <Popup/>
                    <h1>Hooks</h1>
                    <p className="a">리액트 v16.8 에 새로 도입된 기능으로서, 
                    <span className="b">함수형 컴포넌트에서도 상태 관리를 할 수 있는 useState, 
                    그리고 렌더링 직후 작업을 설정하는 useEffect 등의 기능등을 제공</span>하여 
                    기존의 함수형 컴포넌트에서 할 수 없었던 다양한 작업을 할 수 있게 해줍니다.</p>
                </div>
            </div>   
        </>
    );
};

export default Miniproject;