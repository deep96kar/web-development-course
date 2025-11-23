async function simulateHacking() {
    const paragraphs = document.querySelectorAll('p');
    const finalMessage = document.getElementById('finalMessage');

    for (const paragraph of paragraphs) {
            const delay = Math.floor(Math.random() * 9000) + 1000; // Random delay between 1 and 10 seconds

            await new Promise(resolve => setTimeout(resolve, delay));
 
            paragraph.classList.remove('hidden');
        }
    finalMessage.style.display = 'block'; // Show the final message
}

simulateHacking();