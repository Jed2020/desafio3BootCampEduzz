import React, { useContext } from 'react';

import Container from "../components/container";
import FollowersContainer from "../components/followersContainer";

import { context } from '../context';

const Followers = () => {
    const ctx = useContext(context);

    return (
        <Container>
            <FollowersContainer login={ctx.userData?.login} followers={ctx.userFollowers} />
        </Container>
    );
}

export default Followers;