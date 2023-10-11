const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

inputForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const input = inputField.value;
    inputField.value = '';
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    let message = document.createElement('div');
    message.classList.add('chatbot-message', 'user-message');
    message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
    conversation.appendChild(message);

    let response = processUserInput(input);

    message = document.createElement('div');
    message.classList.add('chatbot-message', 'chatbot');
    message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
    conversation.appendChild(message);
    message.scrollIntoView({ behavior: 'smooth' });
});

// Function to process user input and provide bot responses
function processUserInput(userInput) {
    const lowerCaseInput = userInput.toLowerCase();

    // Define keywords and associated responses
    const keywordResponses = {
        'hello': 'Hello there! How can I assist you today?',
        'hi': 'Hello there! How can I assist you today?',
        'how are you?': "I'm just a bot, but I'm here to help! What can I do for you?",
        'goodbye': 'Goodbye! Feel free to return if you have more questions.',
    };

    // Initialize the default response
    let botResponse = "I'm sorry, I don't understand. Please ask something else.";

    // Check if any keyword is present in the user input
    for (const keyword in keywordResponses) {
        const keywordRegex = new RegExp(`\\b${keyword}\\b`, 'i');
        if (keywordRegex.test(lowerCaseInput)) {
            botResponse = keywordResponses[keyword];
            break; // Exit the loop when a match is found
        }
    }

    return botResponse;
}
