

export async function fetchData(url, query) {
    const response = await fetch(
        `${url}${query}`
    );

    if (!response.ok) {
        throw Error;
    }
    return await response.json();
}