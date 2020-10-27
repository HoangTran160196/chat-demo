let count = 0
export async function getUsersFromApi() {
    const res = await fetch('https://randomuser.me/api/?results=3')
    const {results, info} = await res.json()
    return results
}