import React from 'react';

const Header = ({todos}) => {
    return (
        <div>
            <h1>오늘 할 일을 정리합시다!</h1>
            <div className="counInfo">해야할일 : {todos.length}개가 있습니다.</div>
        </div>
    );
};

export default Header;