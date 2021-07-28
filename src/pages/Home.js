import React from 'react';
import UserInfo from '../components/UserInfo/UserInfo';

function Home() {
    return (
        <div>
            <h2>Home</h2>
            <UserInfo avatarUrl="http://placekitten.com/g/200/200" name="Kevin" role="Teacher" />
        </div>
    );
}

export default Home