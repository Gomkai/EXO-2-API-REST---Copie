const mongoose = require('mongoose');

const clientOptions = {
    dbName: 'apinode' // Supprimez 'useNewUrlParser' car elle n'est plus nécessaire
};

exports.initClientDbConnection = async () => {
    try {
        /**
         * ATTENTION
         * On essaie de se connecter à MongoDB en utilisant la variable d'environnement URL_MONGO.
         * Il faut donc ne pas oublier de l'ajouter au fichier .env.
         * URL_MONGO prend pour valeur la chaîne de connexion de votre cluster MongoDB.
         */
        await mongoose.connect(process.env.URL_MONGO, clientOptions);
        console.log('Connected');
    } catch (error) {
        console.log(error);
        throw error;
    }
};
