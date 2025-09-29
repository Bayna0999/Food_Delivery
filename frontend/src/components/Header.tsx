'use client';

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from 'react';
import {
  ChevronRight,
  MapPin,
  ShoppingCart,
  User,
  X,
  Minus,
  Plus,
} from 'lucide-react';

import Logo from './logo/Logo';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from './ui/button';

type FoodType = {
  _id: string;
  foodname: string;
  image: string;
  context?: string;
  price: number;
  quantity: number;
};

const CURRENCY = (v: number) => `${v.toFixed(2)}₮`;
const parsePrice = (p: number | string) =>
  typeof p === 'number' ? p : parseFloat(String(p).replace(/[^\d.]/g, '')) || 0;

export default function Header() {
  const [foods, setFoods] = useState<FoodType[]>([]);
  const istrue = false;

  /* ---------------- LocalStorage helpers ---------------- */
  const loadFoods = useCallback(() => {
    try {
      const raw = localStorage.getItem('foods');
      const arr: FoodType[] = raw ? JSON.parse(raw) : [];
      setFoods(Array.isArray(arr) ? arr : []);
    } catch {
      setFoods([]);
    }
  }, []);

  // BroadcastChannel (cross-tab)
  const bcRef = useRef<BroadcastChannel | null>(null);

  const saveFoods = useCallback((next: FoodType[]) => {
    localStorage.setItem('foods', JSON.stringify(next));
    setFoods(next);
    // энэ таб доторх компонентуудад
    window.dispatchEvent(new Event('cartUpdated'));
    // бусад таб руу
    bcRef.current?.postMessage('updated');
  }, []);

  /* ---------------- Effects: initial + listeners ---------------- */
  useEffect(() => {
    if (typeof window === 'undefined') return;

    loadFoods();

    // 1) storage — өөр TAB дээр бичихэд
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'foods') loadFoods();
    };

    // 2) cartUpdated — энэ TAB дотор saveFoods дуудсаны дараа
    const onCartUpdated = () => loadFoods();

    // 3) Фокус эргэж орж ирэхэд sync (optional, найдвартай байдлын нэмэлт)
    const onFocus = () => loadFoods();
    const onVisibility = () => {
      if (document.visibilityState === 'visible') loadFoods();
    };

    window.addEventListener('storage', onStorage);
    window.addEventListener('cartUpdated', onCartUpdated);
    window.addEventListener('focus', onFocus);
    document.addEventListener('visibilitychange', onVisibility);

    // 4) BroadcastChannel — бусад табуудаас
    bcRef.current = new BroadcastChannel('foods');
    const onBC = () => loadFoods();
    bcRef.current.addEventListener('message', onBC);

    // 5) (optional) setItem/removeItem patch — хэрэв аппын өөр хэсэг эвент цацадаггүй бол
    const _setItem = localStorage.setItem.bind(localStorage);
    const _removeItem = localStorage.removeItem.bind(localStorage);
    localStorage.setItem = (k: string, v: string) => {
      _setItem(k, v);
      if (k === 'foods') {
        window.dispatchEvent(new Event('cartUpdated'));
        bcRef.current?.postMessage('updated');
      }
    };
    localStorage.removeItem = (k: string) => {
      _removeItem(k);
      if (k === 'foods') {
        window.dispatchEvent(new Event('cartUpdated'));
        bcRef.current?.postMessage('updated');
      }
    };

    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('cartUpdated', onCartUpdated);
      window.removeEventListener('focus', onFocus);
      document.removeEventListener('visibilitychange', onVisibility);
      bcRef.current?.removeEventListener('message', onBC);
      bcRef.current?.close();
      bcRef.current = null;
      // patch-аа буцааж сэргээнэ
      localStorage.setItem = _setItem;
      localStorage.removeItem = _removeItem;
    };
  }, [loadFoods]);

  /* ---------------- Qty handlers ---------------- */
  const inc = (id: string) => {
    const next = foods.map((f) =>
      f._id === id ? { ...f, quantity: f.quantity + 1 } : f
    );
    saveFoods(next); // <-- saveFoods эвентүүдийг цацаад, бусад табуудад ч дамжуулна
  };

  const dec = (id: string) => {
    const next = foods.map((f) =>
      f._id === id ? { ...f, quantity: Math.max(1, f.quantity - 1) } : f
    );
    saveFoods(next);
  };

  const removeItem = (id: string) => {
    const next = foods.filter((f) => f._id !== id);
    saveFoods(next);
  };

  /* ---------------- Totals ---------------- */
  const itemsTotal = useMemo(
    () => foods.reduce((sum, f) => sum + parsePrice(f.price) * f.quantity, 0),
    [foods]
  );
  const shipping = foods.length > 0 ? 5000 : 0;
  const grandTotal = itemsTotal + shipping;

  /* ---------------- Checkout ---------------- */
  const handleCheckOut = async () => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/foodOrder`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        totalPrice: String(grandTotal),
      }),
    })
      .then((res) => res.json())
      .then(() => {
        alert('Захиалга амжилттай.');
      });
  };

  return (
    <div className="flex w-screen h-[68px] bg-black justify-center items-center fixed inset-x-0 top-0 z-50">
      <div className="flex w-full h-full justify-between pl-[88px] pr-[88px]">
        <Logo />

        {istrue ? (
          <div className="flex justify-center items-center gap-4">
            <button className="w-[75px] h-[36px] bg-white flex justify-center items-center rounded-2xl text-black text-[14px]">
              Sign up
            </button>
            <button className="w-[75px] h-[36px] bg-red-600 flex justify-center items-center rounded-2xl text-white text-[14px]">
              Log in
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-[13px]">
            {/* Address pill */}
            <div className="flex justify-center items-center w-[251px] h-[36px] gap-1 bg-white rounded-3xl px-3">
              <Dialog>
                <DialogTrigger className="flex items-center gap-[6px]">
                  <MapPin className="size-4" />
                  <DialogTitle className="text-[12px] text-[#EF4444]">
                    Delivery address:
                  </DialogTitle>
                  <p className="text-[12px] text-[#71717A]">Add Location</p>
                  <ChevronRight className="size-4" />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit address</DialogTitle>
                    <DialogDescription />
                  </DialogHeader>
                  <textarea
                    placeholder="Building, entrance, apartment..."
                    className="w-[432px] h-[110px] border rounded-md p-2"
                  />
                  <div className="flex justify-end gap-3">
                    <Button variant="secondary">Close</Button>
                    <Button>Save changes</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Cart sheet */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="size-[36px] bg-white rounded-full relative grid place-items-center">
                  <ShoppingCart className="size-[16px]" />
                  {foods.length > 0 && (
                    <span className="absolute -top-1 -right-1 size-[20px] bg-red-600 rounded-full text-white text-[12px] grid place-items-center">
                      {foods.length}
                    </span>
                  )}
                </button>
              </SheetTrigger>

              {/* DARK sheet + zero border */}
              <SheetContent
                side="right"
                className="min-w-[536px] bg-[#18181b] text-white border-0 p-0">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2 mx-8 mt-8">
                    <ShoppingCart className="size-6 text-white" />
                    <span className="text-[20px] text-white">Order detail</span>
                  </SheetTitle>
                  <SheetDescription />
                </SheetHeader>

                {/* Tabs */}
                <div className="px-6">
                  <Tabs defaultValue="Cart" className="w-full">
                    <TabsList className="bg-white rounded-full w-full h-[44px] flex items-center justify-center">
                      <TabsTrigger
                        value="Cart"
                        className="rounded-full data-[state=active]:bg-[#EF4444] data-[state=active]:text-white text-black h-9">
                        Cart
                      </TabsTrigger>
                      <TabsTrigger
                        value="Order"
                        className="rounded-full data-[state=active]:bg-[#EF4444] data-[state=active]:text-white text-black h-9">
                        Order
                      </TabsTrigger>
                    </TabsList>

                    {/* CART CARD */}
                    <TabsContent value="Cart" className="mt-4">
                      <div className="bg-white rounded-3xl text-black px-6 pt-6 pb-4">
                        <p className="text-[20px] font-semibold mb-4">
                          My cart
                        </p>

                        <div className="max-h-[360px] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none]">
                          <style>{`.hide-scroll::-webkit-scrollbar{display:none}`}</style>
                          <div className="hide-scroll">
                            {foods.map((f, i) => {
                              const price = parsePrice(f.price * f.quantity);
                              const isLast = i === foods.length - 1;

                              return (
                                <div key={f._id} className="py-3">
                                  <div className="flex gap-4">
                                    <img
                                      alt={f.foodname}
                                      src={f.image}
                                      className="w-[96px] h-[96px] object-cover rounded-xl"
                                    />
                                    <div className="flex-1">
                                      <div className="flex justify-between gap-2">
                                        <p className="text-[#EF4444] font-semibold">
                                          {f.foodname}
                                        </p>
                                        <button
                                          onClick={() => removeItem(f._id)}
                                          className="size-7 rounded-full border border-[#e5e7eb] grid place-items-center hover:bg-[#f4f4f5]"
                                          aria-label="remove">
                                          <X className="size-4" />
                                        </button>
                                      </div>

                                      <p className="text-sm text-[#6b7280] line-clamp-2">
                                        {f.context ||
                                          'Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.'}
                                      </p>

                                      <div className="mt-3 flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                          <button
                                            onClick={() => dec(f._id)}
                                            className="size-7 rounded-full border grid place-items-center hover:bg-[#f4f4f5]"
                                            aria-label="decrease">
                                            <Minus className="size-4" />
                                          </button>
                                          <span className="min-w-[12px] text-center">
                                            {f.quantity}
                                          </span>
                                          <button
                                            onClick={() => inc(f._id)}
                                            className="size-7 rounded-full border grid place-items-center hover:bg-[#f4f4f5]"
                                            aria-label="increase">
                                            <Plus className="size-4" />
                                          </button>
                                        </div>

                                        <span className="font-semibold">
                                          {CURRENCY(price)}
                                        </span>
                                      </div>
                                    </div>
                                  </div>

                                  {!isLast && (
                                    <div className="mt-3 border-t-2 border-dashed border-[#E4E4E7]" />
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        <DialogClose className="w-full h-11 rounded-full bg-white text-[#EF4444] border border-[#EF4444]">
                          Add food
                        </DialogClose>
                      </div>
                    </TabsContent>

                    {/* ORDER HISTORY TAB */}
                    <TabsContent value="Order" className="mt-4">
                      <div className="bg-white rounded-3xl p-6 text-black">
                        <p className="text-sm text-[#71717A]">No orders yet.</p>
                      </div>
                    </TabsContent>
                  </Tabs>

                  {/* PAYMENT CARD */}
                  <div className="bg-white rounded-3xl mt-5 p-6 text-black">
                    <p className="text-[18px] font-semibold mb-4">
                      Payment info
                    </p>
                    <div className="flex justify-between text-[16px]">
                      <span className="text-[#71717A]">Items</span>
                      <span className="font-medium">
                        {CURRENCY(itemsTotal)}
                      </span>
                    </div>
                    <div className="flex justify-between text-[16px] mt-2">
                      <span className="text-[#71717A]">Shipping</span>
                      <span className="font-medium">{CURRENCY(shipping)}</span>
                    </div>
                    <div className="my-3 border-t-2 border-dashed border-[#E4E4E7]" />
                    <div className="flex justify-between text-[16px]">
                      <span className="text-[#71717A]">Total</span>
                      <span className="font-semibold">
                        {CURRENCY(grandTotal)}
                      </span>
                    </div>
                    <Button
                      onClick={handleCheckOut}
                      className="mt-4 w-full h-11 rounded-full bg-[#EF4444] hover:bg-[#dc2626]">
                      Checkout
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* profile */}
            <div className="size-[36px] bg-red-600 grid place-items-center rounded-full">
              <User className="size-4 text-white" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
