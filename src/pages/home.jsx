import Container from '../components/container';
import Header from '../components/header';
import UserContainer from '../components/userContainer';
import UserAvatar from '../components/userAvatar';

export default function Home() {
    return (
        <Container>
            <Header />
            <UserContainer>
               <UserAvatar url="https://avatars.githubusercontent.com/u/69053988?v=4" alternativeText="image"/> 
            </UserContainer>
        </Container>
    );
}