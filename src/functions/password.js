const genPassword = (configuration) => {
    const characters = {
		numberLock: '0 1 2 3 4 5 6 7 8 9',
		symbolChar: '! @ # $ % ^ & * ( ) _ - + = { [ } ] ; : < , > . ? /',
		capital: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
		lowr: 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
	}

    let finalChar = '';
    let passwrd = '';

    for(let property in configuration) {
        if(configuration[property] === true){
            finalChar += characters[property] + ' ';
        }
    }

    finalChar += characters.lowr;
    finalChar = finalChar.trim();

    finalChar = finalChar.split(' ');
    
    for(let i = 0; i < configuration.numChar; i++){
        passwrd += finalChar[Math.floor(Math.random() * finalChar.length)];
    }

    return passwrd;

}

export default genPassword;

