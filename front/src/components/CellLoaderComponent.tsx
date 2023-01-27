import ContentLoader from "react-content-loader"
type Props = {
    width: string;
};
export default function CellLoader({width}: Props) {
    return (
        <ContentLoader 
            speed={2}
            width={width}
            viewBox={"0 0 200 30"}
            backgroundColor="#787C82"
            foregroundColor="#a6aab1"
        >
            <rect x="48" y="8" rx="3" ry="3" width={width} height="8" /> 
        </ContentLoader>
    )
}