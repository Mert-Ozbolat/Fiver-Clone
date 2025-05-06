import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../context/authContext"
import api from "../../api";

const MyGigs = () => {
    const { user } = useAuth();

    const { data } = useQuery({
        queryKey: ["gigs"],
        queryFn: () =>
            api
                .get("/gigs", { params: { userID: user?._id } })
                .then((res) => res.data.gigs),
    });
    return <div>MyGigs</div>;
};
export default MyGigs;