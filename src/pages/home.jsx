import Container from '../components/container';
import Header from '../components/header';
import UserContainer from '../components/userContainer';
import UserAvatar from '../components/userAvatar';
import UserInfo from '../components/userInfo';
import UserStatistics from '../components/userStatistics';

export default function Home() {
    return (
        <Container>
            <Header />
            <UserContainer>
                <UserAvatar url="https://avatars.githubusercontent.com/u/69053988?v=4" alternativeText="image"/> 
                <UserInfo name="Emerson Deparis" login="emerson" bio=" teste teste"/>
                <UserStatistics/>
            </UserContainer>
        </Container>
    );
}