fetch('data.json')
.then(response => response.json())
.then(data => {
    const jobList = document.querySelector('.job-list');

    data.forEach(job => {
        const div = document.createElement('div');
        div.classList.add('job-element');
        div.innerHTML = `
        <div class="job-description">
            <div class="job-logo">
            <img src="${job.logo}" alt="">
            </div>
            <div class="job-info">
            <div class="job-specs">
            <p>${job.company}</p>
            <p>${job.new}</p>
            <p>${job.featured}</p>
            </div>
    
            <h3>${job.position}</h3>
    
            <div class="additional-info">
            <p>${job.postedAt}</p>
            <p>${job.contract}</p>
            <p>${job.location}</p>
            </div>
            </div>
      
      </div>
      <div class="job-skills">
        ${job.languages.map(language => `<p>${language}</p>`).join('')}
      </div>
    `

    jobList.appendChild(div);

    });
});