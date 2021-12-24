import {
    Container,
    ProfilePicture
} from './styles';

const FollowerAvatar = props => (
    <Container>
        <ProfilePicture src={props.url} alt="avatar" />
    </Container>
);

export default FollowerAvatar;