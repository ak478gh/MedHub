// Sort Function

export async function get_sorted_data(resource,sortBy) {
    try {
        let res = await fetch(`${resource}`);
        let data = await res.json();
        console.log(data);
        // return data;
    } catch (error) {
        console.log(error)
    }
}