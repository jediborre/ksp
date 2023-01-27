import ContentLoader from "react-content-loader";

export interface props {
    width: string;
};


const CellLoader: React.FC<props> = (props) => {
    return (
        <ContentLoader 
            speed={2}
            width={props.width}
            viewBox={"0 0 200 30"}
            backgroundColor="#787C82"
            foregroundColor="#a6aab1"
        >
            <rect x="48" y="8" rx="3" ry="3" width={props.width} height="8" /> 
        </ContentLoader>
    )
}
export default CellLoader;