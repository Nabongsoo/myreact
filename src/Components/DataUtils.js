let $ = require("jquery");
const STORE_ID = 1;

let obj = {
    uploadFile() {
        const data = new FormData();
        let files = $("#uploadFile")[0].files;
        data.append('uploadFile', files[0]);
        //data.append('filename', this.fileName.value);
        return $.when(
        $.ajax({
            url:"http://gunivn.com/guni/index.php/api/upload",
            data: data,
            type:"post",
            contentType:false,
            processData:false,
            cache:false,
            dataType:"json"
          })
        );
    },
    getItem(api, id) {
        let _url = "http://gunivn.com/guni/index.php"+api + "?id="+id+"&store_id=" + STORE_ID;
        return $.when(
            $.ajax({
                method: "GET",
                url: _url,
                dataType: 'json'
            })
        );
    },
    getList(api, filter) {
        let _url = "http://gunivn.com/guni/index.php"+api + "?store_id=" + STORE_ID;
        if(filter) {
            _url += ("&"+ $.param(filter));
        }
        return $.when(
            $.ajax({
                method: "GET",
                url: _url,
                dataType: 'json'
            })
        );
    },
    create(api, dataSave) {
        return $.when(
            $.ajax({
                method: "POST",
                url: "http://127.0.0.1:8000"+api + "?store_id=" + STORE_ID,
                dataType: 'json',
                data: {data: dataSave}
            })
        );
    },
    remove(api, id) {
        return $.when(
            $.ajax({
                method: "POST",
                url: "http://gunivn.com/guni/index.php" + api,
                dataType: 'json',
                data: JSON.stringify({id: id, store_id: STORE_ID})
            })
        );
    },
    save(api, dataSave) {
        console.log('[MINE] api, dataSave = ', api, JSON.stringify(dataSave));
        dataSave['store_id'] = STORE_ID
        return $.when(
            $.ajax({
                method: "POST",
                url: "http://gunivn.com/guni/index.php" + api,
                dataType: 'json',
                data: JSON.stringify({data: dataSave})
            })
        );
    },

    getUserList() {
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
        for (let index in userList) {
            if (userList[index].email == username && userList[index].password == password) {
                userInfo = {
                    email: userList[index].email,
                    name: (userList[index].firstname) + "" + (userList[index].lastname)
                };
                break;
            }
        }
        return userInfo;
    },
    getUserInfo() {
        let userInfo = window.localStorage.getItem("session");
        if (userInfo != null) {
            userInfo = JSON.parse(userInfo);
        }
        return userInfo;
    },

    getProductList(type) {

        let data = [
            {
                id: 1,
                name: "Nike COrtez Red-White",
                image: "image/RW.jpg",
                price: 70,
                type: "Shoes",
                brand: "Nike",
                saleoff: 50,
                catalogid: 1,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley "
            },
            {
                id: 2,
                name: "Nike COrtez Black-White",
                image: "image/B-W.jpg",
                price: 80,
                type: "Shoes",
                brand: "Nike",
                saleoff: 50,
                catalogid: 1,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley "
            },
            {
                id: 3,
                name: "Nike COrtez Black",
                image: "image/BLACK.jpg",
                price: "$70",
                type: "Shoes",
                brand: "Nike",
                saleoff: 50,
                catalogid: 3,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley "
            },
            {
                id: 4,
                name: "Nike COrtez Black",
                image: "image/BLACK.jpg",
                price: "$70",
                type: "Shoes",
                brand: "Nike",
                saleoff: 50,
                catalogid: 1,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley "
            },

            {
                id: 5,
                name: "Nike COrtez Red-White",
                image: "image/RW.jpg",
                price: 70,
                type: "Shoes",
                brand: "Nike",
                saleoff: 50,
                catalogid: 2,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley "
            },
            {
                id: 6,
                name: "Nike COrtez Black-White",
                image: "image/B-W.jpg",
                price: 80,
                type: "Shoes",
                brand: "Nike",
                saleoff: 50,
                catalogid: 3,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley "
            },
            {
                id: 6,
                name: "Nike COrtez Black-White",
                image: "image/B-W.jpg",
                price: 80,
                type: "Shoes",
                brand: "Nike",
                saleoff: 50,
                catalogid: 1,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley "
            },
        ];

        if (type) {
            let tmp = [];
            for (let index in data) {
                if (data[index].Catalogid == type) {
                    tmp.push(data[index]);
                }
            }
            data = tmp
        }
        return data;
    },

    getProduct(id) {
        let productList = this.getProductList();
        let product = null;
        for (let i in productList) {
            if (productList[i].id === id) {
                product = productList[i];
                break;
            }
        }
        return product;
    }
};

module.exports = obj