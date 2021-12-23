import {
    Container,
    ProfilePicture
} from './styles';

const UserAvatar = props => (
    <Container>
        <ProfilePicture src={props.url} alt="anthonyvii27" />
    </Container>
);

export default UserAvatar;