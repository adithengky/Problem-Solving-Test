function checkWeighted(value, queries = []) {
    if (typeof queries !== 'object') {
        return false;
    }

    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

    let splitValue = value.split('');

    let countValue = {};
    splitValue.forEach(x=> { 
        countValue[x] = (countValue[x] || 0) + 1; 
    });

    let weightValue = [];

    for (let key in countValue) {
        let idx = alphabet.indexOf(key);
        let alphabetWeight = idx + 1;

        for (let i = 1; i <= countValue[key]; i++) {
            weightValue.push(i * alphabetWeight);
        }
    }

    let result = [];

    queries.forEach(data => {
        let info = '';
        let checkIdxQueries = weightValue.indexOf(data);

        if (checkIdxQueries !== -1) {
            info = 'Yes';
        } else {
            info = 'No';
        }

        result.push(info)
    });

    return result;

    
    
}

let check = checkWeighted('abbcccd', [1, 3, 9, 8, 4])
console.log(check);