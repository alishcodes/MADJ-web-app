package com.madj;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
@Entity
public class Product
{
    public enum ProductType{
        Shirt,
        Pants
    }
    @Id @GeneratedValue Long id;
    float price = 0;
    String title = " ", desc = " ", img = " ";
    ProductType productType;
    public Product(){}
    public Product(float price, String title, String desc, String img,
                   ProductType productType){
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
    public void setTitle(String title){
        this.title = title;
    }
    public void setDesc(String desc){
        this.desc = desc;
    }
    public void setImg(String img){
        this.img = img;
    }
    public void setPrice(float price){
        this.price = price;
    }
    public void setProductType(ProductType productType){
        this.productType = productType;
    }
    public void setId(Long id){
        this.id = id;
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
    @Override
    public int hashCode() {
        return Objects.hash(this.id, this.title, this.desc, this.price, this.productType, this.img);
    }
    public String toString(){
        return "Product{" + "id=" + this.id + ", title='" + this.title
                + '\'' + ", desc='" + this.desc + '\''
                + ", price=" + this.price + ", type="+this.productType.ordinal()
                + ", img='" + this.img + '\'' + '}';
    }
}
