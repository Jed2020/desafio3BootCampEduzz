import { useState, useContext, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import {
    HeaderSection,
    HeaderTitle,
    HeaderInputContainer,
    HeaderInput,
} from './styles';

import client from '../../services/client';

import { context } from '../../context';

const Header = props => {
    const ctx = useContext(context);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        (async function getUserData() {
            try {
                const response = await client.get(`/${props.username}`);
                const repos = await client.get(`/${props.username}/repos?page=1&per_page=1000`);
                const followers = await client.get(`/${props.username}/followers?page=1&per_page=1000`);
                const following = await client.get(`/${props.username}/following?page=1&per_page=1000`);

                ctx.setUserData(response.data);
                ctx.setUserRepos(repos.data);
                ctx.setUserFollowers(followers.data);
                ctx.setUserFollowing(following.data);

            } catch(err) {
                console.log(err);
            }
        })()
    }, [props.username]);

    return (
        <HeaderSection>
            <HeaderTitle>Github Search Users</HeaderTitle>
            <HeaderInputContainer>
                <HeaderInput type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                <Link to={`/?username=${searchValue}`}>
                    <FiSearch size={15} />
                </Link>
            </HeaderInputContainer>
        </HeaderSection>
    );
}

export default Header;