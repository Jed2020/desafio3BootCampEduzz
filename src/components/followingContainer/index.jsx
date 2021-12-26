import React from 'react';
import {
    Section,
    Title,
    ListOfFollowingContainer,
    Following
} from './styles';
import UserPicture from '../follwingAvatar';

const FollowerContainer = props => {
    
    return (
        <Section>
            <Title>Seguidores de {(props.login)?.split(' ')[0]}</Title>
            <ListOfFollowingContainer>
                {(props?.following).map(foling => (
                    <Following>
                        <h1><a href={foling?.html_url} target="_blank" rel="noreferrer">{foling?.login}</a></h1>
                        <UserPicture url={foling?.avatar_url} />
                    </Following>
                ))}
            </ListOfFollowingContainer>
        </Section>
    );
}

export default FollowerContainer;