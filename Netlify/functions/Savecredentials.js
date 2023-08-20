// saveCredentials.js
exports.handler = async function (event, context) {
    const data = JSON.parse(event.body);
    const email = data.email;
    const password = data.password;
  
    // Ici, vous pouvez implémenter la logique pour sauvegarder les informations dans un fichier ou une base de données
    // Cet exemple stocke les informations dans un objet temporaire (ceci n'est pas recommandé pour une utilisation en production)
    const savedData = {
      email: email,
      password: password,
    };
  
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Informations sauvegardées avec succès", data: savedData }),
    };
  };
  