import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    className="product-block"
    speed={2}
    width={280}
    height={405}
    viewBox="0 0 280 470"
    backgroundColor="#dcdce8" 
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="20" rx="5" ry="5" width="260" height="260" />
    <rect x="30" y="300" rx="10" ry="10" width="220" height="25" /> 
    <rect x="30" y="340" rx="11" ry="11" width="220" height="63" /> 
    <rect x="0" y="430" rx="7" ry="7" width="83" height="35" /> 
    <rect x="130" y="420" rx="10" ry="10" width="150" height="50" /> 
  </ContentLoader>
)

export default Skeleton

