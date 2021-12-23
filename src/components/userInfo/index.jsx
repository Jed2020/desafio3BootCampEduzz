import {
    Container,
    Name,
    Username,
    Description
} from './styles';

const UserInfo = props => {
    return (
        <Container>
            <Name>{props?.name}</Name>
            <Username>{props?.login}</Username>
            <Description>{props?.bio}</Description>
        </Container>
    );
}

export default UserInfo;