console.log(`=============================================================`);
console.log(`Задание №1`);
// Дан объект numbers.Необходимо в консоль вывести все значения больше или равные 3.
const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
}
for (const key in numbers) {
    if (numbers[key] >= 3) {
        console.log(numbers[key]);
    }
}

console.log(`=============================================================`);
console.log(`Задание №2`);
// Необходимо из объекта, который лежит в константе post вывести значения, к
// которым приписан комментарий, в консоль.
const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};
const infoUser_0 = Object.values(post.comments[0]);
const ratingUser_0 = Object.values(infoUser_0[3]);
const infoUser_1 = Object.values(post.comments[1]);
console.log(post.author, ratingUser_0[1], infoUser_1[0], infoUser_1[2]);

console.log(`=============================================================`);
console.log(`Задание №3`);
// Дан массив products, необходимо цену каждого продукта уменьшить на 15 % используя
// метод forEach.
const product = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
product.forEach(element => console.log(element.price *= 0.85));

console.log(`=============================================================`);
console.log(`Задание №4`);
const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];
// Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter.Исходные данные - массив products.
const result = products.filter(element => element.photos >= '.jpg');
console.log(result);
// Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.
products.sort((min, max) => min.price - max.price);
console.log(products);

console.log(`=============================================================`);
console.log(`Задание №5`);
// Дано 2 массива
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
// Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.
const enRu = {};
en.forEach((element, index) => enRu[element] = ru[index]);
console.log(enRu);