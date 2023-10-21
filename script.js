const messages = {
    teams: ['Arsenal', 'ManchesterCity', 'Chelsea', 'Real Madrid', 'Barcelona', 'Atletico', 'Manchester United', 'Shakhtar', 'Bayern', 'Borissia', 'Milan', 'Inter', 'PSG'],
    verbs: [' are not ', ' are ', ' might be ', ' can be ', ' are 100% '],
    nouns: ['losers!', 'winners!', 'unlucky.', 'lucky!', 'the best!', 'succesful.', 'disgusting...']
}

let message;
const createTheMessage = () => {
    const firstWord = messages.teams[Math.floor(Math.random() * messages.teams.length)];
    const secondWord = messages.verbs[Math.floor(Math.random() * messages.verbs.length)];
    const thirdWord = messages.nouns[Math.floor(Math.random() * messages.nouns.length)];
    message = firstWord + secondWord + thirdWord;
    console.log(message);
}

createTheMessage();