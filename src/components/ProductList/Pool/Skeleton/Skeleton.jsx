import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={260}
        height={475}
        viewBox={'0 0 260 475'}
        backgroundColor={'#f3f3f3'}
        foregroundColor={'#ecebeb'}
        { ...props }
    >
        <circle cx="130" cy="120" r="120" />
        <rect x="1" y="270" rx="10" ry="10" width="260" height="23" />
        <rect x="1" y="310" rx="10" ry="10" width="260" height="90" />
        <rect x="130" y="415" rx="25" ry="25" width="128" height="42" />
        <rect x="0" y="423" rx="10" ry="10" width="90" height="25" />
    </ContentLoader>
);
export default Skeleton;