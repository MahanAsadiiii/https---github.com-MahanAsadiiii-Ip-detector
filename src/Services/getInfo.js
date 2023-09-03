async function getIp() {
    const response = await fetch('https://api.ipify.org?format=json')
    return (await response.json()).ip
}

async function getInfo() {
    const ip = await getIp()

    const response = await fetch(`https://ipwho.is/${ip}`)
    return await response.json();
}


export default getInfo