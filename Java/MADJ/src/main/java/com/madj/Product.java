package com.madj;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
@Entity
public class Product
{
    public enum ProductType{
        Tops,
        Outerwear,
        Shorts,
        Pants,
        Shoes,
        Accessories
    }
    @Id int id;
    int price = 0;
    String title = " ", desc = " ", img = " ";
    ProductType productType;
    public Product(){}
    public Product(int id, int price, String title, String desc, String img,
                   ProductType productType){
        this.id = id;
        this.price = price;
        this.title = title;
        this.desc = desc;
        this.img = img;
        this.productType = productType;
    }

    public int getPrice(){ return price; }
    public String getTitle(){
        return title;
    }
    public String getDesc(){
        return desc;
    }
    public String getImg(){
        return img;
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
    public void setPrice(int price){
        this.price = price;
    }
    public void setProductType(ProductType productType){
        this.productType = productType;
    }
    public void setId(int id){
        this.id = id;
    }
    public int getId(){
        return this.id;
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
        return "Product{" +
                "id=" + this.id +
                ", title='" + this.title + '\'' +
                ", desc='" + this.desc + '\'' +
                ", price=" + (((float)this.price) / 100) +
                ", type="+this.productType.ordinal() +
                ", img='" + this.img + '\'' +
                '}';
    }
}
