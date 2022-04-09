export interface Vehicle {
    id: number;
    name: string;
    img:string;
    type:string;
    make:string;
    model:string;
    mileage:string;
    price:string;
    year:string;
    color:string;
    engine:string;
    rating:string;
    loc:string;
    date:string;
    assembly:string;

    /* overall condition*/
    exterior:string;
    interior:string;
    transmission:string;
    stearing:string;
    suspension:string;

    /* sellers info*/
    seller_name:string;
    seller_email:string;
    seller_hrs:string;
    comments:string;


}