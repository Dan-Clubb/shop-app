const sequelize = require("./db");
const Jewellery = require("./jewellery");
const Electronics = require("./electronics");
const Men = require("./men");
const Women = require("./women");

async function sandbox() {
    await sequelize.sync();
    // JEWLERY
    const neckless = await Jewellery.create({
        image: "https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-victoriagraduated-line-necklace-13199477_993503_ED.jpg?&op_usm=1.0,1.0,6.0&$cropN=0.1,0.1,0.8,0.8&defaultImage=NoImageAvailableInternal&",
        price: "£49,900.00",
        description: "Inspired by the fire and radiance of our superlative diamonds, Tiffany Victoria uses a unique combination of cuts for a distinctly romantic sensibility. This classic line necklace drapes in perfect proportion.",
    });
    const ring = await Jewellery.create({
        image: "https://www.cartier.com/variants/images/25458910981297854/img1/w400_tpadding20.jpg",
        price: "£990.00",
        description: "Inspired by the fire and radiance of our superlative diamonds, Tiffany Victoria uses a unique combination of cuts for a distinctly romantic sensibility. This classic line necklace drapes in perfect proportion.",
    });
    const bracelet = await Jewellery.create({
        image: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_3.0,f_auto,w_500/5464948_png/tennis-deluxe-bracelet--round-cut-crystals--white--rose-gold-tone-plated-swarovski-5464948.png",
        price: "£123.89",
        description: "Elegant, refined and incredibly easy to wear, this rose gold-plated edition of our bestselling Tennis Bracelet is a piece you can count on to lift any outfit, no matter what the occasion. Perfect for Mother's Day gifting, its soft sparkle blends in easily with other Swarovski designs. Try pairing it with pieces from the Sunshine jewellery family to create a radiant and timeless ensemble.",
    });

    // ELECTRONICS
    const phone = await Electronics.create({
        image: "https://images.samsung.com/is/image/samsung/p6pim/uk/galaxy-s21/gallery/uk-galaxy-s21-5g-g991-sm-g991bzigeua-thumb-368855921?$160_160_PNG$",
        price: "£819.00",
        description: "Never miss that perfect shot again. Meet Galaxy S21 5G and S21+ 5G. Designed to revolutionise video and photography, with beyond cinematic 8K resolution so you can snap epic photos right out of video. It has it all in two sizes: 64MP, our fastest chipset and a massive all-day battery.1 Things just got epic.",
    });
    const laptop = await Electronics.create({
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-config-201810?wid=1078&hei=624&fmt=jpeg&qlt=80&.v=1633033424000",
        price: "£999.00",
        description: "Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. Our most advanced Neural Engine for up to 9x faster machine learning. The longest battery life ever in a MacBook Air. And a silent, fanless design. This much power has never been this ready to go.",
    });
    const tablet = await Electronics.create({
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-12-select-cell-spacegray-202104_GEO_GB?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1617920522000",
        price: "£999.00",
        description: "The ultimate iPad experience. Now with breakthrough M1 performance, a breathtaking XDR display and blazing‑fast 5G wireless. Buckle up.",
    });

    // MEN'S CLOTHING
    const top = await Men.create({
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWlt6x6UJFDXOFsri01FmtALW8JH7nVMaeyQ&usqp=CAU",
        price: "£65.00",
        description: "Same iconic style but in roomier sizes, Ralph's Big & Tall range is perfect for those who want a little extra room in their preppy wardrobe. Made from washed slub jersey cotton for a broken-in look and feel, this Polo Ralph Lauren T-shirt is an effortless casual go-to.",
    });
    const shorts = await Men.create({
        image: "https://johnlewis.scene7.com/is/image/JohnLewis/005752436alt3?$rsp-pdp-port-640$",
        price: "£55.00",
        description: "Offering a nod to contemporary graphic trends, these shorts from LUKE 1977 are blended with cotton for a soft, breathable handle. In a casual cut with a classic LUKE 1977 logo patch that calls to sun-soaked afternoons spent with friends, slip on with cotton tees and yur favourite kicks to complete the look.",
    });
    const coat = await Men.create({
        image: "https://johnlewis.scene7.com/is/image/JohnLewis/005623757?$rsp-pdp-port-1080$",
        price: "£389.00",
        description: "With its classic teddy collar, padded shape and reliable protection against the cold, reach for this quilted jacket from HUGO BOSS. Made to an oversized fit from comfortable yet durable fabric, it is water repellent, regular in length and has a zip-up closure that's perfect to grab-and-go",
    });

    // WOMEN'S CLOTHING
    const troussers = await Women.create({
        image: "https://johnlewis.scene7.com/is/image/JohnLewis/005315741alt3?$rsp-pdp-port-640$",
        price: "£99.00",
        description: "In rich magenta, the Suki trousers from Hobbs tap into this season's trend for colourful tailoring. Immaculately cut to a slim leg silhouette, belt loops and pockets add a practical touch. Style with the coordinating Suki blazer for a modern take on the trouser suit. Crafted with stretch for comfort.",
    });
    const jacket = await Women.create({
        image: "https://johnlewis.scene7.com/is/image/JohnLewis/005668800?$rsp-pdp-port-1080$",
        price: "£89.00",
        description: "Completing off-duty looks, this cosy teddy coat from FatFace falls just to the knee in a mid-length cut. Framed with a collar neckline and with a textured pattern throughout, it is fashioned from long-lasting fabric that will see away the cold.",
    });
    const leggings = await Women.create({
        image: "https://johnlewis.scene7.com/is/image/JohnLewis/005211905?$rsp-pdp-port-640$",
        price: "£58.00",
        description: "Spanx's Look at Me Now Leggings are extremely flattering and comfortable. Featuring soft, flexible yarns, this seamless design moves with you. Hidden innovation and shaping magic support you 24/7. A built-in double-layer waistband smooths the tummy and they're designed to hit at your natural waist for great coverage and no muffin top. Comfortable, seamless shaping firms all around while the matte yarn features a twill knit construction for a great fit and feel.",
    });
}
sandbox();