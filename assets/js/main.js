function updateProfileInfo(profileData) {
    const photo = document.getElementById("profile-photo");
    photo.src = profileData.photo;
    photo.alt = profileData.name;

    const name = document.getElementById('profile-name');
    name.innerText = profileData.name;
    const job = document.getElementById('profile-job');
    job.innerText = profileData.job;
    const location = document.getElementById('profile-location');
    location.innerText = profileData.location;
    const phone = document.getElementById('profile-phone');
    phone.innerText = profileData.phone;
    phone.href = profileData.phone;
    const email = document.getElementById('profile-email');
    email.innerText = profileData.email;
    email.href = profileData.email;
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('soft-skills');
    softSkills.innerHTML = profileData.skills.softSkills.map(e => `<li>${e}</li>`).join('');
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('hard-skills');
    hardSkills.innerHTML = profileData.skills.hardSkills.map(
        e => `<li><img src="${e.logo}" alt="${e.name}" title="${e.name}"></li>`
    ).join('');
}

function updateLanguages(profileData) {
    const languages = document.getElementById('languages');
    languages.innerHTML = profileData.languages.map(e => `<li>${e}</li>`).join('');
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('portfolio')
    portfolio.innerHTML = profileData.portfolio.map(
        e => `<li> <h3 ${e.github ? 'class="github"' : ''}>${e.name}</h3><a href="#">${e.url}</a></li>`
    ).join('')
}

function updateExperience(profileData) {
    const experience = document.getElementById('experience')
    experience.innerHTML = profileData.professionalExperience.map(
        e => `<li><h3>${e.name}</h3><p class="period">${e.period}</p><p>${e.description}</p></li>`
    ).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
    updateLanguages(profileData);
    updatePortfolio(profileData);
    updateExperience(profileData);
})()