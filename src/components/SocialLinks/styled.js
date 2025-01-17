import styled from "styled-components"

export const SocialLinksWrapper = styled.ul`
    margin: 2rem auto;
    width: 100%;
`
export const SocialLinksList = styled.ul`
    align-items: center;
    display: flex;
    justify-content: space-around;
    list-style: none;
`
export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
    color: #8899a6;
    text-decoration: none;
    transition: color 0.5s;

    &:hover{
        color: #1fa1f2;
    }
`
export const IconWrapper = styled.div`
    fill: #bbb;
    width: 30px;
    height: 30px;
`