async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Err0rGCeni/DIOProject_PortfolioGG/main/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}