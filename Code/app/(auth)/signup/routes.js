export async function createUser(formData) {
    let bodyContent = JSON.stringify({
        "fullName": formData.fullName,
        "email": formData.email,
        "password": formData.password,
        "contactNumber": formData.phone,
        "customerType": formData.customerType,
        "city": formData.city,
        "area": formData.area,
        "phase": formData.phase,
    });
    let headersList = {
        'Content-Type': 'application/json',
    }
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/User/CreateUser', {
        method: 'POST',
        body: bodyContent,
        headers: headersList
    })
    const data = await res.json()

    return Response.json({ data })
}