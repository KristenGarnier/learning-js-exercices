// Pour vérifier vos résultats lancez la commande "npm run test:base:3" dans le terminal

function test() {
	// Filtrez les livres qui ont déjà été lu pour ne garder que ceux qui n'ont pas encore été lu
	// Renvoyez ensuite le nom des auteurs des livres qui n'ont pas encore été lus
	// Le résultat devra être retourné sous forme de tableau ( ex, ce qui est attendu : ["Suzanne Collins"] )
	// Le faire sous forme de fonction pour que ce soit réutilisable

	const library = [
		{
			author: 'Bill Gates',
			title: 'The Road Ahead',
			readingStatus: true,
		},
		{
			author: 'Steve Jobs',
			title: 'Walter Isaacson',
			readingStatus: true,
		},
		{
			author: 'Suzanne Collins',
			title: 'Mockingjay: The Final Book of The Hunger Games',
			readingStatus: false,
		},
	];

	// votre code ici

	function getUnreadAuthors(books) {
		return books.filter((book) => !book.readingStatus).map((book) => book.author);
	}

	return getUnreadAuthors(library);
}

module.exports = test;
