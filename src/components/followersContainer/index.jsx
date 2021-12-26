import React from 'react';
import {
    Section,
    Title,
    ListOfFollowerContainer,
    Follower
} from './styles';
import UserPicture from '../followerAvatar';

const FollowerContainer = props => {
    
    return (
        <Section>
            <Title>Seguidores de {(props.login)?.split(' ')[0]}</Title>
            <ListOfFollowerContainer>
                {(props?.followers).map(foler => (
                    <Follower>
                        <h1><a href={foler?.html_url} target="_blank" rel="noreferrer">{foler?.login}</a></h1>
                        <UserPicture url={foler?.avatar_url} />
                    </Follower>
                ))}
            </ListOfFollowerContainer>
        </Section>
    );
}

export default FollowerContainer;