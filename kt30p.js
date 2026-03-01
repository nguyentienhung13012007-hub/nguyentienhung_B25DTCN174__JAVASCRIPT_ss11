let products = [
    { id: "P01", name: "Laptop MacBook Pro M3", price: 2000, category: "Laptop", inStock: true },
    { id: "P02", name: "Chuột không day Logitech", price: 45, category: "Phụ kien", inStock: true },
    { id: "P03", name: "Ban phim Cơ Keychron", price: 95, category: "Phu kien", inStock: false },
    { id: "P04", name: "Man hinh Dell UltraSharp", price: 450, category: "Man hinh", inStock: true },
    { id: "P05", name: "Tai nghe Sony WH-1000XM5", price: 350, category: "Phy kien", inStock: true }
];


const filterProductById=(idProduct,products)=>{
    let productFindById=products.find((element)=>{
        return element.id ===idProduct;

    });
    productFindById==undefined
    ?console.log("Không tìm thấy")
    :console.log(productFindById);
    
    
};
filterProductById("P03",products);

const checkPriceProduct=(products)=>{
  let isTrue=products.some((product)=>{
   return product.price===0;
  });
  if(isTrue==true){
    console.log("có hàng chưa cạp nhật giá");
    
  }else{
    console.log("đã đúng rồi ");
    
  }
};
checkPriceProduct(products);


const displayFormatProduct=(products)=>{
   let listNewProduct=products.map((product)=>{
    let stringInStock=product.inStock==true?"Còn hàng":"hết hàng";
     let newProduct=`${product.name}-giá:$${product.price}|trạng thái:${stringInStock}`;
     return newProduct;
   });
   console.log(listNewProduct);
   
};
displayFormatProduct(products);