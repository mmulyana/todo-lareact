import Pagination from "@/Components/Pagination";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Index({ auth, projects }) {
    const { data, meta } = projects;
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
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                        <tr className="text-nowrap">
                                            <th className="px-3 py-2">ID</th>
                                            <th className="px-3 py-2">Image</th>
                                            <th className="px-3 py-2">Name</th>
                                            <th className="px-3 py-2">
                                                Status
                                            </th>
                                            <th className="px-3 py-2">
                                                Created Date
                                            </th>
                                            <th className="px-3 py-2">
                                                Created By
                                            </th>
                                            <th className="px-3 py-2"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((project) => (
                                            <tr
                                                key={project.id}
                                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                            >
                                                <td className="px-3 py-2">
                                                    {project.id}
                                                </td>
                                                <td className="px-3 py-2">
                                                    <img
                                                        src={project.image_path}
                                                        className="h-20 w-auto"
                                                    />
                                                </td>
                                                <td className="px-3 py-2">
                                                    {project.name}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {project.status}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {project.created_at}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {project.createdBy.name}
                                                </td>
                                                <td className="px-3 py-2">
                                                    <Link
                                                        href={route(
                                                            "project.edit",
                                                            project.id
                                                        )}
                                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <Link
                                                        href={route(
                                                            "project.destroy",
                                                            project.id
                                                        )}
                                                        className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                                                    >
                                                        Edit
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <Pagination links={meta.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
