import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../context/authContext"
import api from "../../api";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Card from "../../components/card";
import { IGig } from "../../types";

const MyGigs = () => {
    const { user } = useAuth();

    const { isLoading, error, data, refetch } = useQuery<IGig[]>({
        queryKey: ["my-gigs", user],
        queryFn: () =>
            api
                .get("/gigs", { params: { userID: user?._id } })
                .then((res) => res.data.gigs),
    });

    return (
        <div>
            <h1 className="font-bold text-3xl mb-5 text-gray-600">Hizmetlerim</h1>

            <div>
                {
                    isLoading ? (
                        <Loader />
                    ) : error ? (
                        <Error />
                    ) : (
                        data && data.map((gig) => <Card item={gig} expand={true} />)
                    )
                }
            </div>
        </div>
    )
};
export default MyGigs;