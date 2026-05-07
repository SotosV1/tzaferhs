export type Product = {
  id: string;
  name: string;
  category: "Φρούτα" | "Λαχανικά" | "Χόρτα & Μυρωδικά";
  price: number; // €/kg or €/τεμ
  unit: "κιλό" | "τεμάχιο" | "ματσάκι";
  emoji: string;
  icon?: "plum" | "fig" | "pomegranate" | "bellPepper";
  description: string;
};

export const products: Product[] = [
  { id: "tomato", name: "Ντομάτες", category: "Λαχανικά", price: 1.8, unit: "κιλό", emoji: "🍅", description: "Φρέσκιες ντομάτες από τοπικούς παραγωγούς." },
  { id: "cucumber", name: "Αγγούρια", category: "Λαχανικά", price: 1.2, unit: "κιλό", emoji: "🥒", description: "Τραγανά, δροσερά αγγούρια." },
  { id: "pepper", name: "Πιπεριές", category: "Λαχανικά", price: 2.5, unit: "κιλό", emoji: "🫑", description: "Κόκκινες & πράσινες πιπεριές." },
  { id: "red-bell-pepper", name: "Κόκκινη Πιπεριά", category: "Λαχανικά", price: 2.8, unit: "κιλό", emoji: "", icon: "bellPepper", description: "Γλυκιά κόκκινη πιπεριά Φλωρίνης." },
  { id: "potato", name: "Πατάτες", category: "Λαχανικά", price: 0.9, unit: "κιλό", emoji: "🥔", description: "Πατάτες αμυγδαλωτές." },
  { id: "onion", name: "Κρεμμύδια", category: "Λαχανικά", price: 0.8, unit: "κιλό", emoji: "🧅", description: "Ξανθά κρεμμύδια." },
  { id: "carrot", name: "Καρότα", category: "Λαχανικά", price: 1.1, unit: "κιλό", emoji: "🥕", description: "Φρέσκα καρότα." },

  { id: "orange", name: "Πορτοκάλια", category: "Φρούτα", price: 1.0, unit: "κιλό", emoji: "🍊", description: "Πορτοκάλια χυμού & επιτραπέζια." },
  { id: "apple", name: "Μήλα", category: "Φρούτα", price: 1.6, unit: "κιλό", emoji: "🍎", description: "Μήλα Πηλίου, τραγανά και ζουμερά." },
  { id: "green-apple", name: "Πράσινα Μήλα", category: "Φρούτα", price: 1.7, unit: "κιλό", emoji: "🍏", description: "Δροσερά μήλα Granny Smith." },
  { id: "banana", name: "Μπανάνες", category: "Φρούτα", price: 1.9, unit: "κιλό", emoji: "🍌", description: "Ώριμες μπανάνες." },
  { id: "grape", name: "Σταφύλια", category: "Φρούτα", price: 2.8, unit: "κιλό", emoji: "🍇", description: "Σταφύλια εποχής." },
  { id: "watermelon", name: "Καρπούζι", category: "Φρούτα", price: 0.6, unit: "κιλό", emoji: "🍉", description: "Γλυκό καρπούζι." },
  { id: "melon", name: "Πεπόνι", category: "Φρούτα", price: 1.4, unit: "κιλό", emoji: "🍈", description: "Αρωματικό πεπόνι." },
  { id: "lemon", name: "Λεμόνια", category: "Φρούτα", price: 1.5, unit: "κιλό", emoji: "🍋", description: "Αρωματικά λεμόνια." },
  { id: "strawberry", name: "Φράουλες", category: "Φρούτα", price: 3.5, unit: "κιλό", emoji: "🍓", description: "Γλυκές φράουλες εποχής." },
  { id: "cherry", name: "Κεράσια", category: "Φρούτα", price: 4.5, unit: "κιλό", emoji: "🍒", description: "Κεράσια Έδεσσας." },
  { id: "peach", name: "Ροδάκινα", category: "Φρούτα", price: 1.8, unit: "κιλό", emoji: "🍑", description: "Ζουμερά ροδάκινα Πέλλας." },
  { id: "pear", name: "Αχλάδια", category: "Φρούτα", price: 1.7, unit: "κιλό", emoji: "🍐", description: "Μυρωδάτα αχλάδια κρυστάλλια." },
  { id: "apricot", name: "Βερίκοκα", category: "Φρούτα", price: 2.4, unit: "κιλό", emoji: "🍑", description: "Γλυκά βερίκοκα." },
  { id: "plum", name: "Δαμάσκηνα", category: "Φρούτα", price: 2.2, unit: "κιλό", emoji: "", icon: "plum", description: "Δροσερά δαμάσκηνα." },
  { id: "fig", name: "Σύκα", category: "Φρούτα", price: 3.0, unit: "κιλό", emoji: "", icon: "fig", description: "Φρέσκα σύκα." },
  { id: "pomegranate", name: "Ρόδια", category: "Φρούτα", price: 2.5, unit: "κιλό", emoji: "", icon: "pomegranate", description: "Ρόδια γεμάτα αντιοξειδωτικά." },
  { id: "kiwi", name: "Ακτινίδια", category: "Φρούτα", price: 2.6, unit: "κιλό", emoji: "🥝", description: "Ακτινίδια Πιερίας." },
  { id: "pineapple", name: "Ανανάς", category: "Φρούτα", price: 2.8, unit: "τεμάχιο", emoji: "🍍", description: "Τροπικός ανανάς." },
  
  { id: "mandarin", name: "Μανταρίνια", category: "Φρούτα", price: 1.4, unit: "κιλό", emoji: "🍊", description: "Αρωματικά μανταρίνια Χίου." },
  
  { id: "avocado", name: "Αβοκάντο", category: "Φρούτα", price: 1.8, unit: "τεμάχιο", emoji: "🥑", description: "Κρητικά αβοκάντο." },
  

  { id: "parsley", name: "Μαϊντανός", category: "Χόρτα & Μυρωδικά", price: 0.7, unit: "ματσάκι", emoji: "🌿", description: "Φρέσκος μαϊντανός." },
  { id: "spinach", name: "Σπανάκι", category: "Χόρτα & Μυρωδικά", price: 1.8, unit: "κιλό", emoji: "🥬", description: "Τρυφερό σπανάκι." },
  { id: "dill", name: "Άνηθος", category: "Χόρτα & Μυρωδικά", price: 0.7, unit: "ματσάκι", emoji: "🌱", description: "Αρωματικός άνηθος." },
];

export const categories = ["Όλα", "Φρούτα", "Λαχανικά", "Χόρτα & Μυρωδικά"] as const;
