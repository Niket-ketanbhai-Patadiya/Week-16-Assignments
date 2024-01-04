const books=[
    {title:'Book one', Author:"swami vivekanand",publish:2004},
    {title:'Book two', Author:"Bipin chandra",publish:2006},
    {title:'Book three', Author:"R.k. narayan",publish:2000},
    {title:'Book four', Author:"anita desai",publish:2011},
    {title:'Book five', Author:"vikram seth",publish:2008},
];

let userBooks=books.filter( (bk) => bk.publish<2010)
let result= books.map((book) => ({
    ...book,
    Author: book.Author.toUpperCase()
  }));
console.log(result);