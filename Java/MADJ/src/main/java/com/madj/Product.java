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
        /**
         * Tops category
         */
        Tops,
        /**
         * Outerwear category
         */
        Outerwear,
        /**
         * Shorts category
         */
        Shorts,
        /**
         * Pants category
         */
        Pants,
        /**
         * Shoes category
         */
        Shoes,
        /**
         * Accessories category
         */
        Accessories
    }
    // local variables
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
    // Getters and setters. Necessary for Spring Boot automation.

    /**
     * Product price getter method.
     * @return The product's price.
     */
    public int getPrice(){ return price; }
    /**
     * Product price name/title method.
     * @return The product's name/title.
     */
    public String getTitle(){
        return title;
    }
    /**
     * Product description getter method.
     * @return The product's description.
     */
    public String getDesc(){
        return desc;
    }
    /**
     * Product image getter method.
     * @return The product's image's url.
     */
    public String getImg(){
        return img;
    }
    /**
     * Product type getter method.
     * @return The product's type.
     */
    public ProductType getProductType(){
        return productType;
    }
    /**
     * Product id getter method.
     * @return The product's id. This should be consistent throughout the H2 database and the Google Cloud database.
     */
    public int getId(){
        return this.id;
    }
    /**
     * Product name/title setter method.
     * @param title The product's name/title.
     */
    public void setTitle(String title){
        this.title = title;
    }
    /**
     * Product description setter method.
     * @param desc The product's description.
     */
    public void setDesc(String desc){
        this.desc = desc;
    }
    /**
     * Product image setter method.
     * @param img The product's image's url.
     */
    public void setImg(String img){
        this.img = img;
    }
    /**
     * Product price setter method.
     * @param price The product's price.
     */
    public void setPrice(int price){
        this.price = price;
    }
    /**
     * Product type setter method.
     * @param productType The product's type.
     */
    public void setProductType(ProductType productType){
        this.productType = productType;
    }
    /**
     * Product id setter method.
     * @param id The product's id. This should be consistent throughout the H2 database and the Google Cloud database.
     */
    public void setId(int id){
        this.id = id;
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
