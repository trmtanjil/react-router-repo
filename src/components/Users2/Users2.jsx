import React, { use } from 'react';

const Users2 = ({users2Data}) => {
    const users2use = use(users2Data )

    console.log("user 2 data load ",users2use);
    return (
        <div>
            <h2>users 2 components</h2>
        </div>
    );
};

export default Users2;