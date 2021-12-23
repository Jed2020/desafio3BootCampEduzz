import {
    Container,
    ProfileAvatar
} from './styles';

const UserAvatar = props => (
    <Container>
        <ProfileAvatar src={props.url} alt="userAvatar" />
    </Container>
);

export default UserAvatar;