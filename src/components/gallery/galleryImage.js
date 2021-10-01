import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledImage = styled(Img)``

const GalleryImage = ({ image, area, gallery }) => {
  return (
    <StyledImage
      fluid={image}
      className={`${area} ${gallery ? "gallery" : null}`}
      objectFit="cover"
      objectPosition="50% 50%"
      draggable={false}
      // className={gallery ? "gallery" : "null"}
    />
  )
}

export default GalleryImage
