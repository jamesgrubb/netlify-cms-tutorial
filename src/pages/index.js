import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export default () => {
    const { title } = useSiteMetadata();
    return(
<div>Hello { title }</div>
)
}
