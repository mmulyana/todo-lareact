import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
    return (
        <nav className="mt-4 gap-4 flex justify-end">
            {links.map((link, index) => (
                <Link
                    key={index}
                    href={link.url || ""}
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
