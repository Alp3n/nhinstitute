import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledImage = styled(Img)``

const GalleryImage = ({ image, area }) => {
  return (
    <StyledImage
      fluid={image}
      className={area}
      objectFit="cover"
      objectPosition="50% 50%"
      draggable={false}
    />
  )
}

export default GalleryImage
