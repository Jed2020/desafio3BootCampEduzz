import React, { useContext } from 'react';
import { useQuery } from '../hook/useQuery';

import Container from '../components/container';
import Header from '../components/header';
import UserContainer from '../components/userContainer';
import UserPicture from '../components/userAvatar';
import UserDetails from '../components/userInfo';
import UserNumbers from '../components/userStatistics';

import { context } from '../context';

export default function Home() {
    const ctx = useContext(context);
    const query = useQuery();

    return (
        <Container>
            <Header username={query.get('username')} />

            <UserContainer>
                {ctx.userData?.name ?
                    <React.Fragment>
                        <UserPicture url={ctx.userData?.avatar_url} />
                        <UserDetails name={ctx.userData?.name} username={ctx.userData?.login} bio={ctx.userData?.bio} />
                        <UserNumbers repos={ctx.userData?.public_repos} followers={ctx.userData?.followers} following={ctx.userData?.following} />
                    </React.Fragment>
                : undefined }
            </UserContainer>
        </Container>
    );
}