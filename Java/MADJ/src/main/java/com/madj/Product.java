package com.madj;

public class Product
{
    int id = 0;
    float price = 0;
    String title = " ", desc = " ", img = " ";
    int type = 0;

    public Product(int id, float price, String title, String desc, String img,
                   int type){
        this.id = id;
        this.price = price;
        this.title = title;
        this.desc = desc;
        this.img = img;
        this.type = type;
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


}
