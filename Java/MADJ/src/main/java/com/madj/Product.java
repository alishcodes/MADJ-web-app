package com.madj;

import java.util.Objects;

public class Product
{
    public enum ProductType{
        Shirt,
        Pants
    }
    int id = 0;
    float price = 0;
    String title = " ", desc = " ", img = " ";
    ProductType productType;
    public Product(int id, float price, String title, String desc, String img,
                   ProductType productType){
        this.id = id;
        this.price = price;
        this.title = title;
        this.desc = desc;
        this.img = img;
        this.productType = productType;
    }

    public float getPrice(){

        return price;
    }
    public float DBGetPrice(){
        float cost = 0;
        return cost;
    }
    public String getTitle(){
        String temp = "";
        return temp;
    }
    public String getDesc(){
        String temp = "";
        return temp;
    }
    public String getImg(){
        String temp = "";
        return temp;
    }
    public ProductType getProductType(){
        return productType;
    }
    @Override
    public boolean equals(Object o) {

        if (this == o)
            return true;
        if (!(o instanceof Product))
            return false;
        Product product = (Product) o;
        return Objects.equals(this.id, product.id)
                && Objects.equals(this.title, product.title)
                && Objects.equals(this.desc, product.desc)
                && Objects.equals(this.price, product.price)
                && Objects.equals(this.productType, product.productType)
                && Objects.equals(this.img, product.img);
    }

    public String toString(){
        return "Product{" + "id=" + this.id + ", title='" + this.title
                + '\'' + ", desc='" + this.desc + '\''
                + ", price=" + this.price + ", type="+this.productType.ordinal()
                + ", img='" + this.img + '\'' + '}';
    }
}
