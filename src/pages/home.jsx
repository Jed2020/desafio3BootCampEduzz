import React, { useContext } from 'react';
import Container from '../components/container';
import Header from '../components/header';
import UserContainer from '../components/userContainer';
import UserAvatar from '../components/userAvatar';
import UserInfo from '../components/userInfo';
import UserStatistics from '../components/userStatistics';
import { context } from '../context';

export default function Home() {
    const ctx = useContext(context);
    return (
        <Container>
            <Header />
            <UserContainer>
            <UserAvatar url={ctx.userData?.avatar_url} />
            <UserInfo name={ctx.userData?.name} username={ctx.userData?.login} bio={ctx.userData?.bio} />
            <UserStatistics repos={ctx.userData?.public_repos} followers={ctx.userData?.followers} following={ctx.userData?.following} />
            </UserContainer>
        </Container>
    );
}