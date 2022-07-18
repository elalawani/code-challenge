import gql from "graphql-tag";

export const GIT_HUB_USER = gql`
    query gitHubUser {
    viewer {
    login
  }
        user(login: "torvalds") {
            id
            avatarUrl
            bio
            createdAt
            login
            name
            repositories(first: 15, orderBy: {field: STARGAZERS, direction: DESC}) {
                totalCount
                nodes {
                    id
                    name
                    createdAt
                    forkCount
                    stargazerCount
                }
            }
        }
    }`