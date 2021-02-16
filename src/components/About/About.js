import React from 'react';
import {Octokit} from '@octokit/rest';

import styles from './About.module.css';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';

const octokit = new Octokit();

class About extends React.Component{
  state = {
    isLoading: true,
    isError: false,
    error: '',
    repoList: [],
    nameUser: [],
    avatarUser: []
  }

  componentDidMount() {
    octokit.repos.listForUser({
      username: 'DimkaVeselov'
    }).then(({ data }) => {
      this.setState({
        repoList: data,
        isLoading: false
      })
    })
      .catch(err => {
        this.setState({
          error: 'УПС(',
          isError: true,
          isLoading: false
        })
      });

      octokit.users.getByUsername({
        username: 'DimkaVeselov'
      }).then((res) => {
        this.setState({
          nameUser: res.data.login,
          avatarUser: res.data.avatar_url,
          isLoading: false
        })
      })
        .catch(err => {
          this.setState({
            error: 'УПС(',
            isError: true,
            isLoading: false
          })
        })
  }

  render() {
    const { isLoading, isError, error, repoList, nameUser, avatarUser } = this.state;

    return (
      <CardContent className={styles.wrap}>

        <div className={styles.header}>
          <img className={styles.avatar} src={avatarUser} alt={avatarUser}/>
          <h1 className={styles.title}> {isError ? error : nameUser} </h1>
        </div>

        <h2 className={styles.subtitle}> {isLoading ? <CircularProgress /> : 'Мои репозитории'} </h2>
        {!isLoading && <ol className={styles.list}>
            {isError ? error : repoList.map(repo => (
            <li key={repo.id}>
                <a href={repo.html_url}> {repo.name} </a>
            </li>))}
          </ol>}
      </CardContent>
    )
  }
}

export default About;