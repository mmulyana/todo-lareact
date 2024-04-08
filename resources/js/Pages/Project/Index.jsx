import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index({ auth, projects }) {
    const { data } = projects;
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Project
                </h2>
            }
        >
            <Head title="Projects" />
            <div className="p-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="overflow-auto space-y-4">
                                {data.map((project) => (
                                    <div className='bg-gray-700/50 rounded px-3 py-1.5' key={project.id}>{project.name}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
