import Material from './Material'

class Layer {
  th: number;
  mx: Material;

  constructor(thickness: number, material: Material) {
    this.th = thickness;
    this.mx = material;
  }


}

export default Layer;
