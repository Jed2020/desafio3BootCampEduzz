import {
    Section,
    Title,
    ListOfReposContainer,
    Repo
} from './styles';

const ReposContainer = props => {
    return (
        <Section>
            <Title>Repositórios de {(props.name)?.split(' ')[0]}</Title>
            <ListOfReposContainer>
                {(props?.repos).map(repo => (
                    <Repo>
                        <h1><a href={repo?.html_url} target="_blank" rel="noreferrer">{repo?.name}</a></h1>
                        <p>{repo?.description}</p>
                    </Repo>
                ))}
            </ListOfReposContainer>
        </Section>
    );
}

export default ReposContainer;