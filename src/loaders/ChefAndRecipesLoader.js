export const ChefAndRecipesLoader = async (id) => {
    const res = await fetch(`https://chef-delicieux-server-rownokzahan.vercel.app/chefs/${id}`)
    const chef = await res.json()

    const res2 = await fetch(`https://chef-delicieux-server-rownokzahan.vercel.app/chefs/${id}/recipes`)
    const recipes = await res2.json()

    return {chef,recipes}
}