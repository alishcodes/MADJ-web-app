package com.madj;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Product class to hold all product information. Formatted to be compatible with H2 database and Spring Boot automation.
 * @author  Jonathan Navarro
 * @author Mitchel Mercer
 * @version 1.0
 * @since 2022-08-10
 */
@Entity
public class Product
{
    /**
     * Enum that represents product types.
     * Converting from string to numbers with this makes it efficient to send and store type information throughout network.
     */
    public enum ProductType{
        Tops,
        Outerwear,
        Shorts,
        Pants,
        Shoes,
        Accessories
    }
    //Product ID number from Database, as well as var declarations for product constructor use
    @Id int id;
    int price = 0;
    String title = " ", desc = " ", img = " ";
    ProductType productType;

    /**
     * Default constructor.
     */
    public Product(){}

    /**
     * Parameterized constructor.
     * @param id The product's id. Consistent throughout the local H2 database and Google Cloud database.
     * @param price The product's price. Should be multiplied by 100 to be stored in an int.
     * @param title The product's name.
     * @param desc The product's description.
     * @param img The product's image url.
     * @param productType The type of product.
     * @see ProductType
     */
    public Product(int id, int price, String title, String desc, String img,
                   ProductType productType){
        this.id = id;
        this.price = price;
        this.title = title;
        this.desc = desc;
        this.img = img;
        this.productType = productType;
    }
    // Getters and setters
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

    /**
     * Method to see if products are equal to one another
     */
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

    /**
     * Generate hash using all product's unique properties
     */
    @Override
    public int hashCode() {
        return Objects.hash(this.id, this.title, this.desc, this.price, this.productType, this.img);
    }

    /**
     * Overridden toString method.
     * @return Product information as a string.
     */
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
