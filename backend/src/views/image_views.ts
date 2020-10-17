import Image from "../models/Images"

export default {
    render(image: Image) {
        return {
            id: image.image_id,
            url: `http://192.168.15.5:3333/uploads/${image.path}`
        }
    },

    renderMany(images: Image[]) {
        return  images.map(image => this.render(image))
    }
}