export type Kind = 'phone' | 'laptop' | 'tv' | 'headphones' | 'buds' | 'soundbar' | 'speaker' | 'vacuum' | 'coffee' | 'fridge' | 'console' | 'gamepad'
export type Product = {
  id: string
  name: string
  brand: string
  cat: string
  kind: Kind
  price: number
  old?: number
  rating: number
  reviews: number
  stock: number
  hue: number
  isNew?: boolean
  specs: [string, string][]
}

export const categories = [
  { id: 'phones', name: 'Phones', kind: 'phone' as Kind },
  { id: 'laptops', name: 'Laptops', kind: 'laptop' as Kind },
  { id: 'tv', name: 'TV & Video', kind: 'tv' as Kind },
  { id: 'audio', name: 'Audio', kind: 'headphones' as Kind },
  { id: 'home', name: 'Home Appliances', kind: 'vacuum' as Kind },
  { id: 'gaming', name: 'Gaming', kind: 'console' as Kind },
]

type Row = [id: string, name: string, brand: string, cat: string, kind: Kind, price: number, old: number, rating: number, reviews: number, stock: number, hue: number, specs: string, isNew?: 1]

// specs: "Label=Value;Label=Value"
const rows: Row[] = [
  ['nova-x1', 'Nova X1 128GB', 'Nova', 'phones', 'phone', 899, 999, 4.7, 212, 14, 22, 'Display=6.1" OLED;Storage=128 GB;Camera=48 MP;Network=5G;Battery=4200 mAh'],
  ['nova-x1-pro', 'Nova X1 Pro 256GB', 'Nova', 'phones', 'phone', 1199, 0, 4.8, 134, 6, 210, 'Display=6.7" OLED 120 Hz;Storage=256 GB;Camera=50 MP triple;Network=5G;Battery=5000 mAh', 1],
  ['pixa-9-lite', 'Pixa 9 Lite 64GB', 'Pixa', 'phones', 'phone', 329, 379, 4.3, 98, 30, 150, 'Display=6.5" LCD;Storage=64 GB;Camera=13 MP;Network=4G;Battery=4000 mAh'],
  ['pixa-9-pro', 'Pixa 9 Pro 256GB', 'Pixa', 'phones', 'phone', 749, 0, 4.6, 76, 9, 280, 'Display=6.6" AMOLED;Storage=256 GB;Camera=64 MP;Network=5G;Battery=4800 mAh', 1],
  ['zenith-z5', 'Zenith Z5 5G 128GB', 'Zenith', 'phones', 'phone', 549, 599, 4.5, 143, 18, 0, 'Display=6.4" AMOLED;Storage=128 GB;Camera=50 MP;Network=5G;Battery=4500 mAh'],
  ['kito-k2', 'Kito K2 Budget 64GB', 'Kito', 'phones', 'phone', 189, 0, 4.1, 310, 52, 45, 'Display=6.2" LCD;Storage=64 GB;Camera=8 MP;Network=4G;Battery=4000 mAh'],

  ['aero-14', 'Aero 14 Ultrabook', 'Aero', 'laptops', 'laptop', 1349, 0, 4.7, 88, 8, 215, 'Display=14" 2.5K;CPU=Core i7;RAM=16 GB;Storage=512 GB SSD;Weight=1.2 kg'],
  ['aero-15-oled', 'Aero 15 OLED', 'Aero', 'laptops', 'laptop', 1699, 1899, 4.8, 64, 5, 260, 'Display=15.6" OLED;CPU=Core i9;RAM=32 GB;Storage=1 TB SSD;Weight=1.6 kg'],
  ['book-s', 'Book S Student', 'Kito', 'laptops', 'laptop', 599, 0, 4.2, 190, 25, 120, 'Display=15.6" FHD;CPU=Ryzen 5;RAM=8 GB;Storage=256 GB SSD;Weight=1.7 kg'],
  ['zenith-pro-16', 'Zenith Pro 16 Workstation', 'Zenith', 'laptops', 'laptop', 1999, 0, 4.9, 41, 3, 0, 'Display=16" 4K;CPU=Core i9;RAM=64 GB;Storage=2 TB SSD;GPU=RTX-class', 1],
  ['kito-air-13', 'Kito Air 13', 'Kito', 'laptops', 'laptop', 899, 999, 4.4, 117, 16, 190, 'Display=13.3" 2K;CPU=Core i5;RAM=16 GB;Storage=512 GB SSD;Weight=1.1 kg'],

  ['vista-43', 'Vista 43" Full HD TV', 'Vista', 'tv', 'tv', 349, 0, 4.2, 156, 20, 200, 'Screen=43" FHD;Smart=Yes;HDR=HDR10;HDMI=2 ports'],
  ['vista-55', 'Vista 55" 4K Smart TV', 'Vista', 'tv', 'tv', 749, 849, 4.6, 233, 12, 230, 'Screen=55" 4K UHD;Smart=Yes;HDR=HDR10;HDMI=3 ports;Refresh=60 Hz'],
  ['vista-65-qled', 'Vista 65" QLED', 'Vista', 'tv', 'tv', 1299, 0, 4.8, 97, 7, 250, 'Screen=65" QLED;Refresh=120 Hz;HDR=Dolby Vision;HDMI=4 ports;Voice=Yes'],
  ['orbit-75', 'Orbit 75" 4K TV', 'Orbit', 'tv', 'tv', 1599, 1799, 4.5, 58, 4, 330, 'Screen=75" 4K UHD;Smart=Yes;HDR=HDR10+;HDMI=3 ports;Refresh=120 Hz', 1],

  ['pulse-buds', 'Pulse Buds ANC', 'Pulse', 'audio', 'buds', 129, 159, 4.5, 402, 40, 160, 'Type=In-ear;ANC=Active;Battery=30 h with case;Water=IPX4;Port=USB-C'],
  ['pulse-max', 'Pulse Max Headphones', 'Pulse', 'audio', 'headphones', 249, 0, 4.7, 187, 15, 25, 'Type=Over-ear;ANC=Active;Battery=40 h;Audio=Hi-Res;Link=Multipoint'],
  ['beam-bar', 'Beam Soundbar 2.1', 'Beam', 'audio', 'soundbar', 199, 0, 4.3, 120, 22, 215, 'Channels=2.1;Power=120 W;Link=Bluetooth 5.3;HDMI=ARC'],
  ['beam-bar-pro', 'Beam Bar Pro Atmos', 'Beam', 'audio', 'soundbar', 449, 499, 4.7, 66, 8, 270, 'Channels=5.1.2;Power=360 W;Audio=Dolby Atmos;HDMI=eARC;Link=Wi-Fi', 1],
  ['orbit-mini', 'Orbit Speaker Mini', 'Orbit', 'audio', 'speaker', 59, 0, 4.2, 510, 60, 330, 'Power=10 W;Battery=12 h;Water=IPX7;Link=Bluetooth 5.3'],
  ['orbit-pro', 'Orbit Speaker Pro', 'Orbit', 'audio', 'speaker', 129, 0, 4.6, 205, 24, 15, 'Power=40 W;Battery=20 h;Water=IPX7;Link=Bluetooth 5.3;Stereo=Pairing'],

  ['clean-r5', 'Clean R5 Robot Vacuum', 'Clean', 'home', 'vacuum', 399, 479, 4.5, 173, 13, 170, 'Navigation=Lidar;Suction=4000 Pa;Runtime=180 min;Control=App'],
  ['clean-r9', 'Clean R9 Vacuum & Mop', 'Clean', 'home', 'vacuum', 649, 0, 4.7, 92, 6, 195, 'Navigation=Lidar+3D;Suction=6000 Pa;Runtime=240 min;Mop=Self-washing', 1],
  ['brew-one', 'Brew One Coffee Machine', 'Brew', 'home', 'coffee', 219, 0, 4.4, 144, 19, 30, 'Pump=15 bar;Frother=Milk;Tank=1.5 L;Cleaning=Auto'],
  ['brew-pro', 'Brew Pro Espresso', 'Brew', 'home', 'coffee', 349, 399, 4.6, 81, 9, 20, 'Pump=19 bar;Grinder=Built-in;Tank=2 L;Display=Touch'],
  ['fresh-450', 'Fresh 450L Fridge', 'Fresh', 'home', 'fridge', 899, 0, 4.5, 63, 5, 200, 'Volume=450 L;Cooling=No Frost;Motor=Inverter;Energy=A++'],

  ['play-5', 'Play 5 Console', 'Play', 'gaming', 'console', 549, 0, 4.9, 640, 11, 240, 'Storage=825 GB SSD;Output=4K 120 fps;Graphics=Ray tracing;Controllers=1'],
  ['play-5-digital', 'Play 5 Digital Edition', 'Play', 'gaming', 'console', 449, 499, 4.8, 310, 14, 255, 'Storage=825 GB SSD;Output=4K 120 fps;Disc=No;Controllers=1'],
  ['pad-pro', 'Pad Pro Controller', 'Play', 'gaming', 'gamepad', 79, 99, 4.6, 275, 35, 245, 'Link=Wireless;Haptics=Adaptive;Battery=40 h;Port=USB-C'],
  ['pad-elite', 'Pad Elite Controller', 'Play', 'gaming', 'gamepad', 149, 0, 4.8, 120, 10, 0, 'Link=Wireless;Paddles=Back x4;Battery=40 h;Trigger=Adjustable', 1],
]

export const products: Product[] = rows.map(([id, name, brand, cat, kind, price, old, rating, reviews, stock, hue, specs, isNew]) => ({
  id, name, brand, cat, kind, price, old: old || undefined, rating, reviews, stock, hue, isNew: !!isNew,
  specs: specs.split(';').map((s) => s.split('=') as [string, string]),
}))

export const brands = [...new Set(products.map((p) => p.brand))].sort()
export const money = (n: number) => `$${n.toLocaleString('en-US')}`
export const byId = (id: string) => products.find((x) => x.id === id)
export const discount = (p: Product) => (p.old ? Math.round((1 - p.price / p.old) * 100) : 0)
