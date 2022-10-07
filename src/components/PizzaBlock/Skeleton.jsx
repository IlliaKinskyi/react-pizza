import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="140" cy="140" r="125" /> 
    <rect x="0" y="290" rx="5" ry="5" width="280" height="30" /> 
    <rect x="1" y="340" rx="5" ry="5" width="280" height="60" /> 
    <rect x="0" y="414" rx="5" ry="5" width="134" height="28" /> 
    <rect x="147" y="410" rx="20" ry="20" width="134" height="36" />
  </ContentLoader>
)

export default Skeleton
