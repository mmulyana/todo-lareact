import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function Index({ auth, users }) {
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    User
                </h2>
            }
        ></Authenticated>
    );
}
