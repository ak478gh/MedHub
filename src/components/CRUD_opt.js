// GET Function
export async function crud_get_opt(resource) {
    try {
        let res = await fetch(resource);
        let data = await res.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.log(error)
    }
}

// POST Function
export async function crud_post_opt(post_URL, post_data={}) {
    try {
        let res = await fetch(post_URL,{
            method: 'POST',
            body: JSON.stringify(post_data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // let data = res.json();
        // return data;
    } catch (error) {
        console.log(error)
    }
}