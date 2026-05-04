import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { products, type Product } from "./products";

export type CartItem = { id: string; qty: number };

type CartCtx = {
  items: CartItem[];
  add: (id: string, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  total: number;
  detailed: Array<CartItem & { product: Product; subtotal: number }>;
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = "tzaferis-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? window.localStorage.getItem(KEY) : null;
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const add: CartCtx["add"] = (id, qty = 1) =>
    setItems((s) => {
      const ex = s.find((i) => i.id === id);
      if (ex) return s.map((i) => (i.id === id ? { ...i, qty: i.qty + qty } : i));
      return [...s, { id, qty }];
    });

  const remove: CartCtx["remove"] = (id) => setItems((s) => s.filter((i) => i.id !== id));
  const setQty: CartCtx["setQty"] = (id, qty) =>
    setItems((s) => (qty <= 0 ? s.filter((i) => i.id !== id) : s.map((i) => (i.id === id ? { ...i, qty } : i))));
  const clear = () => setItems([]);

  const detailed = items
    .map((i) => {
      const product = products.find((p) => p.id === i.id);
      if (!product) return null;
      return { ...i, product, subtotal: product.price * i.qty };
    })
    .filter(Boolean) as CartCtx["detailed"];

  const count = items.reduce((a, i) => a + i.qty, 0);
  const total = detailed.reduce((a, i) => a + i.subtotal, 0);

  return <Ctx.Provider value={{ items, add, remove, setQty, clear, count, total, detailed }}>{children}</Ctx.Provider>;
}

export function useCart() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useCart must be used within CartProvider");
  return v;
}
