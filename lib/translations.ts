export type LanguageCode = "sq" | "en" | "mk";

export type MenuCategory = {
  title: string;
  icon: string;
  items: Array<{ name: string; price: string }>;
};

export type TranslationSchema = {
  hero: {
    badge: string;
    title: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  menu: {
    label: string;
    heading: string;
    description: string;
    categories: MenuCategory[];
  };
  general: {
    phoneNumber: string;
  };
  placeholders: {
    imageTitle: string;
    imageSubtitle: string;
  };
};

export const translations: Record<LanguageCode, TranslationSchema> = {
  sq: {
    hero: {
      badge: "Connect Prime Lounge Bar",
      title: "Përjeto Lidhjen Prime.",
      description:
        "Atmosferë luksoze lounge në zemër të Maqedonisë së Veriut. Skanoni kodin, eksploroni menunë dhe shijoni përzgjedhje të kuruara për çdo moment.",
      ctaPrimary: "Shiko Menunë",
      ctaSecondary: "+389 77 550 054",
    },
    menu: {
      label: "Menu",
      heading: "E kuruar për Lidhjen Prime",
      description:
        "Eksploroni përzgjedhjen tonë të mëngjeseve klasike, sanduiçeve të firmës, picave elegante dhe specialiteteve lounge të përgatitura me kujdes.",
      categories: [
        {
          title: "Mëngjesi",
          icon: "🥐",
          items: [
            { name: "Supë Pule", price: "120 den" },
            { name: "Petulla të Skuqura (Llokuma)", price: "130 den" },
            { name: "Mëngjes Shtëpie", price: "150 den" },
          ],
        },
        {
          title: "Sanduiçe",
          icon: "🥪",
          items: [
            { name: "Sanduiç Pice", price: "150 den" },
            { name: "Burger", price: "160 den" },
            { name: "Sanduiç Ton", price: "170 den" },
            { name: "Sanduiç Biftek", price: "170 den" },
            { name: "Sanduiç Special", price: "170 den" },
            { name: "Burger Special", price: "170 den" },
          ],
        },
        {
          title: "Pica",
          icon: "🍕",
          items: [
            { name: "Pica Margherita", price: "180 den" },
            { name: "Pica me Salami", price: "200 den" },
            { name: "Pica me Proshutë", price: "230 den" },
            { name: "Pica Diavola", price: "230 den" },
            { name: "Pica me Ton", price: "240 den" },
            { name: "Pica e Shtëpisë", price: "280 den" },
          ],
        },
        {
          title: "Burger Dysh",
          icon: "🍔",
          items: [
            { name: "Burger Amerikan", price: "180 den" },
            { name: "Burger Pule", price: "200 den" },
          ],
        },
        {
          title: "Pasta",
          icon: "🍝",
          items: [
            { name: "Pasta me Ton", price: "190 den" },
            { name: "Pasta me Biftek", price: "200 den" },
            { name: "Pasta Bolonjeze", price: "210 den" },
          ],
        },
        {
          title: "Zgarë",
          icon: "🔥",
          items: [
            { name: "Biftek Klasik", price: "240 den" },
            { name: "Gishtërinj Pule", price: "270 den" },
            { name: "Biftek i Shtëpisë", price: "290 den" },
            { name: "Burger Sharri", price: "300 den" },
          ],
        },
        {
          title: "Sallata",
          icon: "🥗",
          items: [
            { name: "Sallatë Shope", price: "120 den" },
            { name: "Sallatë Greke", price: "120 den" },
            { name: "Sallatë Ton", price: "140 den" },
            { name: "Sallatë Cezar", price: "190 den" },
          ],
        },
        {
          title: "Shtesa",
          icon: "🍟",
          items: [
            { name: "Keçap / Majonezë", price: "30 den" },
            { name: "Bukë", price: "30 den" },
            { name: "Djathë i Pjekur (Furnarinë)", price: "80 den" },
            { name: "Patate të Skuqura", price: "120 den" },
            { name: "Patate me Djathë", price: "150 den" },
          ],
        },
      ],
    },
    general: {
      phoneNumber: "+389 77 550 054",
    },
    placeholders: {
      imageTitle: "Vendos Foto",
      imageSubtitle: "Zëvendëso me fotografinë e pjatës",
    },
  },
  en: {
    hero: {
      badge: "Connect Prime Lounge Bar",
      title: "Experience the Prime Connection.",
      description:
        "A luxurious lounge atmosphere in the heart of North Macedonia. Scan the code, explore the menu, and indulge in curated flavours elevating every moment.",
      ctaPrimary: "View Menu",
      ctaSecondary: "+389 77 550 054",
    },
    menu: {
      label: "Menu",
      heading: "Curated for the Prime Connection",
      description:
        "Explore our crafted selection of breakfast classics, signature sandwiches, elevated pizzas, and lounge favourites prepared with care.",
      categories: [
        {
          title: "Breakfast",
          icon: "🥐",
          items: [
            { name: "Chicken Soup", price: "120 den" },
            { name: "Fried Dough (Llokuma)", price: "130 den" },
            { name: "Homemade Breakfast", price: "150 den" },
          ],
        },
        {
          title: "Sandwiches",
          icon: "🥪",
          items: [
            { name: "Pizza Sandwich", price: "150 den" },
            { name: "Burger", price: "160 den" },
            { name: "Tuna Sandwich", price: "170 den" },
            { name: "Steak Sandwich", price: "170 den" },
            { name: "Special Sandwich", price: "170 den" },
            { name: "Special Burger", price: "170 den" },
          ],
        },
        {
          title: "Pizza",
          icon: "🍕",
          items: [
            { name: "Margherita Pizza", price: "180 den" },
            { name: "Salami Pizza", price: "200 den" },
            { name: "Ham Pizza", price: "230 den" },
            { name: "Diavola Pizza", price: "230 den" },
            { name: "Tuna Pizza", price: "240 den" },
            { name: "House Pizza", price: "280 den" },
          ],
        },
        {
          title: "Double Burgers",
          icon: "🍔",
          items: [
            { name: "American Burger", price: "180 den" },
            { name: "Chicken Burger", price: "200 den" },
          ],
        },
        {
          title: "Pasta",
          icon: "🍝",
          items: [
            { name: "Tuna Pasta", price: "190 den" },
            { name: "Steak Pasta", price: "200 den" },
            { name: "Bolognese Pasta", price: "210 den" },
          ],
        },
        {
          title: "Grill",
          icon: "🔥",
          items: [
            { name: "Classic Steak", price: "240 den" },
            { name: "Chicken Fingers", price: "270 den" },
            { name: "House Steak", price: "290 den" },
            { name: "Sharri Burger", price: "300 den" },
          ],
        },
        {
          title: "Salads",
          icon: "🥗",
          items: [
            { name: "Shopska Salad", price: "120 den" },
            { name: "Greek Salad", price: "120 den" },
            { name: "Tuna Salad", price: "140 den" },
            { name: "Caesar Salad", price: "190 den" },
          ],
        },
        {
          title: "Extras",
          icon: "🍟",
          items: [
            { name: "Ketchup / Mayonnaise", price: "30 den" },
            { name: "Bread", price: "30 den" },
            { name: "Baked Cheese (Furnarinë)", price: "80 den" },
            { name: "French Fries", price: "120 den" },
            { name: "French Fries with Cheese", price: "150 den" },
          ],
        },
      ],
    },
    general: {
      phoneNumber: "+389 77 550 054",
    },
    placeholders: {
      imageTitle: "Image Placeholder",
      imageSubtitle: "Replace with dish photo",
    },
  },
  mk: {
    hero: {
      badge: "Connect Prime Lounge Bar",
      title: "Доживејте ја Prime Поврзаноста.",
      description:
        "Луксузна лаунџ атмосфера во срцето на Северна Македонија. Скенирајте го кодот, истражете го менито и уживајте во внимателно курирани вкусови за секој момент.",
      ctaPrimary: "Погледни Мени",
      ctaSecondary: "+389 77 550 054",
    },
    menu: {
      label: "Мени",
      heading: "Креирано за Премиум Поврзаноста",
      description:
        "Истражете ја нашата колекција од класични појадоци, препознатливи сендвичи, елегантни пици и lounge специјалитети подготвени со грижа.",
      categories: [
        {
          title: "Појадок",
          icon: "🥐",
          items: [
            { name: "Пилешка Супа", price: "120 den" },
            { name: "Пржено тесто (Локума)", price: "130 den" },
            { name: "Домашен Појадок", price: "150 den" },
          ],
        },
        {
          title: "Сендвичи",
          icon: "🥪",
          items: [
            { name: "Пица Сендвич", price: "150 den" },
            { name: "Бургер", price: "160 den" },
            { name: "Сендвич со Туна", price: "170 den" },
            { name: "Сендвич со Бифтек", price: "170 den" },
            { name: "Специјален Сендвич", price: "170 den" },
            { name: "Специјален Бургер", price: "170 den" },
          ],
        },
        {
          title: "Пица",
          icon: "🍕",
          items: [
            { name: "Пица Маргарита", price: "180 den" },
            { name: "Пица со Салама", price: "200 den" },
            { name: "Пица со Шунка", price: "230 den" },
            { name: "Пица Диавола", price: "230 den" },
            { name: "Пица со Туна", price: "240 den" },
            { name: "Куќна Пица", price: "280 den" },
          ],
        },
        {
          title: "Двојни Бургери",
          icon: "🍔",
          items: [
            { name: "Американски Бургер", price: "180 den" },
            { name: "Пилешки Бургер", price: "200 den" },
          ],
        },
        {
          title: "Паста",
          icon: "🍝",
          items: [
            { name: "Паста со Туна", price: "190 den" },
            { name: "Паста со Бифтек", price: "200 den" },
            { name: "Паста Болонезе", price: "210 den" },
          ],
        },
        {
          title: "Скара",
          icon: "🔥",
          items: [
            { name: "Класичен Бифтек", price: "240 den" },
            { name: "Пилешки Прсти", price: "270 den" },
            { name: "Куќен Бифтек", price: "290 den" },
            { name: "Шари Бургер", price: "300 den" },
          ],
        },
        {
          title: "Салати",
          icon: "🥗",
          items: [
            { name: "Шопска Салата", price: "120 den" },
            { name: "Грчка Салата", price: "120 den" },
            { name: "Салата со Туна", price: "140 den" },
            { name: "Цезар Салата", price: "190 den" },
          ],
        },
        {
          title: "Додатоци",
          icon: "🍟",
          items: [
            { name: "Кечап / Мајонез", price: "30 den" },
            { name: "Леб", price: "30 den" },
            { name: "Печено Сирење (Фурнарине)", price: "80 den" },
            { name: "Помфрит", price: "120 den" },
            { name: "Помфрит со Сирење", price: "150 den" },
          ],
        },
      ],
    },
    general: {
      phoneNumber: "+389 77 550 054",
    },
    placeholders: {
      imageTitle: "Додади Фотографија",
      imageSubtitle: "Замени со фотографија од јадењето",
    },
  },
};

