// Simulated data for featured books
const featuredBooks = [
    {
        id: 1,
        title: 'Book Title 1',
        author: 'Author 1',
        price: 19.99,
        imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.BPu9qSJKxsaP6BWQ3G_pEAHaLG&pid=Api&P=0&h=180'
    },
    {
        id: 2,
        title: 'Book Title 2',
        author: 'Author 2',
        price: 24.99,
        imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.jMf9gPKhTiQooXICgj68PgAAAA&pid=Api&P=0&h=180'
    },
    {
        id: 3,
        title: 'Book Title 3',
        author: 'Author 3',
        price: 14.99,
        imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.lq60OMmJ5MhZmbbQvL8JzAHaLY&pid=Api&P=0&h=180'
    }
];

// Function to display featured books
function displayFeaturedBooks() {
    const booksContainer = document.querySelector('.books');

    featuredBooks.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');

        bookElement.innerHTML = `
            <img src="${book.imageUrl}" alt="Book Cover">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p>$${book.price}</p>
            <button>Add to Cart</button>
        `;

        booksContainer.appendChild(bookElement);
    });
}

// Call the function to display featured books
displayFeaturedBooks();
