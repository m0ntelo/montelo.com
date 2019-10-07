import React from "react"
import { StaticQuery, graphql, useStaticQuery } from "gatsby"
import Avatar from "../Avatar"
import * as S from "./styled"

// const Profile = () => (
//     <StaticQuery 
//         query={graphql`
//         query MySiteMetaData {
//             site {
//                 siteMetadata {
//                     title
//                     position
//                     description
//                     }
//                 }
//             }                         
//         `}
//         render = { data => (
//             <div className="profile-wrapper">
//                 <Avatar/>
//                 <h1>{data.site.siteMetadata.title}</h1>
//                 <h2>{data.site.siteMetadata.position}</h2>
//                 <p>{data.site.siteMetadata.description}</p>
//             </div>
//         )}
//     />
// )


const Profile = () => {
    const {
        site:{
            siteMetadata: { title, position, description },
        },
    } = useStaticQuery(graphql`
        query MySiteMetaData {
            site{
                siteMetadata{
                    title
                    position
                    description
                }
            }
        }
    `)

    return (
        <S.ProfileWrapper>
            <S.ProfileLink>
            <Avatar/>
            <S.ProfileAuthor>{title}
                <S.ProfilePosition>{position}</S.ProfilePosition>
            </S.ProfileAuthor>   
            </S.ProfileLink>
            <S.ProfileDescrition>{description}</S.ProfileDescrition>
        </S.ProfileWrapper>
    )
}

export default Profile

