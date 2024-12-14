class Wheel {
  diameter: number;
  brand: string;
  tireBrand: string;
  constructor(diameter: number, brand: string, tireBrand: string) {
    this.diameter = diameter;
    this.brand = brand;
    this.tireBrand = tireBrand;  // Initialize tireBrand instead of brand
  }
}

export default Wheel;

