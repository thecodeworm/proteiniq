document.getElementById('proteinForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const gender = document.getElementById('gender').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const activityLevel = document.getElementById('activityLevel').value;
    const trainingLevel = document.getElementById('trainingLevel').value;

    let proteinNeeds = calculateProtein(gender, height, weight, activityLevel, trainingLevel);
    displayResult(proteinNeeds);
});

function calculateProtein(gender, height, weight, activityLevel, trainingLevel) {
    // Basic protein needs calculation based on activity level
    let baseProteinNeeds;
    switch (activityLevel) {
        case 'sedentary':
            baseProteinNeeds = weight * 0.8; // 0.8 g/kg for sedentary
            break;
        case 'lightlyActive':
            baseProteinNeeds = weight * 1.2; // 1.2 g/kg for lightly active
            break;
        case 'moderatelyActive':
            baseProteinNeeds = weight * 1.6; // 1.6 g/kg for moderately active
            break;
        case 'veryActive':
            baseProteinNeeds = weight * 2.2; // 2.2 g/kg for very active
            break;
        case 'extraActive':
            baseProteinNeeds = weight * 2.5; // 2.5 g/kg for extra active
            break;
        default:
            return "Please select an activity level.";
    }

    // Adjust based on training level
    switch (trainingLevel) {
        case 'beginner':
            return Math.round(baseProteinNeeds * 1.1); // Increase by 10% for beginners
        case 'intermediate':
            return Math.round(baseProteinNeeds * 1.2); // Increase by 20% for intermediate
        case 'advanced':
            return Math.round(baseProteinNeeds * 1.3); // Increase by 30% for advanced
        default:
            return "Please select a training level.";
    }
}

function displayResult(proteinNeeds) {
    document.getElementById('result').innerText = `Your daily protein needs are approximately ${proteinNeeds} grams.`;
}