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
                    <Follower onClick={() => window.location.href(foler?.html_url)} key={foler?.id}>
                        <h2>{foler?.login}</h2>
                        <UserPicture url={foler?.avatar_url} />
                    </Follower>
                ))}
            </ListOfFollowerContainer>
        </Section>
    );
}

export default FollowerContainer;