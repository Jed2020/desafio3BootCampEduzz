import {
    Container,
    ProfilePicture
} from './styles';

const UserAvatar = props => (
    <Container>
        <ProfilePicture src={props.url} alt="avatar" />
    </Container>
);

export default UserAvatar;