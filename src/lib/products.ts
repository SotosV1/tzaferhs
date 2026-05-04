export type Product = {
  id: string;
  name: string;
  category: "Φρούτα" | "Λαχανικά" | "Χόρτα & Μυρωδικά";
  price: number; // €/kg or €/τεμ
  unit: "κιλό" | "τεμάχιο" | "ματσάκι";
  emoji: string;
  description: string;
};

export const products: Product[] = [
  { id: "tomato", name: "Ντομάτες", category: "Λαχανικά", price: 1.8, unit: "κιλό", emoji: "🍅", description: "Φρέσκιες ντομάτες από τοπικούς παραγωγούς." },
  { id: "cucumber", name: "Αγγούρια", category: "Λαχανικά", price: 1.2, unit: "κιλό", emoji: "🥒", description: "Τραγανά, δροσερά αγγούρια." },
  { id: "pepper", name: "Πιπεριές", category: "Λαχανικά", price: 2.5, unit: "κιλό", emoji: "🫑", description: "Κόκκινες & πράσινες πιπεριές." },
  { id: "potato", name: "Πατάτες", category: "Λαχανικά", price: 0.9, unit: "κιλό", emoji: "🥔", description: "Πατάτες αμυγδαλωτές." },
  { id: "onion", name: "Κρεμμύδια", category: "Λαχανικά", price: 0.8, unit: "κιλό", emoji: "🧅", description: "Ξανθά κρεμμύδια." },
  { id: "carrot", name: "Καρότα", category: "Λαχανικά", price: 1.1, unit: "κιλό", emoji: "🥕", description: "Φρέσκα καρότα." },

  { id: "orange", name: "Πορτοκάλια", category: "Φρούτα", price: 1.0, unit: "κιλό", emoji: "🍊", description: "Πορτοκάλια χυμού & επιτραπέζια." },
  { id: "apple", name: "Μήλα", category: "Φρούτα", price: 1.6, unit: "κιλό", emoji: "🍎", description: "Μήλα Πηλίου." },
  { id: "banana", name: "Μπανάνες", category: "Φρούτα", price: 1.9, unit: "κιλό", emoji: "🍌", description: "Ώριμες μπανάνες." },
  { id: "grape", name: "Σταφύλια", category: "Φρούτα", price: 2.8, unit: "κιλό", emoji: "🍇", description: "Σταφύλια εποχής." },
  { id: "watermelon", name: "Καρπούζι", category: "Φρούτα", price: 0.6, unit: "κιλό", emoji: "🍉", description: "Γλυκό καρπούζι." },
  { id: "lemon", name: "Λεμόνια", category: "Φρούτα", price: 1.5, unit: "κιλό", emoji: "🍋", description: "Αρωματικά λεμόνια." },

  { id: "parsley", name: "Μαϊντανός", category: "Χόρτα & Μυρωδικά", price: 0.7, unit: "ματσάκι", emoji: "🌿", description: "Φρέσκος μαϊντανός." },
  { id: "spinach", name: "Σπανάκι", category: "Χόρτα & Μυρωδικά", price: 1.8, unit: "κιλό", emoji: "🥬", description: "Τρυφερό σπανάκι." },
  { id: "dill", name: "Άνηθος", category: "Χόρτα & Μυρωδικά", price: 0.7, unit: "ματσάκι", emoji: "🌱", description: "Αρωματικός άνηθος." },
];

export const categories = ["Όλα", "Φρούτα", "Λαχανικά", "Χόρτα & Μυρωδικά"] as const;
