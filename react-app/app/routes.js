import { index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.jsx"),
    route("recommend", "routes/recommend.jsx"),
    route("group/:groupId", "routes/group.jsx"),
    route("product/:productId", "routes/product.jsx"),
    route("user/:userId", "routes/user.jsx"),
    route("login", "routes/login.jsx"),
    route("register", "routes/register.jsx"),

    // jeśli będzie trzeba można tutaj zastosować layout w celu współdzielenia na przykład filtrów w wynikach wyszukiwania
    // w zależności jak będzie robione wyszukiwanie te podstrony mogą potrzebować parametr w przyszłości
    route("products", "routes/products.jsx"),

    route("groups", "routes/groups.jsx"),

    route("users", "routes/users.jsx")
];
