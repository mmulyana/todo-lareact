import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function Index({ auth, projects }) {
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Project
                </h2>
            }
        >
            <ul>
                {projects?.map((project) => (
                    <li key={project.id}>{project.name}</li>
                ))}
            </ul>
        </Authenticated>
    );
}
