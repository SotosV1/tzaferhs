export type ProductIcon =
  | "apple" | "apricot" | "avocado" | "banana" | "bellPepper" | "carrot" | "cherry"
  | "cucumber" | "dill" | "fig" | "grapes" | "greenApple" | "kiwi" | "lemon"
  | "mandarin" | "melon" | "onion" | "orange" | "parsley" | "peach" | "pear"
  | "pepper" | "pineapple" | "plum" | "pomegranate" | "potato" | "spinach"
  | "strawberry" | "tomato" | "watermelon";

export type Product = {
  id: string;
  name: string;
  category: "Φρούτα" | "Λαχανικά" | "Χόρτα & Μυρωδικά";
  price: number;
  unit: "κιλό" | "τεμάχιο" | "ματσάκι";
  emoji: string;
  icon?: ProductIcon;
  description: string;
};

export const products: Product[] = [
  { id: "tomato", name: "Ντομάτες", category: "Λαχανικά", price: 1.8, unit: "κιλό", emoji: "", icon: "tomato", description: "Φρέσκιες ντομάτες από τοπικούς παραγωγούς." },
  { id: "cucumber", name: "Αγγούρια", category: "Λαχανικά", price: 1.2, unit: "κιλό", emoji: "", icon: "cucumber", description: "Τραγανά, δροσερά αγγούρια." },
  { id: "pepper", name: "Πιπεριές", category: "Λαχανικά", price: 2.5, unit: "κιλό", emoji: "", icon: "pepper", description: "Κόκκινες & πράσινες πιπεριές." },
  { id: "red-bell-pepper", name: "Κόκκινη Πιπεριά", category: "Λαχανικά", price: 2.8, unit: "κιλό", emoji: "", icon: "bellPepper", description: "Γλυκιά κόκκινη πιπεριά Φλωρίνης." },
  { id: "potato", name: "Πατάτες", category: "Λαχανικά", price: 0.9, unit: "κιλό", emoji: "", icon: "potato", description: "Πατάτες αμυγδαλωτές." },
  { id: "onion", name: "Κρεμμύδια", category: "Λαχανικά", price: 0.8, unit: "κιλό", emoji: "", icon: "onion", description: "Ξανθά κρεμμύδια." },
  { id: "carrot", name: "Καρότα", category: "Λαχανικά", price: 1.1, unit: "κιλό", emoji: "", icon: "carrot", description: "Φρέσκα καρότα." },

  { id: "orange", name: "Πορτοκάλια", category: "Φρούτα", price: 1.0, unit: "κιλό", emoji: "", icon: "orange", description: "Πορτοκάλια χυμού & επιτραπέζια." },
  { id: "apple", name: "Μήλα", category: "Φρούτα", price: 1.6, unit: "κιλό", emoji: "", icon: "apple", description: "Μήλα Πηλίου, τραγανά και ζουμερά." },
  { id: "green-apple", name: "Πράσινα Μήλα", category: "Φρούτα", price: 1.7, unit: "κιλό", emoji: "", icon: "greenApple", description: "Δροσερά μήλα Granny Smith." },
  { id: "banana", name: "Μπανάνες", category: "Φρούτα", price: 1.9, unit: "κιλό", emoji: "", icon: "banana", description: "Ώριμες μπανάνες." },
  { id: "grape", name: "Σταφύλια", category: "Φρούτα", price: 2.8, unit: "κιλό", emoji: "", icon: "grapes", description: "Σταφύλια εποχής, μαύρα και πράσινα." },
  { id: "watermelon", name: "Καρπούζι", category: "Φρούτα", price: 0.6, unit: "κιλό", emoji: "", icon: "watermelon", description: "Γλυκό καρπούζι." },
  { id: "melon", name: "Πεπόνι", category: "Φρούτα", price: 1.4, unit: "κιλό", emoji: "", icon: "melon", description: "Αρωματικό πεπόνι." },
  { id: "lemon", name: "Λεμόνια", category: "Φρούτα", price: 1.5, unit: "κιλό", emoji: "", icon: "lemon", description: "Αρωματικά λεμόνια." },
  { id: "strawberry", name: "Φράουλες", category: "Φρούτα", price: 3.5, unit: "κιλό", emoji: "", icon: "strawberry", description: "Γλυκές φράουλες εποχής." },
  { id: "cherry", name: "Κεράσια", category: "Φρούτα", price: 4.5, unit: "κιλό", emoji: "", icon: "cherry", description: "Κεράσια Έδεσσας." },
  { id: "peach", name: "Ροδάκινα", category: "Φρούτα", price: 1.8, unit: "κιλό", emoji: "", icon: "peach", description: "Ζουμερά ροδάκινα Πέλλας." },
  { id: "pear", name: "Αχλάδια", category: "Φρούτα", price: 1.7, unit: "κιλό", emoji: "", icon: "pear", description: "Μυρωδάτα αχλάδια κρυστάλλια." },
  { id: "apricot", name: "Βερίκοκα", category: "Φρούτα", price: 2.4, unit: "κιλό", emoji: "", icon: "apricot", description: "Γλυκά βερίκοκα." },
  { id: "plum", name: "Δαμάσκηνα", category: "Φρούτα", price: 2.2, unit: "κιλό", emoji: "", icon: "plum", description: "Δροσερά δαμάσκηνα." },
  { id: "fig", name: "Σύκα", category: "Φρούτα", price: 3.0, unit: "κιλό", emoji: "", icon: "fig", description: "Φρέσκα σύκα." },
  { id: "pomegranate", name: "Ρόδια", category: "Φρούτα", price: 2.5, unit: "κιλό", emoji: "", icon: "pomegranate", description: "Ρόδια γεμάτα αντιοξειδωτικά." },
  { id: "kiwi", name: "Ακτινίδια", category: "Φρούτα", price: 2.6, unit: "κιλό", emoji: "", icon: "kiwi", description: "Ακτινίδια Πιερίας." },
  { id: "pineapple", name: "Ανανάς", category: "Φρούτα", price: 2.8, unit: "τεμάχιο", emoji: "", icon: "pineapple", description: "Τροπικός ανανάς." },
  { id: "mandarin", name: "Μανταρίνια", category: "Φρούτα", price: 1.4, unit: "κιλό", emoji: "", icon: "mandarin", description: "Αρωματικά μανταρίνια Χίου." },
  { id: "avocado", name: "Αβοκάντο", category: "Φρούτα", price: 1.8, unit: "τεμάχιο", emoji: "", icon: "avocado", description: "Κρητικά αβοκάντο." },

  { id: "parsley", name: "Μαϊντανός", category: "Χόρτα & Μυρωδικά", price: 0.7, unit: "ματσάκι", emoji: "", icon: "parsley", description: "Φρέσκος μαϊντανός." },
  { id: "spinach", name: "Σπανάκι", category: "Χόρτα & Μυρωδικά", price: 1.8, unit: "κιλό", emoji: "", icon: "spinach", description: "Τρυφερό σπανάκι." },
  { id: "dill", name: "Άνηθος", category: "Χόρτα & Μυρωδικά", price: 0.7, unit: "ματσάκι", emoji: "", icon: "dill", description: "Αρωματικός άνηθος." },
];

export const categories = ["Όλα", "Φρούτα", "Λαχανικά", "Χόρτα & Μυρωδικά"] as const;
