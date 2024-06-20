import styled from "styled-components"



export const BannerWrapper = styled.div`
    background: url(${props => props.url});
    width: 50%;
`
export const BannerRow = styled.div`
    display: flex;
    gap: 1%;
    padding: 2%;
`
export const BannerIcon = styled.img`
    height: 20px;
    width: 20px;
`

export const BannerText = styled.p`
    color: var(--secondary);
`