export type Product = { id: string; name: string; cat: string; price: number; old?: number; icon: string; specs: string[] }

export const categories = [
  { id: 'phones', name: 'Phones', icon: '📱' },
  { id: 'laptops', name: 'Laptops', icon: '💻' },
  { id: 'tv', name: 'TV & Video', icon: '📺' },
  { id: 'audio', name: 'Audio', icon: '🎧' },
  { id: 'home', name: 'Home Appliances', icon: '🧺' },
  { id: 'gaming', name: 'Gaming', icon: '🎮' },
]

const p = (id: string, name: string, cat: string, price: number, icon: string, specs: string[], old?: number): Product => ({ id, name, cat, price, old, icon, specs })

export const products: Product[] = [
  p('nova-x1', 'Nova X1 128GB', 'phones', 899, '📱', ['6.1" OLED', '128 GB', '48 MP camera', '5G'], 999),
  p('nova-x1-pro', 'Nova X1 Pro 256GB', 'phones', 1199, '📱', ['6.7" OLED 120Hz', '256 GB', '50 MP triple camera', '5G']),
  p('pixa-9', 'Pixa 9 Lite', 'phones', 329, '📱', ['6.5" LCD', '64 GB', '13 MP camera', '4G'], 379),
  p('aero-14', 'Aero 14 Ultrabook', 'laptops', 1349, '💻', ['14" 2.5K', 'Core i7', '16 GB RAM', '512 GB SSD']),
  p('aero-15-oled', 'Aero 15 OLED', 'laptops', 1699, '💻', ['15.6" OLED', 'Core i9', '32 GB RAM', '1 TB SSD'], 1899),
  p('book-s', 'Book S Student', 'laptops', 599, '💻', ['15.6" FHD', 'Ryzen 5', '8 GB RAM', '256 GB SSD']),
  p('vista-55', 'Vista 55" 4K Smart TV', 'tv', 749, '📺', ['55" 4K UHD', 'HDR10', 'Smart OS', '3 x HDMI'], 849),
  p('vista-65-qled', 'Vista 65" QLED', 'tv', 1299, '📺', ['65" QLED', '120 Hz', 'Dolby Vision', 'Voice control']),
  p('beam-bar', 'Beam Soundbar 2.1', 'audio', 199, '🔊', ['2.1 channel', 'Bluetooth 5.3', 'HDMI ARC', '120 W']),
  p('pulse-buds', 'Pulse Buds ANC', 'audio', 129, '🎧', ['Active noise cancelling', '30 h battery', 'IPX4', 'USB-C'], 159),
  p('pulse-max', 'Pulse Max Headphones', 'audio', 249, '🎧', ['Over-ear', '40 h battery', 'Hi-Res audio', 'Multipoint']),
  p('clean-r5', 'Clean R5 Robot Vacuum', 'home', 399, '🧹', ['Lidar mapping', '4000 Pa', '180 min runtime', 'App control'], 479),
  p('brew-one', 'Brew One Coffee Machine', 'home', 219, '☕', ['15 bar pump', 'Milk frother', '1.5 L tank', 'Auto-clean']),
  p('fresh-fridge', 'Fresh 450L Fridge', 'home', 899, '🧊', ['450 L', 'No Frost', 'Inverter', 'A++']),
  p('play-5', 'Play Station Console', 'gaming', 549, '🎮', ['825 GB SSD', '4K 120 fps', 'Ray tracing', '1 controller']),
  p('pad-pro', 'Pad Pro Controller', 'gaming', 79, '🕹️', ['Wireless', 'Haptic feedback', '40 h battery', 'USB-C'], 99),
]

export const money = (n: number) => `$${n.toLocaleString('en-US')}`
export const byId = (id: string) => products.find((x) => x.id === id)
