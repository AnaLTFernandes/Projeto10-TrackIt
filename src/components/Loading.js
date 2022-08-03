import { Circles } from "react-loader-spinner";

export default function Loading({ size}) {
    return (
        <Circles
            height={size}
            width={size}
            radius="9"
            color='#FFFFFF'
            ariaLabel="three-dots-loading"
        />
    );
};