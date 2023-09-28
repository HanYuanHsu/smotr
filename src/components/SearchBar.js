import React from "react";

export default function SearchBar() {
    return (
        <form action="/search" method="post">
            <input type="text" />
            <input type="submit" value="submit" />
        </form>
    );
}
