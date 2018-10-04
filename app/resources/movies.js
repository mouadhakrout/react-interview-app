const movies = [
  {
    id: '1',
    img:"http://t2.gstatic.com/images?q=tbn:ANd9GcT_GDkjgNP5SnNDuDqiLe2pncGKVuhpP-Xzm3R6ARWqjOUmZH2z",
    title: 'Oceans 8',
    category: 'Comedy',
    likes: 4,
    dislikes: 1
  }, {
    id: '2',
    img:"https://i1.wp.com/www.netfenua.pf/cms/wp-content/uploads/2018/06/m0FO9w6u1GNBoVNRv4nstpf57tf.jpg?resize=400%2C650&ssl=1",
    title: 'Midnight Sun',
    category: 'Comedy',
    likes: 2,
    dislikes: 0
  }, {
    id: '3',
    img:"http://t0.gstatic.com/images?q=tbn:ANd9GcRZGmdlIXxgb9JCWjJOfaPxDzOoRi2iqtXBRjKTtSU_qr4Ajn-T",
    title: 'Les indestructibles 2',
    category: 'Animation',
    likes: 3,
    dislikes: 1
  }, {
    id: '4',
    img:"http://t2.gstatic.com/images?q=tbn:ANd9GcQfB902FM__yZfXkZ8n5WV_hV9GETYnU4KcVqABy8gBq0iVac5z",
    title: 'Sans un bruit',
    category: 'Thriller',
    likes: 6,
    dislikes: 6
  },
];

export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies));