import { Link } from "@inertiajs/react";

export default function Pagination({ links, queryParams = {} }) {
    return (
        <nav className="mt-4 gap-4 flex justify-end">
            {links.map((link, index) => (
                <Link
                    preserveScroll
                    key={index}
                    href={link.url +"&"+ generateQuery(queryParams) || ""}
                    className={[
                        "inline-block py-2 px-3 rounded-lg text-gray-200 text-xs",
                        link.active ? "bg-gray-950" : "",
                        !link.url ? "!text-gray-500" : "hover:bg-gray-900",
                    ].join(" ")}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                ></Link>
            ))}
        </nav>
    );
}

function generateQuery(obj) {
    const validKeys = ["name", "status"];

    const filteredObj = Object.keys(obj)
        .filter((key) => validKeys.includes(key))
        .reduce((acc, key) => {
            acc[key] = obj[key];
            return acc;
        }, {});

    const queryString = Object.keys(filteredObj)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(
                    filteredObj[key]
                )}`
        )
        .join("&");

    return queryString;
}
