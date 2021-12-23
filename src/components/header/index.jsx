import { useState, useContext, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import client from '../../services/client';
import { context } from '../../context'; 
import {
    HeaderSection,
    HeaderTitle,
    HeaderInputContainer,
    HeaderInput,
    HeaderSearchButton
} from './styles';

const Header = props => {
    const ctx = useContext(context);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        (async function getUserData() {
            try {
                const response = await client.get(`/${props.username}`);
                const repos = await client.get(`/${props.username}/repos`);
 
                ctx.setUserData(response.data);
                ctx.setUserRepos(repos.data);
            } catch(err) {
                console.log(err);
            }
        })()
    }, [props.username]);

    return (
        <HeaderSection>
            <HeaderTitle>Github Search Profile</HeaderTitle>
            <HeaderInputContainer>
                <HeaderInput type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
                
                <HeaderSearchButton>
                    <FiSearch size={15} />
                </HeaderSearchButton>
            </HeaderInputContainer>
        </HeaderSection>
    );
}
export default Header;