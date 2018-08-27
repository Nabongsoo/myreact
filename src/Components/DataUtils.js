
let obj = {

    saveProduct(_data){
        //call api
    },

    removeProduct(_data){

    },

    createProduct(){

    },

    getUserList(){
        return [
        {
            email: "danthuy@yahoo.com",
            firstname: "Jenni",
            lastname: " Dan",
            password: "aaa"
        },
        {
            email: "dan@yahoo.com",
            firstname: "Dan",
            lastname: "DAN",
            password: "abc"
        },
        {
            email: "thuydan@yahoo.com",
            firstname: "thuy",
            lastname: "DAN",
            password: "bac"
        },
        {
            email: "thuydan123@yahoo.com",
            firstname: "thuy",
            lastname: "DAN",
            password: "cba"
        }
        ];
    },

    checkUser(username, password) {
        let userList = this.getUserList();
        let userInfo = null;
        for(let index in userList) {
            if (userList[index].email == username && userList[index].password == password){
                userInfo = {
                    email: userList[index].email,
                    name: (userList[index].firstname) + "" + (userList[index].lastname)
                };
                break;
            }
        }
        return userInfo;
    },
    getUserInfo(){
        let userInfo = window.localStorage.getItem("session");
        if(userInfo != null){
            userInfo = JSON.parse(userInfo);
        }
        return userInfo;
    },

    getProductList(){
        return [
            {
                id: 1,
                name:"Nike COrtez Red-White",
                image:"image/RW.jpg",
                price: 70,
                type:"Shoes",
                company: "Nike",
                saleoff: 50,
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley "
            },
            {
                id:2,
                name:"Nike COrtez Black-White",
                image: "image/B-W.jpg",
                price: 80,
                type:"Shoes",
                company: "Nike",
                saleoff: 50,
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley "
            },
            {
                id:3,
                name:"Nike COrtez Black",
                image: "image/BLACK.jpg",
                price:"$70",
                type:"Shoes",
                company: "Nike",
                saleoff: 50,
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley "
            }
        ];
    },
    getProduct(id){
        let productList = this.getProductList();
        let product = null;
        for(let i in productList){
            if(productList[i].id === id){
                product = productList[i];
                break;
            }
        }
        return product;
    }
};
    
module.exports=obj