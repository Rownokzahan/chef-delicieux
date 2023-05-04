const ChefsAndLatestRecipesLoader = async () => {
    const res = await fetch(`https://chef-delicieux-server-rownokzahan.vercel.app/chefs`)
    const chefs = await res.json()

    const res2 = await fetch(`https://chef-delicieux-server-rownokzahan.vercel.app/recipes/latest`)
    const latestRecipes = await res2.json()

    return { chefs, latestRecipes }
}

export default ChefsAndLatestRecipesLoader;