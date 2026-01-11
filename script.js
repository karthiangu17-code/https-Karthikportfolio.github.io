// GSAP Timeline for initial page load animations
const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

tl.from(".profile-frame", { opacity: 0, scale: 0.5, duration: 1.2 })
  .from(".neon-text", { opacity: 0, y: -50, duration: 0.8 }, "-=0.6") // Start before previous animation ends
  .from(".subtitle, .about", { opacity: 0, y: 20, stagger: 0.3, duration: 0.7 }, "-=0.4")
  .from(".nav-menu button", { opacity: 0, y: 20, stagger: 0.2, duration: 0.6 }, "-=0.4")
  .from(".initial-message", { opacity: 0, duration: 0.5 }, "-=0.2");


// Content data
const data = {
    skills: `
        <p>I'm skilled in:</p>
        <ul>
            <li>🚀 <strong>Web Development:</strong> HTML, CSS (Tailwind, SCSS), JavaScript (React, Vue)</li>
            <li>🤖 <strong>AI Prompting & ML Basics:</strong> Generating creative content, understanding ML concepts</li>
            <li>🐍 <strong>Python:</strong> Scripting, Data Manipulation</li>
            <li>🎨 <strong>UI/UX Design:</strong> Figma, Adobe XD</li>
            <li>📊 <strong>Data Analysis:</strong> Basic data visualization and interpretation</li>
            <li>☁️ <strong>Cloud Basics:</strong> Familiarity with AWS/Azure concepts</li>
        </ul>
    `,
    college: `
        <p>🎓 I pursued my Bachelor of Engineering in Computer Science Engineering (B.E CSE) at <strong>[Unga College Name]</strong>.</p>
        <p>My academic journey focused on cutting-edge technologies and problem-solving methodologies.</p>
    `,
    projects: `
        <p>Here are some of my exciting projects:</p>
        <ul>
            <li><strong>🌌 Smart AI Portfolio:</strong> (This very portfolio!) Leveraging AI for dynamic content.</li>
            <li><strong>🛍️ E-commerce Chatbot:</strong> An intelligent chatbot for seamless online shopping.</li>
            <li><strong>📝 Tech Blog Platform:</strong> A full-stack application for sharing tech insights.</li>
            <li><strong>🎮 Game Development (Mini):</strong> Developed a simple arcade game using JavaScript.</li>
        </ul>
        <p>Explore my <a href="https://github.com/your-github-username" target="_blank" style="color: var(--neon-blue); text-decoration: none;">GitHub profile</a> for more!</p>
    `,
    hobbies: `
        <p>When I'm not coding, you can find me:</p>
        <ul>
            <li>🎧 <strong>Exploring Music:</strong> From Lo-Fi beats to high-energy EDM.</li>
            <li>✍️ <strong>Tech Blogging:</strong> Sharing my knowledge and discoveries.</li>
            <li>🎮 <strong>Gaming:</strong> Diving into virtual worlds and competitive challenges.</li>
            <li>📚 <strong>Reading Sci-Fi:</strong> Imagining future possibilities and technologies.</li>
            <li>📸 <strong>Photography:</strong> Capturing moments and perspectives.</li>
        </ul>
    `
};

const contentDisplay = document.getElementById('content-display');
const navButtons = document.querySelectorAll('.nav-btn');

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetSection = button.dataset.target;

        // Animate content out
        gsap.to(contentDisplay, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            onComplete: () => {
                // Update content after animation
                contentDisplay.innerHTML = `<h3>${targetSection.toUpperCase()}</h3>${data[targetSection]}`;
                
                // Animate new content in
                gsap.fromTo(contentDisplay,
                    { opacity: 0, y: -20 },
                    { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
                );
            }
        });
    });
});

// Initial animation for the initial message
gsap.from(".initial-message", { opacity: 0, y: 20, duration: 0.8, delay: tl.duration() });

