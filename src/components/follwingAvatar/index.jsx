import {
    Container,
    ProfilePicture
} from './styles';

const FollowingAvatar = props => (
    <Container>
        <ProfilePicture src={props.url} alt="avatar" />
    </Container>
);

export default FollowingAvatar;