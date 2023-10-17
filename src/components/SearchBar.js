import React from "react";

export default function SearchBar() {
    return (
        <form action="http://localhost:3001/search" method="post">
            <label for="">User</label>
            <input type="text" />
            <input type="submit" value="submit" />
        </form>
    );
}
